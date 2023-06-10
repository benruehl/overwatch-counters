<script lang="ts">
    import HeroSelection from '../lib/components/HeroSelection.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Overwatch</h1>
<HeroSelection heroesByRole={data.heroesByRole}/>
