import type { Hero } from '../lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch(`/heroes.json`);
    const heroes = await res.json() as Hero[];

    heroes.forEach(h => h.image = `/hero-icons/${h.image}`);
    const heroesByRole = groupBy(heroes, h => h.role);

    return { heroesByRole };
}) satisfies PageLoad;

const groupBy = <T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
  array.reduce((acc, value, index, array) => {
    (acc[predicate(value, index, array)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });
