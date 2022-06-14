<script>
	export let url = 'assets/mining-pic-1.jpg'; // small, medium, or large
</script>

<div class="mx-auto w-full h-80 bg-fixed" style="background-image: url('{url}')">
	<slot />
</div>
