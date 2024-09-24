<script>
	import PageHeading from '$lib/components/PageHeading.svelte';
	export let data;
	let userId = data.userId;
	let avatar = data.avatar;
</script>

<div class="container u-flex-vertical u-gap-32">
	<PageHeading heading="Hacktoberfest 2024 hackathon" />

	<img class="u-margin-block-start-auto u-normal" src={avatar} alt="User avatar">
	<h2 class="heading-level-3 u-normal"> Thank you for signing up, <span>@{userId}</span></h2>
	<h3 class="heading-level-4 u-normal">Please remember to submit your hackathon project and claim your Appwrite Cloud credits.</h3>

	<div class="buttons u-gap-16">
		<a class="button secondaryButton is-big" href="https://apwr.dev/hacktoberfest" target="_blank">Claim Cloud credits</a>
		<a class="button primaryButton is-big" href="https://github.com/appwrite-community/htf24-hackathon-submissions" target="_blank">Submit hackathon project</a>
	</div>
	<a class="rulesLink" href="https://github.com/appwrite-community/htf24-hackathon-submissions/blob/main/RULES.md" target="_blank">Read hackathon rules<span class="icon-arrow-sm-right"></span></a>
</div>

<style>
	span {
		color: hsl(var(--color-neutral-0));
	}

	img {
		width: 8rem;
		border-radius: var(--border-radius-circular);
		border: 2px solid hsl(var(--color-neutral-85));
	}

	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100vw;
		justify-content: center;
		padding: 0 5vw;
	}

	.rulesLink {
		color: hsl(var(--color-neutral-0));
		font-size: 1rem;
	}

	.rulesLink:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		img {
			width: 8rem;
		}
	}
</style>
