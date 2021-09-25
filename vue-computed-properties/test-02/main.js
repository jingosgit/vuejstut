let vm  = new Vue({
    el: '#root',
    data: {
        name : 'JOHN'
    },
    computed: {
        username: {
            get: function(){
                return '@' + this.name;
            },
            set: function(value){
                this.name = value.toLocaleLowerCase();
            }
        }
    }
});