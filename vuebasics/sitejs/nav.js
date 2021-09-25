Vue.component('app-nav',{
	template: `
		<div class="navbar">
		  <a href="#" class="active">Home</a>
		  <a href="#">About me</a>
		  <a href="#">Services</a>
		  <a href="#" class="right">Contact</a>
		</div>
	`
});


new Vue({
	el: '#root'
});