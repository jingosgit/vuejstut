Vue.component('todo-item',{
	template: '<li>{{item}}</li>',
	props:[
		'item'
	],
	created () {
		console.log(`Component ${this.item} has been created`);
	},
	mounted () {
		this.$nextTick( ()=> {
			console.log(`The component has been mounted successfully`);
		})
	},
	updated () {
		this.$nextTick( ()=> {
			console.log(`Vitual DOM has be re-rendered due to data change`);
		})
	},
	destroyed () {
		console.log(`Component ${this.item} has been created`);
	}
});

let vm = new Vue({
	el: '#root',

});
