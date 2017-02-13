/// <reference path="website.ts" />


class Blog extends Website {

    public buildPages() {
        this.pages.push(new Welcome('Welcome'));
        this.pages.push(new Posts('Posts'));
        this.pages.push(new About('About'));
        this.pages.push(new Contact('Contact'));
    }

}