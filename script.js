function changeDice(){
  var player1= Math.floor(Math.random() * 6+1);
  var player2= Math.floor(Math.random() * 6+1);
 setTimeout(() => {
  document.querySelector(".img1").classList.add("imgRotate1");
  document.querySelector(".img2").classList.add("imgRotate2");
  document.querySelector(".img1").setAttribute("src","images/dice"+player1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+player2+".png");
 }, 1000);
  

    

    setTimeout(() => {
      if(player1>player2){
        document.querySelector("h1").textContent="🚩Player 1 Wins!"
      
      }else if(player1<player2){
        document.querySelector("h1").textContent="Player 2 Wins!🚩"
        
      }else {
        document.querySelector("h1").textContent="Draw!"
        
      }
    }, 2200);
    setTimeout(() => {
      document.querySelector(".img1").classList.remove("imgRotate1");
  document.querySelector(".img2").classList.remove("imgRotate2");
    }, 100);
 
}
