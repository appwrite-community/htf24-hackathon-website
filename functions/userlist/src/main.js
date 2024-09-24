export default async ({ req, res, log, error }) => {
  const requestBody = req.bodyJson;
  const email = requestBody.email;
  const name = requestBody.name;
  const userId = requestBody.$id; 

  try {
    await fetch('https://growth.appwrite.io/v1/mailinglists/htf24', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email,
          name,
          userId
      })
    });
    
    log(`User ${userId} added to UserList`);
    return res.empty();
  } catch(err) {
    error(`Failed to add user ${userId} to UserList\n\nError details: ${err}`);
  }
};
