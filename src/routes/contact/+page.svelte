<script>
	import { enhance } from '$lib/form';
	import PageTransition from '../../lib/components/PageTransition.svelte';
	import emailjs from '@emailjs/browser';
	let message = "";

	function sendEmail(e) {
		e.preventDefault();
    emailjs.sendForm('service_9wr4st9', 'template_9bxgq3t', e.target,'kEDU61bozJ8RGniyY')
      .then((result) => {
				message = "Message sent succesfully!";
					e.target.reset();
					setTimeout(() => message = "",3000)
      }, (error) => {
          console.log('FAILED...', error.text);
      });
  }
</script>

<svelte:head>
	<title>Mahaveer Amrani | Contact</title>
</svelte:head>
<PageTransition>
	<h1>Contact me</h1>
	{#if message}
	<PageTransition>
		<div class="success-alert">{message}</div>
	</PageTransition>
	{/if}
	<form on:submit|preventDefault={e => sendEmail(e)} class="contact-form">
		<p class="description">
			Feel free to contact us if you need any assistance, any help or another question.
		</p>
		<div>
			<input required type="text" name="name" placeholder="Enter Your Name">
		</div>
		<div>
			<input required type="email" name="email" placeholder="Enter Your Email">
		</div>
		<div>
			<textarea
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
			<button class="btn block">Contact</button>
		</div>
	</form>
</PageTransition>
