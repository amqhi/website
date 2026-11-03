<script lang="ts">
	import './layout.css';
	import Footer from '$lib/components/ui/Footer.svelte';
	import { provideLocale, useI18n } from '$lib/i18n';

	let { data, children } = $props();
	provideLocale(() => data.locale);
	const i18n = useI18n();

	$effect(() => {
		document.documentElement.lang = data.locale;
	});
</script>

<svelte:head>
	<title>{i18n.t('home.title')}</title>
</svelte:head>
{@render children()}
<Footer />