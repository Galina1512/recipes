const text = document.querySelector('#search');
const recipes = document.querySelectorAll('.recipe');

text.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    recipes.forEach(item=>{
    item.querySelector('p').textContent.toLowerCase().includes(word)?(item.style.display="flex-box"):(item.style.display='none');

    })
})

gsap.from('.povar', { duration: 10, delay: .5, yoyo:true, x:'100vw', repeat:2})

