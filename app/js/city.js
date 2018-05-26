function CityList(id, name) {
    Container.call(this);
    this.id = id;
    this.name = name;
}

CityList.prototype = Object.create(Container.prototype);
CityList.prototype.constructor = CityList;

CityList.prototype.render = function (root) {
    var city = '<div id="' + this.id + '">' + this.name + '</div>';
    $(root).prepend(city);
};

