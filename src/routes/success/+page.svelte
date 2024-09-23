<script>
	import PageHeading from '$lib/components/PageHeading.svelte';
	export let data;
	let userId = data.userId;
	let avatar = data.avatar;
</script>

<div class="container u-flex-vertical u-gap-32">
	<PageHeading heading="Hacktoberfest 2024 hackathon" />

	<img class="u-margin-block-start-auto u-normal" src={avatar} alt="User avatar">
	<h2 class="heading-level-3 u-normal"> Thank you for signing up, <span>{userId}</span></h2>
	<h3 class="heading-level-4 u-normal">Please remember to submit your hackathon project and claim your Appwrite Cloud credits.</h3>

	<div class="buttons u-gap-32">
		<a class="button is-big" href="https://github.com/appwrite-community/htf24-hackathon-submissions" target="_blank">Create project submission</a>	
		<a class="button is-big" href="https://github.com/appwrite-community/htf24-hackathon-submissions/blob/main/RULES.md" target="_blank">Read hackathon rules</a>
		<a class="button is-big" href="https://apwr.dev/hacktoberfest" target="_blank">Claim Appwrite Cloud credits</a>
	</div>
</div>

<style>
	span {
		color: hsl(var(--color-neutral-0));
	}

	img {
		width: 20vh;
		border-radius: var(--border-radius-circular);
		border: 2px solid hsl(var(--color-neutral-85));
	}

	.buttons {
		display: flex;
		flex-direction: row;
	}

	@media (max-width: 768px) {
		img {
			width: 35vh;
		}
	}
</style>
