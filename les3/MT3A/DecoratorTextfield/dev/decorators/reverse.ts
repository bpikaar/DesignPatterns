class Reverse extends TxtDecorator{
  
    public getText() : string{
        let text = this.decoratedTxt.getText();

        let newString = '';
        for (let i = text.length - 1; i >= 0; i--) {
            newString += text[i];
        }
        return newString;
    }
}