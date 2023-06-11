<script lang="ts">
    import type { Hero } from "$lib/models";
    import HeroCard from "./HeroCard.svelte";

    export let heroesByRole: { [key: string]: Hero[] };

    const getRoleOrder = (role: string): number => ({
        tank: 0,
        damage: 1,
        support: 2
    })[role] || -1

    const roleSortFn = (a: [string, Hero[]], b: [string, Hero[]]) =>
        getRoleOrder(a[0]) - getRoleOrder(b[0])
</script>

<section class="root">
    {#each Object.entries(heroesByRole).sort(roleSortFn) as roleWithHeroes}
        <div class="role-container">
            <h3>{roleWithHeroes[0]}</h3>
            <div class="break"></div>
            {#each roleWithHeroes[1] as hero}
                <HeroCard name={hero.name} imageUrl={hero.image} />
            {/each}
        </div>
    {/each}
</section>

<style>
    .root {
        display: flex;
        gap: 20px;
    }
    
    h3 {
        text-transform: uppercase;
        font-family: Dosis;
        font-weight: bold;
        font-size: 1.2em;
        letter-spacing: 2px;
    }
    
    .role-container {
        display: flex;
        flex-wrap: wrap;
        align-content: start;
        justify-content: center;
        gap: 4px;
    }
    .role-container:first-child {
        justify-content: end;
    }
    .role-container:last-child {
        justify-content: start;
    }
    
    .break {
      flex-basis: 100%;
      height: 0;
    }
</style>
