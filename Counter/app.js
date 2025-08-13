const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (button) => {
        const styles = button.currentTarget.classList
        if (styles.contains('random')) {
            getRandomNumber()
        } else if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('reset')) {
            count = 0
        }
        value.textContent = count
        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        }  else if (count == 69 || count == -69){
            value.style.color = 'gold'
        } else {
            value.style.color = 'black'
        }
    })
})

getRandomNumber = () => {
    if (count > 0) {
        count = Math.floor(Math.random() * 100) * -1;
    } else if (count < 0) {
        count = Math.floor(Math.random() * 100);
    } else {
        count = Math.floor(Math.random() * 100);
    }
}


