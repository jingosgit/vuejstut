let vm  = new Vue({
    el: '#root',
    data: {
      usd: 0,
    },

    computed: {
    	local () {
    		return this.usd * 102;
    	}
    }
});