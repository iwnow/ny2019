import '../styles/index.scss';

/* Our program */
$('.our-program-wrapper').hide();
const speed = 1000;
const generalDelay = 4000;
setTimeout(()=> {$('.our-program_one').slideDown(speed);}, generalDelay + 1000);
setTimeout(()=> {$('.our-program_one').slideUp(speed);}, generalDelay + 4000);

setTimeout(()=> {$('.our-program_two').slideDown(speed);}, generalDelay + 5000);
setTimeout(()=> {$('.our-program_two').slideUp(speed);}, generalDelay + 11000);

setTimeout(()=> {$('.our-program_three').slideDown(speed);}, generalDelay + 12000);


/* You and world */
const speedYouAndWorld = 1000;
const generalDelayYouAndWorld = 0;

$('.decoration-img').hide();
$('.lollipop, .elka-top, .ball, .cherry, .spring').fadeIn(speedYouAndWorld);
setTimeout(()=> {$('.photo-cofee, .photo-people').fadeIn(speedYouAndWorld);}, generalDelayYouAndWorld + 1000);
setTimeout(()=> {$('.tape-yellow-right, .ribbon, .tape-yellow-left, .tapes').fadeIn(speedYouAndWorld);}, generalDelayYouAndWorld + 2000);
setTimeout(()=> {$('.phone, .box').fadeIn(speedYouAndWorld);}, generalDelayYouAndWorld + 3000);
setTimeout(
    ()=> {
        $('.iqos').fadeIn(speedYouAndWorld);
        $('.phone').addClass('animate-phone');
    }, generalDelayYouAndWorld + 4000
);

setTimeout(()=> {$('.phone').addClass('animate-phone-two');}, generalDelayYouAndWorld + 6000);