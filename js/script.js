
var ativa = false

function Aparecer() {
    if (!ativa) {
        ativa = true
        document.querySelector("div.nav").style.display = 'block'
    }else{
        ativa = false

        document.querySelector("div.nav").style.display = 'none'

    }

}