Code examples and exercises in TypeScript involving Design Patterns 

# Install
- [Visual Studio Code](https://code.visualstudio.com/download)
- Install [NPM](https://docs.npmjs.com/getting-started/installing-node)
- Install TypeScriptCompiler: `npm install -g typescript` (-g staat voor global, hiervoor heb je sudo rechten nodig)

# Inhoud

## ExampleProject
Bevat een start project. Je kunt hiervan een kopie maken om zelf een project te starten

## Week 1
- TryToClickMe. Startproject om het principe van TypeScript icm HTML te oefenen
- TryToClickMeFinished
- PixelAquarium. Voeg aan dit project verschillende vissen toe die verschillend zwemgedrag vertonen. Elke 10 seconden verschijnt er een nieuwe vis in het aquarium op een willekeurige locatie.

# Tips
- **Autosave** voor Visual Studio Code. Go to Preferences > (User)Settings > files.autoSave. Klik op potlood (bewerken). Verander optie naar "OnWindowChange"
- Test je opdrachten altijd via **localhost** en niet via je file system. Hiervoor kan je ook [Browsersync](https://browsersync.io/) gebruiken
- Wil je variabelen gebruiken in een string, dan kun je gebruik maken van [Template literals](http://es6-features.org/#StringInterpolation). Plaat de string tussen back ticks en de variabele in de string tussen ${var}. Bijvoorbeeld: \``translate(${startx}px, ${starty}px)`\`
- Listeners maak je met **Arrow functions**:
`button.addEventListener('click', () => this.handleClick());`