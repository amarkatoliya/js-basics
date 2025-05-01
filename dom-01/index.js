function backGroundchange(color){
    document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('theme-btn')

themeButton.addEventListener('click', function () {
    
    console.log('i am clicked');
    if(!document.body.style.backgroundColor || document.body.style.backgroundColor == 'white'){
        backGroundchange('black')
        themeButton.innerHTML = 'DARK MODE'
    }
    else{
        backGroundchange('white')
        themeButton.innerHTML = 'LIGHT MODE'
    }
});

