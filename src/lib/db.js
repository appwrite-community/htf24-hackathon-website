// @ts-nocheck
import { databases } from "./appwrite";

export const db = {
    addUserInfo: async (email, name, userId) => {
        try {
            await databases.createDocument('users', 'info', userId, {
                name,
                email
            });
            console.log(`Saved user name and email in database.`);
        } catch (err) {
            console.error(err);
        }
    }
};