videoj = document.querySelector('.video')
btn = document.querySelector('.switch-btn')

btn.addEventListener('click', () => {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        videoj.pause()
    }
    else{
        btn.classList.remove('slide')
        videoj.play()
    }
})