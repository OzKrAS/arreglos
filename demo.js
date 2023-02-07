var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!",
        n1: "",
        n2: "",
        frutas: [
            { name: "manzana", price: 2500 },
            { name: "Pera", price: 1800 },
        ],
    },

    methods: {
        funcionPrueba() {
            this.message = `la rta es ${this.n1 + this.n2}`;
        },
    },
});