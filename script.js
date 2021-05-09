const audio1 = new Audio('./src/audio/neko.mp3')
const audio2 = new Audio('./src/audio/dog.mp3')

var click = new Array(5);
var img = new Array(5)

for(let i = 0; i <= 5; i++){
    click[i] = 1
    img[i] = document.querySelectorAll(`#d${i} > img`)
}

function play1(){
    if(click[0] === 1){
        audio1.play()
        click[0]++
        img[0][0].style.display = 'none';
        img[0][1].style.display = 'block';
    }
    else if(click[0] === 2){
        audio1.pause()
        click[0] = 1
        img[0][0].style.display = 'block';
        img[0][1].style.display = 'none';
    }
    audio1.onended = function(){
        img[0][0].style.display = 'block';
        img[0][1].style.display = 'none';
    }
}
function play2(){
    if(click[1] === 1){
        audio2.play()
        click[1]++
        img[1][0].style.display = 'none';
        img[1][1].style.display = 'block';
    }
    else if(click[1] === 2){
        audio2.pause()
        click[1] = 1
        img[1][0].style.display = 'block';
        img[1][1].style.display = 'none';
    }
    audio2.onended = function(){
        img[1][0].style.display = 'block';
        img[1][1].style.display = 'none';
    }
}
