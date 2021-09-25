let vm  = new Vue({
    el: '#root',
    data : {
        message :  'The Watcher',
    },

    watch: {
        message () {
            console.log('The value of the message has changed!');
        }
    }
});