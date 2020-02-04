var catalog = document.querySelector('.catalog');
var items = catalog.querySelectorAll('.catalog-item');
var btn = document.querySelectorAll('.sold-btn');
console.log(items);

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
            var cur = this.dataset.tabId;
            console.log(cur);
            cur = ".item-number-" + cur;
            var curItem = document.querySelector(cur);
            var sold = curItem.querySelector('.buy-sold');
            var buy = curItem.querySelector('.buy');
            console.log(curItem);
            if (curItem.classList.contains('sold')) {
                sold.classList.add('none');
                buy.classList.remove('none');
                curItem.classList.remove('sold');
            } else {
                sold.classList.remove('none');
                buy.classList.add('none');
                curItem.classList.add('sold');
            }
        }
    )
}
