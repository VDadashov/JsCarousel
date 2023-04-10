const sliders = document.querySelectorAll(".slide");
let counter = 0;

sliders.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    debugger
    if(counter == 0){
        counter = 3;
        slideImage();
    }else{
        counter--
        slideImage();
    }
    
}

const goNext = () => {
    if(counter == 3){
        counter = 0;
        slideImage();
    }else{
        counter++
        slideImage();
        console.log(counter);
    }
    
}

const slideImage =  () => {
    sliders.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

function ProgressBar(){
    let progressBar = document.getElementById('progressBarFill');
    let progress = 0;

    function updateProgressBar() {
      progress += 2;
      progressBar.style.width = progress + '%';

      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }

    let progressInterval = setInterval(updateProgressBar, 80);
}

ProgressBar();

setInterval(() => { 
    ProgressBar()
    goNext()
}, 4000);

 






