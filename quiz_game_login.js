function adduser()
{
    var p1name = document.getElementById("pl1").value
    var p2name = document.getElementById("pl2").value
    localStorage.setItem("player1",p1name)
    localStorage.setItem("player2",p2name)
    window.location = "quiz_game.html"
}