<script lang="ts">
	import { onMount } from 'svelte';
	import CodeIcon from '@lucide/svelte/icons/code';
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import MessageSquareIcon from '@lucide/svelte/icons/message-square';
	import ServerIcon from '@lucide/svelte/icons/server';
	import { useI18n, type MessageId } from '$lib/i18n';

	type Arch = 'x64' | 'arm64' | 'universal' | 'arm64-v8a' | 'armeabi-v7a' | 'x86' | 'x86_64';

	type Install = {
		id: string;
		label: string;
		kind: 'download' | 'command';
		arches?: Arch[];
		actionLabel?: string;
	};

	type System = {
		id: string;
		label: string;
		installs: Install[];
	};

	let {
		id,
		name,
		logo,
		accent,
		screenshot
	}: {
		id: string;
		name: string;
		logo: string;
		accent: 'blue-500' | 'red-500' | 'blue-400' | 'red-400';
		screenshot?: string;
	} = $props();

	const i18n = useI18n();

	const accentButton = {
		'blue-500': 'bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-500',
		'red-500': 'bg-red-500 hover:bg-red-600 focus-visible:outline-red-500',
		'blue-400': 'bg-blue-400 hover:bg-blue-500 focus-visible:outline-blue-400',
		'red-400': 'bg-red-400 hover:bg-red-500 focus-visible:outline-red-400'
	}[accent];

	const systems: System[] = [
		{
			id: 'windows',
			label: 'Windows',
			installs: [
				{ id: 'msix', label: 'MSIX', kind: 'download', arches: ['x64', 'arm64'] },
				{ id: 'zip', label: 'ZIP', kind: 'download', arches: ['x64', 'arm64'] },
				{ id: 'scoop', label: 'Scoop', kind: 'command' },
				{ id: 'ms-store', label: 'Microsoft Store', kind: 'download', actionLabel: 'Microsoft Store' }
			]
		},
		{
			id: 'macos',
			label: 'macOS',
			installs: [
				{ id: 'dmg', label: 'DMG', kind: 'download', arches: ['arm64', 'x64', 'universal'] },
				{ id: 'homebrew', label: 'Homebrew', kind: 'command' }
			]
		},
		{
			id: 'linux',
			label: 'Linux',
			installs: [
				{ id: 'tar', label: 'tar.gz', kind: 'download', arches: ['x64', 'arm64'] },
				{ id: 'appimage', label: 'AppImage', kind: 'download', arches: ['x64', 'arm64'] },
				{ id: 'snap', label: 'Snap', kind: 'command' },
				{ id: 'flatpak', label: 'Flatpak', kind: 'command' }
			]
		},
		{
			id: 'android',
			label: 'Android',
			installs: [
				{ id: 'apk', label: 'APK', kind: 'download', arches: ['arm64-v8a', 'armeabi-v7a', 'x86', 'x86_64', 'universal'] },
				{ id: 'play-store', label: 'Play Store', kind: 'download', actionLabel: 'Play Store' }
			]
		},
		{
			id: 'ios',
			label: 'iOS',
			installs: [
				{ id: 'ipa', label: 'IPA', kind: 'download', arches: ['arm64'] },
				{ id: 'app-store', label: 'App Store', kind: 'download', actionLabel: 'App Store' }
			]
		}
	];

	const styles = [
		{ id: 'skeuomorphism', label: 'Skeuomorphism' },
		{ id: 'glass', label: 'Glass' },
		{ id: 'flat', label: 'Flat' }
	];

	let osId = $state(systems[0].id);
	let styleId = $state('flat');
	const sourceUrl = $derived(`https://github.com/amqhi/${id}-${osId}`);
	// TODO: Create a page for improving translations.
	const translateUrl = $derived(sourceUrl);
	const feedbackUrl = 'mailto:support@amqhi.com';
	// TODO: Create a page for server.
	const serverUrl = 'https://github.com/amqhi/server';
	let installId = $state(systems[0].installs[0].id);
	let arch = $state<Arch>(systems[0].installs[0].arches?.[0] ?? 'x64');
	let copied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	const system = $derived(systems.find((item) => item.id === osId) ?? systems[0]);
	const install = $derived(system.installs.find((item) => item.id === installId) ?? system.installs[0]);
	const preview = $derived(
		id === 'cloud' && install.id === 'apk' && styleId === 'flat'
			? '/images/cloud/android-flat.webp'
			: screenshot
	);
	const command = $derived.by(() => {
		if (install.id === 'scoop') return `scoop install amqhi-${id}`;
		if (install.id === 'homebrew') return `brew install amqhi-${id}`;
		if (install.id === 'snap') return `sudo snap install amqhi-${id}`;
		return `flatpak install amqhi com.amqhi.${id}`;
	});

	function selectOs(next: string) {
		const match = systems.find((item) => item.id === next) ?? systems[0];
		osId = match.id;
		installId = match.installs[0].id;
		arch = match.installs[0].arches?.[0] ?? 'x64';
		copied = false;
	}

	function selectInstall(next: string) {
		const match = system.installs.find((item) => item.id === next) ?? system.installs[0];
		installId = match.id;
		arch = match.arches?.[0] ?? arch;
		copied = false;
	}

	async function copyCommand() {
		try {
			await navigator.clipboard.writeText(command);
		} catch {
			const area = document.createElement('textarea');
			area.value = command;
			area.setAttribute('readonly', '');
			document.body.appendChild(area);
			area.select();
			document.execCommand('copy');
			area.remove();
		}
		copied = true;
		clearTimeout(copyTimer);
		copyTimer = setTimeout(() => (copied = false), 2000);
	}

	onMount(() => {
		const agent = navigator.userAgent;
		if (/Android/i.test(agent)) selectOs('android');
		else if (/iPhone|iPad|iPod/i.test(agent)) selectOs('ios');
		else if (/Win/i.test(agent)) selectOs('windows');
		else if (/Mac/i.test(agent)) selectOs('macos');
		else if (/Linux/i.test(agent)) selectOs('linux');

		return () => clearTimeout(copyTimer);
	});
</script>

<main class="px-6 py-20 lg:px-8">
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<img src={logo} alt="" class="h-16 w-16" />
		<h1 class="mt-6 text-5xl font-semibold tracking-tight text-foreground">{name}</h1>
		<p class="mt-4 text-lg text-muted-foreground">{i18n.t(`app.${id}.tagline` as MessageId)}</p>
		{#if preview}
			<img src={preview} alt="{name} screenshot" class="mt-12 w-full rounded-lg" />
		{:else}
			<div class="mt-12 aspect-video w-full rounded-lg bg-muted" aria-hidden="true"></div>
		{/if}
		<p class="mt-12 max-w-2xl text-pretty text-muted-foreground">{i18n.t(`app.${id}.description` as MessageId)}</p>
		<div class="mt-10 flex flex-wrap items-center justify-center gap-2">
			<label class="text-sm text-muted-foreground">
				<span class="sr-only">{i18n.t('sr.os')}</span>
				<select
					class="h-9 rounded-md border bg-background px-2 text-sm text-foreground"
					value={osId}
					onchange={(event) => selectOs(event.currentTarget.value)}
				>
					{#each systems as item (item.id)}
						<option value={item.id}>
							{item.label}
						</option>
					{/each}
				</select>
			</label>
			<label class="text-sm text-muted-foreground">
				<span class="sr-only">{i18n.t('sr.install')}</span>
				<select
					class="h-9 rounded-md border bg-background px-2 text-sm text-foreground"
					value={installId}
					onchange={(event) => selectInstall(event.currentTarget.value)}
				>
					{#each system.installs as item (item.id)}
						<option value={item.id}>
							{item.label}
						</option>
					{/each}
				</select>
			</label>
			<label class="text-sm text-muted-foreground">
				<span class="sr-only">{i18n.t('sr.style')}</span>
				<select
					class="h-9 rounded-md border bg-background px-2 text-sm text-foreground"
					value={styleId}
					onchange={(event) => (styleId = event.currentTarget.value)}
				>
					{#each styles as item (item.id)}
						<option value={item.id}>{item.label}</option>
					{/each}
				</select>
			</label>
			{#if install.arches}
				<label class="text-sm text-muted-foreground">
					<span class="sr-only">{i18n.t('sr.arch')}</span>
					<select
						class="h-9 rounded-md border bg-background px-2 text-sm text-foreground"
						value={arch}
						onchange={(event) => (arch = event.currentTarget.value as Arch)}
					>
						{#each install.arches as item (item)}
							<option value={item}>{item}</option>
						{/each}
					</select>
				</label>
			{/if}
		</div>
		<!--
		{#if install.kind === 'command'}
			<div class="mt-4 flex w-full max-w-xl items-center gap-2 rounded-md border px-3 py-2 text-left">
				<code class="min-w-0 flex-1 truncate font-mono text-sm">{command}</code>
				<button
					type="button"
					class="shrink-0 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
					onclick={copyCommand}
				>
					{copied ? i18n.t('copied') : i18n.t('copy')}
				</button>
			</div>
		{:else}
			<button
				type="button"
				class="mt-4 rounded-md px-16 py-3.5 text-lg font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 {accentButton}"
			>
				{install.actionLabel ?? i18n.t('download')}
			</button>
		{/if}
		-->
		{#if id === 'cloud' && install.id === 'apk' && styleId === 'flat'}
			<a
				href="https://github.com/amqhi/cloud-android/releases"
				class="mt-4 rounded-md px-16 py-3.5 text-lg font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 {accentButton}"
			>
				{i18n.t('alphaDownload')}
			</a>
		{:else}
			<button
				type="button"
				disabled
				class="mt-4 rounded-md bg-muted px-16 py-3.5 text-lg font-semibold text-muted-foreground"
			>
				{i18n.t('comingSoon')}
			</button>
		{/if}
		<div class="mt-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
			{#each [
				{ title: 'link.sourceTitle', body: 'link.sourceBody', href: sourceUrl, icon: CodeIcon },
				{ title: 'link.translateTitle', body: 'link.translateBody', href: translateUrl, icon: GlobeIcon },
				{ title: 'link.feedbackTitle', body: 'link.feedbackBody', href: feedbackUrl, icon: MessageSquareIcon },
				{ title: 'link.serverTitle', body: 'link.serverBody', href: serverUrl, icon: ServerIcon }
			] as card (card.title)}
				{@const Icon = card.icon}
				<a
					href={card.href}
					target={card.href.startsWith('http') ? '_blank' : undefined}
					rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
					class="rounded-lg border p-4 text-left hover:bg-muted"
				>
					<Icon class="size-5 text-foreground" aria-hidden="true" />
					<h2 class="mt-3 text-sm font-semibold text-foreground">{i18n.t(card.title as MessageId)}</h2>
					<p class="mt-1 text-sm text-muted-foreground">{i18n.t(card.body as MessageId)}</p>
				</a>
			{/each}
		</div>
	</div>
</main>
