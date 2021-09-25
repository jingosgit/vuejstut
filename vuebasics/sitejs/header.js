Vue.component('app-header', {
	props: ['title','body'],

	template: `
		<div class="header">
		 <h2>{{ title }}</h2>
		 <p>{{ body }}</p>
		</div>
	`,
});

new Vue({
	el: '#root',
	data :  { title : 'My Code Snippets Book.', body: 'Test content'},
	computed: {
	    derived: function() {
		   return this.title.toLowerCase();
		}
	  },
});