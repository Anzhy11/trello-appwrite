import { Client, Account, ID, Database, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);

const account = new Account(client);
const database = new Database(client);
const storage = new Storage(client);

export { client, account, database, storage, ID };