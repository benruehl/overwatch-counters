import type { Hero } from '$lib/models';
import { groupBy } from '$lib/utils';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch(`/heroes.json`);
    const heroes = await res.json() as Hero[];

    heroes.forEach(h => h.image = `/hero-icons/${h.image}`);
    const heroesByRole = groupBy(heroes, h => h.role);

    return { heroesByRole };
}) satisfies PageLoad;
