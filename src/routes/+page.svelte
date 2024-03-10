<script>
	import { getContext } from "svelte";
	import Container from './Container.svelte';
	import GoogleMap from './GoogleMap.svelte';
	import whatsapp from '$lib/images/whatsapp.svg';
	import Experience from "./three/Experience.svelte";

  	const i18n = getContext("i18n");
</script>

<svelte:head>
	<title>Balak</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-row h-[92vh] gap-3">
	<section class="flex flex-col w-[30%] h-full gap-3">
		<div class="flex flex-row gap-3 h-[20%]">
			<Container class='flex aspect-square justify-center items-center'>
				<p>Logo</p>
			</Container>
			<Container class='flex flex-col aspect-square justify-center items-center'>
				<p class='text-[1.5rem]'>{$i18n.t('treatment')}</p>
				<p 
				class='{` leading-none	
					text-[5rem] text-center font-bold 
					bg-gradient-to-tr from-orange-300 from-30% via-pink-300 via-40% to-orange-300 to-70% 
					inline-block text-transparent bg-clip-text
				`}'
				
				>90</p>
				<p class='text-[1.5rem]'> {$i18n.t('minutes')}</p>
			</Container>

		</div>

		<Container class='flex flex-col justify-center items-center h-[35%]'>
			<p class='text-[1.7rem] text-center'>{$i18n.t('oxygenation')}</p>
			<p 
			class='{`
				text-[6rem] text-center font-bold 
				bg-gradient-to-b from-orange-300 from-30% via-pink-300 via-40% to-orange-300 to-70% 
				inline-block text-transparent bg-clip-text
			`}'
			
			>100%</p>
		</Container>

		<div class="flex flex-row gap-3 h-[25%]">
			<Container class='flex flex-col aspect-square justify-center items-center'>
				<p class='text-[1.4rem]'> {$i18n.t('team')}</p>
				<p class='text-[4rem]'>🍎</p>
				<p class='text-[1.4rem]'> Jorge Garzafox</p>
				<p class='text-[1rem]'> {$i18n.t('nutrologist')}</p>
				
			</Container>
			<Container class='flex flex-col aspect-square justify-center items-center justify-center'>
				<a aria-label="Chat on WhatsApp" href="https://wa.me/528114906208" class='w-full h-full flex flex-col justify-center items-center'>
					<p class='font-bold text-black'>{$i18n.t('appointment')}</p>
					<img src={whatsapp} class='w-[60%]' alt="whatsapp logo"/>
				</a>
			</Container>

		</div>
		<Container class='flex flex-col justify-center items-center h-[20%]'>
			<p 
			class='{`
				text-[1.4rem] text-center font-bold 
				bg-gradient-to-r from-orange-300 from-0% via-pink-300 via-40% to-orange-300 to-100% 
				inline-block text-transparent bg-clip-text
			`}'
		>
			{$i18n.t('supervision')}
		</p>
		</Container>
	</section>

	<section class="flex flex-col w-[40%] h-full gap-3">
		<div class="flex flex-row gap-3 h-[20%]">
			<Container class='flex flex-col justify-center items-center w-[35%]'>
				<p class='text-[1.5rem]'>{$i18n.t('pressure')}</p>
				<p 
				class='{` leading-none	
					text-[5rem] text-center font-bold 
					bg-gradient-to-br from-orange-300 from-30% via-pink-300 via-40% to-orange-300 to-70% 
					inline-block text-transparent bg-clip-text
				`}'
				
				>2.2</p>
				<p class='text-[1.5rem]'> {$i18n.t('atm')}</p>
			</Container>
			<Container class='flex flex-col justify-center items-center w-[75%]'>
				<p class='text-[1.4rem] text-center'>{$i18n.t('scaring')}</p>
				<p 				
					class='{` leading-none	
						text-[4.5rem] text-center font-bold 
						bg-gradient-to-b from-orange-300 from-0% via-pink-300 via-40% to-orange-300 to-100% 
						inline-block text-transparent bg-clip-text
					`}'
				>200%</p>
			</Container>

		</div>

		<Container class='flex flex-col justify-center items-center aspect-square h-[60%]'>
			<Experience/>
		</Container>

		<Container class='flex flex-col justify-center items-center h-[20%] '>
			<p 
				class='{`
					text-[2rem] text-center font-bold 
					bg-gradient-to-br from-orange-300 from-30% via-pink-300 via-50% to-orange-300 to-70% 
					inline-block text-transparent bg-clip-text
				`}'
			>
				{$i18n.t('price')}
			</p>
		</Container>
	</section>

	<section class="flex flex-col w-[30%] h-full gap-3">
		<Container class='flex flex-col justify-center items-center h-[20%]'>
			<p>{$i18n.t('reviews')}</p>
		
		</Container>

		<div class="flex flex-row gap-3 h-[45%]">
			<Container class='flex flex-col items-center'>
				<p class='text-[7rem]'>🫁</p>
				<p class='text-[1.5rem] text-balance text-center'>{$i18n.t('lungs')}</p>
			</Container>
			<Container class='flex flex-col items-center'>
				<p class='text-[7rem]'>⚡️</p>
				<p class='text-[1.5rem] text-balance text-center'>{$i18n.t('energy')}</p>
			</Container>
		</div>
	
		<GoogleMap class='flex flex-col justify-center items-center h-[35%]'/>
	</section>
</section>
