


function flyToSun() {
    var guessNumber = document.getElementById('guessNumber').value;
    var paperPlane = document.createElement('div');
    paperPlane.style.position = 'absolute';
    paperPlane.style.width = '50px';
    paperPlane.style.height = '50px';
    paperPlane.style.backgroundImage = "url('paper_plane.png')";
    paperPlane.style.backgroundSize = 'cover';
    document.body.appendChild(paperPlane);
    // Aquí puedes agregar la animación para que el avión de papel vuele hacia el sol.
}