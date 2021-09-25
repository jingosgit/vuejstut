Vue.component('button-click',{
	template: `
	<div>
		<button v-on:click="incrementCounter">{{name}}</button>
		<p>Items Added: {{count}}</p>
	</div>
	`,
	props:[
		'name'
	],
	data () {
		return {
			count:0
		}
	},
	methods: {
		incrementCounter () {
			this.count++;
		}
	}
});

Vue.component('secret-message', {
	template: `
		<h4 
			v-on:mouseover="revealSecret" 
			v-on:mouseout="hideSecret">{{ message }}
		</h4>
	`,
	data: function(){
		return {
			message: "Reveal Secret"
		}
	},
	methods: {
		revealSecret: function(){
			this.message = "I Love You";
		},
		hideSecret: function(){
			this.message = "Reveal Secret";
		}
	}
});

new Vue({
	el: '#root',

});
