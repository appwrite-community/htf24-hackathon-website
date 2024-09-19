<script>
	import NavBar from '$lib/components/NavBar.svelte';

	export let data;
	let userId = data.userId;
</script>

<NavBar />

<div class="container u-flex-vertical u-gap-32">
	<h1 class="heading-level-1 u-normal">Success!</h1>
	<p class="heading-level-6 u-normal u-text-center">Thanks for signing up in the hackathon, {userId}</p>
	<a class="button is-big" href="https://github.com/appwrite-community/htf24-hackathon-submissions" target="_blank">Submit your hackathon project</a>
	<a class="button is-big" href="https://apwr.dev/hacktoberfest" target="_blank">Claim Appwrite Cloud credits</a>
</div>
