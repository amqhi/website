<script lang="ts">
	import { useI18n } from '$lib/i18n';
	const i18n = useI18n();
</script>

<main class=" px-6 pt-14 lg:px-8">
	<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
		<div class="text-center">
			<h1 class="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">{i18n.t('comingSoon')}</h1>
		</div>
	</div>
</main>