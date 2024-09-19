// @ts-nocheck
import { GITHUB_PERSONAL_ACCESS_TOKEN } from '$env/static/private';

export async function POST({ request }) {
    try {
        const requestBody = await request.json();
        const githubUsername = requestBody.github;

        const uri = `https://api.github.com/repos/appwrite-community/htf24-hackathon-submissions/collaborators/${githubUsername}`;

        const headers = {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }

        const response = await fetch(uri, {
            method: 'PUT',
            headers: headers
        });

        console.log(`${githubUsername} added as a collaborator to the repository\n\nResponse status: ${response.status}`);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch(error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, error: error }), { status: 500 });
    }
}