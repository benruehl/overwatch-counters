<script lang="ts">
    import { HeroSelection } from '$lib/components';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<HeroSelection heroesByRole={data.heroesByRole}/>
