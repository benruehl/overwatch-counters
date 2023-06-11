import { fetchHeroes } from '$lib/services';
import { notNullOrUndefined } from '$lib/utils';
import type { PageLoad } from './$types';

const equalsIgnoreCase = (a: string, b: string): boolean =>
    a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0

export const load = (async ({ fetch, params }) => {
    const heroesByRole = await fetchHeroes(fetch);
    const allheroes = [...heroesByRole.tank, ...heroesByRole.damage, ...heroesByRole.support]
    const selectedHero = allheroes.find(h => equalsIgnoreCase(h.name, params.slug))
    const selectedHeroCounters = selectedHero?.counteredBy
        .map(counter => allheroes.find(h => equalsIgnoreCase(h.name, counter)))
        .filter(notNullOrUndefined) || []
    return { heroesByRole, selectedHero, selectedHeroCounters }
}) satisfies PageLoad;
