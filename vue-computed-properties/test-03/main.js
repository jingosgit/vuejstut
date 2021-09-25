let vm  = new Vue({
    el: '#root',
    data: {
        amount : 0,
        amount_in_local: 0
    },
    watch: {
        amount () {
            this.amount_in_local = this.amount * 102;
        }
    }
});