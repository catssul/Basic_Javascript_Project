int = 0;

document.getElementById("rollButton").onclick = function () {
    let x = Math.floor(Math.random() * 20) + 1;
    document.getElementById("label").innerHTML = x;
    document.getElementById("count").onclick = function () {
        int++;
        console.log(int);
        document.getElementById("submit").onclick = function () {
            if (int == x) {
                alert("WIN!");
            }
            else {
                alert("LOSE!");
            }
            int = 0;
        }
    }
}