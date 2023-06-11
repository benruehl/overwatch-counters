export interface Hero {
    name: string
    image: string
    role: HeroRole
    counteredBy: string[]
}

export type HeroRole = 'tank' | 'damage' | 'support';
