function ShoppingCart(root) {
    Container.call(this);
    this.root = root;
}

ShoppingCart.prototype = Object.create(Container.prototype);
ShoppingCart.prototype.constructor = ShoppingCart;

/*
ShoppingCart.prototype.render = function (root) {
    this.root = root;
    var shoppingCartDiv = '<div class="shopping_cart_head">';
    shoppingCartDiv += '<div class="details details_head">product details</div>';
    shoppingCartDiv += '<div class="unit_price price_head">unit price</div>';
    shoppingCartDiv += '<div class="quantity quantity_head">quantity</div>';
    shoppingCartDiv += '<div class="shipping shipping_head">shipping</div>';
    shoppingCartDiv += '<div class="subtotal subtotal_head">subtotal</div>';
    shoppingCartDiv += '<div class="action_head">action</div></div>';
    $(this.root).prepend(shoppingCartDiv);
};
*/

ShoppingCart.prototype.add = function (item) {
    this.item = item;
    var idNumber = $(this.item).attr('id').split('_')[0];
    var idProduct = idNumber + '_shopping';
    var src = $(this.item).find('.cart-hide-img1').attr('src');
    var text = $(this.item).find('h4').text();
    var rating = $(this.item).find('.stars').html();
    var price = parseInt($(this.item).find('.delete-price').text());
    var quantity = parseInt($(this.item).find('.units').text());

    var subtotal = price * quantity;

    var cartItems = $('<div />', {
        class: 'shopping_cart_item',
        id: idProduct,
        html: '<div class="details">\n' +
        '<div class="item_picture item_picture__img1" style ="background-image: url(' + src + ');"></div>\n' +
        '<div class="item_text">\n' +
        '<div class="item_text_h">' + text + '</div>\n' +
        '<div class="stars">' + rating + '</div>\n' +
        '<div class="item_text_p">Color: <span>Red</span></div>\n' +
        '<div class="item_text_p">Size: <span> Xll</span></div></div></div>\n' +
        '<div class="unit_price">' + price + '</div>\n' +
        '<div class="quantity"><input class="text_cart_item1" type="text" value="' + quantity + '" maxlength="5"></div>\n' +
        '<div class="shipping">free</div>\n' +
        '<div class="subtotal">$' + subtotal + '</div>\n' +
        '<div class="action">\n' +
        '<i class="fa fa-times-circle" aria-hidden="true"></i>\n' +
        '   </div></div>'
    });

    $(this.root).append(cartItems);
};

ShoppingCart.prototype.delete = function (idProduct) {
    var product = document.getElementById(idProduct);
    product.remove();
};
