function ShopItem(id, value, href, src, alt, price, name, rating) {
    Container.call(this);
    this.id = id;
    this.value = value;
    this.href = href;
    this.src = src;
    this.alt = alt;
    this.price = price;
    this.name = name;
    this.rating = ratingStars(rating);
}

ShopItem.prototype = Object.create(Container.prototype);
ShopItem.prototype.constructor = ShopItem;

ShopItem.prototype.render = function (root) {
    var shopItem = $('<a />', {
        class: 'fetured_item',
        id: this.id,
        value: this.value,
        href: this.href,
        html: '<div class="item_back">' +
        '<img class="item_img" src="'+ this.src +'" alt="'+ this.alt + '"></div>' +
        '<div class="fetured_text">'+ this.name +'</div>' +
        '<div class="fetured_cont">\n' +
        '     <div class="fetured_price">$'+ this.price +'.00</div>' +
        '<div class="stars stars_fetured">' + this.rating + '</div></div>' +
        '<div class="blockhover" onclick="return false">' +
        '<div class="imgfix">' +
        '<i class="sprite sprite-forma-1"></i>' +
        '<p class="block">Add to Card</p></div></div>'
    });

    $(root).append(shopItem);
};