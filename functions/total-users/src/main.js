import { Client, Databases, Query } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const databases = new Databases(client);

  try {
    const response = await databases.listDocuments('users', 'info', [ Query.limit(5000), Query.select(['$id']) ]);
    
    await databases.updateDocument('users', 'count', 'total', {
      number: response.total
    });

    log('Total users count: ', response.total);
    return res.empty();
  } catch (err) {
    error(err);
  }
};
