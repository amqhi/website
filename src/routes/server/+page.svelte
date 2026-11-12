<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import { useI18n } from '$lib/i18n';

	const i18n = useI18n();
	const releasesUrl = 'https://github.com/amqhi/server/releases';
</script>

<main class="px-6 pt-14 lg:px-8">
	<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
		<div class="text-center">
			<h1
				class="mt-6 text-5xl font-semibold tracking-tight text-foreground"
			>
				{i18n.t('server.page.heading')}
			</h1>
			<p class="mt-8 text-lg font-medium text-pretty break-keep text-muted-foreground sm:text-xl/8">
				{i18n.t('server.page.body')}
			</p>
			<Button href={releasesUrl} target="_blank" rel="noopener noreferrer" class="mt-10">
				{i18n.t('download')}
			</Button>
			<p class="mt-10 text-pretty break-keep text-muted-foreground">
				{i18n.t('server.page.hosting')}
			</p>
			<Button href={resolve('/pricing')} variant="outline" class="mt-6"
				>{i18n.t('nav.pricing')}</Button
			>
		</div>
	</div>
</main>
