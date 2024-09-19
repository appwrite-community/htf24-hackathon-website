// @ts-nocheck
import { user } from '$lib/user';
import { github } from '$lib/github';

export async function load() {
	let currentUser = await user.get();
	let userSession = await user.session();
	let githubUser = await github.getUser(userSession.providerAccessToken);

	fetch('/success', {
		method: 'POST',
		body: JSON.stringify({ github: githubUser.login }),
	})

	return {
		userId: githubUser.login
	};
}
