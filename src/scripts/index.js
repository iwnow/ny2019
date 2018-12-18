import '../styles/index.scss';
import * as $ from 'jquery';
import {api} from './api';

/* start's hiding */
$('.our-program').hide();
$('.our-program-wrapper').hide();
$('.our-program-tape').hide();
$('.you-and-world').hide();
$('.we-are-here').hide();
$('.we-are-here-wrapper').hide();
$('.column__phone').hide();
$('.column__label').hide();
$('.mails-in-2018').hide();
$('.thank-you').hide();
$('.scene4-alter-text').hide();

const audio = document.getElementById("iqos-audio");
audio.volume = 0.3;

// const video = document.getElementById("iqos-video");
// video.pause();

const urlParams = new URLSearchParams(window.location.search);
const spiceId = urlParams.get('spiceId');

let user = null;

(() => {
    api.getUser(spiceId).then( result => {
        setTimeout(() => { start(result); }, 400);
    }).catch(console.error);


    function start(data) {
        user = JSON.parse(data);
        const date = new Date() - new Date(user.first_iqos_order_date);
        const daysGone = Math.floor(date / 1000 / 60 / 60 / 24);

        if (user && user.accessories && user.accessories > 0) {
            $('.scene4-text').hide();
            $('.scene4-alter-text').show();
        }

        if (user && user.accessories && user.accessories > 0) {
            $('.scene4-text').hide();
            $('.scene4-alter-text').show();
        }
        if (user && user.loyalty_level) {
            if (user.loyalty_level.toLowerCase() === 'silver') {
                $('.our-program-wrapper-gold').remove();
                $('.our-program-wrapper-platinum').remove();
            }
            if (user.loyalty_level.toLowerCase() === 'gold') {
                $('.our-program-wrapper-platinum').remove();
                $('.our-program-wrapper-silver').remove();
            }
            if (user.loyalty_level.toLowerCase() === 'platinum') {
                $('.our-program-wrapper-gold').remove();
                $('.our-program-wrapper-silver').remove();
            }
        }
        if (user && user.vouchers && user.vouchers > 0) {
            $('.you-and-world-alter-text').hide();
            $('#vouchers').text(user.vouchers);
        } else {
            $('.you-and-world-main-text').hide();
        }

        if (user && user.call_center && user.call_center > 0) {
            $('.we-are-here-alter-text').hide();
            $('#call_center').text(user.call_center);
        } else {
            $('.we-are-here-text').hide();
        }

        if (user && user.emails && user.emails > 0) {
            $('#emails').text(user.emails);
        } else {
            $('#emails').text(0);
        }

        $('#userNameLast').text((user && user.first_name || '').toUpperCase());
        $('#days-gone').text(daysGone);
        $('#userName').text((user && user.first_name || '').toUpperCase());
        $(document.body).addClass('loaded');
        scene2to3();
        setTimeout(() => {
            $('.label-wrapper-1').animate({
                opacity: 0,
              }, 500, function() {
                $('.label-wrapper-1').css('display', 'none');
                $(document.body).addClass('second');
                setTimeout(() => {
                    $(document.body).addClass('third');
                }, 6000);
              });
        }, 2000);

        setTimeout(scene3to4, 13000);
        setTimeout(scene4to5, 35000);
        setTimeout(scene5to6, 46000);
        setTimeout(scene6to7, 63000);
        setTimeout(scene7to8, 72000);
    }

    function scene2to3() {
        const bg = $('.bg');
        const width = bg.width();
        let lineWidth = width / 6;
        lineWidth = lineWidth < 200 ? 200 : lineWidth;
        
        $('.bg3').width(width).height(bg.height());
        
        const edgeLeft = (width / 2) - (lineWidth/2);
        const edgeRight = (width / 2) + (lineWidth/2);
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

    function scene3to4 () {
        const speed = 1000;
        const generalDelay = 4000;
        $(document.body).addClass('four');
        $('.sc3.label-wrapper-3').slideUp(1000);
        $('.our-program').fadeIn(speed);
        setTimeout(()=> {$('.our-program-tape').fadeIn(speed);}, generalDelay + 1000);
        setTimeout(()=> {$('.our-program_one').slideDown(speed);}, generalDelay + 2000);
        setTimeout(()=> {$('.our-program_one').slideUp(speed);}, generalDelay + 5000);

        setTimeout(()=> {$('.our-program_two').slideDown(speed);}, generalDelay + 6000);
        setTimeout(()=> {$('.our-program_two').slideUp(speed);}, generalDelay + 12000);

        setTimeout(()=> {$('.our-program_three').slideDown(speed);}, generalDelay + 13000);
    }

    function scene4to5() {

        const bg = $('.bg');
        const width = bg.width();
        let lineWidth = width / 6;
        lineWidth = lineWidth < 200 ? 200 : lineWidth;

        $('.bg3').width(width).height(bg.height());

        const edgeLeft = (width / 2) - (lineWidth/2);
        const edgeRight = (width / 2) + (lineWidth/2);
        let lines = [];
        let j = 1;
        for (let i = 7; i > 0; i--) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg5 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeLeft - j*lineWidth + j}px`)
            );
            j++;
        }
        lines.push(
            $(`<div class="bg5 line8 even"></div>`)
                .width(lineWidth)
        );
        j = 0;
        for (let i = 9; i < 16; i++) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg5 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeRight + j*lineWidth - j - 1}px`)
            );
            j++;
        }
        $('.first-screen').append(lines);


        const speedYouAndWorld = 1000;
        const generalDelayYouAndWorld = 0;

        setTimeout(() => {$(document.body).addClass('five');}, generalDelayYouAndWorld + 1400);
        setTimeout(() => {$('.you-and-world').animate({
            opacity: 1,
        }, speedYouAndWorld);}, generalDelayYouAndWorld + 1800);

        $('.you-and-world').fadeIn();
        $('.decoration-img').hide();
        $('.lollipop, .elka-top, .ball, .cherry, .spring').fadeIn(speedYouAndWorld);
        setTimeout(()=> {$('.photo-cofee, .photo-people').fadeIn(speedYouAndWorld);}, generalDelayYouAndWorld + 2200);
        setTimeout(()=> {$('.tape-yellow-right, .ribbon, .tape-yellow-left, .tapes').fadeIn(speedYouAndWorld);}, generalDelayYouAndWorld + 4000);
        setTimeout(()=> {$('.phone, .box').fadeIn(speedYouAndWorld);}, generalDelayYouAndWorld + 5000);
        setTimeout(
            ()=> {
                $('.iqos-device').fadeIn(speedYouAndWorld);
                $('.phone').addClass('animate-phone');
            }, generalDelayYouAndWorld + 4000
        );

        setTimeout(()=> {$('.phone').addClass('animate-phone-two');}, generalDelayYouAndWorld + 6000);
    }

    function scene5to6() {
        const bg = $('.bg');
        const width = bg.width();
        let lineWidth = width / 6;
        lineWidth = lineWidth < 200 ? 200 : lineWidth;

        $('.bg3').width(width).height(bg.height());

        const edgeLeft = (width / 2) - (lineWidth/2);
        const edgeRight = (width / 2) + (lineWidth/2);
        let lines = [];
        let j = 1;
        for (let i = 7; i > 0; i--) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg6 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeLeft - j*lineWidth + j}px`)
            );
            j++;
        }
        lines.push(
            $(`<div class="bg6 line8 even"></div>`)
                .width(lineWidth)
        );
        j = 0;
        for (let i = 9; i < 16; i++) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg6 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeRight + j*lineWidth - j - 1}px`)
            );
            j++;
        }
        $('.first-screen').append(lines);

        const speedWeAreHere = 1000;
        const generalDelayWeAreHere = 0;

        $('.we-are-here').show();
        setTimeout(() => {$(document.body).addClass('six');}, generalDelayWeAreHere + 1400);
        setTimeout(() => {$('.we-are-here').animate({
            opacity: 1,
        }, speedWeAreHere);}, generalDelayWeAreHere + 3000);
        setTimeout(() => {$('.we-are-here-wrapper').slideDown(speedWeAreHere);}, generalDelayWeAreHere + 4600);
        setTimeout(() => {$('.photo-bg-1').fadeOut(speedWeAreHere);}, generalDelayWeAreHere + 6000);
        setTimeout(() => {$('.photo-bg-2').fadeOut(speedWeAreHere);}, generalDelayWeAreHere + 9000);
        setTimeout(() => {$('.photo-bg-3').fadeOut(speedWeAreHere);}, generalDelayWeAreHere + 11000);
        setTimeout(() => {$('.we-are-here-wrapper').animate({ opacity: 0 });}, generalDelayWeAreHere + 15000);
    }
    function scene6to7() {
        const speedMails2018 = 1000;
        const generalDelayMails2018 = 0;

        $('.mails-in-2018').fadeIn(speedMails2018);
        $('.sc3').css({ "opacity": 0});
        $('.sc3').css({ "z-index": 102});
        setTimeout(() => {$(document.body).addClass('seven');}, generalDelayMails2018 + 500);
        setTimeout(() => {$('.sc3').animate({ opacity: 1 });}, generalDelayMails2018 + 1000);
        setTimeout(() => {$('.column__phone').slideDown(speedMails2018);}, generalDelayMails2018 + 1000);
        setTimeout(() => {$('.column__label').slideDown(speedMails2018);}, generalDelayMails2018 + 2000);
        // setTimeout(() => {$('.decoration-icons').css({ "opacity": 0});}, generalDelayMails2018 + 4000);
        setTimeout(() => {$('.column__phone').addClass('next-position');}, generalDelayMails2018 + 4000);
    }

    function scene7to8() {
        const bg = $('.bg');
        const width = bg.width();
        let lineWidth = width / 6;
        lineWidth = lineWidth < 200 ? 200 : lineWidth;

        $('.bg3').width(width).height(bg.height());

        const edgeLeft = (width / 2) - (lineWidth/2);
        const edgeRight = (width / 2) + (lineWidth/2);
        let lines = [];
        let j = 1;
        for (let i = 7; i > 0; i--) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg7 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeLeft - j*lineWidth + j}px`)
            );
            j++;
        }
        lines.push(
            $(`<div class="bg7 line8 even"></div>`)
                .width(lineWidth)
        );
        j = 0;
        for (let i = 9; i < 16; i++) {
            let even = i % 2 === 0;
            lines.push(
                $(`<div class="bg7 line${i} ${even ? 'even' : 'odd'}"></div>`)
                    .width(lineWidth)
                    .css('left', `${edgeRight + j*lineWidth - j - 1}px`)
            );
            j++;
        }
        $('.first-screen').append(lines);

        const speedThankYou = 1000;
        const generalDelayThankYou = 0;

        setTimeout(()=> {$(document.body).addClass('eight');}, generalDelayThankYou + 1000);
        // setTimeout(()=> {video.play();}, generalDelayThankYou + 1200);
        setTimeout(()=> {$('.thank-you').fadeIn(speedThankYou);}, generalDelayThankYou + 2000);
    }
})();
