var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Website = (function () {
    function Website() {
        this.pages = new Array();
        this.buildPages();
    }
    return Website;
}());
var Blog = (function (_super) {
    __extends(Blog, _super);
    function Blog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blog.prototype.buildPages = function () {
        this.pages.push(new Welcome('Welcome'));
        this.pages.push(new Posts('Posts'));
        this.pages.push(new About('About'));
        this.pages.push(new Contact('Contact'));
    };
    return Blog;
}(Website));
var WebsiteAbstractFactory = (function () {
    function WebsiteAbstractFactory() {
    }
    return WebsiteAbstractFactory;
}());
var ConcreteFactory = (function (_super) {
    __extends(ConcreteFactory, _super);
    function ConcreteFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactory.prototype.createWebsite = function (type) {
        var website;
        switch (type) {
            case WebsiteTypes.Blog:
                website = new Blog();
                break;
            case WebsiteTypes.Shop:
                website = new Shop();
                break;
            default:
                website = null;
        }
        return website;
    };
    return ConcreteFactory;
}(WebsiteAbstractFactory));
window.addEventListener("load", function () {
    var div = document.getElementById('buttons');
    var blogButton = document.createElement('button');
    div.appendChild(blogButton);
    blogButton.innerHTML = "Blog";
    blogButton.style.left = "300px";
    blogButton.style.top = "50px";
    blogButton.addEventListener('click', handleBlogClick);
    var shopButton = document.createElement('button');
    div.appendChild(shopButton);
    shopButton.innerHTML = "Shop";
    shopButton.style.left = "500px";
    shopButton.style.top = "50px";
    shopButton.addEventListener('click', handleShopClick);
});
function handleBlogClick(e) {
    removeCards();
    var websiteFactory = new ConcreteFactory();
    var website = websiteFactory.createWebsite(WebsiteTypes.Blog);
}
function handleShopClick(e) {
    removeCards();
    var websiteFactory = new ConcreteFactory();
    var website = websiteFactory.createWebsite(WebsiteTypes.Shop);
}
function removeCards() {
    var cards = document.getElementsByTagName('card');
    for (var i = 0, len = cards.length; i != len; ++i) {
        cards[0].parentNode.removeChild(cards[0]);
    }
}
var Page = (function () {
    function Page(title) {
        var cards = document.getElementById('cards');
        var card = document.createElement('card');
        cards.appendChild(card);
        var bodyText = document.createElement('div');
        card.appendChild(bodyText);
        bodyText.setAttribute('class', 'bodytext');
        bodyText.innerHTML = "<strong>" + title + "</strong>";
    }
    return Page;
}());
var About = (function (_super) {
    __extends(About, _super);
    function About(title) {
        return _super.call(this, title) || this;
    }
    return About;
}(Page));
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(title) {
        return _super.call(this, title) || this;
    }
    return Contact;
}(Page));
var Pay = (function (_super) {
    __extends(Pay, _super);
    function Pay(title) {
        return _super.call(this, title) || this;
    }
    return Pay;
}(Page));
var Posts = (function (_super) {
    __extends(Posts, _super);
    function Posts(title) {
        return _super.call(this, title) || this;
    }
    return Posts;
}(Page));
var Products = (function (_super) {
    __extends(Products, _super);
    function Products(title) {
        return _super.call(this, title) || this;
    }
    return Products;
}(Page));
var ShoppingCart = (function (_super) {
    __extends(ShoppingCart, _super);
    function ShoppingCart(title) {
        return _super.call(this, title) || this;
    }
    return ShoppingCart;
}(Page));
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome(title) {
        return _super.call(this, title) || this;
    }
    return Welcome;
}(Page));
var Shop = (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shop.prototype.buildPages = function () {
        this.pages.push(new Products('Products'));
        this.pages.push(new ShoppingCart('ShoppingCart'));
        this.pages.push(new Pay('Pay'));
        this.pages.push(new Contact('Contact'));
    };
    return Shop;
}(Website));
var WebsiteTypes;
(function (WebsiteTypes) {
    WebsiteTypes[WebsiteTypes["Blog"] = 0] = "Blog";
    WebsiteTypes[WebsiteTypes["Shop"] = 1] = "Shop";
})(WebsiteTypes || (WebsiteTypes = {}));
//# sourceMappingURL=main.js.map