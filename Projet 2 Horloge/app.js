const secondeDiv = document.querySelector('.seconde')
const minDiv = document.querySelector('.min')
const heureDiv = document.querySelector('.heure')


function miseEnPlace(){
    
    const now = new Date();
//    console.log(now);
    
    // l'aiguille des secondes
    const seconds = now.getSeconds();
    // console.log(seconds);
    // la position en degré des secondes actuelles
    const secDeg = ((seconds/60)*360) + 90;
    secondeDiv.style.transform = `rotate(${secDeg}deg)`;
    
    // minutes
    const mins = now.getMinutes();
    // 6 deg = 1min
    const minDeg = ((mins/60)*360) + ((seconds/60)*6) + 90;
    minDiv.style.transform = `rotate(${minDeg}deg)`;
    

    //heure
    const hour = now.getHours();
    // 30 = 1h en deg
    const hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90;
    heureDiv.style.transform = `rotate(${hourDeg}deg)`;

    
}
setInterval(miseEnPlace, 1000);
