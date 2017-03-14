class Summary extends TextDecorator{
    
    public getText() : string{
        let words = this.decoratedTxt.getText().split(' ', 10);
        return words.join(' ');
    }
}