<script>
	export let heading = '';
</script>

<div class="headingCard u-padding-4">
	<h1 class="heading-level-1 u-normal">The Appwriter<span>_</span></h1>
	<h2 class="heading-level-2 u-normal">{heading}</h2>
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

	h1 {
		color: hsl(var(--color-neutral-0));
		width: 100%;
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
