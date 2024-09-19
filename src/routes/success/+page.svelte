<script>
	import NavBar from '$lib/components/NavBar.svelte';

	export let data;
	let userId = data.userId;
</script>

<NavBar />

<div class="container u-flex-vertical">
	<h1 class="heading-level-1 u-margin-32 u-normal">Success!</h1>
	<p class="heading-level-6 u-margin-32 u-normal u-text-center">Thanks for participating in the hackathon, {userId}</p>
</div>
