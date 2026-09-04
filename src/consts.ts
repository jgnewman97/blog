// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

/** Prefix a site-relative path with Astro's configured `base`. */
export function withBase(path = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	const trimmed = path.replace(/^\/+/, '');
	if (!trimmed) {
		return `${base}/`;
	}
	return `${base}/${trimmed}`;
}
