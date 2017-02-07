// Create a reference to 'Input' with the 'ref' snippet.
/// <reference path="input.ts" />


class Main {
	constructor() {
        // Create a new instance of Input
        let input = new Input();
	}
}

window.addEventListener("load", function() {
    new Main();
});