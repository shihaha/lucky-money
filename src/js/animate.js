import '../css/animate.css';
import $ from 'jquery';
import Vue from 'vue';
import testComponent from '../component/test.vue';

const vm = new Vue({
    el: '#app',
    data: {
        author: 'shichuanzhi',
        ggg:'world'
    },
    mounted: function() {
        this.test('es6');
    },
    components: {
        testComponent
    },
    methods: {
        test: (msg) => {
            let browser = 'chrome';
            console.log(browser + msg);
        }
    }
});

// let before = [];
// for (let i = 0; i < 5; i++) {
//     let a = i * 120;
//     for (let j = 0; j < 5; j++) {
//         let b = j * 120;
//         before.push('' + i + j);
//         let myCanvas = document.createElement('canvas'),
//             ctx = myCanvas.getContext("2d");
//         myCanvas.setAttribute('id', '' + i + j);
//         ctx.fillStyle = "#FF0000";
//         ctx.fillRect(0, 0, 300, 300);
//         myCanvas.style.width = '100px';
//         myCanvas.style.height = '100px';
//         myCanvas.style.position = 'absolute';
//         myCanvas.style.left = a + 'px';
//         myCanvas.style.top = b + 'px';
//         document.body.appendChild(myCanvas);
//     }
// }
// 洗牌
// function shuffle(before) {
//     let after = JSON.parse(JSON.stringify(before));
//     for (let i = after.length - 1; i > -1; i--) {
//         let j = Math.floor(Math.random() * (i + 1)),
//             item = after[j];
//         after[j] = after[i];
//         after[i] = item;
//     }
//     return after;
// };

// $('#action').on('click', function() {
//     let after = shuffle(before);
//     for (let i = 0; i < before.length; i++) {
//         if (before[i] == after[i]) {

//         } else {
//             let el = document.getElementById(after[i]),
//                 l = el.style.left,
//                 t = el.style.top;
//             $('#' + before[i]).animate({ left: l, top: t });
//         }
//     }
// });

// setTimeout(function() {
//     console.log('tri');
//     let after = shuffle(before);
//     for (let i = 0; i < before.length; i++) {
//         if (before[i] == after[i]) {

//         } else {
//             let el = document.getElementById(after[i]),
//                 l = el.style.left,
//                 t = el.style.top;
//             $('#' + before[i]).animate({ left: l, top: t });
//         }
//     }
// }, 3000);