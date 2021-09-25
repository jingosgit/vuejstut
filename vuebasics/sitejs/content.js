Vue.component('app-content',{
	template: `
		<div>
			<app-side></app-side>
			<app-main></app-main>
		<div>
	`,
});

Vue.component('app-side',{
	template: `
		<div class="side">
		  <h2>About Me</h2>
		  <h5>Photo of me:</h5>
		  <div class="fakeimg" style="height:200px;">Image</div>
		  <p>Some text about me in culpa qui officia deserunt mollit anim..</p>

		  <h3>More Text</h3>
		  <p>Lorem ipsum dolor sit ame.</p>
		  <div class="fakeimg" style="height:60px;">Image</div><br>
		  <div class="fakeimg" style="height:60px;">Image</div><br>
		  <div class="fakeimg" style="height:60px;">Image</div>
		</div>
	`,
});

Vue.component('app-main',{
	template: `
				<div class="main">
		          <h2>TITLE HEADING</h2>
		          <h5>Title description, Dec 7, 2017</h5>
		          <div class="fakeimg" style="height:200px;">Image</div>
		          <p>Some text..</p>
		          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
		          <br>
		          <h2>TITLE HEADING</h2>
		          <h5>Title description, Sep 2, 2017</h5>
		          <div class="fakeimg" style="height:200px;">Image</div>
		          <p>Some text..</p>
		          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
		        </div>
		</div>
	`,
});
new Vue({
	el: '#root'
});