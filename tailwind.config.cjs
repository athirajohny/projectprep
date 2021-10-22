const colors = require('tailwindcss/colors')

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			'lato': ['Lato'],
		   },
		colors:{
			purple:{
				dark: '#604f80',
				med :'#a76386',
			},
			custom:{
				gray : '#373737',
				lavender : '#fbeedf',
				iceblue: '#b9beda',
				yellow : '#ffc900',
				violet: '#130f26',
				green :'#02ba2a',
			},
			footer:{
				light: '#f3f3f3',
				dark :'#e3e3e3',
			},
			
		},
	},

	plugins: []
};

module.exports = config;
