alert("scripts/demo.js type= text/javascript");

{function alertFun() 
    alert('HEllo Megha');}
    {function alertFun() 
        alert('HEllo Megha');}
        {function alertFunEx() 
            alert('HEllo Megha');}

alert("bodyBGChangeToYellow")     
alert("Text background Color To Body")
alert("Yellow Div Background")
alert("Text Background Color To Div")

function confirmFun() 
    if (confirm("Are you sure..??")) {
        alert("YESSSSS");
    } else {
        alert("NOOOOO");
    }
    function bodyBGChaangeToRed() {
        document.body.style.backgroundColor="Red";
    }
    function ColorPickerBodyBG() {
        document.body.style.backgroundColor=document.getElementById("CP").value;
    }

    function YellowBGDiv() {
        document.getElementById("D1").style.backgroundColor="Red";
    }

    function divBGChangeToText() {
        document.getElementById("D1").style.backgroundColor=document.getElementsById("CPI").value;
    }
    alert("RedBGDiv")