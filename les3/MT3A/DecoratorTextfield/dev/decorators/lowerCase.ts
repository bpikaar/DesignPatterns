class LowerCase extends TxtDecorator{    
    public getText() : string{
        return this.decoratedTxt.getText().toLowerCase();
    }
}