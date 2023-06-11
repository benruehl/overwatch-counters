import { fetchHeroes } from '$lib/services';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    return {
        heroesByRole: await fetchHeroes(fetch)
    }
}) satisfies PageLoad;
