<script lang='ts'>
    import { base } from "$app/paths";

    export let name: string;
    export let imageUrl: string;
</script>

<a class="hero-card" href={`${base}/hero/${name.toLowerCase()}`}>
    <img src={imageUrl} alt={name}/>
    <caption>{name}</caption>
</a>

<style lang="sass">
    .hero-card
        background: rgba(255, 255, 255, 0.9)
        border: 2px solid #fff
        border-radius: 4px
        color: #000
        display: flex
        flex-direction: column
        align-items: center
        text-decoration: none
        transition: all .2s ease
        &:hover
            scale: 1.2
            background: #fff
            z-index: 1

    img
        width: 110px
        height: 110px
        background: #C8DDF8

    caption
        white-space: nowrap
        text-transform: uppercase
        font-family: Dosis
        font-weight: bold
        font-size: .8em
        letter-spacing: 1px
        margin: 3px
</style>
