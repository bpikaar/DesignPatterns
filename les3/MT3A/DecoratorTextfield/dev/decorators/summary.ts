class Summary extends TxtDecorator{
    
    public getText() : string{
        let words = this.decoratedTxt.getText().split(' ', 10);
        return words.join(' ');
    }
}