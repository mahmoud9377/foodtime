const button = document.getElementById('searchButton');
const input = document.getElementById('searchInput');
button.addEventListener('click', () => {
console.log(`This search is ${input.value}`);
});

let btn = document.getElementById('statedButton');
let div = document.getElementById('partnerText');
btn.addEventListener('click', () => {
    if(div.style.display==='none') {
        div.style.display = 'block';   
    }else{
        div.style.display='none'
        
    }

    });
