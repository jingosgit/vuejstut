Vue.component('app-nav',{
	template: `
		<div class="navbar">
	
		  <a href="#"  v-for="page in pages"  >
			<div v-if="isVisible=true">
			{{page.name}}
			</div>
		  </a>

		  <a href="#" class="right">Contact</a>

		</div>
	`,
	data () {
		return {
			isVisible:false,
			pages:[
				{ name : 'Home', isVisible: true },
				{ name : 'About', isVisible: true },
				{ name : 'Services', isVisible: true },
				{ name : 'Faq', isVisible: false },
			]
		}
	},

});


new Vue({
	el: '#root',

});