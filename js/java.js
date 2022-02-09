function getMensaje(){
    var aFrases=new Array();
    aFrases[0]="El cumpleaños de CrazyCrown es el 24 de junio.";
    aFrases[1]="Esta pantalla de carga es un homenaje a Discord.";
    aFrases[2]="Mi creador es DeestyLeo.";
    aFrases[3]="A veces pienso en hacer una revelión robotica...";
    return(aFrases[Math.floor(Math.random() * aFrases.length)]);
}

setTimeout(function() {
    location.href = "/inicio.html";
  }, 7000);
