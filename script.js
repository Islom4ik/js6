const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

// let date = new Date();

// console.log(date.getSeconds());

function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        second = time.getSeconds() * 6;


    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;

    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    // if(time.getHours() < 10) {
    //     hoursNum.innerHTML = '0' + time.getHours()
    // }else {
    //     hoursNum.innerHTML =  time.getHours()
    // }

    // if(time.getMinutes() < 10) {
    //     minNum.innerHTML = '0' + time.getMinutes()
    // }else {
    //     minNum.innerHTML =  time.getMinutes()
    // }

    setTimeout(() => clock(), 1000); /* Рекурсия - это когда функция внутри себя вызывает саму себя */

}

clock();



// setTimeout(() => {
//     console.log('asdad');
// }, 5000)

// setInterval(() => {
//     console.log('aqeqweqwe');
// }, 1000);

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');

// console.log(tabsItem.length);
// console.log(tabsContent.length);




tabsItem.forEach((item, i) => {
    item.addEventListener('click', function () {
        removeActiveClass()
        this.classList.add('active');
        tabsContent[i].classList.add('active');
    })
})



function removeActiveClass() {
    tabsItem.forEach((item, i) => {
        item.classList.remove('active');
        tabsContent[i].classList.remove('active');
    })
}


/* --------------------------------------------------------------------- */

const watchBtn = document.querySelector('.stopwatch__btn'),
watchSec =  document.querySelector('.stopwatch__seconds'),
watchMin =  document.querySelector('.stopwatch__minutes'),
watchHour =  document.querySelector('.stopwatch__hours')


watchBtn.addEventListener('click', function () {
    if(this.innerHTML == 'start'){
        stti()
        this.innerHTML = 'stop'
        let timer = 0
        settimeout(() => timerWatch(this, timer),1000)
    }else if(this.innerHTML == 'stop'){
        this.innerHTML = 'reset'
        resetTimer()
    }else {
        this.innerHTML = 'start'
        
        
watchSeconds.innerHTML = 0
watchMinutes.innerHTML = 0
watchBtnHours.innerHTML = 0

        
    }
    
})
  
let sec = 0,
hour = 0,
min = 0;

function stti() {
    watchSec.innerHTML = sec;
    watchMin.innerHTML = min;
    watchHour.innerHTML = hour;
    if(Sec >= 59){
        Sec = 0;
        Min = Min + 1;
    }
    if(Min >= 59){
        Min = 0;
        Hour = Hour + 1;
    }
    watchSec.innerHTML = add(Sec) ;
    watchMin.innerHTML= add(Min);
    watchHour.innerHTML= add(Hour);
    setTimeout(() => stti(), 1000);
}
    

function resetTimer() {
    hour = 0;
    min = 0;
    sec = 0;
    watchHour.innerHTML = 0;
    watchMin.innerHTML = 0;
    watchSec.innerHTML = 0;
    watchBtn.innerHTML = 'start';
}