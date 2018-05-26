function Basket() {
    Container.call(this);
    this.countGoods = parseInt(document.getElementById('item_number').textContent);
    this.amount = parseInt(document.getElementById('total_price').textContent);
    this.basketItems = [];
   //  this.collectBasketItems();
}

Basket.prototype = Object.create(Container.prototype);
Basket.prototype.constructor = Basket;

/*
Basket.prototype.render = function (root) {
    var basketDiv = '<div class="cart">';
    basketDiv += '<div class="items_number"><span id="item_number">' + this.countGoods + '</span></div></div>';
    basketDiv += '<div class="cart-hide">';
    basketDiv += '<div class="load"></div>';
    basketDiv += '<div class="transform"></div>';
    basketDiv += '<div class="cart_price">';
    basketDiv += '<p>TOTAL</p>';
    basketDiv += '<p>$<span id="total_price">' + this.amount + '</span>.00</p></div>';
    basketDiv += '<a class="cart_checkout" href="/checkout/">Checkout</a>';
    basketDiv += '<a class="cart_to_cart" href="/cart/">Go to cart</a></div>';
    $(root).html(basketDiv);
};*/

Basket.prototype.add = function (product, src, alt, quantity, price, name, rating) {

    $('.items_number').css('display', 'block');
    this.quantity = parseInt(quantity);
    this.price = parseInt(price);
    this.product = 'item' + parseInt(product) + '_cart';
    this.src = src;
    this.alt = alt;
    this.name = name;
   // document.getElementById('item_number').textContent = this.countGoods;
   // document.getElementById('total_price').textContent = this.amount;

    if (rating.length > 3) {
        this.rating = rating;
    } else {
        this.rating = ratingStars(rating);
    }


    var basketItems = $('<div />', {
        class: 'cart-hide_item',
        id: this.product,
        html: '<img class="cart-hide-img1" src="' + this.src + '" alt="' + this.alt + '">\n' +
        '<div class="cart-hide-text">\n' +
        '<h4>' + this.name + '</h4><div class="stars">' + this.rating + '</div>\n' +
        '<p><span class="units">' + this.quantity + '</span>  <span> x </span>$<span class="delete-price">' + this.price + '</span>.00</p></div>\n' +
        '<div class="cart-hide-delete"><i class="fa fa-times-circle" aria-hidden="true"></i></div>'
    });

    var IdItemCart = document.getElementById(this.product);
    var basketItemsDiv = $('.load');

    if (!IdItemCart) {
        basketItemsDiv.prepend(basketItems);
    } else {
        var nums = parseInt($(IdItemCart).find('.units').html());
        nums = nums + this.quantity;
        $(IdItemCart).find('.units').html(nums);
    }

    this.amount += this.price * this.quantity;
    this.countGoods += this.quantity;
    $("#total_price").text(this.amount);
    $("#item_number").text(this.countGoods);

    if ($('.grand-total') && $('.sub-total')) {
        $('.grand-total').find('span').text('$' + this.amount);
        $('.sub-total').find('span').text('$' + this.amount);
    }

};


Basket.prototype.delete = function (idProduct) {
    var myProduct = document.getElementById(idProduct);
    this.countGoods -= $(myProduct).find('.units').text();
    $('#item_number').text(this.countGoods);
    var deletePrice = $(myProduct).find('.delete-price').text();
    var deleteQuantity = $(myProduct).find('.units').text();
    var totalPrice = $("#total_price").text();
    this.amount = totalPrice - (deleteQuantity * deletePrice);
    $("#total_price").text(this.amount);
    myProduct.remove();
    if (this.amount === 0) {
        $('.items_number').css('display', 'none');
    }
    if ($('.grand-total') && $('.sub-total')) {
        $('.grand-total').find('span').text('$' + this.amount);
        $('.sub-total').find('span').text('$' + this.amount);
    }
};


Basket.prototype.collectBasketItems = function () {
    $.get({
        url: './ajax/basket_data.json',
        dataType: 'json',
        success: function (data) {
            for (var index in data) {
                this.add(data[index].id_good, data[index].foto, data[index].alt, data[index].count, parseInt(data[index].price), data[index].name, data[index].rating);
            }
        },
        context: this
    });
    $.get({
        url: './ajax/basketItems.json',
        dataType: 'json',
        success: function (data) {
            for (var index in data.basket) {
                this.basketItems.push(data.basket[index]);
                this.add(data.basket[index].id_product, data.basket[index].src, data.basket[index].alt, data.basket[index].quantity, data.basket[index].price, data.basket[index].name, data.basket[index].rating)
            }
        },
        context: this
    })
};
