function Citaty(url, text, author, signature) {
    Container.call(this);
    this.url = url;
    this.text = text;
    this.author = author;
    this.signature = signature;
}

Citaty.prototype = Object.create(Container.prototype);
Citaty.prototype.constructor = Citaty;

Citaty.prototype.render = function (root) {

    var citatyBlock = $('<div />', {
        class: 'citaty',
        html: '<div class="sub_left_ava"></div>\n' +
        '        <p class="sub_left_text">' + this.text + '</p>\n' +
        '         <h4 class="sub_left_pod">' + this.author + '</h4>\n' +
        '         <p class="sub_span">' + this.signature + '</p>'
    });
    $('.sub_left_ava').css('background-image', '1');
    $(root).prepend(citatyBlock);
};