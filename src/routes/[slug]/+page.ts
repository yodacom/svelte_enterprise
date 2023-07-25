import type { PageLoad } from './$types';
import { marked } from 'marked';

export const load: PageLoad = async ({ fetch, params }) => {
    const slug = params['slug']; // retrieve the  "slug" param
    const res = await fetch(`/${slug}.md`);
    const post = await res.text();

    return {
        slug,
        post: marked.parse(post), // parse it as HTML
    };
};