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
	>NEWS & EVENT</ContentHeader
>
<ContentWrap>
	<ContentSidebar>
		<Accordion multiselect>
			<AccordionItem title="Title 1">
				<li>Content 1</li>
				<li>Content 2</li>
				<li>Content 2</li>
			</AccordionItem>
			<AccordionItem title="Title 2">Content 2</AccordionItem>
			<AccordionItem title="Title 3">
				<AccordionItem title="Title 1">Content 1</AccordionItem>
				<AccordionItem title="Title 2">Content 2</AccordionItem>
				<AccordionItem title="Title 3">Content 2</AccordionItem>
			</AccordionItem>
		</Accordion>
	</ContentSidebar>
	<Content>
		The business of the Bayan Group is strongly built on the strength of our experience in
		Indonesia. Our President Director and Founder of Bayan Group - Dato’ Dr. Low Tuck Kwong’s
		business interests commenced in Indonesia in 1973 when he formed PT. Jaya Sumpiles Indonesia
		(JSI) as an earthworks, civil works and marine structure contractor. JSI quickly became pioneer
		in complex pile foundation works, and leading contractor in Indonesia in the above fields and
		remained so during the 1980’s and 1990’s. In 1988, JSI ventured into contract coal mining and
		was a leading mining contractor until 1998 when Dato’ Dr. Low acquired PT. Gunung Bayan
		Pratamacoal (GBP) and PT. Dermaga Perkasapratama (DPP). At the time GBP had not commenced mining
		and the Balikpapan Coal Terminal (under DPP) has a rated capacity of 2.5 million tonnes per
		annum. Under the leadership of Dato’ Dr. Low, the Bayan Group quickly transformed into
		vertically integrated successful and reputed coal mining company. The Bayan Group was formed
		through number of strategic acquisitions in the coal sector and established with a proven track
		record in developing greenfield coal mines.
		<br /><br />
		In particular, in recent years the Tabang / Pakar project has expanded from being a small-scale mining
		operation producing only 1.9 million tonnes in 2014 to producing approximately 22.7 million tonnes
		in 2018. This has rapidly increased Bayan’s position in the market now placing it within the top
		5 Indonesian coal producers.
	</Content>
</ContentWrap>
