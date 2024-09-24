<script>
	export let heading = '';
</script>

<div class="headingCard u-padding-4">
	<div class="headingLogos u-gap-24">
		<img class="u-margin-block-start-auto u-normal" src="/hacktoberfest.svg" alt="Hacktoberfest 2024 logo">
		<div class="verticalDivider"></div>
		<img class="u-margin-block-start-auto u-normal" src="/appwrite.svg" alt="Appwrite logo">
	</div>
	<h1 class="heading-level-1 u-normal">{heading}<span>_</span></h1>
</div>

<style>
	.headingCard {
		align-items: center;
		background-color: transparent;
		border: 0;
		text-align: center;
		padding: 2rem 0;
		width: 100%;
	}

	.headingLogos {
		display: flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
		flex-direction: row;
		margin-bottom: 2rem;
	}

	.headingLogos img {
		margin: auto 0;
	}

	.verticalDivider {
		background-color: hsl(var(--color-neutral-80));
		height: 55px;
		width: 0.125rem;
	}

	h1 {
		color: hsl(var(--color-neutral-0));
		text-align: center;
		margin: 0 auto;
	}

	span {
		color: hsl(var(--color-primary-100));
	}

	@media (max-width: 768px) {
		.headingCard {
			width: 98%;
			padding: 1.5rem 0;
			margin: 0 auto;		
		}
	}
</style>
