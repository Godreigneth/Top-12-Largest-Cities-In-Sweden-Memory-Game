$(document).ready(function () {

    //Created an array with the 12 sets of cards
    let img = [
        'assets/images/1_Stockholm.jpg',
        'assets/images/2_Gothenburg.jpg',
        'assets/images/3_Malmo.jpg',
        'assets/images/4_Uppsala.jpg',
        'assets/images/5_Upplands_Vasby.jpg',
        'assets/images/6_Vasteras.jpg',
        'assets/images/7_Orebro.jpg',
        'assets/images/8_Linkoping.jpg',
        'assets/images/9_Helsingborg.jpg',
        'assets/images/10_Jonkoping.jpg',
        'assets/images/11_Norrkoping.jpg',
        'assets/images/12_Lund.jpg'
    ]


    //Decleared the default move
    let total = 0,
        move = 0,
        count = 1,
        first_card = null,
        secn_card = null;


    //Decleared the default time setting
    let stop_fa = false,
        stop_fc = true,
        stop_time = true;


    //Decleared the card, board, start and play-again.
    let $card = $('.card'),
        $board = $('.board'),
        $start = $('.start'),
        $again = $('.again');

});