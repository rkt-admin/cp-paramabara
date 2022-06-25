<script>
	import MobileMenu from './MobileMenu.svelte';
	import Logo from './Logo.svelte';
	import { SITE_URL, REPO_URL, RSS_URL } from '$lib/siteConfig';
	import NavLink from './NavLink.svelte';
	

	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />
<nav class="bg-slate-50 dark:bg-slate-800 top-0 sticky {yScreen > 50 ? ' drop-shadow-md' : ''}">
	<div class="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
		<span class="hidden md:flex md:order-1 items-center">
			<Logo text={true} size="medium" />
		</span>
		<MobileMenu />
		<div
			class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
			id="mobile-menu-2"
		>
			<ul class="flex">
				<!--Regular Link-->
				<li class="hoverable">
					<a
						href="/" class="relative block p-6 px-2 lg:px-6 lg:pt-6 lg:pb-5 text-sm lg:text-base font-bold"
						>About</a
					>
					<div class="megamenu mb-0">
						<div class="container mx-auto flex flex-wrap justify-between">
							<ul>
								<div class="megamenu-header">
									<h3>Company Overview</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/company-overview">Find out more...</a>
								</div>
							</ul>
							<ul>
								<div class="megamenu-header">
									<h3>Core Value</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/core-value">Find out more...</a>
								</div>
							</ul>
							<ul>
								<div class="megamenu-header">
									<h3>Corporate Structure</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/corporate-structure">Find out more...</a>
								</div>
							</ul>
							<ul>
								<div class="megamenu-header">
									<h3>Organization Structure</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/organization-structure">Find out more...</a>
								</div>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<a
						href="/company-insight"
						class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
						>Company Insight</a
					>
				</li>
				<li>
					<a
						href="/company-insight"
						class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold"
						>Sustainability</a
					>
				</li>
				<li>
					<a
						href="/press-release"
						class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Press Release</a
					>
				</li>
				<li>
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
	nav a {
		@apply text-base text-gray-900 font-medium;
	}
	nav a:hover {
		@apply text-gray-50 bg-gray-900;
	}
	

	/* #hoverable Class Styles
	–––––––––––––––––––––––––––––––––––––––––––––––––– */
	.hoverable > .megamenu {
		position: absolute;
		text-align: left;
		visibility: hidden;
		opacity: 0;
		width: 120%;
		z-index: 1;
		@apply w-full left-0 bg-gray-900 -translate-x-2 pt-2;
		transition: visibility 0.5s, opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), transform 1s cubic-bezier(0.075, 0.82, 0.165, 1), height 300ms ease, width 300ms ease;
	}
	.hoverable:hover > .megamenu {
		visibility: visible;
		opacity: 1;
		@apply bg-gray-900 translate-x-0;
	}
	.hoverable:hover {
		@apply bg-gray-900;
	}

	.megamenu ul {
		@apply sm:w-1/2 lg:w-1/4 pt-4 px-4;
	}
	.megamenu-header {
		@apply flex items-center font-bold text-xl text-slate-50 mb-4;
	}
	.megamenu-description {
		@apply text-slate-300 text-sm mb-3;
	}
	
	.hoverable {
		position: static;
	}
	
	.hoverable a {
		@apply text-base text-gray-900 font-medium;
	}
	.hoverable:hover a {
		@apply text-gray-50 bg-gray-900;
	}
	.hoverable:hover .megamenu-link a {
		@apply text-pastel-orange;
	}
	.hoverable:hover .megamenu-link a:hover {
		@apply text-gray-50;
	}

	:global(.dark) nav a {
		@apply text-slate-100;
	}
	
	.hoverable > a:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		/* top: -1px; */
		transition: transform 1s;
	}

	/* .hoverable > a {
		content: '\25BC';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
		transition: transform 1s;
	} */

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
