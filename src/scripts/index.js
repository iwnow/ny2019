import '../styles/index.scss';
import * as $ from 'jquery';
import {api} from './api';

(() => {
    api.getUser().then(start).catch(console.error);

    function start({ userName }) {
        $('#userName').text((userName || '').toUpperCase());
        $(document.body).addClass('loaded');

        setTimeout(() => {
            $('.label-wrapper-1').animate({
                opacity: 0,
              }, 500, function() {
                $('.label-wrapper-1').css('display', 'none');
                $(document.body).addClass('second');
              });
        }, 2000);
    }
})();
