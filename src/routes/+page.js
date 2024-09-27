import { db } from '$lib/db';

export async function load() {
	let total = await db.getTotalUsersCount();
	return {
		total
	};
}
