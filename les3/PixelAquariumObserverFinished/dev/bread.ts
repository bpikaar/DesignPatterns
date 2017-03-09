class Bread {

        public x : number = 0;
        public y : number = 0;

        private div : HTMLElement;

	constructor(mouseX : number, mouseY : number) {
                this.x = mouseX;
                this.y = mouseY;
                
                this.div = document.createElement('bread');
                document.body.appendChild(this.div);

                this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
	}

        public remove() : void {
                this.div.remove();
        }
    
}