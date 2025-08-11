const colors = ["red","green","blue","f15025","yellow","white","black","red","pink","Chartreuse","red","red","purple "]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click" , () => { 
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors [randomNumber]
    color.textContent = colors [randomNumber]
})


getRandomNumber = () => {
    return Math.floor(Math.random() *colors.length)
}

