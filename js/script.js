const trocaTema = document.querySelector('#change-theme')

function modeDarkToggle(){
    document.body.classList.toggle('dark')
}

//load light or dark mode
function loadTheme(){
    const darMode = localStorage.getItem('dark')
    if(darMode){
        modeDarkToggle()
    }
}
loadTheme()

trocaTema.addEventListener('change',function(){
    modeDarkToggle()

    //save
    localStorage.removeItem('dark')
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark',1)
    }
})