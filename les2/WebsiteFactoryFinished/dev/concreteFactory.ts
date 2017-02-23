/// <reference path="websiteAbstractFactory.ts" />


class ConcreteFactory extends WebsiteAbstractFactory
{
    public createWebsite(type : WebsiteTypes) : Website 
    {
        let website : Website;

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
    } 
}