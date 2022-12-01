var inputValue;
var arr;
var tridec;
var resStr;

function getStr(){
    inputValue = document.getElementById('str').value;
    arr = inputValue.split(separator="");
    console.log(arr);
}

function convert(){
    tridec = new Array(arr.length);
    for(i=0; i<arr.length; i++){
        tridec[i] = arr[i].charCodeAt(0).toString(13);
    }
    console.log(tridec);
    let result = document.getElementById("resTridec");
    result.innerHTML = tridec;
    resStr = tridec.join();
    console.log(resStr);

    var exChanger = resStr.replace(
        /,|0|1|2|3|4|5|6|7|8|9|a|b|c/g, function(vl){
            switch(vl){
                case "," : return " ";
                case "0" : return "🌙";
                case "1" : return "🌟";
                case "2" : return "🐾";
                case "3" : return "💎";
                case "4" : return "🀄";
                case "5" : return "🔮";
                case "6" : return "🎲";
                case "7" : return "🎰";
                case "8" : return "🎱";
                case "9" : return "🎪";
                case "a" : return "👑";
                case "b" : return "👼";
                case "c" : return "😈";
            }
        }
    )
    console.log(exChanger);
    let fiRe = document.getElementById("finalResult");
    fiRe.innerHTML = exChanger;
}
