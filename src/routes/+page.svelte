<script>
	import { user } from '$lib/user';
	import PageHeading from '$lib/components/PageHeading.svelte';

	function login() {
		user.login();
	}
</script>

<section id="giveaway" class="u-flex-vertical">
	<div class="container u-flex-vertical">
		<PageHeading heading="Hacktoberfest 2024 hackathon" />

		<img
			src="/giveaway.png"
			alt="Prizes for the Hackathon"
		/>

		<p class="heading-level-6">
			Submit a Hackathon project for a chance to win an Appwriter keyboard and other goodies!
		</p>

		<button class="button primaryButton is-big" on:click={login}>
			<span class="icon-github"></span>
			Sign in with GitHub
		</button>
	</div>
</section>

<style>
	#giveaway {
		height: 100vh;
		width: 100vw;
		padding: 20% 0;
		position: relative;
		top: 0;
		text-align: center;
		justify-content: center;
	}

	img {
		border-radius: var(--border-radius-medium);
		max-height: 50%;
		max-width: 80%;
	}

	p, button {
		margin: 2rem;		
		max-width: 80%;
	}

	@media (max-width: 768px) {
		#giveaway {
			padding: 10% 0;
		}

		img {
			max-height: 70%;
			max-width: 90%;
		}

		div {
			padding: 1rem;
		}

		p, button {
			margin: 1.5rem auto;
		}

		.container {
			padding: 0.5rem;
		}
	}
</style>
