function Menu(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
    var result = '<ul class="' + this.className + '" id="' + this.id + '">';
    this.items.forEach(function (item) {
        result += item.render();
    });
    result += '</ul>';
    return result;
};

function MenuItem(my_href, my_name, sub_menu) {
    Container.call(this);
    this.href = my_href;
    this.name = my_name;
    this.submenu = sub_menu || null;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function () {
    var result = '';
    if (this.submenu === null) {
        result = '<li><a href="' + this.href + '">' + this.name + '</a></li>';
    } else {
        result += '<li><a href="' + this.href + '">' + this.name + '</a>';
        result += (new SubMenu(this.submenu)).render();
        result += '</li>';
    }
    return result;
};


function SubMenu(submenu) {
    MenuItem.call(this);
    this.submenu = submenu;
}

SubMenu.prototype = Object.create(MenuItem.prototype);
SubMenu.prototype.constructor = SubMenu;

SubMenu.prototype.render = function () {
    var result = '<div class="mega_menu">';
    result += '<div class="transform"></div>';
    result += '<div class="mega-in">';
    result += (new SubMenuItems(this.submenu[0].title, this.submenu[0].column)).render();
    result += '</div>';
    result += '<div class="mega-in"><div>';
    result += (new SubMenuItems(this.submenu[1].title, this.submenu[1].column)).render();
    result += '</div><div>';
    result += (new SubMenuItems(this.submenu[2].title, this.submenu[2].column)).render();
    result += '</div></div>';
    result += '<div class="mega-in megas-in_last"><div class="mega_right">';
    result += (new SubMenuItems(this.submenu[3].title, this.submenu[3].column)).render();
    result += '</div>';
    result += '<div class="layer-mega">';
    result += (new image(this.submenu[4].src, this.submenu[4].alt, this.submenu[4].title)).render();
    result += '</div></div>';
    return result;
};


function SubMenuItems(title, column) {
    SubMenu.call(this);
    this.title = title || null;
    this.column = column;
}

SubMenuItems.prototype = Object.create(SubMenu.prototype);
SubMenuItems.prototype.constructor = SubMenuItems;

SubMenuItems.prototype.render = function () {
    var result = '';

    result += '<p>' + this.title + '</p>';
    for (i = 0; i < this.column.length; i++) {
        result += '<a href="' + this.column[i].href + '">' + this.column[i].name + '</a>';
    }
    return result;
};

function image(src, alt, title) {
    Container.call(this);
    this.src = src;
    this.alt = alt;
    this.title = title;
}

image.prototype = Object.create(Container.prototype);
image.prototype.constructor = image;

image.prototype.render = function () {
    var result = '';
    result += '<img src="' + this.src + '" alt="' + this.alt + '">';
    result += '<div>' + this.title + '</div>';
    return result;
};