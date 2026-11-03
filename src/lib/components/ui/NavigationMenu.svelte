<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import {
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot,
		NavigationMenuTrigger
	} from './navigation-menu/index.ts';
	import NavigationMenuContentItem from '$lib/NavigationMenuContentItem.svelte';
	import SiteHeader from './SiteHeader.svelte';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { useI18n, type MessageId } from '$lib/i18n';

	const i18n = useI18n();
	let appsOpen = $state(false);

	const apps = [
		{
			href: '/cloud',
			id: 'cloud',
			title: 'Amqhi Cloud',
			imgSrc: '/images/cloud-logo.png',
			hover: 'text-blue-500'
		},
		{
			href: '/music',
			id: 'music',
			title: 'Amqhi Music',
			imgSrc: '/images/music-logo.png',
			hover: 'text-red-500'
		},
		{
			href: '/notes',
			id: 'notes',
			title: 'Amqhi Notes',
			imgSrc: '/images/notes-logo.png',
			hover: 'text-blue-400'
		},
		{
			href: '/photos',
			id: 'photos',
			title: 'Amqhi Photos',
			imgSrc: '/images/photos-logo.png',
			hover: 'text-red-400'
		},
		{
			href: '/web',
			id: 'web',
			title: 'Amqhi Web',
			imgSrc: '/images/web-logo.png',
			hover: 'text-blue-500'
		},
		{
			href: '/ai',
			id: 'ai',
			title: 'Amqhi AI',
			imgSrc: '/images/web-logo.png',
			hover: 'text-blue-500'
		}
	];
</script>

<SiteHeader>
	{#snippet logo()}
		<a href={resolve('/')} class="flex flex-row items-center gap-2 text-xl font-bold tracking-tight">
			<img src="/logo512.png" alt="Amqhi Logo" class="h-10 w-10" />
			Amqhi
		</a>
	{/snippet}
	{#snippet desktop()}
		<NavigationMenuRoot class="static flex-none">
			<NavigationMenuList class="flex items-center gap-1">
				<NavigationMenuItem>
					<NavigationMenuTrigger>{i18n.t('nav.apps')}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul class="grid w-[min(36rem,calc(100vw-2.5rem))] gap-2 md:grid-cols-2">
							{#each apps as app (app.href)}
								<NavigationMenuContentItem
									imgSrc={app.imgSrc}
									title={app.title}
									description={i18n.t(`app.${app.id}.tagline` as MessageId)}
									href={app.href}
									hover={app.hover}
								/>
							{/each}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						href="/pricing"
						class="px-4 py-2 text-sm font-medium {page.url.pathname === '/pricing' ? 'text-blue-500' : ''}"
					>
						{i18n.t('nav.pricing')}
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenuRoot>
	{/snippet}
	{#snippet mobile()}
		<nav class="flex flex-col">
			<button
				type="button"
				class="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium hover:bg-muted"
				aria-expanded={appsOpen}
				onclick={() => (appsOpen = !appsOpen)}
			>
				{i18n.t('nav.apps')}
				<ChevronDownIcon class="size-4 transition-transform {appsOpen ? 'rotate-180' : ''}" />
			</button>
			{#if appsOpen}
				<div class="flex flex-col pl-2">
					{#each apps as app (app.href)}
						<a href={app.href} class="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
							<img src={app.imgSrc} alt="" class="size-8" />
							{app.title}
						</a>
					{/each}
				</div>
			{/if}
			<a
				href="/pricing"
				class="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted {page.url.pathname === '/pricing' ? 'text-blue-500' : ''}"
			>
				{i18n.t('nav.pricing')}
			</a>
		</nav>
	{/snippet}
</SiteHeader>
