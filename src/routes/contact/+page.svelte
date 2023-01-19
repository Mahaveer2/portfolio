<script>
	import { enhance } from '$lib/form';
	import PageTransition from '../../lib/components/PageTransition.svelte';
	let message = '';
</script>

<svelte:head>
	<title>Mahaveer Amrani | Contact</title>
</svelte:head>
<PageTransition>
	<h1>Contact me</h1>
	<form use:enhance method="POST" action="/api/contact" class="contact-form">
		<p class="description">
			Feel free to contact us if you need any assistance, any help or another question.
		</p>
		<div>
			<textarea
				bind:value={message}
				id="message"
				name="message"
				class="form-control rounded border-white mb-3 form-text-area"
				rows="5"
				cols="30"
				placeholder="Message"
				required
			/>
		</div>
		<div class="submit-button-wrapper">
			<a
				on:click={() => (message = '')}
				class="btn"
				href="mailto:amrani.mahaveer223@gmail.com?subject=Contact Information&body={message}"
				>Submit</a
			>
		</div>
	</form>
</PageTransition>
