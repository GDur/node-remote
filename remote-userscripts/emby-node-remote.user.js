// ==UserScript==
// @name         Emby Node-Remote
// @namespace    https://github.com/GDur/node-remote
// @version      1.0
// @description  will add remote control support when used with node-remote hotkeys (volume up, volume down)
// @author       GDur
// @match        http://localhost:8096/web/*
// @grant        none
// @updateURL    https://dl.dropboxusercontent.com/u/8938703/workspace/nodejs/node-remote/remote-userscripts/emby-node-remote.user.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('\
.episode-name \
{\
display: inline;\
padding: 0px 18px;\
position: fixed;\
text-align: left;\
font-size: 18px;\
}\
')

var plus = 187
var minus = 189
var up = 38
var down = 40

function doc_keyUp(e) {

    var video = document.getElementById("itemVideo");
    var vol = video.volume;


    if (e.ctrlKey && e.keyCode == 40) {

    }
    if (e.ctrlKey && e.keyCode == up) {
        vol += 0.1;
    }
    if (e.ctrlKey && e.keyCode == down) {
        vol -= .1;
    }

    if (vol < 0) {
        vol = 0
    }
    if (vol > 1) {
        vol = 1
    }

    video.volume = vol;

    $(".videoVolumeSlider ").attr("value", vol * 100)

    console.log("e.keyCode", e.ctrlKey, e.keyCode, video.volume);
    $(".hiddenOnIdle").removeClass("inactive")



    setTimeout(function(){
        $(".hiddenOnIdle").addClass("inactive")
    }, 3000)

}
// register the handler
document.addEventListener('keyup', doc_keyUp, false);



setInterval(function(){
    if($("title").html().indexOf("Emby") === -1){
        $("title").html("Emby - " + $("title").html())
    }
}, 500)

Logger = {
    "log" : function(str){
        if(str === "event.trigger playbackstop"){
            //location.reload();
        }
        if(str === "event.trigger positionchange"){
        }
        if(str === "event.trigger beforeplaybackstart"){
            var container = '<div class="episode-name">\
' + $(".videoNowPlayingName").html()+'\
</divn>'
console.log($(".videoTopControlsLogo").append(container))
        }


        //console.log("tamermonkey highjacked:", str);
    }
}
