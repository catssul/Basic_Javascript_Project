// 초기 카운트 설정
let count = 0;

// 값과 버튼을 지정
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        // 카운트
        if(styles.contains('decrease')){
        count--;
        }
        else if (styles.contains('increase')){
        count++;
        }
        else {
        count = 0;
        }
        // 카운트 글자 색
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        if(count == 0) {
            value.style.color = '#102A42';
        }
        value.textContent = count;
    });
});
