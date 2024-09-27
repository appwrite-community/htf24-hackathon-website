export default async ({ req, res, log, error }) => {
  const requestBody = req.bodyJson;
  const email = requestBody.email;
  const name = requestBody.name != '' ? requestBody.name : email;
  const userId = requestBody.$id;

  try {
    let userlistResponse = await fetch(
      'https://growth.appwrite.io/v1/mailinglists/htf24',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          userId,
        }),
      }
    );
    let response = await userlistResponse.json();

    if (response.success == true) {
      log(`User ${userId} added to UserList`);
      return res.empty();
    } else {
      throw new Error(`Growth server error`);
    }
  } catch (err) {
    error(`Failed to add user ${userId} to UserList\n\nError details: ${err}`);
    return res.empty();
  }
};
