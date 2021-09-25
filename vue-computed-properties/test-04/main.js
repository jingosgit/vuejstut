let vm  = new Vue({
    el: '#root',
    data() {
        return{
            websites:[
                { url: "https://www.yahoo.com", name:"Yahoo"},
                { url: "https://www.bing.com", name:"Bing"},
                { url: "https://www.google.com", name:"Google"}
            ]
        }
    }
});