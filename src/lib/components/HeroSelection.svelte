<script lang="ts">
    import type { Hero, HeroRole } from "$lib/models";
    import { compareHeroRoles, getEntries } from "$lib/utils";
    import HeroCard from "./HeroCard.svelte";

    export let heroesByRole: { [key in HeroRole]: Hero[] };
</script>

<section class="root">
    {#each (getEntries(heroesByRole)).sort(compareHeroRoles) as roleWithHeroes}
        <div class="role-container">
            <h3>{roleWithHeroes[0]}</h3>
            <div class="break"></div>
            {#each roleWithHeroes[1] as hero}
                <HeroCard name={hero.name} imageUrl={hero.image} />
            {/each}
        </div>
    {/each}
</section>

<style lang="sass">
    .root
        display: flex
        gap: 20px
    
    .role-container
        display: flex
        flex-wrap: wrap
        align-content: start
        justify-content: center
        gap: 4px
        &:first-child
            justify-content: end
        &:last-child
            justify-content: start
    
    .break
        flex-basis: 100%
        height: 0
</style>
