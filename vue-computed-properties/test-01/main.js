let vm = new Vue({
	el: '#root',
	data : {
		first_name : "John",
		last_name : "Doe",
	},
	methods : {
		fullname () {
			return this.first_name + ' ' + this.last_name;
		}
	},
	computed : {
		full_name () {
			return this.first_name + ' ' + this.last_name;
		}
	}
});