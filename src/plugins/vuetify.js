import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import VuetifyToast from 'vuetify-toast-snackbar'
import { VSnackbar, VBtn, VIcon } from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VBtn,
        VIcon
    }
})

Vue.use(VuetifyToast, {
    x: 'right', // default
    y: 'bottom', // default
    color: 'info', // default
    icon: 'mdi-information',
    iconColor: '', // default
    classes: [
        'body-2'
    ],
    timeout: 3000, // default
    dismissable: true, // default
    multiLine: false, // default
    vertical: false, // default
    queueable: false, // default
    showClose: false, // default
    closeText: '', // default
    closeIcon: 'close', // default
    closeColor: '', // default
    slot: [], // default
    shorts: {
        custom: {
            color: 'purple'
        }
    },
    property: '$toast' // default
})

export default new Vuetify({
})
