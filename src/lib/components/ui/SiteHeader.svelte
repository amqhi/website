<script lang="ts">
	import { page } from '$app/state';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import LanguageToggle from './LanguageToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { useI18n } from '$lib/i18n';
	import type { Snippet } from 'svelte';

	let {
		logo,
		desktop,
		mobile
	}: {
		logo: Snippet;
		desktop: Snippet;
		mobile: Snippet;
	} = $props();

	const i18n = useI18n();
	let open = $state(false);
	let previousPath = page.url.pathname;

	$effect(() => {
		const path = page.url.pathname;
		if (path !== previousPath) {
			open = false;
			previousPath = path;
		}
	});
</script>

<div class="relative w-full border-b">
	<div class="flex h-16 items-center justify-between px-5">
		{@render logo()}
		<div class="flex items-center gap-1">
			<LanguageToggle />
			<ThemeToggle />
			<div class="hidden md:block">
				{@render desktop()}
			</div>
			<button
				type="button"
				class="inline-flex size-9 items-center justify-center rounded-md hover:bg-muted md:hidden"
				aria-expanded={open}
				aria-label={open ? i18n.t('nav.close') : i18n.t('nav.open')}
				onclick={() => (open = !open)}
			>
				{#if open}
					<XIcon class="size-5" />
				{:else}
					<MenuIcon class="size-5" />
				{/if}
			</button>
		</div>
	</div>
	{#if open}
		<div class="border-t px-3 py-3 md:hidden">
			{@render mobile()}
		</div>
	{/if}
</div>
