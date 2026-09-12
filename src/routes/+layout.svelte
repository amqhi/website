<script lang="ts">
	import './layout.css';
	import Footer from '$lib/components/ui/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Amqhi - Back to the Basics</title>
</svelte:head>
{@render children()}
<Footer />