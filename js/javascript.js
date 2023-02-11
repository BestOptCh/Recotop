// Nama    : Dhimas Muhammad Fattah Arrumy
// NIM     : 10122471
// Kelas   : IF10

/* sticky navbar */

window.addEventlistener('scroll', function() {
    var header = document.querySelector('header');
    header.classlist.toggle('sticky', window.scrollY > 0);
});

/* filterable cards */

let.list = document.querySelectorAll('.list');
let cards = document.querySelectorAll('.card');

for(let i=0; i<list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let j=0; j<list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        
        let dataFilter =this.getAttribute('data-filter');
        
        for( let k=0; k<cards.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if(cards[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');                
            }
        }
    })
}