<script lang="ts">
    let { children } = $props();
</script>

<main>
    {@render children()}
</main>

<style>
    main {
        margin-top: 2rem;
        padding: 1rem;
    }
</style>