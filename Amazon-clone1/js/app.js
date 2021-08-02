let category = document.querySelector('.h1');

let category_list = [
      'Echo and Alexa',
      'Kindle',
      'Books',
      'Electronics',
      'Home and Garden',
      'Fashion',
      'Health and Beauty',
      'Automotive',
      'Sport and Tourism',
      'Games',
      'Film and Music',
      'Animals',
      'Hobby',
      'Gift Cards',
];
 
 const view = document.querySelector('.h1');
 view.addEventListener('click', (e) => {
   const height = document.querySelector('.anim_list');
   height.style.height = '110vh';
    view.classList.add('boxd')
    let interval = setInterval((gen)=>{
    const {value, done} = gen.next();
    if(done){
        clearInterval(interval);
    }else{
         const ul = document.querySelector('.list')
          const li = document.createElement('li');
        li.classList.add('anim_li');
       li.innerText= `${value}`;
         ul.appendChild(li)
         console.log(value)
    }  

},1000, category_list[Symbol.iterator]())
 })

function height() {
    const thd = document.querySelector('.two');
    if (thd.style.height !== "100vh") {
        thd.style.height = "140vh"
    }
}
height();


function BlameHim(){
    const heart = document.querySelector('.keke')
    heart.classList.remove('keke')
      heart.classList.remove('fal')
    heart.classList.add('fas')
    console.log('wokrs')
}
const bbtn = document.querySelector('.fa-angle-down');

bbtn.addEventListener('click',(e) => {
    const modl = document.querySelector('.modal');
    modl.classList.toggle('showModal')
})