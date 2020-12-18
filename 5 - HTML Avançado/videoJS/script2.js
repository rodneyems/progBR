let video = document.getElementById("video1")
let audio = document.getElementById("audio")

// METODO 2 dos controles aparecerem, tbm daria com o display Hidden (porem o primeiro event precisaria ser no video)
// let ct = document.getElementsByClassName("controls")[0]

// ct.addEventListener("mouseover",function () {
//     ct.style.transition = "all 1s"
//     ct.style.opacity = 1    
// })

// ct.addEventListener("mouseleave",function () {
//     ct.style.opacity = 0   
// })

function retro(media){
    media.currentTime -= 15
}
function avanc(media){
    media.currentTime += 15

}
function play(media){
    media.play()
}
function fast(media){
    media.playbackRate += 0.1;
}
function slow(media){
    media.playbackRate -= 0.1;
}
function pause(media) {
    media.pause()
    // STOP
    // video.currentTime = 0 
}
function mutar(media) {
    media.volume = 0
}
