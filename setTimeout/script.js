const changeText = function () {
    document.querySelector('h1').innerHTML = "Danng!! text is changed";
}

const changeme = setTimeout(changeText, 2000);

document.querySelector('.stop').addEventListener('click', function () {
    clearTimeout(changeme);
    console.log("STOPPED");
});
