class LowerCase extends TextDecorator{
    
    public getText() : string{
        return this.decoratedTxt.getText().toLowerCase();
    }
}