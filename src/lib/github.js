// @ts-nocheck
export const github = {
	getUser: async (token) => {
		const url = 'https://api.github.com/user';
		let response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${token}`,
				'X-GitHub-Api-Version': '2022-11-28'
			}
		});
		return await response.json();
	}
};
