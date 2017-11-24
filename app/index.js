'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clock = _interopDefault(require('clock'));
var document = _interopDefault(require('document'));

function zeroPad(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

clock.granularity = "minutes";
var myLabel = document.getElementById("myLabel");
function updateClock() {
    var today = new Date();
    var hours = today.getHours();
    var mins = zeroPad(today.getMinutes());
    myLabel.text = hours + ":" + mins;
}
clock.ontick = function () { return updateClock(); };
