<script lang="ts">
	import '../layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import {
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot
	} from '$lib/components/ui/navigation-menu';

	let { children } = $props();
</script>

<svelte:head>
	<title>Amqhi Music</title>
</svelte:head>
<div class="flex items-center justify-between px-4 w-full border-b h-16 pr-5 pl-5">

	<NavigationMenuRoot>
		<NavigationMenuList class="flex items-center gap-1">
			<a href={resolve("/music")} class="font-bold text-xl tracking-tight flex flex-row items-center gap-2 pr-2">
				<img src="/images/music-logo.png" alt="Amqhi Music" class="h-10 w-10" />
				Amqhi Music
			</a>
			<NavigationMenuItem>
				<NavigationMenuLink href="/music/download" class="px-4 py-2 text-sm font-medium">Download</NavigationMenuLink>
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
