
const BASE_URL = process.env.FASTAPI_URL;
if (!BASE_URL) {
  console.error('FASTAPI_URL is not set');
}

const fetchCalendarList = async (email: string) => {
    const endpoint = `${BASE_URL}/calendars`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch calendar. Status: ${response.status}`);
    }
    return response.json();
};

export async function POST(req: Request) {
  const BASE_URL = process.env.FASTAPI_URL;
  if (!BASE_URL) {
    console.error('FASTAPI_URL is not set');
    return new Response(JSON.stringify({ 'error': 'Server configuration error' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const { email } = await req.json();
    const calendarList = await fetchCalendarList(email);
    return new Response(JSON.stringify(calendarList), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ 'error': error.message }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
