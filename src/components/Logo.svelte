<script>
	export let size = 'small'; // small, medium, or large
	export let text = false; // logo-only, logo-text
	export let theme = 'light'; // logo-only, logo-text
	import { SITE_URL, SITE_TITLE } from '$lib/siteConfig';
</script>

<div class="focus:shadow-outline inline-block bg-clip-text !text-transparent focus:outline-none">
	<a href={SITE_URL} class="flex items-center">
		<img
			src="/assets/logo.svg"
			class:small={size === 'small'}
			class:medium={size === 'medium'}
			class:large={size === 'large'}
			alt="{SITE_TITLE} Logo"
		/>
		{#if text}
			<div
				class="inline-block h-6 pt-2 pl-2 text-lg font-light uppercase
			{theme === 'light' ? 'text-slate-700 dark:text-slate-100' : 'text-slate-100 dark:text-slate-700'}"
				class:text-small={size === 'small'}
				class:text-medium={size === 'medium'}
				class:text-large={size === 'large'}
			>
				{SITE_TITLE}
			</div>
		{/if}
	</a>
</div>

<style lang="postcss">
	.small {
		@apply h-6 mt-2;
	}
	.medium {
		@apply h-9 mt-2;
	}
	.large {
		@apply h-11 mt-2;
	}
	.text-small {
		@apply text-sm font-bold;
	}
	.text-medium {
		@apply text-base font-bold;
	}
	.text-large {
		@apply text-lg font-bold;
	}
</style>
