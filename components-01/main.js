/*
- Defined a component hello
- Defines a template that uses paragraphe HTML element
- Use a directive to create a click Event that will call a function eventHandle
- A message that out puts the value of the message.
- 
 */
Vue.component('hello-item',{
	template: '<p v-on:click="eventHandle()">{{message}}</p>',
	data () {
		return {
			message: 'Hello Vue!'
		}
	},
	methods: {
		eventHandle () {
			this.message = "Hello You"
		}
	}
});

new Vue({
	el: '#root'
});
