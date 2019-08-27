window.addEventListener('scroll', remplir);


function remplir(){

    // ce que l'on a scrollé.
    var winScroll = document.documentElement.scrollTop;
    // console.log(winScroll);

    // hauteur totale - hauteur de la fenetre du client(visible)
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(height);
    
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    

    document.getElementById('myBar').style.width = scrolled + '%';

    
}
