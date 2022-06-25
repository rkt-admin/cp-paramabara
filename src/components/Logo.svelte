<script>
	export let size = 'small'; // small, medium, or large
	export let text = false; // logo-only, logo-text
	export let theme = 'light'; // logo-only, logo-text
	import { SITE_URL, SITE_TITLE } from '$lib/siteConfig';
</script>

<div class="!text-transparent bg-clip-text focus:outline-none focus:shadow-outline inline-block">
	<a href={SITE_URL} class="flex items-center">
		<img
			src="/assets/logo.svg"
			class:small={size === 'small'}
			class:medium={size === 'medium'}
			class:large={size === 'large'}
			alt="{SITE_TITLE} Logo"
		/>
		{#if text}
			<div class="inline-block pt-0 h-6 font-bold pl-2 text-lg
			{theme === 'light' ? 'text-slate-700 dark:text-slate-100' : 'text-slate-100 dark:text-slate-700'}"
			class:text-small={size === 'small'}
			class:text-medium={size === 'medium'}
			class:text-large={size === 'large'}>PT Bintang Anggada Bara Energi</div>
		{/if}
	</a>
</div>

<style lang="postcss">
	.small {
		@apply h-9;
	}
	.medium {
		@apply h-12;
	}
	.large {
		@apply h-16;
	}
	.text-small {
		@apply text-base;
	}
	.text-medium {
		@apply text-lg;
	}
	.text-large {
		@apply text-xl;
	}
</style>
