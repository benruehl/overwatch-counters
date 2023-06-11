import type { Hero, HeroRole } from "$lib/models"

const getRoleOrder = (role: HeroRole): number => ({
    tank: 0,
    damage: 1,
    support: 2
})[role] || -1

export const compareHeroRoles = <T>(a: [HeroRole, T], b: [HeroRole, T]) =>
    getRoleOrder(a[0]) - getRoleOrder(b[0])
