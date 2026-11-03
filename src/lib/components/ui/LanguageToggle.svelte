<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { localeCookie, useI18n, type Locale } from '$lib/i18n';
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import SunIcon from '@lucide/svelte/icons/sun';

	const i18n = useI18n();
	const options: Locale[] = ['en', 'ko'];

	let open = $state(false);
	let root = $state<HTMLDivElement | null>(null);

	async function choose(next: Locale) {
		document.cookie = localeCookie(next);
		open = false;
		await invalidateAll();
	}

	$effect(() => {
		const onPointerDown = (event: PointerEvent) => {
			if (!root?.contains(event.target as Node)) open = false;
		};
		document.addEventListener('pointerdown', onPointerDown);
		return () => document.removeEventListener('pointerdown', onPointerDown);
	});
</script>

<div class="relative" bind:this={root}>
	<button
		type="button"
		class="inline-flex size-9 items-center justify-center rounded-md hover:bg-muted"
		aria-label={i18n.t('lang.label')}
		aria-haspopup="menu"
		aria-expanded={open}
		onclick={() => (open = !open)}
	>
		<GlobeIcon class="size-4" />
	</button>
	{#if open}
		<div
			class="absolute end-0 top-full z-50 mt-1.5 w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow"
			role="menu"
		>
			{#each options as option (option)}
				<button
					type="button"
					role="menuitemradio"
					aria-checked={i18n.locale === option}
					class="flex w-full items-center rounded-md px-2 py-1.5 text-sm hover:bg-muted {i18n.locale === option ? 'bg-muted' : ''}"
					onclick={() => choose(option)}
				>
					{i18n.t(option === 'ko' ? 'lang.ko' : 'lang.en')}
				</button>
			{/each}
		</div>
	{/if}
</div>
