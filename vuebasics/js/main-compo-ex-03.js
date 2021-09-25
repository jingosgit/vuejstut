Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		    	<div class="box">
		    		<p>
		    			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
		    		</p>		    		
		    	</div>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`

});

new Vue({
	el: '#root',
});