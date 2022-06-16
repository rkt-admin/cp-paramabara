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

	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />
<nav
	class="bg-slate-50 dark:bg-slate-800 top-0 sticky {yScreen >
	50
		? ' drop-shadow-md'
		: ''}"
>
	<MobileMenu />
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="https://flowbite.com" class="flex items-center">
			<Logo size="medium" />
		</a>
		<div class="flex items-center md:order-2">
			<button
				aria-label="Toggle Dark Mode"
				class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg ring-gray-700
				transition-all hover:ring-1 hover:ring-gray-700 dark:bg-yellow-800"
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
		<div
			class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
			id="mobile-menu-2"
		>
			<ul class="flex">
				<!--Regular Link-->
				<li class="hoverable hover:text-white">
					<a
						href="/"
						class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold  hover:text-white"
						>About</a
					>
					<div class="megamenu mb-0">
						<div class="container mx-auto flex flex-wrap justify-between">
							<ul class="sm:w-1/2 lg:w-1/4 lg:pt-3">
								<div class="megamenu-header">
									<h3>Company Overview</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link flex items-center py-3">
									<a href="/company-overview">Find out more...</a>
								</div>
							</ul>
							<ul class="sm:w-1/2 lg:w-1/4 lg:pt-3">
								<div class="megamenu-header">
									<h3>Core Value</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link flex items-center py-3">
									<a href="/core-value">Find out more...</a>
								</div>
							</ul>
							<ul class="sm:w-1/2 lg:w-1/4 lg:pt-3">
								<div class="megamenu-header">
									<h3>Corporate Structure</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link flex items-center py-3">
									<a href="/corporate-structure">Find out more...</a>
								</div>
							</ul>
							<ul class="sm:w-1/2 lg:w-1/4 lg:pt-3">
								<div class="megamenu-header">
									<h3>Organization Structure</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link flex items-center py-3">
									<a href="/organization-structure">Find out more...</a>
								</div>
							</ul>
						</div>
					</div>
				</li>
				<li class=" hover:text-white">
					<a
						href="/company-insight"
						class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
						>Company Insight</a
					>
				</li>
				<li class=" hover:text-white">
					<a
						href="/press-release"
						class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Press Release</a
					>
				</li>
				<li class=" hover:text-white">
					<a
						href="/news-event"
						class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">News & Event</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	/* ––––––––––––––––––––––––––––––––––––––––––––––––––
	  Based on: https://codepen.io/nickelse/pen/YGPJQG
	  Influenced by: https://sproutsocial.com/
	–––––––––––––––––––––––––––––––––––––––––––––––––– */

	/* #Mega Menu Styles
	–––––––––––––––––––––––––––––––––––––––––––––––––– */
	.megamenu-link a {
		@apply text-sm text-pastel-blue;
	}

	.megamenu-link a:hover {
		@apply text-sm text-pastel-purple;
	}
	.megamenu-header {
		@apply flex items-center font-bold text-xl text-slate-700 mb-4;
	}
	.megamenu-description {
		@apply text-slate-700 text-sm mb-3;
	}
	.megamenu {
		display: none;
		left: 0;
		position: absolute;
		text-align: left;
		width: 100%;
		@apply py-5 shadow-xl z-0 w-full bg-pastel-orange backdrop-blur-2xl;
	}
	.megamenu ul {
		@apply pt-4 m-0;
	}

	/* #hoverable Class Styles
	–––––––––––––––––––––––––––––––––––––––––––––––––– */
	.hoverable {
		position: static;
	}
	nav a {
		@apply text-base text-gray-700 font-medium;
	}
	nav a:hover {
		@apply text-base text-pastel-red;
	}

	:global(.dark) nav a {
		@apply text-slate-100;
	}
	.hoverable > a:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	}

	.hoverable:hover .megamenu {
		display: block;
	}

	/* #toggle Class Styles
	–––––––––––––––––––––––––––––––––––––––––––––––––– */
	/* 
	.toggleable > label:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	}

	.toggle-input {
		display: none;
	}
	.toggle-input:not(checked) ~ .mega-menu {
		display: none;
	}

	.toggle-input:checked ~ .mega-menu {
		display: block;
	}

	.toggle-input:checked + label {
		color: white;
		background: #2c5282;
	}

	.toggle-input:checked ~ label:after {
		content: '\25B2';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	} */
</style>
