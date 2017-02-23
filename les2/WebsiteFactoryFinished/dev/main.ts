window.addEventListener("load", function() 
{
    let div = document.getElementById('buttons');

    let blogButton : HTMLElement = document.createElement('button');
    div.appendChild(blogButton);

    blogButton.innerHTML    = "Blog";
    blogButton.style.left   = "300px";
    blogButton.style.top    = "50px";
    blogButton.addEventListener('click', handleBlogClick);


    let shopButton : HTMLElement = document.createElement('button');
    div.appendChild(shopButton);
    
    shopButton.innerHTML    = "Shop";
    shopButton.style.left   = "500px";
    shopButton.style.top    = "50px";
    shopButton.addEventListener('click', handleShopClick);


});

function handleBlogClick(e) {
    removeCards();

    let websiteFactory : WebsiteAbstractFactory = new ConcreteFactory();
    let website : Website = websiteFactory.createWebsite(WebsiteTypes.Blog);
}

function handleShopClick(e) {
    removeCards();

    let websiteFactory : WebsiteAbstractFactory = new ConcreteFactory();
    let website : Website = websiteFactory.createWebsite(WebsiteTypes.Shop);
}

function removeCards() {
    let cards = document.getElementsByTagName('card');
    for (let i = 0, len = cards.length; i != len; ++i) {
        cards[0].parentNode.removeChild(cards[0]);
    }
}