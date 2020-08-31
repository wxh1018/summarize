export default {
    created() {
        this.hello('hello')
    },
    methods: {
        hello(v) {
            console.log(v);
        }
    },
}