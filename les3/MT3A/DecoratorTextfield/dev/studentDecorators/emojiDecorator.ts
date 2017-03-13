/// <reference path="../txtDecorator.ts" />

class EmojiDecorator extends TxtDecorator {

    public getText(): string {
        const words = this.decoratedTxt.getText().split(" ");

        const emojis = words.map(word => {
           let return_emoji = null;

           if(!return_emoji) {
               return_emoji = emoji[Math.floor(Math.random() * emoji.length)];
           }

           return String.fromCodePoint(parseInt("0x"+return_emoji.code));
        });

        return emojis.join(" ");
    }
}