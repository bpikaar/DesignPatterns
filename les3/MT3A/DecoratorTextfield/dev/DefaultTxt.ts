class DefaultTxt implements Txt 
{
    public getText() : string 
    {
        let form = document.getElementById("the-form");

        return form.search.value;
    }
}