let previous = "";
let termination = false;



function changing_state()
{
    if(previous=="O")
    {
        next = "X";
        rang = "blue";
    }
        
    else
    {
        next = "O";
        rang = "red";
    }
    return next;
}










function changing_color()
{
    if(previous=="O")
    {
        next = "X";
        rang = "blue";
    }
        
    else
    {
        next = "O";
        rang = "red";
    }
    return rang;
}




















///////////////////////////////  ROW 1 ///////////////////////////////////7


function row11()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row11").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row11").style.color=rang;
            document.getElementById("row11").setAttribute("value",next);
            previous = document.getElementById("row11").getAttribute("value");
        }    
        checking_winner();
    }
}










function row12()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row12").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row12").style.color=rang;
            document.getElementById("row12").setAttribute("value",next);
            previous = document.getElementById("row12").getAttribute("value");
        }
        checking_winner();
    }
}










function row13()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row13").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row13").style.color=rang;
            document.getElementById("row13").setAttribute("value",next);
            previous = document.getElementById("row13").getAttribute("value");
        }
        checking_winner();
    }
}

























///////////////////////////////  ROW 2 ///////////////////////////////////


function row21()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row21").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row21").style.color=rang;
            document.getElementById("row21").setAttribute("value",next);
            previous = document.getElementById("row21").getAttribute("value");
        }    
        checking_winner();
    }
}










function row22()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row22").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row22").style.color=rang;
            document.getElementById("row22").setAttribute("value",next);
            previous = document.getElementById("row22").getAttribute("value");
        }
        checking_winner();
    }
}










function row23()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row23").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row23").style.color=rang;
            document.getElementById("row23").setAttribute("value",next);
            previous = document.getElementById("row23").getAttribute("value");
        }
        checking_winner();
    }
}

























///////////////////////////////  ROW 3 ///////////////////////////////////


function row31()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row31").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row31").style.color=rang;
            document.getElementById("row31").setAttribute("value",next);
            previous = document.getElementById("row31").getAttribute("value");
        }    
        checking_winner();
    }
}










function row32()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row32").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row32").style.color=rang;
            document.getElementById("row32").setAttribute("value",next);
            previous = document.getElementById("row32").getAttribute("value");
        }
        checking_winner();
    }
}










function row33()
{
    if(termination==false)
    {
        var element;

        element = document.getElementById("row33").value;
        if(element == "")
        {
            next = changing_state();
            rang = changing_color();

            document.getElementById("row33").style.color=rang;
            document.getElementById("row33").setAttribute("value",next);
            previous = document.getElementById("row33").getAttribute("value");
        }
        checking_winner();
    }
}































////////////////////////   REFRESH   //////////////////////////////////////

function refresh()
{
    document.getElementById("row11").setAttribute("value","");
    document.getElementById("row12").setAttribute("value","");
    document.getElementById("row13").setAttribute("value","");

    document.getElementById("row21").setAttribute("value","");
    document.getElementById("row22").setAttribute("value","");
    document.getElementById("row23").setAttribute("value","");

    document.getElementById("row31").setAttribute("value","");
    document.getElementById("row32").setAttribute("value","");
    document.getElementById("row33").setAttribute("value","");

    previous = "";
    termination = false;
    document.getElementById("game_over").innerHTML="";
}






























////////////////////// DECISIDING WINNER  ////////////////////////////


function checking_winner()
{
 
    var row11 = document.getElementById("row11").getAttribute("value");
    var row12 = document.getElementById("row12").getAttribute("value");
    var row13 = document.getElementById("row13").getAttribute("value");
    var row21 = document.getElementById("row21").getAttribute("value");
    var row22 = document.getElementById("row22").getAttribute("value");
    var row23 = document.getElementById("row23").getAttribute("value");
    var row31 = document.getElementById("row31").getAttribute("value");
    var row32 = document.getElementById("row32").getAttribute("value");
    var row33 = document.getElementById("row33").getAttribute("value");

    
    

    if(row11 != "" && row11 == row12 && row11 == row13)
    {
        document.getElementById("row11").style.color="green";
        document.getElementById("row12").style.color="green";
        document.getElementById("row13").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }


    if(row21 != "" && row21 == row22 && row21 == row23)
    {
        document.getElementById("row21").style.color="green";
        document.getElementById("row22").style.color="green";
        document.getElementById("row23").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }


    if(row31 != "" && row31 == row32 && row31 == row33)
    {
        document.getElementById("row31").style.color="green";
        document.getElementById("row32").style.color="green";
        document.getElementById("row33").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }










    if(row11 != "" && row11 == row21 && row11 == row31)
    {
        document.getElementById("row11").style.color="green";
        document.getElementById("row21").style.color="green";
        document.getElementById("row31").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }


    if(row12 != "" && row12 == row22 && row12 == row32)
    {
        document.getElementById("row12").style.color="green";
        document.getElementById("row22").style.color="green";
        document.getElementById("row32").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }


    if(row13 != "" && row13 == row23 && row13 == row33)
    {
        document.getElementById("row13").style.color="green";
        document.getElementById("row23").style.color="green";
        document.getElementById("row33").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }










    if(row11 != "" && row11 == row22 && row11 == row33)
    {
        document.getElementById("row11").style.color="green";
        document.getElementById("row22").style.color="green";
        document.getElementById("row33").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }


    if(row13 != "" && row13 == row22 && row13 == row31)
    {
        document.getElementById("row13").style.color="green";
        document.getElementById("row22").style.color="green";
        document.getElementById("row31").style.color="green";
        termination = true;

        document.getElementById("game_over").innerHTML="Game Over";
    }










    if(row11 != "" && row12 != "" && row13 != "" && row21 != "" && row22 != "" && row23 != "" && row31 != "" && row32 != "" && row33 != "" && termination == false)
    {
        document.getElementById("game_over").innerHTML="It's Draw";
        termination = true; 
    }

}
