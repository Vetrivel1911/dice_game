function gameStart() {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;

  var randomImg1 = "assets/dice" + random1 + ".png";
  var randomImg2 = "assets/dice" + random2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImg1);
  document.querySelector(".img2").setAttribute("src", randomImg2);

  var heading = document.querySelector("h1");
  if (random1 == random2) {
    heading.textContent = "Draw🏅";
  } else if (random1 > random2) {
    heading.textContent = "Player 1 wins🥇";
  } else {
    heading.textContent = "Player 2 wins🥈";
  }
}

document.querySelector("button").setAttribute("onclick","gameStart()");        
