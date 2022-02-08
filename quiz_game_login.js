function addUser(){
    player1_name=document.getElementById("player-1 name input");
    player2_name=document.getElementById("player-2 name input");
    localStorage.setItem("player-1 name", player1_name);
    localStorage.setItem("player-2 name", player2_name);
    window.location.replace("game_page.html");
}