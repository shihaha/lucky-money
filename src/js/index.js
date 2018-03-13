import '../common/common.css';
import '../css/index.css';
import Vue from 'vue';
import dialogBox from '../component/dialog-box.vue';
let vm = new Vue({
    el: '#app',
    data: {
        showDialog:''
    },
    components: {
        dialogBox
    },
    methods: {
        showTitles() {
            this.showDialog = 'titles';
        }
    }
})