import '../styles/index.scss';
import * as $ from 'jquery';
import {api} from './api';

(() => {
    api.getUser().then(start).catch(console.error);

    function start({ userName }) {
        scene2to3();
        $(document.body).addClass('third');
        // $('#userName').text((userName || '').toUpperCase());
        // $(document.body).addClass('loaded');
        // scene2to3();
        // setTimeout(() => {
        //     $('.label-wrapper-1').animate({
        //         opacity: 0,
        //       }, 500, function() {
        //         $('.label-wrapper-1').css('display', 'none');
        //         $(document.body).addClass('second');
        //         setTimeout(() => {
        //             $(document.body).addClass('third');
        //         }, 6000);
        //       });
        // }, 2000);
    }

    function scene2to3() {
        const bg = $('.bg');
        const width = bg.width();
        let lineWidth = width / 6;
        lineWidth = lineWidth < 200 ? 200 : lineWidth;
        
        $('.bg3').width(width).height(bg.height());
        
        const edgeLeft = (width / 2) - (lineWidth/2);
        const edgeRight = (width / 2) + (lineWidth/2);
        // $('.bg4').width(lineWidth);
        let lines = [];
        let j = 1;
        for (let i = 7; i > 0; i--) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg4 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeLeft - j*lineWidth + j}px`)
            );
            j++;
        }
        lines.push(
            $(`<div class="bg4 line8 even"></div>`)
                .width(lineWidth)
        );
        j = 0;
        for (let i = 9; i < 16; i++) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg4 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeRight + j*lineWidth - j - 1}px`)
            );
            j++;
        }
        $('.first-screen').append(lines);
    }
})();
