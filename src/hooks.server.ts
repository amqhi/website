import type { Handle } from '@sveltejs/kit';
import { localeFromRequest } from '$lib/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.locale = localeFromRequest(event.request);
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.locale)
	});
};
