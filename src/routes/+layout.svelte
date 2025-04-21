<script lang="ts">
	import { Toaster } from 'svelte-french-toast';

	let { children } = $props();
</script>

{@render children()}

<Toaster/>