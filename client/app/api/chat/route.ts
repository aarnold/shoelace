import { sendChatMessage } from './chatUtils'

export async function POST(request: Request) {
  
  const { user_email, user_message, calendar_id } = await request.json();
  
  let apiResponse = await sendChatMessage(user_email, user_message, calendar_id);

  return new Response(JSON.stringify({ apiResponse }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
