import Vue from 'vue'

Vue.config.errorHandler = e => {
    console.log(e.message)
    console.log(123123)
    // Vue.prototype.$toast.error(e.message)
}
