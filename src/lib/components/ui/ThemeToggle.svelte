<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import MonitorIcon from '@lucide/svelte/icons/monitor';
	import { onMount } from 'svelte';
	import { useI18n } from '$lib/i18n';

	type Theme = 'light' | 'dark' | 'system';

	const i18n = useI18n();
	const storageKey = 'theme';
	const options: Theme[] = ['light', 'dark', 'system'];

	let theme = $state<Theme>('system');
	let open = $state(false);
	let root = $state<HTMLDivElement | null>(null);

	function systemPrefersDark() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function apply(next: Theme) {
		const dark = next === 'dark' || (next === 'system' && systemPrefersDark());
		document.documentElement.classList.toggle('dark', dark);
		document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
	}

	function setTheme(next: Theme) {
		theme = next;
		localStorage.setItem(storageKey, next);
		apply(next);
		open = false;
	}

	onMount(() => {
		const stored = localStorage.getItem(storageKey);
		if (stored === 'light' || stored === 'dark' || stored === 'system') theme = stored;
		apply(theme);

		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = () => {
			if (theme === 'system') apply('system');
		};
		const onPointerDown = (event: PointerEvent) => {
			if (!root?.contains(event.target as Node)) open = false;
		};

		media.addEventListener('change', onChange);
		document.addEventListener('pointerdown', onPointerDown);
		return () => {
			media.removeEventListener('change', onChange);
			document.removeEventListener('pointerdown', onPointerDown);
		};
	});
</script>

<div class="relative" bind:this={root}>
	<button
		type="button"
		class="inline-flex size-9 items-center justify-center rounded-md hover:bg-muted"
		aria-label="{i18n.t('theme.label')}: {i18n.t(`theme.${theme}`)}"
		aria-haspopup="menu"
		aria-expanded={open}
		onclick={() => (open = !open)}
	>
		{#if theme === 'light'}
			<SunIcon class="size-4" />
		{:else if theme === 'dark'}
			<MoonIcon class="size-4" />
		{:else}
			<MonitorIcon class="size-4" />
		{/if}
	</button>
	{#if open}
		<div class="absolute end-0 top-full z-50 mt-1.5 w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow" role="menu">
			{#each options as option (option)}
				<button
					type="button"
					role="menuitemradio"
					aria-checked={theme === option}
					class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted {theme === option ? 'bg-muted' : ''}"
					onclick={() => setTheme(option)}
				>
					{#if option === 'light'}
						<SunIcon class="size-4" />
					{:else if option === 'dark'}
						<MoonIcon class="size-4" />
					{:else}
						<MonitorIcon class="size-4" />
					{/if}
					{i18n.t(`theme.${option}`)}
				</button>
			{/each}
		</div>
	{/if}
</div>
