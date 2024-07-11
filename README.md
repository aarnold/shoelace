# shoelace: An AI powered calendar

Assistant built with Next.js, FastAPI, and MongoDB. Assistant logic built using [Langchain](https://www.langchain.com/) and the OpenAI API. 

## Prerequisites
1. OpenAI API Account - [https://openai.com/blog/openai-api](https://openai.com/blog/openai-api)
2. Google Cloud Console Account - [https://console.cloud.google.com/welcome/new](https://console.cloud.google.com/welcome/new)
3. Docker - [https://docs.docker.com/engine/install](https://docs.docker.com/engine/install)

## Docker Setup

To run this project using docker, ensure all `.env` variables are set that are listed in the `.env.sample` file. You can kick off the entire project by simply running

```bash
make down build up
```

## Individual Component Setup

You can also run the individual components using `make`:
- Next.js - `make run-client`
- MongoDB - `make run-database`
- FastAPI - `make run-server`

### Next.js Client Component

Navigate to the client directory and install all necessary node packages then run the project.

```bash
cd client
npm install
npm run dev
```

### MongoDB Component
You can run Mongo in several ways, just ensure that the `MONGODB_URI` env variable is updated.
1. Docker mongo image [https://hub.docker.com/_/mongo](https://hub.docker.com/_/mongo)
2. MongoDB hosted [https://www.mongodb.com](https://www.mongodb.com/)

### FastAPI Server Component

Navigate to the server directory and install the necessary python packages, then run the server.

```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload
```
