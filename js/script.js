$(function () {

    'use strict';

    $(".login").height($(window).height()-50);
 

    $(window).on("resize", function () {
        $(".login").height($(window).height()-50);
     
    });




})