<script lang="ts">
    import { HeroSelection } from "$lib/components";
    import HeroCounters from "$lib/components/HeroCounters.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div class="root">
    <HeroSelection heroesByRole={data.heroesByRole}/>
    {#if data.selectedHero}
        <div class="hero-counters">
            <HeroCounters hero={data.selectedHero} counters={data.selectedHeroCounters}/>
        </div>
    {/if}
</div>

<style lang="sass">
    .root
        min-height: 100%
        display: flex
        flex-direction: column
        justify-content: space-around

    .hero-counters
        display: flex
        flex-direction: column
        align-items: center
        margin: 20px
</style>
