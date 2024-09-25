<script>
	import { user } from '$lib/user';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import Prizes from '$lib/images/prizes.png?enhanced';

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

		<button class="button primaryButton is-big" on:click={login}>
			<span class="icon-github"></span>
			Sign in with GitHub
		</button>
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
