import { Dialogflow } from "dialogflow";

const dialogflow = new Dialogflow({
 projectId: "your-project-id",
 credentials: {
    client_email: "your-client-email",
    private_key: "your-private-key",
 },
});

async function detectIntent(text: string) {
 const sessionId = "some-session-id";
 const languageCode = "en";

 const request = {
    session: dialogflow.sessionPath(process.env.GOOGLE_CLOUD_PROJECT, sessionId),
    queryInput: {
      text: {
        text,
        languageCode,
      },
    },
 };

 const responses = await dialogflow.detectIntent(request);

 console.log("Detected intent:", responses[0].queryResult.intent.displayName);
 console.log("Response:", responses[0].queryResult.fulfillmentText);
}

detectIntent(process.argv[2]);