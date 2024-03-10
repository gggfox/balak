import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';

i18next.init({
	lng: 'es',
	resources: {
		es: {
			translation: {
				key: 'hello world',
				avisoDePrivacidad: 'aviso de privacidad',
				treatment: 'tratamiento',
				minutes: 'minutos',
				oxygenation: 'Pasa de un 21% de oxigeno en el aire que respiras a un',
				team: 'Equipo',
				nutrologist: 'Nutriologo',
				supervision:
					'Cada sesion en la camara hiperbarica es supervisada por un medico capacitado.',
				price: '2,000.00 mxn por cada sesion o 20,000.00 mxn por 12 sesiones al año ',
				lungs: 'Redistribuye el flujo sanguíneo y mejora la oxigenación cerebral',
				energy: 'Incrementa la eficiencia energética y previene la fatiga.',
				reviews: 'Reseñas',
				scaring: 'Acelera la cicatrización y curación de tus heridas en un',
				appointment: 'Agenda tu cita',
				pressure: 'Prescion de',
				atm: 'ATM'
			}
		}
	},
	interpolation: {
		escapeValue: false // not needed for svelte as it escapes by default
	}
});

export default () => createI18nStore(i18next);
