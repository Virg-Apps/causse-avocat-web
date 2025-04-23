<script lang="ts">
    let { children } = $props();
</script>

<main>
    {@render children()}
</main>

<style>
    main {
        margin: 2rem auto 0 auto;
        padding: 1rem;
        max-width: 1280px;
    }
</style>