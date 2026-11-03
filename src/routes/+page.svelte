<script lang="ts">
	import NavigationMenu from '$lib/components/ui/NavigationMenu.svelte';
	import { useI18n, type MessageId } from '$lib/i18n';
	import ZapIcon from '@lucide/svelte/icons/zap';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import HouseIcon from '@lucide/svelte/icons/house';
	import MonitorSmartphoneIcon from '@lucide/svelte/icons/monitor-smartphone';
	import LinkIcon from '@lucide/svelte/icons/link';
	import FeatherIcon from '@lucide/svelte/icons/feather';

	const i18n = useI18n();
	const cards: { title: MessageId; body: MessageId; icon: typeof ZapIcon }[] = [
		{ title: 'home.fastTitle', body: 'home.fastBody', icon: ZapIcon },
		{ title: 'home.designTitle', body: 'home.designBody', icon: PaletteIcon },
		{ title: 'home.hostTitle', body: 'home.hostBody', icon: HouseIcon },
		{ title: 'home.platformTitle', body: 'home.platformBody', icon: MonitorSmartphoneIcon },
		{ title: 'home.unifiedTitle', body: 'home.unifiedBody', icon: LinkIcon },
		{ title: 'home.lightTitle', body: 'home.lightBody', icon: FeatherIcon }
	];
</script>

<svelte:head>
	<title>{i18n.t('home.title')}</title>
</svelte:head>
<NavigationMenu />
<main>
	<section class="px-6 lg:px-8">
		<div class="mx-auto flex min-h-[calc(100svh-4rem-1px)] max-w-2xl items-center text-center">
			<div>
				<h1 class="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">
					{i18n.t('home.heroTitle')}
				</h1>
				<p class="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
					{i18n.t('home.heroBody')}
				</p>
			</div>
		</div>
		<div class="mx-auto grid max-w-5xl gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
			{#each cards as card (card.title)}
				{@const Icon = card.icon}
				<article class="rounded-lg border p-6 text-left">
					<Icon class="size-5 text-foreground" aria-hidden="true" />
					<h2 class="mt-4 text-lg font-semibold text-foreground">{i18n.t(card.title)}</h2>
					<p class="mt-2 text-muted-foreground">{i18n.t(card.body)}</p>
				</article>
			{/each}
		</div>
	</section>
</main>
