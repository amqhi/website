<script lang="ts">
	import '../layout.css';
	import NavigationMenu from '$lib/components/ui/NavigationMenu.svelte';
	import { useI18n } from '$lib/i18n';

	let { children } = $props();
	const i18n = useI18n();
</script>

<svelte:head>
	<title>{i18n.t('page.privacy')}</title>
</svelte:head>
<NavigationMenu/>
{@render children()}
