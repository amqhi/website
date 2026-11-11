<script lang="ts">
	import {resolve} from '$app/paths';
	import { useI18n } from '$lib/i18n';

	const i18n = useI18n();
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faGithub,
		faYoutube,
		faReddit, faXTwitter
	} from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="border-t py-12">
	<div>

	</div>
	<div class="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
		<div class="col-span-2 md:col-span-1">
			<div class="flex items-center gap-2 font-bold mb-4">
				<img src="/logo512.png" alt="Amqhi Logo" class="w-7 h-7" />
				<span>Amqhi</span>
			</div>
			<p class="text-slate-500">{i18n.t('footer.tagline')}</p>
		</div>
		<div class="flex flex-col gap-3">
			<span class="font-semibold">{i18n.t('nav.apps')}</span>
			<a href={resolve("/cloud")} class="text-slate-500 hover:text-blue-500">Amqhi Cloud</a>
			<a href={resolve("/music")} class="text-slate-500 hover:text-red-500">Amqhi Music</a>
			<a href={resolve("/notes")} class="text-slate-500 hover:text-blue-400">Amqhi Notes</a>
			<a href={resolve("/photos")} class="text-slate-500 hover:text-red-400">Amqhi Photos</a>
			<a href={resolve("/web")} class="text-slate-500 hover:text-blue-400">Amqhi Web</a>
			<a href={resolve("/ai")} class="text-slate-500 hover:text-blue-400">Amqhi AI</a>
		</div>
		<div class="flex flex-col gap-3">
			<span class="font-semibold">{i18n.t('nav.servers')}</span>
			<a href={resolve("/server")} class="text-slate-500 hover:text-blue-500">{i18n.t('server.app.title')}</a>
		</div>
		<div class="col-span-2 flex flex-col gap-3 md:col-span-1">
			<span class="font-semibold">{i18n.t('footer.legal')}</span>
			<a href={resolve("/privacy")} class="text-slate-500 hover:text-blue-400">{i18n.t('footer.privacy')}</a>
			<a href={resolve("/terms")} class="text-slate-500 hover:text-blue-400">{i18n.t('footer.terms')}</a>
			<a href={resolve("/imprint")} class="text-slate-500 hover:text-blue-400">{i18n.t('footer.imprint')}</a>
			<a href={resolve("/contact")} class="text-slate-500 hover:text-blue-400">{i18n.t('footer.contact')}</a>
		</div>
		<div class="col-span-2 md:col-span-1">
			© 2026 Amqhi
		</div>

		<div class="col-span-2 flex flex-row gap-1 text-2xl md:col-span-1">
			<a href="https://github.com/amqhi" target="_blank" class="opacity-100 hover:opacity-80">
				<FontAwesomeIcon icon={faGithub}/>
			</a>
			<div class="opacity-50">
				<FontAwesomeIcon icon={faXTwitter}/>
			</div>
			<div class="opacity-50">
				<FontAwesomeIcon icon={faYoutube}/>
			</div>
			<div class="opacity-50">
				<FontAwesomeIcon icon={faReddit}/>
			</div>
		</div>


	</div>
</footer>