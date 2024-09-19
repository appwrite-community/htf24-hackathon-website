// @ts-nocheck
import { user } from '$lib/user';
import { github } from '$lib/github';
import { db } from '$lib/database';

export async function load() {
	let currentUser = await user.get();
	let userSession = await user.session();
	let githubUser = await github.getUser(userSession.providerAccessToken);

	await db.add(currentUser.name, githubUser.login, currentUser.email);

	return {
		userId: githubUser.login
	};
}
