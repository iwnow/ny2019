import '../styles/index.scss';
import * as $ from 'jquery';
import {api} from './api';

(() => {
    api.getUser().then(start).catch(console.error);

    function start({ userName }) {
        $('#userName').text((userName || '').toUpperCase());
        setTimeout(() => {
            $(document.body).addClass('loaded');
        }, 500);
    }
})();
