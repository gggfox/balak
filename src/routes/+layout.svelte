<script lang='ts'>
	import './styles.css';
	import getI18nStore from "./i18n";
  	import { setContext, getContext } from "svelte";
  	setContext('i18n', getI18nStore());
	const i18n = getContext("i18n");
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>	 {$i18n.t('avisoDePrivacidad')}</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
	
	
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
