const curseur = document.querySelector('.curseur');

document.addEventListener('mousemove', e => {

    curseur.style.top = e.pageY - 20 + "px";
    curseur.style.left = e.pageX - 20 + "px";
    // console.log(e.pageY, e.pageX);

})

document.addEventListener('click', () => {

    curseur.classList.add('expand');

    setTimeout(() => {
        curseur.classList.remove('expand');
    }, 500)

})



