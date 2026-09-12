<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card/index.ts';
	import NavigationMenu from '$lib/components/ui/NavigationMenu.svelte';
	import { onMount, onDestroy } from 'svelte';

	const words = ['simplicity.', 'control.', 'ownership.', 'lightness.'];

	let index = $state(0);
	let currentWord = $state('');
	let charIndex = 0;
	let isDeleting = false;
	let timerId: ReturnType<typeof setTimeout>;

	const typeSpeed = 100;
	const deleteSpeed = 50;
	const pauseTime = 2000;

	function type() {
		const current = words[index];

		if (!isDeleting) {
			currentWord = current.substring(0, charIndex + 1);
			charIndex++;

			if (charIndex === current.length) {
				timerId = setTimeout(() => {
					isDeleting = true;
					type();
				}, pauseTime);
				return;
			}
		} else {
			currentWord = current.substring(0, charIndex - 1);
			charIndex--;

			if (charIndex === 0) {
				isDeleting = false;
				index = (index + 1) % words.length;
			}
		}

		timerId = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
	}

	onMount(() => {
		type();
	});

	onDestroy(() => {
		clearTimeout(timerId);
	});
</script>

<svelte:head>
	<title>Amqhi - Back to the Basics</title>
</svelte:head>
	<NavigationMenu/>
	<main class=" px-6 pt-14 lg:px-8">
		<div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
			<div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
		</div>
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">	Back to the Basics</h1>
				<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
					Giving back your lost
					<span class="text-blue-500 font-semibold">{currentWord}<span class="animate-pulse">|</span></span>
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a href={resolve("/pricing")} class="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started</a>
				</div>
			</div>
		</div>
		<div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
			<div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
		</div>
	</main>