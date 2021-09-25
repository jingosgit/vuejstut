/*
- Defined a component hello
- Defines a template that uses paragraphe HTML element
- Use a directive to create a click Event that will call a function eventHandle
- A message that out puts the value of the message.
- 
 */
Vue.component('hello-item',{
	template: '<p>Hello {{name}} {{age}}</p>',
	props: [
		'name',
		'age'
	],
});

new Vue({
	el: '#root'
});
