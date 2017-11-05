require('./stylesheets/style1.less');
var var1 = require('./scripts/script1.js');
var formArr = [];
$(function () {
    window.onscroll = function () {
        var viewPort = document.getElementById('contentContainer').getBoundingClientRect();
        //console.log(viewPort);
        if (viewPort.top < 160) {
            $('.titleContainer').addClass('titleContainerSolid');
            $('.right-menu-item').addClass('right-menu-item-solid');
        } else {
            $('.titleContainer').removeClass('titleContainerSolid');
            $('.right-menu-item').removeClass('right-menu-item-solid');
        }
    }
    //form submit stuff
    var form1Button = document.getElementById('submitButton');
    form1Button.addEventListener('click', function (e) {
        console.log(e);
        var formElements = document.getElementsByClassName('form1Form');

        for (var i = 0; i < formElements.length; i++) {
            console.log(formElements[i]);
        };
    });
});