<script>
// @ts-nocheck

	import { user } from '$lib/user';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import Prizes from '$lib/images/prizes.png?enhanced';

	export let data;

	function login() {
		user.login();
	}
</script>

<section class="u-flex-vertical">
	<div class="container u-flex-vertical u-gap-32">
		<PageHeading heading="Hacktoberfest 2024 hackathon" />

		<enhanced:img
			src={Prizes}
			alt="Prizes for the Hackathon"
		/>

		<p class="heading-level-6">
			Submit a hackathon project for a chance to win an Appwriter keyboard and other goodies!
		</p>

		<p class="heading-level-6 u-flex u-gap-4 totalCount">
			<span class="icon-check-circle"></span>
			{data.total} hackers registered!
		</p>

		<button class="button primaryButton is-big" on:click={login}>
			<span class="icon-github"></span>
			Sign in with GitHub
		</button>

		<a class="rulesLink" href="https://appwrite.io/blog/post/appwrite-hacktoberfest-hackathon-2024" target="_blank">Learn more about the hackathon<span class="icon-arrow-sm-right"></span></a>
	</div>
</section>

<style>
	section {
		height: 100vh;
		width: 100vw;
		position: relative;
		top: 0;
		text-align: center;
		justify-content: center;
	}

	img {
		aspect-ratio: 584 / 323; 
		border-radius: var(--border-radius-medium);
		width: var(--size);
		height: auto;
	}

	picture {
		max-width: 66.67%;
	}

	p, button {
		max-width: 80%;
		vertical-align: middle;
	}

	.totalCount {
		color: hsl(var(--color-neutral-0));
		justify-content: center;
		vertical-align: middle;
	}

	.icon-check-circle {
		margin: auto 0;
	}

	@media (max-width: 768px) {
		.container {
			margin: 0 20px;
			width: auto;
			padding: 0;
		}

		picture {
			max-width: 100%;
		}

		p, button {
			width: 100%;
			max-width: 100%;
		}
	}
</style>
