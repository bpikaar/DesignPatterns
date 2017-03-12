/// <reference path="ConcreteDecorator.ts" />
/// <reference path="../text.ts" />
/// <reference path="emoji/emoji.ts" />

class EmojiDecorator implements Txt {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public getText(): string {
        const words = this.s.split(" ");

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