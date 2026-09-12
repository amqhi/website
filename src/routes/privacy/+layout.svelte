<script lang="ts">
	import '../layout.css';
	import NavigationMenu from '$lib/components/ui/NavigationMenu.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Privacy Policy</title>
</svelte:head>
<NavigationMenu/>
{@render children()}
