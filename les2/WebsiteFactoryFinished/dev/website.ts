abstract class Website {

    protected pages : Array<Page>;

    constructor() {
        this.pages = new Array<Page>();

        this.buildPages();
    }

    public abstract buildPages();
}