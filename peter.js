
// // =========================
// // changing the proffesion

let proffesions = ["Web Developer", "System Engineer", "Software Engineer"]
let currentIndex = 0;

function changeProffesion (){
    proffesions.forEach((proffesion, index) => {
        setTimeout(() => {
            document.getElementById("proffesion").innerHTML = proffesion;
        }, (index + 1) * 4000)
    })

}

changeProffesion()

setInterval(changeProffesion, 12000)

// // =========================
// // changing the theme

document.getElementById("theme-humberger").addEventListener("click", function(){
    var palette = document.getElementById("theme-palette")

    palette.classList.toggle('animate')
})

document.querySelector(".red").addEventListener('click', function(){
    document.documentElement.style.setProperty('--purple', '#ff0000')
    document.documentElement.style.setProperty('--box-shadow', '#ff0000')
    document.documentElement.style.setProperty('--vector', 'url("./images/vector-red.png")')


    var img = document.querySelector(".intro-picture>img")
    img.src = './images/peter-profile-red.png'

})

document.querySelector(".green").addEventListener('click', function(){
    document.documentElement.style.setProperty('--purple', '#008000')
    document.documentElement.style.setProperty('--box-shadow', '#008000')
    document.documentElement.style.setProperty('--vector', 'url("./images/vector-green.png")')

     var img = document.querySelector(".intro-picture>img")
    img.src = './images/peter-profile-green.png'

})

document.querySelector(".blue").addEventListener('click', function(){
    document.documentElement.style.setProperty('--purple', '#1212db')
    document.documentElement.style.setProperty('--box-shadow', '#1212db')
    document.documentElement.style.setProperty('--vector', 'url("./images/vector-blue.png")')

     var img = document.querySelector(".intro-picture>img")
    img.src = './images/peter-profile-blue.png'

})

document.querySelector(".black").addEventListener('click', function(){
    document.documentElement.style.setProperty('--purple', '#ff0080')
    document.documentElement.style.setProperty('--box-shadow', '#ff0080')
    document.documentElement.style.setProperty('--txt-black', '#ffffff')
    document.documentElement.style.setProperty('--txt-white', '#000000')
    document.documentElement.style.setProperty('--vector', 'url("./images/vector-black.png")')

     var img = document.querySelector(".intro-picture>img")
    img.src = './images/peter-profile-black.png'

    document.body.style.backgroundColor = '#191919';
})

document.querySelector(".purple").addEventListener('click', function(){
    document.documentElement.style.setProperty('--purple', '#800080')
    document.documentElement.style.setProperty('--box-shadow', '#9f459f')
    document.documentElement.style.setProperty('--txt-white', '#ffffff')
    document.documentElement.style.setProperty('--txt-black', '#000000')
    document.documentElement.style.setProperty('--vector', 'url("./images/vector.png")')

     var img = document.querySelector(".intro-picture>img")
    img.src = './images/peter-profile.png'

    document.body.style.backgroundColor = '#ffffff';
})
