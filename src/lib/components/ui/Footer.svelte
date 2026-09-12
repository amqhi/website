<script lang="ts">
	import {resolve} from '$app/paths';
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
	<div class="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
		<div class="col-span-2 md:col-span-1">
			<div class="flex items-center gap-2 font-bold mb-4">
				<img src="/logo512.png" alt="Amqhi Logo" class="w-7 h-7" />
				<span>Amqhi</span>
			</div>
			<p class="text-slate-500">Back to the Basics.</p>
		</div>
		<div class="flex flex-col gap-3">
			<span class="font-semibold">Products</span>
			<a href={resolve("/cloud")} class="text-slate-500 hover:text-blue-500">Amqhi Cloud</a>
			<a href={resolve("/music")} class="text-slate-500 hover:text-red-500">Amqhi Music</a>
			<a href={resolve("/notes")} class="text-slate-500 hover:text-blue-400">Amqhi Notes</a>
			<a href={resolve("/photos")} class="text-slate-500 hover:text-red-400">Amqhi Photos</a>
			<a href={resolve("/web")} class="text-slate-500 hover:text-blue-400">Amqhi Web</a>
			<a href={resolve("/pricing")} class="text-slate-500 hover:text-blue-400">Pricing</a>
		</div>

		<div class="flex flex-col gap-3">
			<span class="font-semibold">Legal</span>
			<a href={resolve("/privacy")} class="text-slate-500 hover:text-blue-400">Privacy</a>
			<a href={resolve("/terms")} class="text-slate-500 hover:text-blue-400">Terms</a>
			<a href={resolve("/imprint")} class="text-slate-500 hover:text-blue-400">Imprint</a>
			<a href={resolve("/contact")} class="text-slate-500 hover:text-blue-400">Contact</a>
		</div>
		<div>
			© 2026 Amqhi
		</div>

		<div class="flex flex-row gap-1 text-2xl">
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