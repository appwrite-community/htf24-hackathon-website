import { db } from '$lib/database';

export async function load() {
	let dbResponse = await db.list();

	return {
		entries: dbResponse.options,
		total: dbResponse.total
	};
}
