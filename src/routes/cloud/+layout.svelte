<script lang="ts">
	import '../layout.css';
	import {resolve} from '$app/paths';
	import {
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink, NavigationMenuList, NavigationMenuRoot,
		NavigationMenuTrigger
	} from '$lib/components/ui/navigation-menu/index.ts';
	import NavigationMenuContentItem from '$lib/NavigationMenuContentItem.svelte';
	import { Button } from '$lib/components/ui/button/index.ts';

	let { children } = $props();
</script>

<svelte:head>
	<title>Amqhi Cloud</title>
</svelte:head>
<div class="flex items-center justify-between px-4 w-full border-b h-16 pr-5 pl-5">

	<NavigationMenuRoot>
		<NavigationMenuList class="flex items-center gap-1">
			<a href={resolve("/cloud")} class="font-bold text-xl tracking-tight flex flex-row items-center gap-2 pr-2">
				<img src="/images/cloud-logo.png" alt="Amqhi Cloud" class="h-10 w-10" />
				Amqhi Cloud
			</a>
			<NavigationMenuItem>
				<NavigationMenuLink href="/cloud/download" class="px-4 py-2 text-sm font-medium">Download</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink href="/pricing" class="px-4 py-2 text-sm font-medium">Pricing</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
<!--	<div class="flex items-center gap-4">-->
<!--		<a href="/login" class="text-sm font-medium hover:underline">Log in</a>-->
<!--		<Button size="sm">Get Started</Button>-->
<!--	</div>-->
</div>
{@render children()}
