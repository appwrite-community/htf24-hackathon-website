<script>
	import PageHeading from '$lib/components/PageHeading.svelte';
	export let data;
	let userId = data.userId;
	let avatar = data.avatar;
</script>

<section class="u-flex-vertical">
	<div class="container u-flex-vertical u-gap-32">
		<PageHeading heading="Hacktoberfest 2024 hackathon" />

		<img class="u-margin-block-start-auto u-normal" src={avatar} alt="User avatar" />
		<h2 class="u-normal">Thank you for signing up, <span>@{userId}</span></h2>
		<p class="u-normal">
			Please remember to submit your hackathon project and claim your Appwrite Cloud credits.
		</p>

		<div class="buttons u-gap-16">
			<a class="button secondaryButton is-big" href="https://apwr.dev/hacktoberfest" target="_blank"
				>Claim Cloud credits</a
			>
			<a class="button primaryButton is-big" href="https://apwr.dev/htf24-submit" target="_blank"
				>Submit hackathon project</a
			>
		</div>
		<a class="rulesLink" href="https://apwr.dev/htf24-rules" target="_blank"
			>Read hackathon rules<span class="icon-arrow-sm-right"></span></a
		>
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

	span {
		color: hsl(var(--color-neutral-0));
	}

	img {
		width: 8rem;
		border-radius: var(--border-radius-circular);
		border: 2px solid hsl(var(--color-neutral-85));
	}

	h2 {
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.75rem;
	}

	p {
		font-family: Inter;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.75rem; /* 140% */
		letter-spacing: -0.018rem;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		width: max-content;
	}

	h2,
	p,
	a {
		max-width: 80%;
	}

	@media (max-width: 768px) {
		.container {
			margin: 0 20px;
			width: auto;
			padding: 0;
		}

		img {
			width: 8rem;
		}

		h2,
		p,
		a {
			width: 100%;
			max-width: 100%;
		}

		.buttons {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
	}
</style>
