function onNavOpen(){
    var nav = document.getElementById('mobileNav');
    nav.classList.toggle('active');
}
function onQuestionOpen(){
    var answerBox = document.getElementById('answer');
    var icon = document.getElementById('icon')
    console.log(icon.src)
    if (icon.src === 'D:/webProject/src/svg/cross.svg')
    {
        icon.src = 'src/svg/plus.svg';
    }
    icon.src = 'src/svg/cross.svg';
    answerBox.classList.toggle('active');
    icon.classList.toggle('active');
}