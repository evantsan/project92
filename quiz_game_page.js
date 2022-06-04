function send()
{
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'><br>";
    check_button = "<br><br><button onclick='check()'><span class='material-symbols-outlined'> done </span></button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
var p1name = localStorage.getItem("player1");
var p2name = localStorage.getItem("player2");
var p1score = 0;
var p2score = 0;
document.getElementById("p1name").innerHTML = p1name + " : ";
document.getElementById("p1score").innerHTML = p1score;
document.getElementById("p2name").innerHTML = p2name + " : ";
document.getElementById("p2score").innerHTML = p2score;
document.getElementById("qt").innerHTML = "Question Turn - " + p1name;
document.getElementById("at").innerHTML = "Answer Turn - " + p2name;
question_turn = "p1";
answer_turn = "p2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_number)
    {
        if(answer_turn == "p1")
        {
            p1score = p1score + 1;
            document.getElementById('p1score').innerHTML = p1score;
        }
        else if(answer_turn == "p2")
        {
            p2score = p2score + 1;
            document.getElementById('p2score').innerHTML = p2score;
        }
    }
    if(question_turn == "p1")
    {
        question_turn = "p2";
        document.getElementById("qt").innerHTML = "Question Turn - " + p2name;
    }
    else if(question_turn = "p2")
    {
        question_turn = "p1";
        document.getElementById("qt").innerHTML = "Question Turn - " +p1name;
    }
    if(answer_turn == "p1")
    {
        answer_turn = "p2";
        document.getElementById("at").innerHTML = "Answer Turn - " + p2name;
    }
    else if(answer_turn == "p2")
    {
        answer_turn = "p1";
        document.getElementById("at").innerHTML = "Answer Turn - " + p1name;
    }
    document.getElementById("output").innerHTML = "";
}