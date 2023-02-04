<script>
	import { Accordion, AccordionItem } from 'svelte-accessible-accordion';
	import Content from '../../components/Content.svelte';
	import ContentHeader from '../../components/ContentHeader.svelte';
	import ContentWrap from '../../components/ContentWrap.svelte';
	import ContentSidebar from '../../components/ContentSidebar.svelte';
	let expanded;
</script>

<ContentHeader
	url="https://www.bayan.com.sg/cfind/source/thumb/images/banner/cover_w1920_h393_banner-awards.jpg"
>
	<div class="grid grid-cols-8 gap-0">
		<div class="col-start-1 col-end-4">PRESS RELEASE</div>
		<div class="col-start-5 col-end-9">
			<nav class="float-right flex" aria-label="Breadcrumb">
				<ol class="inline-flex items-end space-x-1 md:space-x-3">
					<li class="inline-flex items-center">
						<a
							href="/"
							class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
						>
							<svg
								aria-hidden="true"
								class="mr-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
								/></svg
							>
							Home
						</a>
					</li>
					<li>
						<div class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/></svg
							>
							<a
								href="/"
								class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ml-2"
								>Projects</a
							>
						</div>
					</li>
					<li aria-current="page">
						<div class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/></svg
							>
							<span class="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2"
								>Flowbite</span
							>
						</div>
					</li>
				</ol>
			</nav>
		</div>
	</div>
</ContentHeader>
<ContentWrap>
	<ContentSidebar>
		<Accordion multiselect>
			<AccordionItem title="2023 Q1">
				<li>Content 1</li>
				<li>Content 2</li>
				<li>Content 2</li>
			</AccordionItem>
			<AccordionItem title="2023">
				<AccordionItem title="Title 1">Content 1</AccordionItem>
				<AccordionItem title="Title 2">Content 2</AccordionItem>
				<AccordionItem title="Title 3">Content 2</AccordionItem>
			</AccordionItem>
		</Accordion>
	</ContentSidebar>
	<Content>
		<p>
			PT. Parama Bara Intercontinental is an International Commodity Trading Company ,domicile in
			Indonesia incorporated on december 2016, Our Founder & Ceo is a member of PARAMA BARA Group,
			she has over 10 years of experience in commodity trading business and we are proud of our
			reputation for fast and efficient service along with our professional ethic policy.
		</p>
		<p>
			We also have vast knowledge of the commodity products such as Coal, Nickel, Antrachite and
			with our wide range of stock, we are able to offer many options of commodity specifications to
			suit variying applications and budget.
		</p>
		<p>
			Our company provides an exclusive platform for trading partners to venture into Indonesian
			energy and minerals business especially coal, nickel, anthracite.
		</p>
	</Content>
</ContentWrap>
