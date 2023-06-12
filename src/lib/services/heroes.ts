import { base } from "$app/paths";
import type { Hero } from "$lib/models";
import { groupBy } from "$lib/utils";

export const fetchHeroes = async (f: typeof fetch) => {
    const res = await f(`/heroes.json`);
    const heroes = await res.json() as Hero[];

    heroes.forEach(h => h.image = `${base}/hero-icons/${h.image}`);
    const heroesByRole = groupBy(heroes, h => h.role);

    return heroesByRole;
}
