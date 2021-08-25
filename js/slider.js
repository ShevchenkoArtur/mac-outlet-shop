const showSlide = () => {
    const slides = document.getElementsByClassName('slider__item')
    let slideNum = 0

    setInterval(() => {
        if(slideNum === slides.length - 1) {
            slideNum = 0
        }
        slides[slideNum].classList.add('showing')
        for(let i = 0; i < slides.length; i++) {
            if (i !== slideNum) slides[i].classList.remove('showing')
        }
        slideNum++
    }, 3000)
}

showSlide()
