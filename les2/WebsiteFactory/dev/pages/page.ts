class Page {

	constructor(title : string) {
        let cards = document.getElementById('cards');

        let card : HTMLElement = document.createElement('card');
        cards.appendChild(card);

        let bodyText : HTMLElement = document.createElement('div');
        card.appendChild(bodyText);

        bodyText.setAttribute('class', 'bodytext');
        bodyText.innerHTML = `<strong>${title}</strong>`;
	}

}