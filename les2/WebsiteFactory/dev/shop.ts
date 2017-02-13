/// <reference path="website.ts" />

class Shop extends Website {

    public buildPages() {
        this.pages.push(new Products('Products'));
        this.pages.push(new ShoppingCart('ShoppingCart'));
        this.pages.push(new Pay('Pay'));
        this.pages.push(new Contact('Contact'));
    }
    
}