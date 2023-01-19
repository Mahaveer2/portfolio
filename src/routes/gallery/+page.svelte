<script>
	import PageTransition from '../../lib/components/PageTransition.svelte';
	import './gallery.scss';
	export let data;
	const { pictures } = data;

	console.log(pictures);
</script>

<svelte:head>
	<title>Mahaveer Amrani | Gallery</title>
</svelte:head>
<PageTransition>
	<h1>My Gallery</h1>
	<div class="grid grid-cols-3">
		{#each pictures as picture}
			<a href={picture.link} style="width: 100%;height:100%;cursor:pointer;">
				<img src={picture.imageUrl} alt={picture.description} style="width: 100%;height:100%" />
			</a>
		{/each}
	</div>
</PageTransition>
