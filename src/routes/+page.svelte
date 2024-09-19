<script>
	import { user } from '$lib/user';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	function login() {
		user.login();
	}
</script>

<NavBar />
<section id="giveaway" class="u-flex-vertical">
	<div class="container u-flex-vertical giveawayContainer">
		<PageHeading heading="Giveaway" />

		<img
			src="/giveaway.png"
			alt="A keyboard branded with the Appwrite logo on the Escape key"
		/>

		<p class="heading-level-6">
			Login with GitHub and get a chance to win an Appwriter keyboard!
		</p>

		<button class="button is-big" on:click={login}>
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

	.giveawayContainer {
		align-self: center;
		padding: 2rem;
	}

	img {
		border-radius: var(--border-radius-medium);
		max-width: 70%;
	}

	p, button {
		margin: 2rem;
	}

	@media (max-width: 768px) {
		img {
			max-width: 90%;
		}

		div {
			padding: 1rem;
		}

		p, button {
			margin: 1.5rem auto;
		}

		.giveawayContainer {
			padding: 0.5rem;
		}
	}
</style>
