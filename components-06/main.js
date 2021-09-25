let niajeComponent = {
	template: `<p>{{message}}</p>`,
	data () {
		return {
			message: 'Yoo whaxup component!'
		}
	}
}


let vm = new Vue({
	el: '#root',
	components: {
		'niaje-bro' : niajeComponent 
	}

});
