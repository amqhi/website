<script lang="ts">
	import {resolve } from '$app/paths';
	import { page } from '$app/state';
	import {
		NavigationMenuContent,
		NavigationMenuItem, NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot, NavigationMenuTrigger
	} from './navigation-menu/index.ts';
	import NavigationMenuContentItem from '$lib/NavigationMenuContentItem.svelte';
	import { Button } from './button/index.ts';
</script>
<div class="flex items-center justify-between px-4 w-full border-b h-16 pr-5 pl-5">

	<NavigationMenuRoot>
		<NavigationMenuList class="flex items-center gap-1">
			<a href={resolve("/")} class="font-bold text-xl tracking-tight flex flex-row items-center gap-2 pr-2">
				<img src="/logo512.png" alt="Amqhi Logo" class="h-10 w-10" />
				Amqhi
			</a>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Products</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
						<NavigationMenuContentItem imgSrc="/images/cloud-logo.png" title="Amqhi Cloud" description="Amqhi Cloud is a cloud-based platform that offers a range of services for developers and businesses." href="/cloud" hover="text-blue-500"/>
						<NavigationMenuContentItem imgSrc="/images/music-logo.png" title="Amqhi Music" description="The premium music service you truly own." href="/music" hover="text-red-500"/>
						<NavigationMenuContentItem imgSrc="/images/notes-logo.png" title="Amqhi Notes" description="Amqhi Cloud is a cloud-based platform that offers a range of services for developers and businesses." href="/notes" hover="text-blue-400"/>
						<NavigationMenuContentItem imgSrc="/images/photos-logo.png" title="Amqhi Photos" description="Amqhi Cloud is a cloud-based platform that offers a range of services for developers and businesses." href="/photos" hover="text-red-400"/>
						<NavigationMenuContentItem imgSrc="/images/web-logo.png" title="Amqhi Web" description="Amqhi Cloud is a cloud-based platform that offers a range of services for developers and businesses." href="/web" hover="text-blue-500"/>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink href="/pricing" class="px-4 py-2 text-sm font-medium {page.url.pathname === '/pricing' ? 'text-blue-500' : ''}">Pricing</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
<!--	<div class="flex items-center gap-4">-->
<!--		<a href="/login" class="text-sm font-medium hover:underline">Log in</a>-->
<!--		<Button size="sm">Get Started</Button>-->
<!--	</div>-->
</div>