var buying = document.querySelectorAll('.can-buy');

for (var i = 0; i < buying.length; i++) {
    buying[i].addEventListener('click', function (e) {
        var sp;
        if (this.classList.contains('bought')) {
            this.classList.remove('bought');
            this.classList.add('can-buy');
            sp = this.querySelector('span');
            sp.innerText = "Купить";
        } else {
            this.classList.add('bought');
            this.classList.remove('can-buy');
            sp = this.querySelector('span');
            sp.innerText = "В корзине";
        }
    })
}