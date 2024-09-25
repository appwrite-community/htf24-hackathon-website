// @ts-nocheck
import { user } from '$lib/user';
import { db } from '$lib/db';
import { github } from '$lib/github';

export async function load() {
	let currentUser = await user.get();
	let userSession = await user.session();
	let githubUser = await github.getUser(userSession.providerAccessToken);

	await fetch('/success', {
		method: 'POST',
		body: JSON.stringify({ github: githubUser.login }),
	})

	const email = currentUser.email;
  	const name = (currentUser.name != "") ? currentUser.name : email;
  	const userId = currentUser.$id; 

	await db.addUserInfo(email, name, userId);

	return {
		userId: githubUser.login,
		avatar: githubUser.avatar_url,
	};
}
