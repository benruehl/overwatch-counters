<script lang="ts">
    import type { HeroRole } from "$lib/models";
    import { compareHeroRoles, getEntries, groupBy } from "$lib/utils";
    import HeroCard from "./HeroCard.svelte";

    type Hero = {
        name: string
        image: string
        role: HeroRole
    }

    export let hero: Hero;
    export let counters: Hero[];

    $: countersByRole = groupBy(counters, c => c.role)
</script>

<div class="container">
    <div class="selected-hero">
        <img src={hero.image} alt={hero.name}/>
        <caption>{hero.name}</caption>
    </div>
    <div class="counters">
        <h4>Countered By</h4>
        <div class="counters-roles">
            {#each getEntries(countersByRole).sort(compareHeroRoles) as role}
                <div class="counters-heroes">
                    {#each role[1] as counter}
                        <HeroCard name={counter.name} imageUrl={counter.image}/>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="sass">
    .container
        display: flex
        align-items: end
        gap: 40px

    .selected-hero
        display: flex
        flex-direction: column
        background: #fff
        border: 2px solid #fff
        border-radius: 4px
        box-shadow: 0 0 25px -15px #fff, 0 0 40px -5px #218ffe

        img
            height: 136px

        caption
            color: #000
            font-size: 1.2em
            font-weight: bold
            text-transform: uppercase
            padding: 4px

    .counters

        .counters-roles
            display: flex
            gap: 30px

        .counters-heroes
            display: flex
            gap: 10px
</style>
