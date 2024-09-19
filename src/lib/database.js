// @ts-nocheck
import { Query, ID } from 'appwrite';
import { database } from './appwrite';
import { COLLECTION_NAME, DATABASE_NAME } from './constants';

export const db = {
	list: async () => {
		let entries = await database.listDocuments(DATABASE_NAME, COLLECTION_NAME, [
			Query.limit(500),
			Query.select(['username'])
		]);

		let options = [];

		entries.documents.forEach((entry) => {
			options.push({ label: entry.username });
		});

		return { options: options, total: entries.total };
	},

	add: async (name, username, email) => {
		try {
			await database.createDocument(DATABASE_NAME, COLLECTION_NAME, ID.unique(), {
				name: name,
				username: username,
				email: email
			});
			console.log('Added to the raffle');
		} catch (error) {
			console.log(error.message);
		}
	}
};
