<script>
	export let data;
	let userId = data.userId;
	let avatar = data.avatar;
</script>

<div class="container u-flex-vertical u-gap-32">
	<h1 class="heading-level-1 u-normal">Hackathon dashboard</h1>
	<img class="u-margin-block-start-auto u-normal" src={avatar} alt="User avatar">
	<h2 class="heading-level-3"> GitHub ID: {userId}</h2>
	<a class="button is-big" href="https://github.com/appwrite-community/htf24-hackathon-submissions" target="_blank">Create project submission</a>	
	<a class="button is-big" href="https://github.com/appwrite-community/htf24-hackathon-submissions/blob/main/RULES.md" target="_blank">Read hackathon rules</a>
	<a class="button is-big" href="https://apwr.dev/hacktoberfest" target="_blank">Claim Appwrite Cloud credits</a>
</div>

<style>
	h1 {
		color: hsl(var(--color-neutral-0));
		text-align: center;
	}

	h2 {
		text-align: center;
	}

	img {
		width: 20vh;
		border-radius: var(--border-radius-circular);
		border: 2px solid hsl(var(--color-neutral-85));
	}

	@media (max-width: 768px) {
		img {
			width: 35vh;
		}
	}
</style>
