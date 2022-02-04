const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            return this.cart.push(id)
        },
        removeCart(id) {
            const index = this.cart.indexOf(id)
            if (index >= 0) this.cart.splice(index, 1)
        }
    }
})
