function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
}

Container.prototype.render = function () {
    return this.htmlCode;
};

Container.prototype.remove = function () {
    var id_clean = this.id;
    var elem = document.getElementById(id_clean);
    if (elem)
        elem.parentNode.removeChild(elem);
};