<script>
	export let data;
	const { projects } = data;
	console.log(projects);
	import Card from '$lib/components/Card.svelte';
	import PageTransition from '../lib/components/PageTransition.svelte';
</script>

<svelte:head>
	<title>Mahaveer Amrani | Home</title>
</svelte:head>

<PageTransition>
	<div class="hero-wrapper py-2">
		<div class="hero">
			<div class="left">
				<h1 class="heading text-center">Hello and Welcome to my portfolio</h1>
			</div>
			<div class="right" />
		</div>
		<h1 class="heading">Projects</h1>
		<div class="grid grid-cols-3 gap">
			{#each projects as project}
				<Card
					title={project.name}
					description={project.description}
					link={project.link}
					img={project.imageUrl}
				/>
			{/each}
		</div>
	</div>
</PageTransition>