import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import preprocess from 'svelte-preprocess';
import path from 'path';

// const path = fileURLToPath(new URL('package.json', import.meta.url));
// const pkg = JSON.parse(readFileSync(path, 'utf8'));


/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	preprocess: vitePreprocess(),

	kit: {
		adapter:adapter(),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@data': path.resolve('./src/demo-data'),
			'@store': path.resolve('./src/lib/store'),
			'@apps': path.resolve('./src/lib/view/apps'),
			'@view': path.resolve('./src/lib/view')
		},
	},
	preprocess: preprocess(),
};

export default config;
