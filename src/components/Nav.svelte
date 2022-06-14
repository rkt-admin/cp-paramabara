<script>
	import MobileMenu from './MobileMenu.svelte';
	import Logo from './Logo.svelte';
	import { SITE_URL, REPO_URL, RSS_URL } from '$lib/siteConfig';
	import NavLink from './NavLink.svelte';
	let isDark = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}
	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}
</script>

<nav
	class="relative mx-auto flex w-full items-center justify-between border-gray-200
	bg-opacity-60 py-8 text-gray-900 dark:border-gray-700 dark:bg-gray-900
	dark:text-gray-100 sm:pb-8"
>
	<div class="w-full relative">
		<MobileMenu />
		<Logo size="large" />
		<ul class="flex float-right">
			<li>
				<NavLink href="/about">About</NavLink>
			</li>
			<li>
				<NavLink href="/company-insight">Company Insight</NavLink>
			</li>
			<li>
				<NavLink href="/press-release">Press Release</NavLink>
			</li>
			<li>
				<NavLink href="/news-events">News & Events</NavLink>
			</li>
		</ul>
		<div class="flex items-center space-x-4">
			<button
				aria-label="Toggle Dark Mode"
				class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 ring-yellow-400
			transition-all hover:ring-2 dark:bg-yellow-800"
				on:click={toggleDarkMode}
			>
				{#if isDark}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						class="h-5 w-5 text-gray-800 dark:text-yellow-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						class="w-5 h-5 text-gray-800 dark:text-gray-200"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</nav>

<style lang="postcss">
	ul,
	li {
		@apply uppercase px-4;
	}

	/* .skip-nav {
		position: absolute;
		left: -25%;
		top: -2rem;
		--tw-translate-y: -3rem;
		padding: 0.75rem 1rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.2s;
	} */
</style>
