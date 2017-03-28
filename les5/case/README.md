## Case les 6 - QuizMaker
In deze case maak je een webapp die uit een willekeurige databron een quiz kan tonen. Deze bron zorgt voor de vragen en de antwoorden van de quizvragen. Voorbeelden van quizzen zijn: muziek uit de ‘80, politiek, programmeren, enz. 

Afhankelijk van het moment van de dag worden verschillende vragen geladen. In de ochtend en de middag worden twee keer zoveel vragen geladen als in de avond en nacht. 

Vervolgens kan de gebruiker kiezen of de vragen in willekeurige volgorde of in de originele volgorde getoond moeten worden. 

De vragen bestaan uit enkele vragen of samengestelde vragen (A., B., C., enz. vragen). Elke vraag heeft een functie ‘Show()’ waarmee de View van de vraag aangesproken wordt en de vraag in een formulier getoond wordt. 

Het formulier bevat een ‘Opslaan’-knop, die ervoor zorgt dat elk input element zal opslaan. Elk input element is vervolgens zelf verantwoordelijk voor het opslaan.

In deze case maak je gebruik van de volgende patronen: 
- Singleton
- Composite
- Factory
- Iterator
- Strategy
- Observer