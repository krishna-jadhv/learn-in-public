const repeat=function () {
    console.log("hii", Date.now());
}

let Intervals;
document.querySelector('.start').addEventListener('click',function () {
     Intervals=setInterval(repeat,2000);

})

document.querySelector('.stop').addEventListener('click', function () {
    clearInterval(Intervals)
})


