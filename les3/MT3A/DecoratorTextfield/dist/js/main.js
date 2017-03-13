class Decorator {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return this.text.getText();
    }
}
class ConcreteDecorator extends Decorator {
    constructor(text) {
        super(text);
    }
    getText() {
        console.log('concrete called');
        return super.getText() + "<br />";
    }
}
class AntiSwearDectorater {
    constructor(s) {
        this.s = s;
    }
    getText() {
        this.removeSwearWords();
        return this.s;
    }
    removeSwearWords() {
        let swearWords = ['a55', 'a55hole', 'aeolus', 'ahole', 'anal', 'analprobe', 'anilingus', 'anus', 'areola', 'areole', 'arian', 'aryan', 'ass', 'assbang', 'assbanged', 'assbangs', 'asses', 'assfuck', 'assfucker', 'assh0le', 'asshat', 'assho1e', 'ass hole', 'assholes', 'assmaster', 'assmunch', 'asswipe', 'asswipes', 'azazel', 'azz', 'b1tch', 'babe', 'babes', 'ballsack', 'bang', 'banger', 'barf', 'bastard', 'bastards', 'bawdy', 'beaner', 'beardedclam', 'beastiality', 'beatch', 'beater', 'beaver', 'beer', 'beeyotch', 'beotch', 'biatch', 'bigtits', 'big tits', 'bimbo', 'bitch', 'bitched', 'bitches', 'bitchy', 'blow job', 'blow', 'blowjob', 'blowjobs', 'bod', 'bodily', 'boink', 'bollock', 'bollocks', 'bollok', 'bone', 'boned', 'boner', 'boners', 'bong', 'boob', 'boobies', 'boobs', 'booby', 'booger', 'bookie', 'bootee', 'bootie', 'booty', 'booze', 'boozer', 'boozy', 'bosom', 'bosomy', 'bowel', 'bowels', 'bra', 'brassiere', 'breast', 'breasts', 'bugger', 'bukkake', 'bullshit', 'bull shit', 'bullshits', 'bullshitted', 'bullturds', 'bung', 'busty', 'butt', 'butt fuck', 'buttfuck', 'buttfucker', 'buttfucker', 'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'caca', 'cahone', 'cameltoe', 'carpetmuncher', 'cawk', 'cervix', 'chinc', 'chincs', 'chink', 'chink', 'chode', 'chodes', 'cl1t', 'climax', 'clit', 'clitoris', 'clitorus', 'clits', 'clitty', 'cocain', 'cocaine', 'cock', 'c-o-c-k', 'cockblock', 'cockholster', 'cockknocker', 'cocks', 'cocksmoker', 'cocksucker', 'cock sucker', 'coital', 'commie', 'condom', 'coon', 'coons', 'corksucker', 'crabs', 'crack', 'cracker', 'crackwhore', 'crap', 'crappy', 'cum', 'cummin', 'cumming', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cunilingus', 'cunnilingus', 'cunny', 'cunt', 'cunt', 'c-u-n-t', 'cuntface', 'cunthunter', 'cuntlick', 'cuntlicker', 'cunts', 'd0ng', 'd0uch3', 'd0uche', 'd1ck', 'd1ld0', 'd1ldo', 'dago', 'dagos', 'dammit', 'damn', 'damned', 'damnit', 'dawgie-style', 'dick', 'dickbag', 'dickdipper', 'dickface', 'dickflipper', 'dickhead', 'dickheads', 'dickish', 'dick-ish', 'dickripper', 'dicksipper', 'dickweed', 'dickwhipper', 'dickzipper', 'diddle', 'dike', 'dildo', 'dildos', 'diligaf', 'dillweed', 'dimwit', 'dingle', 'dipship', 'doggie-style', 'doggy-style', 'dong', 'doofus', 'doosh', 'dopey', 'douch3', 'douche', 'douchebag', 'douchebags', 'douchey', 'drunk', 'dumass', 'dumbass', 'dumbasses', 'dummy', 'dyke', 'dykes', 'ejaculate', 'enlargement', 'erect', 'erection', 'erotic', 'essohbee', 'extacy', 'extasy', 'f.u.c.k', 'fack', 'fag', 'fagg', 'fagged', 'faggit', 'faggot', 'fagot', 'fags', 'faig', 'faigt', 'fannybandit', 'fart', 'fartknocker', 'fat', 'felch', 'felcher', 'felching', 'fellate', 'fellatio', 'feltch', 'feltcher', 'fisted', 'fisting', 'fisty', 'floozy', 'foad', 'fondle', 'foobar', 'foreskin', 'freex', 'frigg', 'frigga', 'fubar', 'fuck', 'f-u-c-k', 'fuckass', 'fucked', 'fucked', 'fucker', 'fuckface', 'fuckin', 'fucking', 'fucknugget', 'fucknut', 'fuckoff', 'fucks', 'fucktard', 'fuck-tard', 'fuckup', 'fuckwad', 'fuckwit', 'fudgepacker', 'fuk', 'fvck', 'fxck', 'gae', 'gai', 'ganja', 'gay', 'gays', 'gey', 'gfy', 'ghay', 'ghey', 'gigolo', 'glans', 'goatse', 'godamn', 'godamnit', 'goddam', 'goddammit', 'goddamn', 'goldenshower', 'gonad', 'gonads', 'gook', 'gooks', 'gringo', 'gspot', 'g-spot', 'gtfo', 'guido', 'h0m0', 'h0mo', 'handjob', 'hard on', 'he11', 'hebe', 'heeb', 'hell', 'hemp', 'heroin', 'herp', 'herpes', 'herpy', 'hitler', 'hiv', 'hobag', 'hom0', 'homey', 'homo', 'homoey', 'honky', 'hooch', 'hookah', 'hooker', 'hoor', 'hootch', 'hooter', 'hooters', 'horny', 'hump', 'humped', 'humping', 'hussy', 'hymen', 'inbred', 'incest', 'injun', 'j3rk0ff', 'jackass', 'jackhole', 'jackoff', 'jap', 'japs', 'jerk', 'jerk0ff', 'jerked', 'jerkoff', 'jism', 'jiz', 'jizm', 'jizz', 'jizzed', 'junkie', 'junky', 'kike', 'kikes', 'kill', 'kinky', 'kkk', 'klan', 'knobend', 'kooch', 'kooches', 'kootch', 'kraut', 'kyke', 'labia', 'lech', 'leper', 'lesbians', 'lesbo', 'lesbos', 'lez', 'lezbian', 'lezbians', 'lezbo', 'lezbos', 'lezzie', 'lezzies', 'lezzy', 'lmao', 'lmfao', 'loin', 'loins', 'lube', 'lusty', 'mams', 'massa', 'masterbate', 'masterbating', 'masterbation', 'masturbate', 'masturbating', 'masturbation', 'maxi', 'menses', 'menstruate', 'menstruation', 'meth', 'm-fucking', 'mofo', 'molest', 'moolie', 'moron', 'motherfucka', 'motherfucker', 'motherfucking', 'mtherfucker', 'mthrfucker', 'mthrfucking', 'muff', 'muffdiver', 'murder', 'muthafuckaz', 'muthafucker', 'mutherfucker', 'mutherfucking', 'muthrfucking', 'nad', 'nads', 'naked', 'napalm', 'nappy', 'nazi', 'nazism', 'negro', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'nigger', 'niggers', 'niggle', 'niglet', 'nimrod', 'ninny', 'nipple', 'nooky', 'nympho', 'opiate', 'opium', 'oral', 'orally', 'organ', 'orgasm', 'orgasmic', 'orgies', 'orgy', 'ovary', 'ovum', 'ovums', 'p.u.s.s.y.', 'paddy', 'paki', 'pantie', 'panties', 'panty', 'pastie', 'pasty', 'pcp', 'pecker', 'pedo', 'pedophile', 'pedophilia', 'pedophiliac', 'pee', 'peepee', 'penetrate', 'penetration', 'penial', 'penile', 'penis', 'perversion', 'peyote', 'phalli', 'phallic', 'phuck', 'pillowbiter', 'pimp', 'pinko', 'piss', 'pissed', 'pissoff', 'piss-off', 'pms', 'polack', 'pollock', 'poon', 'poontang', 'porn', 'porno', 'pornography', 'pot', 'potty', 'prick', 'prig', 'prostitute', 'prude', 'pube', 'pubic', 'pubis', 'punkass', 'punky', 'puss', 'pussies', 'pussy', 'pussypounder', 'puto', 'queaf', 'queef', 'queef', 'queer', 'queero', 'queers', 'quicky', 'quim', 'racy', 'rape', 'raped', 'raper', 'rapist', 'raunch', 'rectal', 'rectum', 'rectus', 'reefer', 'reetard', 'reich', 'retard', 'retarded', 'revue', 'rimjob', 'ritard', 'rtard', 'r-tard', 'rum', 'rump', 'rumprammer', 'ruski', 's.h.i.t.', 's.o.b.', 's0b', 'sadism', 'sadist', 'scag', 'scantily', 'schizo', 'schlong', 'screw', 'screwed', 'scrog', 'scrot', 'scrote', 'scrotum', 'scrud', 'scum', 'seaman', 'seamen', 'seduce', 'semen', 'sex', 'sexual', 'sh1t', 's-h-1-t', 'shamedame', 'shit', 's-h-i-t', 'shite', 'shiteater', 'shitface', 'shithead', 'shithole', 'shithouse', 'shits', 'shitt', 'shitted', 'shitter', 'shitty', 'shiz', 'sissy', 'skag', 'skank', 'slave', 'sleaze', 'sleazy', 'slut', 'slutdumper', 'slutkiss', 'sluts', 'smegma', 'smut', 'smutty', 'snatch', 'sniper', 'snuff', 's-o-b', 'sodom', 'souse', 'soused', 'sperm', 'spic', 'spick', 'spik', 'spiks', 'spooge', 'spunk', 'steamy', 'stfu', 'stiffy', 'stoned', 'strip', 'stroke', 'stupid', 'suck', 'sucked', 'sucking', 'sumofabiatch', 't1t', 'tampon', 'tard', 'tawdry', 'teabagging', 'teat', 'terd', 'teste', 'testee', 'testes', 'testicle', 'testis', 'thrust', 'thug', 'tinkle', 'tit', 'titfuck', 'titi', 'tits', 'tittiefucker', 'titties', 'titty', 'tittyfuck', 'tittyfucker', 'toke', 'toots', 'tramp', 'transsexual', 'trashy', 'tubgirl', 'turd', 'tush', 'twat', 'twats', 'ugly', 'undies', 'unwed', 'urinal', 'urine', 'uterus', 'uzi', 'vag', 'vagina', 'valium', 'viagra', 'virgin', 'vixen', 'vodka', 'vomit', 'voyeur', 'vulgar', 'vulva', 'wad', 'wang', 'wank', 'wanker', 'wazoo', 'wedgie', 'weed', 'weenie', 'weewee', 'weiner', 'weirdo', 'wench', 'wetback', 'wh0re', 'wh0reface', 'whitey', 'whiz', 'whoralicious', 'whore', 'whorealicious', 'whored', 'whoreface', 'whorehopper', 'whorehouse', 'whores', 'whoring', 'wigger', 'womb', 'woody', 'wop', 'wtf', 'x-rated', 'xxx', 'yeasty', 'yobbo', 'zoophile'];
        let splittedInput = this.s.split(' ');
        swearWords.forEach((swearWord) => {
            splittedInput.forEach((word, index) => {
                if (word == swearWord) {
                    splittedInput[index] = "BOBBA";
                    this.createBobba();
                }
            });
        });
        this.s = splittedInput.join(" ");
    }
    createBobba() {
        let image = document.createElement('img');
        image.src = 'images/habbo-dance.gif';
        image.classList.add('bobba');
        document.body.appendChild(image);
    }
}
class CapitalDecorator {
    constructor(s) {
        this.s = s;
    }
    getText() {
        return this.s.toUpperCase();
    }
}
const emoji = [
    {
        "no": "1",
        "code": "1F600",
        "char": "😀",
        "name": "GRINNING FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | grin"
    },
    {
        "no": "2",
        "code": "1F601",
        "char": "😁",
        "name": "GRINNING FACE WITH SMILING EYES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "eye | face | grin | smile"
    },
    {
        "no": "3",
        "code": "1F602",
        "char": "😂",
        "name": "FACE WITH TEARS OF JOY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | joy | laugh | tear"
    },
    {
        "no": "4",
        "code": "1F923",
        "char": "🤣",
        "name": "ROLLING ON THE FLOOR LAUGHING",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "face | floor | laugh | rolling"
    },
    {
        "no": "5",
        "code": "1F603",
        "char": "😃",
        "name": "SMILING FACE WITH OPEN MOUTH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | mouth | open | smile"
    },
    {
        "no": "6",
        "code": "1F604",
        "char": "😄",
        "name": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES\n≊ smiling face with open mouth & smiling eyes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "eye | face | mouth | open | smile"
    },
    {
        "no": "7",
        "code": "1F605",
        "char": "😅",
        "name": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT\n≊ smiling face with open mouth & cold sweat",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cold | face | open | smile | sweat"
    },
    {
        "no": "8",
        "code": "1F606",
        "char": "😆",
        "name": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES\n≊ smiling face with open mouth & closed eyes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | laugh | mouth | open | satisfied | smile"
    },
    {
        "no": "9",
        "code": "1F609",
        "char": "😉",
        "name": "WINKING FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | wink"
    },
    {
        "no": "10",
        "code": "1F60A",
        "char": "😊",
        "name": "SMILING FACE WITH SMILING EYES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blush | eye | face | smile"
    },
    {
        "no": "11",
        "code": "1F60B",
        "char": "😋",
        "name": "FACE SAVOURING DELICIOUS FOOD",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "delicious | face | savouring | smile | um | yum"
    },
    {
        "no": "12",
        "code": "1F60E",
        "char": "😎",
        "name": "SMILING FACE WITH SUNGLASSES",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bright | cool | eye | eyewear | face | glasses | smile | sun | sunglasses | weather"
    },
    {
        "no": "13",
        "code": "1F60D",
        "char": "😍",
        "name": "SMILING FACE WITH HEART-SHAPED EYES\n≊ smiling face with heart-eyes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "eye | face | heart | love | smile"
    },
    {
        "no": "14",
        "code": "1F618",
        "char": "😘",
        "name": "FACE THROWING A KISS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | heart | kiss"
    },
    {
        "no": "15",
        "code": "1F617",
        "char": "😗",
        "name": "KISSING FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | kiss"
    },
    {
        "no": "16",
        "code": "1F619",
        "char": "😙",
        "name": "KISSING FACE WITH SMILING EYES",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "eye | face | kiss | smile"
    },
    {
        "no": "17",
        "code": "1F61A",
        "char": "😚",
        "name": "KISSING FACE WITH CLOSED EYES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "closed | eye | face | kiss"
    },
    {
        "no": "18",
        "code": "263A",
        "char": "☺",
        "name": "WHITE SMILING FACE\n≊ smiling face",
        "date": "1995ʲʷ",
        "default": "text*",
        "keywords": "face | outlined | relaxed | smile"
    },
    {
        "no": "19",
        "code": "1F642",
        "char": "🙂",
        "name": "SLIGHTLY SMILING FACE",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "face | smile"
    },
    {
        "no": "20",
        "code": "1F917",
        "char": "🤗",
        "name": "HUGGING FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | hug | hugging"
    },
    {
        "no": "21",
        "code": "1F914",
        "char": "🤔",
        "name": "THINKING FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | thinking"
    },
    {
        "no": "22",
        "code": "1F610",
        "char": "😐",
        "name": "NEUTRAL FACE",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "deadpan | face | neutral"
    },
    {
        "no": "23",
        "code": "1F611",
        "char": "😑",
        "name": "EXPRESSIONLESS FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "expressionless | face | inexpressive | unexpressive"
    },
    {
        "no": "24",
        "code": "1F636",
        "char": "😶",
        "name": "FACE WITHOUT MOUTH",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "face | mouth | quiet | silent"
    },
    {
        "no": "25",
        "code": "1F644",
        "char": "🙄",
        "name": "FACE WITH ROLLING EYES",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "eyes | face | rolling"
    },
    {
        "no": "26",
        "code": "1F60F",
        "char": "😏",
        "name": "SMIRKING FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | smirk"
    },
    {
        "no": "27",
        "code": "1F623",
        "char": "😣",
        "name": "PERSEVERING FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | persevere"
    },
    {
        "no": "28",
        "code": "1F625",
        "char": "😥",
        "name": "DISAPPOINTED BUT RELIEVED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "disappointed | face | relieved | whew"
    },
    {
        "no": "29",
        "code": "1F62E",
        "char": "😮",
        "name": "FACE WITH OPEN MOUTH",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | mouth | open | sympathy"
    },
    {
        "no": "30",
        "code": "1F910",
        "char": "🤐",
        "name": "ZIPPER-MOUTH FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | mouth | zipper"
    },
    {
        "no": "31",
        "code": "1F62F",
        "char": "😯",
        "name": "HUSHED FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | hushed | stunned | surprised"
    },
    {
        "no": "32",
        "code": "1F62A",
        "char": "😪",
        "name": "SLEEPY FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | sleep"
    },
    {
        "no": "33",
        "code": "1F62B",
        "char": "😫",
        "name": "TIRED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | tired"
    },
    {
        "no": "34",
        "code": "1F634",
        "char": "😴",
        "name": "SLEEPING FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | sleep | zzz"
    },
    {
        "no": "35",
        "code": "1F60C",
        "char": "😌",
        "name": "RELIEVED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | relieved"
    },
    {
        "no": "36",
        "code": "1F913",
        "char": "🤓",
        "name": "NERD FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | geek | nerd"
    },
    {
        "no": "37",
        "code": "1F61B",
        "char": "😛",
        "name": "FACE WITH STUCK-OUT TONGUE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | tongue"
    },
    {
        "no": "38",
        "code": "1F61C",
        "char": "😜",
        "name": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE\n≊ face with stuck-out tongue & winking eye",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "eye | face | joke | tongue | wink"
    },
    {
        "no": "39",
        "code": "1F61D",
        "char": "😝",
        "name": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES\n≊ face with stuck-out tongue & closed eyes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "eye | face | horrible | taste | tongue"
    },
    {
        "no": "40",
        "code": "1F924",
        "char": "🤤",
        "name": "DROOLING FACE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "drooling | face"
    },
    {
        "no": "41",
        "code": "1F612",
        "char": "😒",
        "name": "UNAMUSED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | unamused | unhappy"
    },
    {
        "no": "42",
        "code": "1F613",
        "char": "😓",
        "name": "FACE WITH COLD SWEAT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cold | face | sweat"
    },
    {
        "no": "43",
        "code": "1F614",
        "char": "😔",
        "name": "PENSIVE FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dejected | face | pensive"
    },
    {
        "no": "44",
        "code": "1F615",
        "char": "😕",
        "name": "CONFUSED FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "confused | face"
    },
    {
        "no": "45",
        "code": "1F643",
        "char": "🙃",
        "name": "UPSIDE-DOWN FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | upside-down"
    },
    {
        "no": "46",
        "code": "1F911",
        "char": "🤑",
        "name": "MONEY-MOUTH FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | money | mouth"
    },
    {
        "no": "47",
        "code": "1F632",
        "char": "😲",
        "name": "ASTONISHED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "astonished | face | shocked | totally"
    },
    {
        "no": "48",
        "code": "2639",
        "char": "☹",
        "name": "WHITE FROWNING FACE\n≊ frowning face",
        "date": "1995ʷ",
        "default": "text*",
        "keywords": "face | frown"
    },
    {
        "no": "49",
        "code": "1F641",
        "char": "🙁",
        "name": "SLIGHTLY FROWNING FACE",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "face | frown"
    },
    {
        "no": "50",
        "code": "1F616",
        "char": "😖",
        "name": "CONFOUNDED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "confounded | face"
    },
    {
        "no": "51",
        "code": "1F61E",
        "char": "😞",
        "name": "DISAPPOINTED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "disappointed | face"
    },
    {
        "no": "52",
        "code": "1F61F",
        "char": "😟",
        "name": "WORRIED FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | worried"
    },
    {
        "no": "53",
        "code": "1F624",
        "char": "😤",
        "name": "FACE WITH LOOK OF TRIUMPH\n≊ face with steam from nose",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | triumph | won"
    },
    {
        "no": "54",
        "code": "1F622",
        "char": "😢",
        "name": "CRYING FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cry | face | sad | tear"
    },
    {
        "no": "55",
        "code": "1F62D",
        "char": "😭",
        "name": "LOUDLY CRYING FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cry | face | sad | sob | tear"
    },
    {
        "no": "56",
        "code": "1F626",
        "char": "😦",
        "name": "FROWNING FACE WITH OPEN MOUTH",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | frown | mouth | open"
    },
    {
        "no": "57",
        "code": "1F627",
        "char": "😧",
        "name": "ANGUISHED FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "anguished | face"
    },
    {
        "no": "58",
        "code": "1F628",
        "char": "😨",
        "name": "FEARFUL FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | fear | fearful | scared"
    },
    {
        "no": "59",
        "code": "1F629",
        "char": "😩",
        "name": "WEARY FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | tired | weary"
    },
    {
        "no": "60",
        "code": "1F62C",
        "char": "😬",
        "name": "GRIMACING FACE",
        "date": "2012ˣ",
        "default": "emoji",
        "keywords": "face | grimace"
    },
    {
        "no": "61",
        "code": "1F630",
        "char": "😰",
        "name": "FACE WITH OPEN MOUTH AND COLD SWEAT\n≊ face with open mouth & cold sweat",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blue | cold | face | mouth | open | rushed | sweat"
    },
    {
        "no": "62",
        "code": "1F631",
        "char": "😱",
        "name": "FACE SCREAMING IN FEAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | fear | fearful | munch | scared | scream"
    },
    {
        "no": "63",
        "code": "1F633",
        "char": "😳",
        "name": "FLUSHED FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dazed | face | flushed"
    },
    {
        "no": "64",
        "code": "1F635",
        "char": "😵",
        "name": "DIZZY FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dizzy | face"
    },
    {
        "no": "65",
        "code": "1F621",
        "char": "😡",
        "name": "POUTING FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "angry | face | mad | pouting | rage | red"
    },
    {
        "no": "66",
        "code": "1F620",
        "char": "😠",
        "name": "ANGRY FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "angry | face | mad"
    },
    {
        "no": "67",
        "code": "1F607",
        "char": "😇",
        "name": "SMILING FACE WITH HALO",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "angel | face | fairy tale | fantasy | halo | innocent | smile"
    },
    {
        "no": "68",
        "code": "1F920",
        "char": "🤠",
        "name": "FACE WITH COWBOY HAT\n≊ cowboy hat face",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "cowboy | cowgirl | face | hat"
    },
    {
        "no": "69",
        "code": "1F921",
        "char": "🤡",
        "name": "CLOWN FACE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "clown | face"
    },
    {
        "no": "70",
        "code": "1F925",
        "char": "🤥",
        "name": "LYING FACE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "face | lie | pinocchio"
    },
    {
        "no": "71",
        "code": "1F637",
        "char": "😷",
        "name": "FACE WITH MEDICAL MASK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cold | doctor | face | mask | medicine | sick"
    },
    {
        "no": "72",
        "code": "1F912",
        "char": "🤒",
        "name": "FACE WITH THERMOMETER",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | ill | sick | thermometer"
    },
    {
        "no": "73",
        "code": "1F915",
        "char": "🤕",
        "name": "FACE WITH HEAD-BANDAGE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "bandage | face | hurt | injury"
    },
    {
        "no": "74",
        "code": "1F922",
        "char": "🤢",
        "name": "NAUSEATED FACE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "face | nauseated | vomit"
    },
    {
        "no": "75",
        "code": "1F927",
        "char": "🤧",
        "name": "SNEEZING FACE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "face | gesundheit | sneeze"
    },
    {
        "no": "76",
        "code": "1F608",
        "char": "😈",
        "name": "SMILING FACE WITH HORNS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "face | fairy tale | fantasy | horns | smile"
    },
    {
        "no": "77",
        "code": "1F47F",
        "char": "👿",
        "name": "IMP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "demon | devil | face | fairy tale | fantasy"
    },
    {
        "no": "78",
        "code": "1F479",
        "char": "👹",
        "name": "JAPANESE OGRE\n≊ ogre",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "creature | face | fairy tale | fantasy | japanese | monster"
    },
    {
        "no": "79",
        "code": "1F47A",
        "char": "👺",
        "name": "JAPANESE GOBLIN\n≊ goblin",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "creature | face | fairy tale | fantasy | japanese | monster"
    },
    {
        "no": "80",
        "code": "1F480",
        "char": "💀",
        "name": "SKULL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | death | face | fairy tale | monster"
    },
    {
        "no": "81",
        "code": "2620",
        "char": "☠",
        "name": "SKULL AND CROSSBONES",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "body | crossbones | death | face | monster | skull"
    },
    {
        "no": "82",
        "code": "1F47B",
        "char": "👻",
        "name": "GHOST",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "creature | face | fairy tale | fantasy | monster"
    },
    {
        "no": "83",
        "code": "1F47D",
        "char": "👽",
        "name": "EXTRATERRESTRIAL ALIEN\n≊ alien",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "creature | extraterrestrial | face | fairy tale | fantasy | monster | space | ufo"
    },
    {
        "no": "84",
        "code": "1F47E",
        "char": "👾",
        "name": "ALIEN MONSTER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "alien | creature | extraterrestrial | face | fairy tale | fantasy | monster | space | ufo"
    },
    {
        "no": "85",
        "code": "1F916",
        "char": "🤖",
        "name": "ROBOT FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | monster | robot"
    },
    {
        "no": "86",
        "code": "1F4A9",
        "char": "💩",
        "name": "PILE OF POO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "comic | dung | face | monster | poo | poop"
    },
    {
        "no": "87",
        "code": "1F63A",
        "char": "😺",
        "name": "SMILING CAT FACE WITH OPEN MOUTH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | face | mouth | open | smile"
    },
    {
        "no": "88",
        "code": "1F638",
        "char": "😸",
        "name": "GRINNING CAT FACE WITH SMILING EYES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | eye | face | grin | smile"
    },
    {
        "no": "89",
        "code": "1F639",
        "char": "😹",
        "name": "CAT FACE WITH TEARS OF JOY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | face | joy | tear"
    },
    {
        "no": "90",
        "code": "1F63B",
        "char": "😻",
        "name": "SMILING CAT FACE WITH HEART-SHAPED EYES\n≊ smiling cat face with heart-eyes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | eye | face | heart | love | smile"
    },
    {
        "no": "91",
        "code": "1F63C",
        "char": "😼",
        "name": "CAT FACE WITH WRY SMILE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | face | ironic | smile | wry"
    },
    {
        "no": "92",
        "code": "1F63D",
        "char": "😽",
        "name": "KISSING CAT FACE WITH CLOSED EYES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | eye | face | kiss"
    },
    {
        "no": "93",
        "code": "1F640",
        "char": "🙀",
        "name": "WEARY CAT FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | face | oh | surprised | weary"
    },
    {
        "no": "94",
        "code": "1F63F",
        "char": "😿",
        "name": "CRYING CAT FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | cry | face | sad | tear"
    },
    {
        "no": "95",
        "code": "1F63E",
        "char": "😾",
        "name": "POUTING CAT FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | face | pouting"
    },
    {
        "no": "96",
        "code": "1F648",
        "char": "🙈",
        "name": "SEE-NO-EVIL MONKEY\n≊ see-no-evil",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "evil | face | forbidden | gesture | monkey | no | not | prohibited | see"
    },
    {
        "no": "97",
        "code": "1F649",
        "char": "🙉",
        "name": "HEAR-NO-EVIL MONKEY\n≊ hear-no-evil",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "evil | face | forbidden | gesture | hear | monkey | no | not | prohibited"
    },
    {
        "no": "98",
        "code": "1F64A",
        "char": "🙊",
        "name": "SPEAK-NO-EVIL MONKEY\n≊ speak-no-evil",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "evil | face | forbidden | gesture | monkey | no | not | prohibited | speak"
    },
    {
        "no": "99",
        "code": "1F466",
        "char": "👦",
        "name": "BOY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "boy | male"
    },
    {
        "no": "100",
        "code": "1F466 1F3FB",
        "char": "👦🏻",
        "name": "boy, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boy | male | type-1-2"
    },
    {
        "no": "101",
        "code": "1F466 1F3FC",
        "char": "👦🏼",
        "name": "boy, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boy | male | type-3"
    },
    {
        "no": "102",
        "code": "1F466 1F3FD",
        "char": "👦🏽",
        "name": "boy, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boy | male | type-4"
    },
    {
        "no": "103",
        "code": "1F466 1F3FE",
        "char": "👦🏾",
        "name": "boy, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boy | male | type-5"
    },
    {
        "no": "104",
        "code": "1F466 1F3FF",
        "char": "👦🏿",
        "name": "boy, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boy | male | type-6"
    },
    {
        "no": "105",
        "code": "1F467",
        "char": "👧",
        "name": "GIRL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "female | maiden | virgin | virgo | zodiac"
    },
    {
        "no": "106",
        "code": "1F467 1F3FB",
        "char": "👧🏻",
        "name": "girl, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | maiden | type-1-2 | virgin | virgo | zodiac"
    },
    {
        "no": "107",
        "code": "1F467 1F3FC",
        "char": "👧🏼",
        "name": "girl, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | maiden | type-3 | virgin | virgo | zodiac"
    },
    {
        "no": "108",
        "code": "1F467 1F3FD",
        "char": "👧🏽",
        "name": "girl, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | maiden | type-4 | virgin | virgo | zodiac"
    },
    {
        "no": "109",
        "code": "1F467 1F3FE",
        "char": "👧🏾",
        "name": "girl, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | maiden | type-5 | virgin | virgo | zodiac"
    },
    {
        "no": "110",
        "code": "1F467 1F3FF",
        "char": "👧🏿",
        "name": "girl, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | maiden | type-6 | virgin | virgo | zodiac"
    },
    {
        "no": "111",
        "code": "1F468",
        "char": "👨",
        "name": "MAN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "male | man"
    },
    {
        "no": "112",
        "code": "1F468 1F3FB",
        "char": "👨🏻",
        "name": "man, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | type-1-2"
    },
    {
        "no": "113",
        "code": "1F468 1F3FC",
        "char": "👨🏼",
        "name": "man, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | type-3"
    },
    {
        "no": "114",
        "code": "1F468 1F3FD",
        "char": "👨🏽",
        "name": "man, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | type-4"
    },
    {
        "no": "115",
        "code": "1F468 1F3FE",
        "char": "👨🏾",
        "name": "man, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | type-5"
    },
    {
        "no": "116",
        "code": "1F468 1F3FF",
        "char": "👨🏿",
        "name": "man, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | type-6"
    },
    {
        "no": "117",
        "code": "1F469",
        "char": "👩",
        "name": "WOMAN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "female | woman"
    },
    {
        "no": "118",
        "code": "1F469 1F3FB",
        "char": "👩🏻",
        "name": "woman, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | type-1-2 | woman"
    },
    {
        "no": "119",
        "code": "1F469 1F3FC",
        "char": "👩🏼",
        "name": "woman, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | type-3 | woman"
    },
    {
        "no": "120",
        "code": "1F469 1F3FD",
        "char": "👩🏽",
        "name": "woman, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | type-4 | woman"
    },
    {
        "no": "121",
        "code": "1F469 1F3FE",
        "char": "👩🏾",
        "name": "woman, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | type-5 | woman"
    },
    {
        "no": "122",
        "code": "1F469 1F3FF",
        "char": "👩🏿",
        "name": "woman, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | type-6 | woman"
    },
    {
        "no": "123",
        "code": "1F474",
        "char": "👴",
        "name": "OLDER MAN\n≊ old man",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "male | man | old"
    },
    {
        "no": "124",
        "code": "1F474 1F3FB",
        "char": "👴🏻",
        "name": "old man, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | old | type-1-2"
    },
    {
        "no": "125",
        "code": "1F474 1F3FC",
        "char": "👴🏼",
        "name": "old man, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | old | type-3"
    },
    {
        "no": "126",
        "code": "1F474 1F3FD",
        "char": "👴🏽",
        "name": "old man, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | old | type-4"
    },
    {
        "no": "127",
        "code": "1F474 1F3FE",
        "char": "👴🏾",
        "name": "old man, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | old | type-5"
    },
    {
        "no": "128",
        "code": "1F474 1F3FF",
        "char": "👴🏿",
        "name": "old man, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "male | man | old | type-6"
    },
    {
        "no": "129",
        "code": "1F475",
        "char": "👵",
        "name": "OLDER WOMAN\n≊ old woman",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "female | old | woman"
    },
    {
        "no": "130",
        "code": "1F475 1F3FB",
        "char": "👵🏻",
        "name": "old woman, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | old | type-1-2 | woman"
    },
    {
        "no": "131",
        "code": "1F475 1F3FC",
        "char": "👵🏼",
        "name": "old woman, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | old | type-3 | woman"
    },
    {
        "no": "132",
        "code": "1F475 1F3FD",
        "char": "👵🏽",
        "name": "old woman, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | old | type-4 | woman"
    },
    {
        "no": "133",
        "code": "1F475 1F3FE",
        "char": "👵🏾",
        "name": "old woman, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | old | type-5 | woman"
    },
    {
        "no": "134",
        "code": "1F475 1F3FF",
        "char": "👵🏿",
        "name": "old woman, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "female | old | type-6 | woman"
    },
    {
        "no": "135",
        "code": "1F476",
        "char": "👶",
        "name": "BABY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "baby"
    },
    {
        "no": "136",
        "code": "1F476 1F3FB",
        "char": "👶🏻",
        "name": "baby, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "baby | type-1-2"
    },
    {
        "no": "137",
        "code": "1F476 1F3FC",
        "char": "👶🏼",
        "name": "baby, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "baby | type-3"
    },
    {
        "no": "138",
        "code": "1F476 1F3FD",
        "char": "👶🏽",
        "name": "baby, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "baby | type-4"
    },
    {
        "no": "139",
        "code": "1F476 1F3FE",
        "char": "👶🏾",
        "name": "baby, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "baby | type-5"
    },
    {
        "no": "140",
        "code": "1F476 1F3FF",
        "char": "👶🏿",
        "name": "baby, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "baby | type-6"
    },
    {
        "no": "141",
        "code": "1F47C",
        "char": "👼",
        "name": "BABY ANGEL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "angel | baby | face | fairy tale | fantasy"
    },
    {
        "no": "142",
        "code": "1F47C 1F3FB",
        "char": "👼🏻",
        "name": "baby angel, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "angel | baby | face | fairy tale | fantasy | type-1-2"
    },
    {
        "no": "143",
        "code": "1F47C 1F3FC",
        "char": "👼🏼",
        "name": "baby angel, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "angel | baby | face | fairy tale | fantasy | type-3"
    },
    {
        "no": "144",
        "code": "1F47C 1F3FD",
        "char": "👼🏽",
        "name": "baby angel, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "angel | baby | face | fairy tale | fantasy | type-4"
    },
    {
        "no": "145",
        "code": "1F47C 1F3FE",
        "char": "👼🏾",
        "name": "baby angel, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "angel | baby | face | fairy tale | fantasy | type-5"
    },
    {
        "no": "146",
        "code": "1F47C 1F3FF",
        "char": "👼🏿",
        "name": "baby angel, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "angel | baby | face | fairy tale | fantasy | type-6"
    },
    {
        "no": "147",
        "code": "1F46E",
        "char": "👮",
        "name": "POLICE OFFICER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cop | officer | police"
    },
    {
        "no": "148",
        "code": "1F46E 1F3FB",
        "char": "👮🏻",
        "name": "police officer, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "cop | officer | police | type-1-2"
    },
    {
        "no": "149",
        "code": "1F46E 1F3FC",
        "char": "👮🏼",
        "name": "police officer, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "cop | officer | police | type-3"
    },
    {
        "no": "150",
        "code": "1F46E 1F3FD",
        "char": "👮🏽",
        "name": "police officer, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "cop | officer | police | type-4"
    },
    {
        "no": "151",
        "code": "1F46E 1F3FE",
        "char": "👮🏾",
        "name": "police officer, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "cop | officer | police | type-5"
    },
    {
        "no": "152",
        "code": "1F46E 1F3FF",
        "char": "👮🏿",
        "name": "police officer, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "cop | officer | police | type-6"
    },
    {
        "no": "153",
        "code": "1F575",
        "char": "🕵",
        "name": "SLEUTH OR SPY\n≊ detective",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "detective | sleuth | spy"
    },
    {
        "no": "154",
        "code": "1F575 1F3FB",
        "char": "🕵🏻",
        "name": "detective, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "detective | sleuth | spy | type-1-2"
    },
    {
        "no": "155",
        "code": "1F575 1F3FC",
        "char": "🕵🏼",
        "name": "detective, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "detective | sleuth | spy | type-3"
    },
    {
        "no": "156",
        "code": "1F575 1F3FD",
        "char": "🕵🏽",
        "name": "detective, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "detective | sleuth | spy | type-4"
    },
    {
        "no": "157",
        "code": "1F575 1F3FE",
        "char": "🕵🏾",
        "name": "detective, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "detective | sleuth | spy | type-5"
    },
    {
        "no": "158",
        "code": "1F575 1F3FF",
        "char": "🕵🏿",
        "name": "detective, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "detective | sleuth | spy | type-6"
    },
    {
        "no": "159",
        "code": "1F482",
        "char": "💂",
        "name": "GUARDSMAN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "guard"
    },
    {
        "no": "160",
        "code": "1F482 1F3FB",
        "char": "💂🏻",
        "name": "guardsman, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "guard | type-1-2"
    },
    {
        "no": "161",
        "code": "1F482 1F3FC",
        "char": "💂🏼",
        "name": "guardsman, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "guard | type-3"
    },
    {
        "no": "162",
        "code": "1F482 1F3FD",
        "char": "💂🏽",
        "name": "guardsman, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "guard | type-4"
    },
    {
        "no": "163",
        "code": "1F482 1F3FE",
        "char": "💂🏾",
        "name": "guardsman, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "guard | type-5"
    },
    {
        "no": "164",
        "code": "1F482 1F3FF",
        "char": "💂🏿",
        "name": "guardsman, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "guard | type-6"
    },
    {
        "no": "165",
        "code": "1F477",
        "char": "👷",
        "name": "CONSTRUCTION WORKER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "construction | hat | worker"
    },
    {
        "no": "166",
        "code": "1F477 1F3FB",
        "char": "👷🏻",
        "name": "construction worker, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "construction | hat | type-1-2 | worker"
    },
    {
        "no": "167",
        "code": "1F477 1F3FC",
        "char": "👷🏼",
        "name": "construction worker, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "construction | hat | type-3 | worker"
    },
    {
        "no": "168",
        "code": "1F477 1F3FD",
        "char": "👷🏽",
        "name": "construction worker, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "construction | hat | type-4 | worker"
    },
    {
        "no": "169",
        "code": "1F477 1F3FE",
        "char": "👷🏾",
        "name": "construction worker, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "construction | hat | type-5 | worker"
    },
    {
        "no": "170",
        "code": "1F477 1F3FF",
        "char": "👷🏿",
        "name": "construction worker, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "construction | hat | type-6 | worker"
    },
    {
        "no": "171",
        "code": "1F473",
        "char": "👳",
        "name": "MAN WITH TURBAN\n≊ person with turban",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "turban"
    },
    {
        "no": "172",
        "code": "1F473 1F3FB",
        "char": "👳🏻",
        "name": "person with turban, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "turban | type-1-2"
    },
    {
        "no": "173",
        "code": "1F473 1F3FC",
        "char": "👳🏼",
        "name": "person with turban, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "turban | type-3"
    },
    {
        "no": "174",
        "code": "1F473 1F3FD",
        "char": "👳🏽",
        "name": "person with turban, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "turban | type-4"
    },
    {
        "no": "175",
        "code": "1F473 1F3FE",
        "char": "👳🏾",
        "name": "person with turban, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "turban | type-5"
    },
    {
        "no": "176",
        "code": "1F473 1F3FF",
        "char": "👳🏿",
        "name": "person with turban, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "turban | type-6"
    },
    {
        "no": "177",
        "code": "1F471",
        "char": "👱",
        "name": "PERSON WITH BLOND HAIR\n≊ blond person",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blond"
    },
    {
        "no": "178",
        "code": "1F471 1F3FB",
        "char": "👱🏻",
        "name": "blond person, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "blond | type-1-2"
    },
    {
        "no": "179",
        "code": "1F471 1F3FC",
        "char": "👱🏼",
        "name": "blond person, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "blond | type-3"
    },
    {
        "no": "180",
        "code": "1F471 1F3FD",
        "char": "👱🏽",
        "name": "blond person, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "blond | type-4"
    },
    {
        "no": "181",
        "code": "1F471 1F3FE",
        "char": "👱🏾",
        "name": "blond person, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "blond | type-5"
    },
    {
        "no": "182",
        "code": "1F471 1F3FF",
        "char": "👱🏿",
        "name": "blond person, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "blond | type-6"
    },
    {
        "no": "183",
        "code": "1F385",
        "char": "🎅",
        "name": "FATHER CHRISTMAS\n≊ santa claus",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | christmas | fairy tale | fantasy | father | santa"
    },
    {
        "no": "184",
        "code": "1F385 1F3FB",
        "char": "🎅🏻",
        "name": "santa claus, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-1-2"
    },
    {
        "no": "185",
        "code": "1F385 1F3FC",
        "char": "🎅🏼",
        "name": "santa claus, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-3"
    },
    {
        "no": "186",
        "code": "1F385 1F3FD",
        "char": "🎅🏽",
        "name": "santa claus, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-4"
    },
    {
        "no": "187",
        "code": "1F385 1F3FE",
        "char": "🎅🏾",
        "name": "santa claus, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-5"
    },
    {
        "no": "188",
        "code": "1F385 1F3FF",
        "char": "🎅🏿",
        "name": "santa claus, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-6"
    },
    {
        "no": "189",
        "code": "1F936",
        "char": "🤶",
        "name": "MOTHER CHRISTMAS",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "christmas | mother | Mrs. Claus"
    },
    {
        "no": "190",
        "code": "1F936 1F3FB",
        "char": "🤶🏻",
        "name": "mother christmas, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "christmas | mother | Mrs. Claus | type-1-2"
    },
    {
        "no": "191",
        "code": "1F936 1F3FC",
        "char": "🤶🏼",
        "name": "mother christmas, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "christmas | mother | Mrs. Claus | type-3"
    },
    {
        "no": "192",
        "code": "1F936 1F3FD",
        "char": "🤶🏽",
        "name": "mother christmas, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "christmas | mother | Mrs. Claus | type-4"
    },
    {
        "no": "193",
        "code": "1F936 1F3FE",
        "char": "🤶🏾",
        "name": "mother christmas, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "christmas | mother | Mrs. Claus | type-5"
    },
    {
        "no": "194",
        "code": "1F936 1F3FF",
        "char": "🤶🏿",
        "name": "mother christmas, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "christmas | mother | Mrs. Claus | type-6"
    },
    {
        "no": "195",
        "code": "1F478",
        "char": "👸",
        "name": "PRINCESS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fairy tale | fantasy"
    },
    {
        "no": "196",
        "code": "1F478 1F3FB",
        "char": "👸🏻",
        "name": "princess, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "fairy tale | fantasy | type-1-2"
    },
    {
        "no": "197",
        "code": "1F478 1F3FC",
        "char": "👸🏼",
        "name": "princess, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "fairy tale | fantasy | type-3"
    },
    {
        "no": "198",
        "code": "1F478 1F3FD",
        "char": "👸🏽",
        "name": "princess, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "fairy tale | fantasy | type-4"
    },
    {
        "no": "199",
        "code": "1F478 1F3FE",
        "char": "👸🏾",
        "name": "princess, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "fairy tale | fantasy | type-5"
    },
    {
        "no": "200",
        "code": "1F478 1F3FF",
        "char": "👸🏿",
        "name": "princess, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "fairy tale | fantasy | type-6"
    },
    {
        "no": "201",
        "code": "1F934",
        "char": "🤴",
        "name": "PRINCE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "prince"
    },
    {
        "no": "202",
        "code": "1F934 1F3FB",
        "char": "🤴🏻",
        "name": "prince, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "prince | type-1-2"
    },
    {
        "no": "203",
        "code": "1F934 1F3FC",
        "char": "🤴🏼",
        "name": "prince, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "prince | type-3"
    },
    {
        "no": "204",
        "code": "1F934 1F3FD",
        "char": "🤴🏽",
        "name": "prince, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "prince | type-4"
    },
    {
        "no": "205",
        "code": "1F934 1F3FE",
        "char": "🤴🏾",
        "name": "prince, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "prince | type-5"
    },
    {
        "no": "206",
        "code": "1F934 1F3FF",
        "char": "🤴🏿",
        "name": "prince, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "prince | type-6"
    },
    {
        "no": "207",
        "code": "1F470",
        "char": "👰",
        "name": "BRIDE WITH VEIL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bride | veil | wedding"
    },
    {
        "no": "208",
        "code": "1F470 1F3FB",
        "char": "👰🏻",
        "name": "bride with veil, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bride | type-1-2 | veil | wedding"
    },
    {
        "no": "209",
        "code": "1F470 1F3FC",
        "char": "👰🏼",
        "name": "bride with veil, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bride | type-3 | veil | wedding"
    },
    {
        "no": "210",
        "code": "1F470 1F3FD",
        "char": "👰🏽",
        "name": "bride with veil, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bride | type-4 | veil | wedding"
    },
    {
        "no": "211",
        "code": "1F470 1F3FE",
        "char": "👰🏾",
        "name": "bride with veil, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bride | type-5 | veil | wedding"
    },
    {
        "no": "212",
        "code": "1F470 1F3FF",
        "char": "👰🏿",
        "name": "bride with veil, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bride | type-6 | veil | wedding"
    },
    {
        "no": "213",
        "code": "1F935",
        "char": "🤵",
        "name": "MAN IN TUXEDO",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "groom | man | tuxedo"
    },
    {
        "no": "214",
        "code": "1F935 1F3FB",
        "char": "🤵🏻",
        "name": "man in tuxedo, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "groom | man | tuxedo | type-1-2"
    },
    {
        "no": "215",
        "code": "1F935 1F3FC",
        "char": "🤵🏼",
        "name": "man in tuxedo, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "groom | man | tuxedo | type-3"
    },
    {
        "no": "216",
        "code": "1F935 1F3FD",
        "char": "🤵🏽",
        "name": "man in tuxedo, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "groom | man | tuxedo | type-4"
    },
    {
        "no": "217",
        "code": "1F935 1F3FE",
        "char": "🤵🏾",
        "name": "man in tuxedo, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "groom | man | tuxedo | type-5"
    },
    {
        "no": "218",
        "code": "1F935 1F3FF",
        "char": "🤵🏿",
        "name": "man in tuxedo, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "groom | man | tuxedo | type-6"
    },
    {
        "no": "219",
        "code": "1F930",
        "char": "🤰",
        "name": "PREGNANT WOMAN",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "pregnant | woman"
    },
    {
        "no": "220",
        "code": "1F930 1F3FB",
        "char": "🤰🏻",
        "name": "pregnant woman, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "pregnant | type-1-2 | woman"
    },
    {
        "no": "221",
        "code": "1F930 1F3FC",
        "char": "🤰🏼",
        "name": "pregnant woman, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "pregnant | type-3 | woman"
    },
    {
        "no": "222",
        "code": "1F930 1F3FD",
        "char": "🤰🏽",
        "name": "pregnant woman, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "pregnant | type-4 | woman"
    },
    {
        "no": "223",
        "code": "1F930 1F3FE",
        "char": "🤰🏾",
        "name": "pregnant woman, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "pregnant | type-5 | woman"
    },
    {
        "no": "224",
        "code": "1F930 1F3FF",
        "char": "🤰🏿",
        "name": "pregnant woman, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "pregnant | type-6 | woman"
    },
    {
        "no": "225",
        "code": "1F472",
        "char": "👲",
        "name": "MAN WITH GUA PI MAO\n≊ man with chinese cap",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "gua pi mao | hat | man"
    },
    {
        "no": "226",
        "code": "1F472 1F3FB",
        "char": "👲🏻",
        "name": "man with chinese cap, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gua pi mao | hat | man | type-1-2"
    },
    {
        "no": "227",
        "code": "1F472 1F3FC",
        "char": "👲🏼",
        "name": "man with chinese cap, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gua pi mao | hat | man | type-3"
    },
    {
        "no": "228",
        "code": "1F472 1F3FD",
        "char": "👲🏽",
        "name": "man with chinese cap, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gua pi mao | hat | man | type-4"
    },
    {
        "no": "229",
        "code": "1F472 1F3FE",
        "char": "👲🏾",
        "name": "man with chinese cap, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gua pi mao | hat | man | type-5"
    },
    {
        "no": "230",
        "code": "1F472 1F3FF",
        "char": "👲🏿",
        "name": "man with chinese cap, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gua pi mao | hat | man | type-6"
    },
    {
        "no": "231",
        "code": "1F64D",
        "char": "🙍",
        "name": "PERSON FROWNING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "frown | gesture"
    },
    {
        "no": "232",
        "code": "1F64D 1F3FB",
        "char": "🙍🏻",
        "name": "person frowning, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "frown | gesture | type-1-2"
    },
    {
        "no": "233",
        "code": "1F64D 1F3FC",
        "char": "🙍🏼",
        "name": "person frowning, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "frown | gesture | type-3"
    },
    {
        "no": "234",
        "code": "1F64D 1F3FD",
        "char": "🙍🏽",
        "name": "person frowning, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "frown | gesture | type-4"
    },
    {
        "no": "235",
        "code": "1F64D 1F3FE",
        "char": "🙍🏾",
        "name": "person frowning, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "frown | gesture | type-5"
    },
    {
        "no": "236",
        "code": "1F64D 1F3FF",
        "char": "🙍🏿",
        "name": "person frowning, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "frown | gesture | type-6"
    },
    {
        "no": "237",
        "code": "1F64E",
        "char": "🙎",
        "name": "PERSON WITH POUTING FACE\n≊ person pouting",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "gesture | pouting"
    },
    {
        "no": "238",
        "code": "1F64E 1F3FB",
        "char": "🙎🏻",
        "name": "person pouting, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | pouting | type-1-2"
    },
    {
        "no": "239",
        "code": "1F64E 1F3FC",
        "char": "🙎🏼",
        "name": "person pouting, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | pouting | type-3"
    },
    {
        "no": "240",
        "code": "1F64E 1F3FD",
        "char": "🙎🏽",
        "name": "person pouting, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | pouting | type-4"
    },
    {
        "no": "241",
        "code": "1F64E 1F3FE",
        "char": "🙎🏾",
        "name": "person pouting, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | pouting | type-5"
    },
    {
        "no": "242",
        "code": "1F64E 1F3FF",
        "char": "🙎🏿",
        "name": "person pouting, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | pouting | type-6"
    },
    {
        "no": "243",
        "code": "1F645",
        "char": "🙅",
        "name": "FACE WITH NO GOOD GESTURE\n≊ person gesturing not ok",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "forbidden | gesture | hand | no | not | prohibited"
    },
    {
        "no": "244",
        "code": "1F645 1F3FB",
        "char": "🙅🏻",
        "name": "person gesturing not ok, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "forbidden | gesture | hand | no | not | prohibited | type-1-2"
    },
    {
        "no": "245",
        "code": "1F645 1F3FC",
        "char": "🙅🏼",
        "name": "person gesturing not ok, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "forbidden | gesture | hand | no | not | prohibited | type-3"
    },
    {
        "no": "246",
        "code": "1F645 1F3FD",
        "char": "🙅🏽",
        "name": "person gesturing not ok, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "forbidden | gesture | hand | no | not | prohibited | type-4"
    },
    {
        "no": "247",
        "code": "1F645 1F3FE",
        "char": "🙅🏾",
        "name": "person gesturing not ok, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "forbidden | gesture | hand | no | not | prohibited | type-5"
    },
    {
        "no": "248",
        "code": "1F645 1F3FF",
        "char": "🙅🏿",
        "name": "person gesturing not ok, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "forbidden | gesture | hand | no | not | prohibited | type-6"
    },
    {
        "no": "249",
        "code": "1F646",
        "char": "🙆",
        "name": "FACE WITH OK GESTURE\n≊ person gesturing ok",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "gesture | hand | ok"
    },
    {
        "no": "250",
        "code": "1F646 1F3FB",
        "char": "🙆🏻",
        "name": "person gesturing ok, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | ok | type-1-2"
    },
    {
        "no": "251",
        "code": "1F646 1F3FC",
        "char": "🙆🏼",
        "name": "person gesturing ok, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | ok | type-3"
    },
    {
        "no": "252",
        "code": "1F646 1F3FD",
        "char": "🙆🏽",
        "name": "person gesturing ok, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | ok | type-4"
    },
    {
        "no": "253",
        "code": "1F646 1F3FE",
        "char": "🙆🏾",
        "name": "person gesturing ok, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | ok | type-5"
    },
    {
        "no": "254",
        "code": "1F646 1F3FF",
        "char": "🙆🏿",
        "name": "person gesturing ok, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | ok | type-6"
    },
    {
        "no": "255",
        "code": "1F481",
        "char": "💁",
        "name": "INFORMATION DESK PERSON\n≊ person tipping hand",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "hand | help | information | sassy | tipping"
    },
    {
        "no": "256",
        "code": "1F481 1F3FB",
        "char": "💁🏻",
        "name": "person tipping hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hand | help | information | sassy | tipping | type-1-2"
    },
    {
        "no": "257",
        "code": "1F481 1F3FC",
        "char": "💁🏼",
        "name": "person tipping hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hand | help | information | sassy | tipping | type-3"
    },
    {
        "no": "258",
        "code": "1F481 1F3FD",
        "char": "💁🏽",
        "name": "person tipping hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hand | help | information | sassy | tipping | type-4"
    },
    {
        "no": "259",
        "code": "1F481 1F3FE",
        "char": "💁🏾",
        "name": "person tipping hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hand | help | information | sassy | tipping | type-5"
    },
    {
        "no": "260",
        "code": "1F481 1F3FF",
        "char": "💁🏿",
        "name": "person tipping hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hand | help | information | sassy | tipping | type-6"
    },
    {
        "no": "261",
        "code": "1F64B",
        "char": "🙋",
        "name": "HAPPY PERSON RAISING ONE HAND\n≊ person raising hand",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "gesture | hand | happy | raised"
    },
    {
        "no": "262",
        "code": "1F64B 1F3FB",
        "char": "🙋🏻",
        "name": "person raising hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | happy | raised | type-1-2"
    },
    {
        "no": "263",
        "code": "1F64B 1F3FC",
        "char": "🙋🏼",
        "name": "person raising hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | happy | raised | type-3"
    },
    {
        "no": "264",
        "code": "1F64B 1F3FD",
        "char": "🙋🏽",
        "name": "person raising hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | happy | raised | type-4"
    },
    {
        "no": "265",
        "code": "1F64B 1F3FE",
        "char": "🙋🏾",
        "name": "person raising hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | happy | raised | type-5"
    },
    {
        "no": "266",
        "code": "1F64B 1F3FF",
        "char": "🙋🏿",
        "name": "person raising hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "gesture | hand | happy | raised | type-6"
    },
    {
        "no": "267",
        "code": "1F647",
        "char": "🙇",
        "name": "PERSON BOWING DEEPLY\n≊ person bowing",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "apology | bow | gesture | sorry"
    },
    {
        "no": "268",
        "code": "1F647 1F3FB",
        "char": "🙇🏻",
        "name": "person bowing, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "apology | bow | gesture | sorry | type-1-2"
    },
    {
        "no": "269",
        "code": "1F647 1F3FC",
        "char": "🙇🏼",
        "name": "person bowing, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "apology | bow | gesture | sorry | type-3"
    },
    {
        "no": "270",
        "code": "1F647 1F3FD",
        "char": "🙇🏽",
        "name": "person bowing, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "apology | bow | gesture | sorry | type-4"
    },
    {
        "no": "271",
        "code": "1F647 1F3FE",
        "char": "🙇🏾",
        "name": "person bowing, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "apology | bow | gesture | sorry | type-5"
    },
    {
        "no": "272",
        "code": "1F647 1F3FF",
        "char": "🙇🏿",
        "name": "person bowing, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "apology | bow | gesture | sorry | type-6"
    },
    {
        "no": "273",
        "code": "1F926",
        "char": "🤦",
        "name": "FACE PALM\n≊ person facepalming",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "disbelief | exasperation | face | palm"
    },
    {
        "no": "274",
        "code": "1F926 1F3FB",
        "char": "🤦🏻",
        "name": "person facepalming, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "disbelief | exasperation | face | palm | type-1-2"
    },
    {
        "no": "275",
        "code": "1F926 1F3FC",
        "char": "🤦🏼",
        "name": "person facepalming, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "disbelief | exasperation | face | palm | type-3"
    },
    {
        "no": "276",
        "code": "1F926 1F3FD",
        "char": "🤦🏽",
        "name": "person facepalming, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "disbelief | exasperation | face | palm | type-4"
    },
    {
        "no": "277",
        "code": "1F926 1F3FE",
        "char": "🤦🏾",
        "name": "person facepalming, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "disbelief | exasperation | face | palm | type-5"
    },
    {
        "no": "278",
        "code": "1F926 1F3FF",
        "char": "🤦🏿",
        "name": "person facepalming, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "disbelief | exasperation | face | palm | type-6"
    },
    {
        "no": "279",
        "code": "1F937",
        "char": "🤷",
        "name": "SHRUG\n≊ person shrugging",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "doubt | ignorance | indifference | shrug"
    },
    {
        "no": "280",
        "code": "1F937 1F3FB",
        "char": "🤷🏻",
        "name": "person shrugging, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "doubt | ignorance | indifference | shrug | type-1-2"
    },
    {
        "no": "281",
        "code": "1F937 1F3FC",
        "char": "🤷🏼",
        "name": "person shrugging, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "doubt | ignorance | indifference | shrug | type-3"
    },
    {
        "no": "282",
        "code": "1F937 1F3FD",
        "char": "🤷🏽",
        "name": "person shrugging, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "doubt | ignorance | indifference | shrug | type-4"
    },
    {
        "no": "283",
        "code": "1F937 1F3FE",
        "char": "🤷🏾",
        "name": "person shrugging, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "doubt | ignorance | indifference | shrug | type-5"
    },
    {
        "no": "284",
        "code": "1F937 1F3FF",
        "char": "🤷🏿",
        "name": "person shrugging, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "doubt | ignorance | indifference | shrug | type-6"
    },
    {
        "no": "285",
        "code": "1F486",
        "char": "💆",
        "name": "FACE MASSAGE\n≊ person getting massage",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | massage | salon"
    },
    {
        "no": "286",
        "code": "1F486 1F3FB",
        "char": "💆🏻",
        "name": "person getting massage, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "face | massage | salon | type-1-2"
    },
    {
        "no": "287",
        "code": "1F486 1F3FC",
        "char": "💆🏼",
        "name": "person getting massage, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "face | massage | salon | type-3"
    },
    {
        "no": "288",
        "code": "1F486 1F3FD",
        "char": "💆🏽",
        "name": "person getting massage, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "face | massage | salon | type-4"
    },
    {
        "no": "289",
        "code": "1F486 1F3FE",
        "char": "💆🏾",
        "name": "person getting massage, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "face | massage | salon | type-5"
    },
    {
        "no": "290",
        "code": "1F486 1F3FF",
        "char": "💆🏿",
        "name": "person getting massage, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "face | massage | salon | type-6"
    },
    {
        "no": "291",
        "code": "1F487",
        "char": "💇",
        "name": "HAIRCUT\n≊ person getting haircut",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "barber | beauty | haircut | parlor"
    },
    {
        "no": "292",
        "code": "1F487 1F3FB",
        "char": "💇🏻",
        "name": "person getting haircut, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "barber | beauty | haircut | parlor | type-1-2"
    },
    {
        "no": "293",
        "code": "1F487 1F3FC",
        "char": "💇🏼",
        "name": "person getting haircut, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "barber | beauty | haircut | parlor | type-3"
    },
    {
        "no": "294",
        "code": "1F487 1F3FD",
        "char": "💇🏽",
        "name": "person getting haircut, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "barber | beauty | haircut | parlor | type-4"
    },
    {
        "no": "295",
        "code": "1F487 1F3FE",
        "char": "💇🏾",
        "name": "person getting haircut, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "barber | beauty | haircut | parlor | type-5"
    },
    {
        "no": "296",
        "code": "1F487 1F3FF",
        "char": "💇🏿",
        "name": "person getting haircut, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "barber | beauty | haircut | parlor | type-6"
    },
    {
        "no": "297",
        "code": "1F6B6",
        "char": "🚶",
        "name": "PEDESTRIAN\n≊ person walking",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "hike | walk | walking"
    },
    {
        "no": "298",
        "code": "1F6B6 1F3FB",
        "char": "🚶🏻",
        "name": "person walking, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hike | type-1-2 | walk | walking"
    },
    {
        "no": "299",
        "code": "1F6B6 1F3FC",
        "char": "🚶🏼",
        "name": "person walking, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hike | type-3 | walk | walking"
    },
    {
        "no": "300",
        "code": "1F6B6 1F3FD",
        "char": "🚶🏽",
        "name": "person walking, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hike | type-4 | walk | walking"
    },
    {
        "no": "301",
        "code": "1F6B6 1F3FE",
        "char": "🚶🏾",
        "name": "person walking, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hike | type-5 | walk | walking"
    },
    {
        "no": "302",
        "code": "1F6B6 1F3FF",
        "char": "🚶🏿",
        "name": "person walking, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "hike | type-6 | walk | walking"
    },
    {
        "no": "303",
        "code": "1F3C3",
        "char": "🏃",
        "name": "RUNNER\n≊ person running",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "marathon | running"
    },
    {
        "no": "304",
        "code": "1F3C3 1F3FB",
        "char": "🏃🏻",
        "name": "person running, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "marathon | running | type-1-2"
    },
    {
        "no": "305",
        "code": "1F3C3 1F3FC",
        "char": "🏃🏼",
        "name": "person running, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "marathon | running | type-3"
    },
    {
        "no": "306",
        "code": "1F3C3 1F3FD",
        "char": "🏃🏽",
        "name": "person running, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "marathon | running | type-4"
    },
    {
        "no": "307",
        "code": "1F3C3 1F3FE",
        "char": "🏃🏾",
        "name": "person running, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "marathon | running | type-5"
    },
    {
        "no": "308",
        "code": "1F3C3 1F3FF",
        "char": "🏃🏿",
        "name": "person running, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "marathon | running | type-6"
    },
    {
        "no": "309",
        "code": "1F483",
        "char": "💃",
        "name": "DANCER\n≊ woman dancing",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dancing | woman"
    },
    {
        "no": "310",
        "code": "1F483 1F3FB",
        "char": "💃🏻",
        "name": "woman dancing, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "dancing | type-1-2 | woman"
    },
    {
        "no": "311",
        "code": "1F483 1F3FC",
        "char": "💃🏼",
        "name": "woman dancing, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "dancing | type-3 | woman"
    },
    {
        "no": "312",
        "code": "1F483 1F3FD",
        "char": "💃🏽",
        "name": "woman dancing, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "dancing | type-4 | woman"
    },
    {
        "no": "313",
        "code": "1F483 1F3FE",
        "char": "💃🏾",
        "name": "woman dancing, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "dancing | type-5 | woman"
    },
    {
        "no": "314",
        "code": "1F483 1F3FF",
        "char": "💃🏿",
        "name": "woman dancing, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "dancing | type-6 | woman"
    },
    {
        "no": "315",
        "code": "1F57A",
        "char": "🕺",
        "name": "MAN DANCING",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "dance | man"
    },
    {
        "no": "316",
        "code": "1F57A 1F3FB",
        "char": "🕺🏻",
        "name": "man dancing, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "dance | man | type-1-2"
    },
    {
        "no": "317",
        "code": "1F57A 1F3FC",
        "char": "🕺🏼",
        "name": "man dancing, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "dance | man | type-3"
    },
    {
        "no": "318",
        "code": "1F57A 1F3FD",
        "char": "🕺🏽",
        "name": "man dancing, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "dance | man | type-4"
    },
    {
        "no": "319",
        "code": "1F57A 1F3FE",
        "char": "🕺🏾",
        "name": "man dancing, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "dance | man | type-5"
    },
    {
        "no": "320",
        "code": "1F57A 1F3FF",
        "char": "🕺🏿",
        "name": "man dancing, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "dance | man | type-6"
    },
    {
        "no": "321",
        "code": "1F46F",
        "char": "👯",
        "name": "WOMAN WITH BUNNY EARS\n≊ people partying",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bunny | dancer | ear | girl | woman"
    },
    {
        "no": "322",
        "code": "1F574",
        "char": "🕴",
        "name": "MAN IN BUSINESS SUIT LEVITATING",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "business | man | suit"
    },
    {
        "no": "323",
        "code": "1F5E3",
        "char": "🗣",
        "name": "SPEAKING HEAD IN SILHOUETTE\n≊ speaking head",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "face | head | silhouette | speak | speaking"
    },
    {
        "no": "324",
        "code": "1F464",
        "char": "👤",
        "name": "BUST IN SILHOUETTE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bust | silhouette"
    },
    {
        "no": "325",
        "code": "1F465",
        "char": "👥",
        "name": "BUSTS IN SILHOUETTE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bust | silhouette"
    },
    {
        "no": "326",
        "code": "1F46B",
        "char": "👫",
        "name": "MAN AND WOMAN HOLDING HANDS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "couple | hand | hold | man | woman"
    },
    {
        "no": "327",
        "code": "1F46C",
        "char": "👬",
        "name": "TWO MEN HOLDING HANDS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "couple | gemini | hand | hold | man | twins | zodiac"
    },
    {
        "no": "328",
        "code": "1F46D",
        "char": "👭",
        "name": "TWO WOMEN HOLDING HANDS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "couple | hand | hold | woman"
    },
    {
        "no": "329",
        "code": "1F48F",
        "char": "💏",
        "name": "KISS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "couple"
    },
    {
        "no": "330",
        "code": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F468",
        "char": "👩‍❤️‍💋‍👨",
        "name": "kiss, woman, man",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "couple | female | male | man | woman"
    },
    {
        "no": "331",
        "code": "1F468 200D 2764 FE0F 200D 1F48B 200D 1F468",
        "char": "👨‍❤️‍💋‍👨",
        "name": "kiss, man, man",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "couple | male | man"
    },
    {
        "no": "332",
        "code": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F469",
        "char": "👩‍❤️‍💋‍👩",
        "name": "kiss, woman, woman",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "couple | female | woman"
    },
    {
        "no": "333",
        "code": "1F491",
        "char": "💑",
        "name": "COUPLE WITH HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "couple | heart | love"
    },
    {
        "no": "334",
        "code": "1F469 200D 2764 FE0F 200D 1F468",
        "char": "👩‍❤️‍👨",
        "name": "couple with heart, woman, man",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "couple | female | heart | love | male | man | woman"
    },
    {
        "no": "335",
        "code": "1F468 200D 2764 FE0F 200D 1F468",
        "char": "👨‍❤️‍👨",
        "name": "couple with heart, man, man",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "couple | heart | love | male | man"
    },
    {
        "no": "336",
        "code": "1F469 200D 2764 FE0F 200D 1F469",
        "char": "👩‍❤️‍👩",
        "name": "couple with heart, woman, woman",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "couple | female | heart | love | woman"
    },
    {
        "no": "337",
        "code": "1F46A",
        "char": "👪",
        "name": "FAMILY",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "child | father | mother"
    },
    {
        "no": "338",
        "code": "1F468 200D 1F469 200D 1F466",
        "char": "👨‍👩‍👦",
        "name": "family, man, woman, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | male | man | mother | woman"
    },
    {
        "no": "339",
        "code": "1F468 200D 1F469 200D 1F467",
        "char": "👨‍👩‍👧",
        "name": "family, man, woman, girl",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | woman | zodiac"
    },
    {
        "no": "340",
        "code": "1F468 200D 1F469 200D 1F467 200D 1F466",
        "char": "👨‍👩‍👧‍👦",
        "name": "family, man, woman, girl, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | maiden | male | man | mother | virgin | virgo | woman | zodiac"
    },
    {
        "no": "341",
        "code": "1F468 200D 1F469 200D 1F466 200D 1F466",
        "char": "👨‍👩‍👦‍👦",
        "name": "family, man, woman, boy, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | male | man | mother | woman"
    },
    {
        "no": "342",
        "code": "1F468 200D 1F469 200D 1F467 200D 1F467",
        "char": "👨‍👩‍👧‍👧",
        "name": "family, man, woman, girl, girl",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | woman | zodiac"
    },
    {
        "no": "343",
        "code": "1F468 200D 1F468 200D 1F466",
        "char": "👨‍👨‍👦",
        "name": "family, man, man, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | male | man | mother"
    },
    {
        "no": "344",
        "code": "1F468 200D 1F468 200D 1F467",
        "char": "👨‍👨‍👧",
        "name": "family, man, man, girl",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | zodiac"
    },
    {
        "no": "345",
        "code": "1F468 200D 1F468 200D 1F467 200D 1F466",
        "char": "👨‍👨‍👧‍👦",
        "name": "family, man, man, girl, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | maiden | male | man | mother | virgin | virgo | zodiac"
    },
    {
        "no": "346",
        "code": "1F468 200D 1F468 200D 1F466 200D 1F466",
        "char": "👨‍👨‍👦‍👦",
        "name": "family, man, man, boy, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | male | man | mother"
    },
    {
        "no": "347",
        "code": "1F468 200D 1F468 200D 1F467 200D 1F467",
        "char": "👨‍👨‍👧‍👧",
        "name": "family, man, man, girl, girl",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | zodiac"
    },
    {
        "no": "348",
        "code": "1F469 200D 1F469 200D 1F466",
        "char": "👩‍👩‍👦",
        "name": "family, woman, woman, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | male | mother | woman"
    },
    {
        "no": "349",
        "code": "1F469 200D 1F469 200D 1F467",
        "char": "👩‍👩‍👧",
        "name": "family, woman, woman, girl",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "child | father | female | maiden | mother | virgin | virgo | woman | zodiac"
    },
    {
        "no": "350",
        "code": "1F469 200D 1F469 200D 1F467 200D 1F466",
        "char": "👩‍👩‍👧‍👦",
        "name": "family, woman, woman, girl, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | maiden | male | mother | virgin | virgo | woman | zodiac"
    },
    {
        "no": "351",
        "code": "1F469 200D 1F469 200D 1F466 200D 1F466",
        "char": "👩‍👩‍👦‍👦",
        "name": "family, woman, woman, boy, boy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "boy | child | father | female | male | mother | woman"
    },
    {
        "no": "352",
        "code": "1F469 200D 1F469 200D 1F467 200D 1F467",
        "char": "👩‍👩‍👧‍👧",
        "name": "family, woman, woman, girl, girl",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "child | father | female | maiden | mother | virgin | virgo | woman | zodiac"
    },
    {
        "no": "353",
        "code": "1F3FB",
        "char": "🏻",
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-1-2\n≊ type-1-2",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "emoji modifier | fitzpatrick | skin | tone"
    },
    {
        "no": "354",
        "code": "1F3FC",
        "char": "🏼",
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-3\n≊ type-3",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "emoji modifier | fitzpatrick | skin | tone"
    },
    {
        "no": "355",
        "code": "1F3FD",
        "char": "🏽",
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-4\n≊ type-4",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "emoji modifier | fitzpatrick | skin | tone"
    },
    {
        "no": "356",
        "code": "1F3FE",
        "char": "🏾",
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-5\n≊ type-5",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "emoji modifier | fitzpatrick | skin | tone"
    },
    {
        "no": "357",
        "code": "1F3FF",
        "char": "🏿",
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-6\n≊ type-6",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "emoji modifier | fitzpatrick | skin | tone"
    },
    {
        "no": "358",
        "code": "1F4AA",
        "char": "💪",
        "name": "FLEXED BICEPS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "biceps | body | comic | flex | muscle"
    },
    {
        "no": "359",
        "code": "1F4AA 1F3FB",
        "char": "💪🏻",
        "name": "flexed biceps, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "biceps | body | comic | flex | muscle | type-1-2"
    },
    {
        "no": "360",
        "code": "1F4AA 1F3FC",
        "char": "💪🏼",
        "name": "flexed biceps, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "biceps | body | comic | flex | muscle | type-3"
    },
    {
        "no": "361",
        "code": "1F4AA 1F3FD",
        "char": "💪🏽",
        "name": "flexed biceps, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "biceps | body | comic | flex | muscle | type-4"
    },
    {
        "no": "362",
        "code": "1F4AA 1F3FE",
        "char": "💪🏾",
        "name": "flexed biceps, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "biceps | body | comic | flex | muscle | type-5"
    },
    {
        "no": "363",
        "code": "1F4AA 1F3FF",
        "char": "💪🏿",
        "name": "flexed biceps, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "biceps | body | comic | flex | muscle | type-6"
    },
    {
        "no": "364",
        "code": "1F933",
        "char": "🤳",
        "name": "SELFIE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "camera | phone | selfie"
    },
    {
        "no": "365",
        "code": "1F933 1F3FB",
        "char": "🤳🏻",
        "name": "selfie, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "camera | phone | selfie | type-1-2"
    },
    {
        "no": "366",
        "code": "1F933 1F3FC",
        "char": "🤳🏼",
        "name": "selfie, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "camera | phone | selfie | type-3"
    },
    {
        "no": "367",
        "code": "1F933 1F3FD",
        "char": "🤳🏽",
        "name": "selfie, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "camera | phone | selfie | type-4"
    },
    {
        "no": "368",
        "code": "1F933 1F3FE",
        "char": "🤳🏾",
        "name": "selfie, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "camera | phone | selfie | type-5"
    },
    {
        "no": "369",
        "code": "1F933 1F3FF",
        "char": "🤳🏿",
        "name": "selfie, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "camera | phone | selfie | type-6"
    },
    {
        "no": "370",
        "code": "1F448",
        "char": "👈",
        "name": "WHITE LEFT POINTING BACKHAND INDEX\n≊ backhand index pointing left",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "backhand | body | finger | hand | index | point"
    },
    {
        "no": "371",
        "code": "1F448 1F3FB",
        "char": "👈🏻",
        "name": "backhand index pointing left, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-1-2"
    },
    {
        "no": "372",
        "code": "1F448 1F3FC",
        "char": "👈🏼",
        "name": "backhand index pointing left, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-3"
    },
    {
        "no": "373",
        "code": "1F448 1F3FD",
        "char": "👈🏽",
        "name": "backhand index pointing left, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-4"
    },
    {
        "no": "374",
        "code": "1F448 1F3FE",
        "char": "👈🏾",
        "name": "backhand index pointing left, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-5"
    },
    {
        "no": "375",
        "code": "1F448 1F3FF",
        "char": "👈🏿",
        "name": "backhand index pointing left, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-6"
    },
    {
        "no": "376",
        "code": "1F449",
        "char": "👉",
        "name": "WHITE RIGHT POINTING BACKHAND INDEX\n≊ backhand index pointing right",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "backhand | body | finger | hand | index | point"
    },
    {
        "no": "377",
        "code": "1F449 1F3FB",
        "char": "👉🏻",
        "name": "backhand index pointing right, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-1-2"
    },
    {
        "no": "378",
        "code": "1F449 1F3FC",
        "char": "👉🏼",
        "name": "backhand index pointing right, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-3"
    },
    {
        "no": "379",
        "code": "1F449 1F3FD",
        "char": "👉🏽",
        "name": "backhand index pointing right, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-4"
    },
    {
        "no": "380",
        "code": "1F449 1F3FE",
        "char": "👉🏾",
        "name": "backhand index pointing right, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-5"
    },
    {
        "no": "381",
        "code": "1F449 1F3FF",
        "char": "👉🏿",
        "name": "backhand index pointing right, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-6"
    },
    {
        "no": "382",
        "code": "261D",
        "char": "☝",
        "name": "WHITE UP POINTING INDEX\n≊ index pointing up",
        "date": "1995ʲʷ",
        "default": "text*",
        "keywords": "body | finger | hand | index | point | up"
    },
    {
        "no": "383",
        "code": "261D 1F3FB",
        "char": "☝🏻",
        "name": "index pointing up, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | index | point | type-1-2 | up"
    },
    {
        "no": "384",
        "code": "261D 1F3FC",
        "char": "☝🏼",
        "name": "index pointing up, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | index | point | type-3 | up"
    },
    {
        "no": "385",
        "code": "261D 1F3FD",
        "char": "☝🏽",
        "name": "index pointing up, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | index | point | type-4 | up"
    },
    {
        "no": "386",
        "code": "261D 1F3FE",
        "char": "☝🏾",
        "name": "index pointing up, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | index | point | type-5 | up"
    },
    {
        "no": "387",
        "code": "261D 1F3FF",
        "char": "☝🏿",
        "name": "index pointing up, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | index | point | type-6 | up"
    },
    {
        "no": "388",
        "code": "1F446",
        "char": "👆",
        "name": "WHITE UP POINTING BACKHAND INDEX\n≊ backhand index pointing up",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "backhand | body | finger | hand | index | point | up"
    },
    {
        "no": "389",
        "code": "1F446 1F3FB",
        "char": "👆🏻",
        "name": "backhand index pointing up, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-1-2 | up"
    },
    {
        "no": "390",
        "code": "1F446 1F3FC",
        "char": "👆🏼",
        "name": "backhand index pointing up, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-3 | up"
    },
    {
        "no": "391",
        "code": "1F446 1F3FD",
        "char": "👆🏽",
        "name": "backhand index pointing up, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-4 | up"
    },
    {
        "no": "392",
        "code": "1F446 1F3FE",
        "char": "👆🏾",
        "name": "backhand index pointing up, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-5 | up"
    },
    {
        "no": "393",
        "code": "1F446 1F3FF",
        "char": "👆🏿",
        "name": "backhand index pointing up, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | finger | hand | index | point | type-6 | up"
    },
    {
        "no": "394",
        "code": "1F595",
        "char": "🖕",
        "name": "REVERSED HAND WITH MIDDLE FINGER EXTENDED\n≊ middle finger",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "body | finger | hand"
    },
    {
        "no": "395",
        "code": "1F595 1F3FB",
        "char": "🖕🏻",
        "name": "middle finger, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | type-1-2"
    },
    {
        "no": "396",
        "code": "1F595 1F3FC",
        "char": "🖕🏼",
        "name": "middle finger, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | type-3"
    },
    {
        "no": "397",
        "code": "1F595 1F3FD",
        "char": "🖕🏽",
        "name": "middle finger, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | type-4"
    },
    {
        "no": "398",
        "code": "1F595 1F3FE",
        "char": "🖕🏾",
        "name": "middle finger, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | type-5"
    },
    {
        "no": "399",
        "code": "1F595 1F3FF",
        "char": "🖕🏿",
        "name": "middle finger, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | type-6"
    },
    {
        "no": "400",
        "code": "1F447",
        "char": "👇",
        "name": "WHITE DOWN POINTING BACKHAND INDEX\n≊ backhand index pointing down",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "backhand | body | down | finger | hand | index | point"
    },
    {
        "no": "401",
        "code": "1F447 1F3FB",
        "char": "👇🏻",
        "name": "backhand index pointing down, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | down | finger | hand | index | point | type-1-2"
    },
    {
        "no": "402",
        "code": "1F447 1F3FC",
        "char": "👇🏼",
        "name": "backhand index pointing down, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | down | finger | hand | index | point | type-3"
    },
    {
        "no": "403",
        "code": "1F447 1F3FD",
        "char": "👇🏽",
        "name": "backhand index pointing down, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | down | finger | hand | index | point | type-4"
    },
    {
        "no": "404",
        "code": "1F447 1F3FE",
        "char": "👇🏾",
        "name": "backhand index pointing down, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | down | finger | hand | index | point | type-5"
    },
    {
        "no": "405",
        "code": "1F447 1F3FF",
        "char": "👇🏿",
        "name": "backhand index pointing down, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "backhand | body | down | finger | hand | index | point | type-6"
    },
    {
        "no": "406",
        "code": "270C",
        "char": "✌",
        "name": "VICTORY HAND",
        "date": "1995ᶻʲʷ",
        "default": "text*",
        "keywords": "body | hand | v | victory"
    },
    {
        "no": "407",
        "code": "270C 1F3FB",
        "char": "✌🏻",
        "name": "victory hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-1-2 | v | victory"
    },
    {
        "no": "408",
        "code": "270C 1F3FC",
        "char": "✌🏼",
        "name": "victory hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-3 | v | victory"
    },
    {
        "no": "409",
        "code": "270C 1F3FD",
        "char": "✌🏽",
        "name": "victory hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-4 | v | victory"
    },
    {
        "no": "410",
        "code": "270C 1F3FE",
        "char": "✌🏾",
        "name": "victory hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-5 | v | victory"
    },
    {
        "no": "411",
        "code": "270C 1F3FF",
        "char": "✌🏿",
        "name": "victory hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-6 | v | victory"
    },
    {
        "no": "412",
        "code": "1F91E",
        "char": "🤞",
        "name": "HAND WITH INDEX AND MIDDLE FINGERS CROSSED\n≊ crossed fingers",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "cross | finger | hand | luck"
    },
    {
        "no": "413",
        "code": "1F91E 1F3FB",
        "char": "🤞🏻",
        "name": "crossed fingers, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cross | finger | hand | luck | type-1-2"
    },
    {
        "no": "414",
        "code": "1F91E 1F3FC",
        "char": "🤞🏼",
        "name": "crossed fingers, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cross | finger | hand | luck | type-3"
    },
    {
        "no": "415",
        "code": "1F91E 1F3FD",
        "char": "🤞🏽",
        "name": "crossed fingers, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cross | finger | hand | luck | type-4"
    },
    {
        "no": "416",
        "code": "1F91E 1F3FE",
        "char": "🤞🏾",
        "name": "crossed fingers, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cross | finger | hand | luck | type-5"
    },
    {
        "no": "417",
        "code": "1F91E 1F3FF",
        "char": "🤞🏿",
        "name": "crossed fingers, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cross | finger | hand | luck | type-6"
    },
    {
        "no": "418",
        "code": "1F596",
        "char": "🖖",
        "name": "RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS\n≊ vulcan salute",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "body | finger | hand | spock | vulcan"
    },
    {
        "no": "419",
        "code": "1F596 1F3FB",
        "char": "🖖🏻",
        "name": "vulcan salute, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | spock | type-1-2 | vulcan"
    },
    {
        "no": "420",
        "code": "1F596 1F3FC",
        "char": "🖖🏼",
        "name": "vulcan salute, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | spock | type-3 | vulcan"
    },
    {
        "no": "421",
        "code": "1F596 1F3FD",
        "char": "🖖🏽",
        "name": "vulcan salute, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | spock | type-4 | vulcan"
    },
    {
        "no": "422",
        "code": "1F596 1F3FE",
        "char": "🖖🏾",
        "name": "vulcan salute, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | spock | type-5 | vulcan"
    },
    {
        "no": "423",
        "code": "1F596 1F3FF",
        "char": "🖖🏿",
        "name": "vulcan salute, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | spock | type-6 | vulcan"
    },
    {
        "no": "424",
        "code": "1F918",
        "char": "🤘",
        "name": "SIGN OF THE HORNS",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "body | finger | hand | horns | rock-on"
    },
    {
        "no": "425",
        "code": "1F918 1F3FB",
        "char": "🤘🏻",
        "name": "sign of the horns, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | horns | rock-on | type-1-2"
    },
    {
        "no": "426",
        "code": "1F918 1F3FC",
        "char": "🤘🏼",
        "name": "sign of the horns, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | horns | rock-on | type-3"
    },
    {
        "no": "427",
        "code": "1F918 1F3FD",
        "char": "🤘🏽",
        "name": "sign of the horns, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | horns | rock-on | type-4"
    },
    {
        "no": "428",
        "code": "1F918 1F3FE",
        "char": "🤘🏾",
        "name": "sign of the horns, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | horns | rock-on | type-5"
    },
    {
        "no": "429",
        "code": "1F918 1F3FF",
        "char": "🤘🏿",
        "name": "sign of the horns, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | horns | rock-on | type-6"
    },
    {
        "no": "430",
        "code": "1F919",
        "char": "🤙",
        "name": "CALL ME HAND",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "call | hand"
    },
    {
        "no": "431",
        "code": "1F919 1F3FB",
        "char": "🤙🏻",
        "name": "call me hand, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "call | hand | type-1-2"
    },
    {
        "no": "432",
        "code": "1F919 1F3FC",
        "char": "🤙🏼",
        "name": "call me hand, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "call | hand | type-3"
    },
    {
        "no": "433",
        "code": "1F919 1F3FD",
        "char": "🤙🏽",
        "name": "call me hand, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "call | hand | type-4"
    },
    {
        "no": "434",
        "code": "1F919 1F3FE",
        "char": "🤙🏾",
        "name": "call me hand, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "call | hand | type-5"
    },
    {
        "no": "435",
        "code": "1F919 1F3FF",
        "char": "🤙🏿",
        "name": "call me hand, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "call | hand | type-6"
    },
    {
        "no": "436",
        "code": "1F590",
        "char": "🖐",
        "name": "RAISED HAND WITH FINGERS SPLAYED",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "body | finger | hand | splayed"
    },
    {
        "no": "437",
        "code": "1F590 1F3FB",
        "char": "🖐🏻",
        "name": "raised hand with fingers splayed, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | splayed | type-1-2"
    },
    {
        "no": "438",
        "code": "1F590 1F3FC",
        "char": "🖐🏼",
        "name": "raised hand with fingers splayed, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | splayed | type-3"
    },
    {
        "no": "439",
        "code": "1F590 1F3FD",
        "char": "🖐🏽",
        "name": "raised hand with fingers splayed, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | splayed | type-4"
    },
    {
        "no": "440",
        "code": "1F590 1F3FE",
        "char": "🖐🏾",
        "name": "raised hand with fingers splayed, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | splayed | type-5"
    },
    {
        "no": "441",
        "code": "1F590 1F3FF",
        "char": "🖐🏿",
        "name": "raised hand with fingers splayed, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | finger | hand | splayed | type-6"
    },
    {
        "no": "442",
        "code": "270B",
        "char": "✋",
        "name": "RAISED HAND",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | hand"
    },
    {
        "no": "443",
        "code": "270B 1F3FB",
        "char": "✋🏻",
        "name": "raised hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-1-2"
    },
    {
        "no": "444",
        "code": "270B 1F3FC",
        "char": "✋🏼",
        "name": "raised hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-3"
    },
    {
        "no": "445",
        "code": "270B 1F3FD",
        "char": "✋🏽",
        "name": "raised hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-4"
    },
    {
        "no": "446",
        "code": "270B 1F3FE",
        "char": "✋🏾",
        "name": "raised hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-5"
    },
    {
        "no": "447",
        "code": "270B 1F3FF",
        "char": "✋🏿",
        "name": "raised hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-6"
    },
    {
        "no": "448",
        "code": "1F44C",
        "char": "👌",
        "name": "OK HAND SIGN\n≊ ok hand",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | hand | ok"
    },
    {
        "no": "449",
        "code": "1F44C 1F3FB",
        "char": "👌🏻",
        "name": "ok hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | ok | type-1-2"
    },
    {
        "no": "450",
        "code": "1F44C 1F3FC",
        "char": "👌🏼",
        "name": "ok hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | ok | type-3"
    },
    {
        "no": "451",
        "code": "1F44C 1F3FD",
        "char": "👌🏽",
        "name": "ok hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | ok | type-4"
    },
    {
        "no": "452",
        "code": "1F44C 1F3FE",
        "char": "👌🏾",
        "name": "ok hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | ok | type-5"
    },
    {
        "no": "453",
        "code": "1F44C 1F3FF",
        "char": "👌🏿",
        "name": "ok hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | ok | type-6"
    },
    {
        "no": "454",
        "code": "1F44D",
        "char": "👍",
        "name": "THUMBS UP SIGN\n≊ thumbs up",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "+1 | body | hand | thumb | up"
    },
    {
        "no": "455",
        "code": "1F44D 1F3FB",
        "char": "👍🏻",
        "name": "thumbs up, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "+1 | body | hand | thumb | type-1-2 | up"
    },
    {
        "no": "456",
        "code": "1F44D 1F3FC",
        "char": "👍🏼",
        "name": "thumbs up, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "+1 | body | hand | thumb | type-3 | up"
    },
    {
        "no": "457",
        "code": "1F44D 1F3FD",
        "char": "👍🏽",
        "name": "thumbs up, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "+1 | body | hand | thumb | type-4 | up"
    },
    {
        "no": "458",
        "code": "1F44D 1F3FE",
        "char": "👍🏾",
        "name": "thumbs up, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "+1 | body | hand | thumb | type-5 | up"
    },
    {
        "no": "459",
        "code": "1F44D 1F3FF",
        "char": "👍🏿",
        "name": "thumbs up, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "+1 | body | hand | thumb | type-6 | up"
    },
    {
        "no": "460",
        "code": "1F44E",
        "char": "👎",
        "name": "THUMBS DOWN SIGN\n≊ thumbs down",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "-1 | body | down | hand | thumb"
    },
    {
        "no": "461",
        "code": "1F44E 1F3FB",
        "char": "👎🏻",
        "name": "thumbs down, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "-1 | body | down | hand | thumb | type-1-2"
    },
    {
        "no": "462",
        "code": "1F44E 1F3FC",
        "char": "👎🏼",
        "name": "thumbs down, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "-1 | body | down | hand | thumb | type-3"
    },
    {
        "no": "463",
        "code": "1F44E 1F3FD",
        "char": "👎🏽",
        "name": "thumbs down, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "-1 | body | down | hand | thumb | type-4"
    },
    {
        "no": "464",
        "code": "1F44E 1F3FE",
        "char": "👎🏾",
        "name": "thumbs down, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "-1 | body | down | hand | thumb | type-5"
    },
    {
        "no": "465",
        "code": "1F44E 1F3FF",
        "char": "👎🏿",
        "name": "thumbs down, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "-1 | body | down | hand | thumb | type-6"
    },
    {
        "no": "466",
        "code": "270A",
        "char": "✊",
        "name": "RAISED FIST",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | clenched | fist | hand | punch"
    },
    {
        "no": "467",
        "code": "270A 1F3FB",
        "char": "✊🏻",
        "name": "raised fist, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-1-2"
    },
    {
        "no": "468",
        "code": "270A 1F3FC",
        "char": "✊🏼",
        "name": "raised fist, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-3"
    },
    {
        "no": "469",
        "code": "270A 1F3FD",
        "char": "✊🏽",
        "name": "raised fist, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-4"
    },
    {
        "no": "470",
        "code": "270A 1F3FE",
        "char": "✊🏾",
        "name": "raised fist, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-5"
    },
    {
        "no": "471",
        "code": "270A 1F3FF",
        "char": "✊🏿",
        "name": "raised fist, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-6"
    },
    {
        "no": "472",
        "code": "1F44A",
        "char": "👊",
        "name": "FISTED HAND SIGN\n≊ oncoming fist",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | clenched | fist | hand | punch"
    },
    {
        "no": "473",
        "code": "1F44A 1F3FB",
        "char": "👊🏻",
        "name": "oncoming fist, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-1-2"
    },
    {
        "no": "474",
        "code": "1F44A 1F3FC",
        "char": "👊🏼",
        "name": "oncoming fist, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-3"
    },
    {
        "no": "475",
        "code": "1F44A 1F3FD",
        "char": "👊🏽",
        "name": "oncoming fist, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-4"
    },
    {
        "no": "476",
        "code": "1F44A 1F3FE",
        "char": "👊🏾",
        "name": "oncoming fist, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-5"
    },
    {
        "no": "477",
        "code": "1F44A 1F3FF",
        "char": "👊🏿",
        "name": "oncoming fist, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clenched | fist | hand | punch | type-6"
    },
    {
        "no": "478",
        "code": "1F91B",
        "char": "🤛",
        "name": "LEFT-FACING FIST",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "fist | leftwards"
    },
    {
        "no": "479",
        "code": "1F91B 1F3FB",
        "char": "🤛🏻",
        "name": "left-facing fist, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | leftwards | type-1-2"
    },
    {
        "no": "480",
        "code": "1F91B 1F3FC",
        "char": "🤛🏼",
        "name": "left-facing fist, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | leftwards | type-3"
    },
    {
        "no": "481",
        "code": "1F91B 1F3FD",
        "char": "🤛🏽",
        "name": "left-facing fist, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | leftwards | type-4"
    },
    {
        "no": "482",
        "code": "1F91B 1F3FE",
        "char": "🤛🏾",
        "name": "left-facing fist, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | leftwards | type-5"
    },
    {
        "no": "483",
        "code": "1F91B 1F3FF",
        "char": "🤛🏿",
        "name": "left-facing fist, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | leftwards | type-6"
    },
    {
        "no": "484",
        "code": "1F91C",
        "char": "🤜",
        "name": "RIGHT-FACING FIST",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "fist | rightwards"
    },
    {
        "no": "485",
        "code": "1F91C 1F3FB",
        "char": "🤜🏻",
        "name": "right-facing fist, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | rightwards | type-1-2"
    },
    {
        "no": "486",
        "code": "1F91C 1F3FC",
        "char": "🤜🏼",
        "name": "right-facing fist, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | rightwards | type-3"
    },
    {
        "no": "487",
        "code": "1F91C 1F3FD",
        "char": "🤜🏽",
        "name": "right-facing fist, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | rightwards | type-4"
    },
    {
        "no": "488",
        "code": "1F91C 1F3FE",
        "char": "🤜🏾",
        "name": "right-facing fist, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | rightwards | type-5"
    },
    {
        "no": "489",
        "code": "1F91C 1F3FF",
        "char": "🤜🏿",
        "name": "right-facing fist, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "fist | rightwards | type-6"
    },
    {
        "no": "490",
        "code": "1F91A",
        "char": "🤚",
        "name": "RAISED BACK OF HAND",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "backhand | raised"
    },
    {
        "no": "491",
        "code": "1F91A 1F3FB",
        "char": "🤚🏻",
        "name": "raised back of hand, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "backhand | raised | type-1-2"
    },
    {
        "no": "492",
        "code": "1F91A 1F3FC",
        "char": "🤚🏼",
        "name": "raised back of hand, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "backhand | raised | type-3"
    },
    {
        "no": "493",
        "code": "1F91A 1F3FD",
        "char": "🤚🏽",
        "name": "raised back of hand, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "backhand | raised | type-4"
    },
    {
        "no": "494",
        "code": "1F91A 1F3FE",
        "char": "🤚🏾",
        "name": "raised back of hand, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "backhand | raised | type-5"
    },
    {
        "no": "495",
        "code": "1F91A 1F3FF",
        "char": "🤚🏿",
        "name": "raised back of hand, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "backhand | raised | type-6"
    },
    {
        "no": "496",
        "code": "1F44B",
        "char": "👋",
        "name": "WAVING HAND SIGN\n≊ waving hand",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | hand | wave | waving"
    },
    {
        "no": "497",
        "code": "1F44B 1F3FB",
        "char": "👋🏻",
        "name": "waving hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-1-2 | wave | waving"
    },
    {
        "no": "498",
        "code": "1F44B 1F3FC",
        "char": "👋🏼",
        "name": "waving hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-3 | wave | waving"
    },
    {
        "no": "499",
        "code": "1F44B 1F3FD",
        "char": "👋🏽",
        "name": "waving hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-4 | wave | waving"
    },
    {
        "no": "500",
        "code": "1F44B 1F3FE",
        "char": "👋🏾",
        "name": "waving hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-5 | wave | waving"
    },
    {
        "no": "501",
        "code": "1F44B 1F3FF",
        "char": "👋🏿",
        "name": "waving hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-6 | wave | waving"
    },
    {
        "no": "502",
        "code": "1F44F",
        "char": "👏",
        "name": "CLAPPING HANDS SIGN\n≊ clapping hands",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | clap | hand"
    },
    {
        "no": "503",
        "code": "1F44F 1F3FB",
        "char": "👏🏻",
        "name": "clapping hands, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clap | hand | type-1-2"
    },
    {
        "no": "504",
        "code": "1F44F 1F3FC",
        "char": "👏🏼",
        "name": "clapping hands, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clap | hand | type-3"
    },
    {
        "no": "505",
        "code": "1F44F 1F3FD",
        "char": "👏🏽",
        "name": "clapping hands, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clap | hand | type-4"
    },
    {
        "no": "506",
        "code": "1F44F 1F3FE",
        "char": "👏🏾",
        "name": "clapping hands, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clap | hand | type-5"
    },
    {
        "no": "507",
        "code": "1F44F 1F3FF",
        "char": "👏🏿",
        "name": "clapping hands, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | clap | hand | type-6"
    },
    {
        "no": "508",
        "code": "270D",
        "char": "✍",
        "name": "WRITING HAND",
        "date": "1995ᶻʷ",
        "default": "text*",
        "keywords": "body | hand | write"
    },
    {
        "no": "509",
        "code": "270D 1F3FB",
        "char": "✍🏻",
        "name": "writing hand, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-1-2 | write"
    },
    {
        "no": "510",
        "code": "270D 1F3FC",
        "char": "✍🏼",
        "name": "writing hand, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-3 | write"
    },
    {
        "no": "511",
        "code": "270D 1F3FD",
        "char": "✍🏽",
        "name": "writing hand, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-4 | write"
    },
    {
        "no": "512",
        "code": "270D 1F3FE",
        "char": "✍🏾",
        "name": "writing hand, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-5 | write"
    },
    {
        "no": "513",
        "code": "270D 1F3FF",
        "char": "✍🏿",
        "name": "writing hand, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | type-6 | write"
    },
    {
        "no": "514",
        "code": "1F450",
        "char": "👐",
        "name": "OPEN HANDS SIGN\n≊ open hands",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | hand | open"
    },
    {
        "no": "515",
        "code": "1F450 1F3FB",
        "char": "👐🏻",
        "name": "open hands, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | open | type-1-2"
    },
    {
        "no": "516",
        "code": "1F450 1F3FC",
        "char": "👐🏼",
        "name": "open hands, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | open | type-3"
    },
    {
        "no": "517",
        "code": "1F450 1F3FD",
        "char": "👐🏽",
        "name": "open hands, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | open | type-4"
    },
    {
        "no": "518",
        "code": "1F450 1F3FE",
        "char": "👐🏾",
        "name": "open hands, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | open | type-5"
    },
    {
        "no": "519",
        "code": "1F450 1F3FF",
        "char": "👐🏿",
        "name": "open hands, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | hand | open | type-6"
    },
    {
        "no": "520",
        "code": "1F64C",
        "char": "🙌",
        "name": "PERSON RAISING BOTH HANDS IN CELEBRATION\n≊ person raising hands",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | celebration | gesture | hand | hooray | raised"
    },
    {
        "no": "521",
        "code": "1F64C 1F3FB",
        "char": "🙌🏻",
        "name": "person raising hands, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | celebration | gesture | hand | hooray | raised | type-1-2"
    },
    {
        "no": "522",
        "code": "1F64C 1F3FC",
        "char": "🙌🏼",
        "name": "person raising hands, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | celebration | gesture | hand | hooray | raised | type-3"
    },
    {
        "no": "523",
        "code": "1F64C 1F3FD",
        "char": "🙌🏽",
        "name": "person raising hands, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | celebration | gesture | hand | hooray | raised | type-4"
    },
    {
        "no": "524",
        "code": "1F64C 1F3FE",
        "char": "🙌🏾",
        "name": "person raising hands, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | celebration | gesture | hand | hooray | raised | type-5"
    },
    {
        "no": "525",
        "code": "1F64C 1F3FF",
        "char": "🙌🏿",
        "name": "person raising hands, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | celebration | gesture | hand | hooray | raised | type-6"
    },
    {
        "no": "526",
        "code": "1F64F",
        "char": "🙏",
        "name": "PERSON WITH FOLDED HANDS\n≊ folded hands",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks"
    },
    {
        "no": "527",
        "code": "1F64F 1F3FB",
        "char": "🙏🏻",
        "name": "folded hands, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-1-2"
    },
    {
        "no": "528",
        "code": "1F64F 1F3FC",
        "char": "🙏🏼",
        "name": "folded hands, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-3"
    },
    {
        "no": "529",
        "code": "1F64F 1F3FD",
        "char": "🙏🏽",
        "name": "folded hands, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-4"
    },
    {
        "no": "530",
        "code": "1F64F 1F3FE",
        "char": "🙏🏾",
        "name": "folded hands, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-5"
    },
    {
        "no": "531",
        "code": "1F64F 1F3FF",
        "char": "🙏🏿",
        "name": "folded hands, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-6"
    },
    {
        "no": "532",
        "code": "1F91D",
        "char": "🤝",
        "name": "HANDSHAKE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "agreement | hand | handshake | meeting | shake"
    },
    {
        "no": "533",
        "code": "1F91D 1F3FB",
        "char": "🤝🏻",
        "name": "handshake, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "agreement | hand | handshake | meeting | shake | type-1-2"
    },
    {
        "no": "534",
        "code": "1F91D 1F3FC",
        "char": "🤝🏼",
        "name": "handshake, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "agreement | hand | handshake | meeting | shake | type-3"
    },
    {
        "no": "535",
        "code": "1F91D 1F3FD",
        "char": "🤝🏽",
        "name": "handshake, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "agreement | hand | handshake | meeting | shake | type-4"
    },
    {
        "no": "536",
        "code": "1F91D 1F3FE",
        "char": "🤝🏾",
        "name": "handshake, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "agreement | hand | handshake | meeting | shake | type-5"
    },
    {
        "no": "537",
        "code": "1F91D 1F3FF",
        "char": "🤝🏿",
        "name": "handshake, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "agreement | hand | handshake | meeting | shake | type-6"
    },
    {
        "no": "538",
        "code": "1F485",
        "char": "💅",
        "name": "NAIL POLISH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | care | cosmetics | manicure | nail | polish"
    },
    {
        "no": "539",
        "code": "1F485 1F3FB",
        "char": "💅🏻",
        "name": "nail polish, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | care | cosmetics | manicure | nail | polish | type-1-2"
    },
    {
        "no": "540",
        "code": "1F485 1F3FC",
        "char": "💅🏼",
        "name": "nail polish, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | care | cosmetics | manicure | nail | polish | type-3"
    },
    {
        "no": "541",
        "code": "1F485 1F3FD",
        "char": "💅🏽",
        "name": "nail polish, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | care | cosmetics | manicure | nail | polish | type-4"
    },
    {
        "no": "542",
        "code": "1F485 1F3FE",
        "char": "💅🏾",
        "name": "nail polish, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | care | cosmetics | manicure | nail | polish | type-5"
    },
    {
        "no": "543",
        "code": "1F485 1F3FF",
        "char": "💅🏿",
        "name": "nail polish, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | care | cosmetics | manicure | nail | polish | type-6"
    },
    {
        "no": "544",
        "code": "1F442",
        "char": "👂",
        "name": "EAR",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "body"
    },
    {
        "no": "545",
        "code": "1F442 1F3FB",
        "char": "👂🏻",
        "name": "ear, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-1-2"
    },
    {
        "no": "546",
        "code": "1F442 1F3FC",
        "char": "👂🏼",
        "name": "ear, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-3"
    },
    {
        "no": "547",
        "code": "1F442 1F3FD",
        "char": "👂🏽",
        "name": "ear, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-4"
    },
    {
        "no": "548",
        "code": "1F442 1F3FE",
        "char": "👂🏾",
        "name": "ear, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-5"
    },
    {
        "no": "549",
        "code": "1F442 1F3FF",
        "char": "👂🏿",
        "name": "ear, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-6"
    },
    {
        "no": "550",
        "code": "1F443",
        "char": "👃",
        "name": "NOSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body"
    },
    {
        "no": "551",
        "code": "1F443 1F3FB",
        "char": "👃🏻",
        "name": "nose, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-1-2"
    },
    {
        "no": "552",
        "code": "1F443 1F3FC",
        "char": "👃🏼",
        "name": "nose, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-3"
    },
    {
        "no": "553",
        "code": "1F443 1F3FD",
        "char": "👃🏽",
        "name": "nose, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-4"
    },
    {
        "no": "554",
        "code": "1F443 1F3FE",
        "char": "👃🏾",
        "name": "nose, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-5"
    },
    {
        "no": "555",
        "code": "1F443 1F3FF",
        "char": "👃🏿",
        "name": "nose, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "body | type-6"
    },
    {
        "no": "556",
        "code": "1F463",
        "char": "👣",
        "name": "FOOTPRINTS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | clothing | footprint | print"
    },
    {
        "no": "557",
        "code": "1F440",
        "char": "👀",
        "name": "EYES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | eye | face"
    },
    {
        "no": "558",
        "code": "1F441",
        "char": "👁",
        "name": "EYE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "body"
    },
    {
        "no": "559",
        "code": "1F441 200D 1F5E8",
        "char": "👁‍🗨",
        "name": "eye, left speech bubble",
        "date": "2014ˣ",
        "default": "n/a*",
        "keywords": "body | dialog | speech"
    },
    {
        "no": "560",
        "code": "1F445",
        "char": "👅",
        "name": "TONGUE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body"
    },
    {
        "no": "561",
        "code": "1F444",
        "char": "👄",
        "name": "MOUTH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "body | lips"
    },
    {
        "no": "562",
        "code": "1F48B",
        "char": "💋",
        "name": "KISS MARK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "kiss | lips"
    },
    {
        "no": "563",
        "code": "1F498",
        "char": "💘",
        "name": "HEART WITH ARROW",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | cupid | heart"
    },
    {
        "no": "564",
        "code": "2764",
        "char": "❤",
        "name": "HEAVY BLACK HEART\n≊ red heart",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "heart"
    },
    {
        "no": "565",
        "code": "1F493",
        "char": "💓",
        "name": "BEATING HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "beating | heart | heartbeat | pulsating"
    },
    {
        "no": "566",
        "code": "1F494",
        "char": "💔",
        "name": "BROKEN HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "break | broken | heart"
    },
    {
        "no": "567",
        "code": "1F495",
        "char": "💕",
        "name": "TWO HEARTS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart | love"
    },
    {
        "no": "568",
        "code": "1F496",
        "char": "💖",
        "name": "SPARKLING HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "excited | heart | sparkle"
    },
    {
        "no": "569",
        "code": "1F497",
        "char": "💗",
        "name": "GROWING HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "excited | growing | heart | heartpulse | nervous"
    },
    {
        "no": "570",
        "code": "1F499",
        "char": "💙",
        "name": "BLUE HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blue | heart"
    },
    {
        "no": "571",
        "code": "1F49A",
        "char": "💚",
        "name": "GREEN HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "green | heart"
    },
    {
        "no": "572",
        "code": "1F49B",
        "char": "💛",
        "name": "YELLOW HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart | yellow"
    },
    {
        "no": "573",
        "code": "1F49C",
        "char": "💜",
        "name": "PURPLE HEART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart | purple"
    },
    {
        "no": "574",
        "code": "1F5A4",
        "char": "🖤",
        "name": "BLACK HEART",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "black | evil | heart | wicked"
    },
    {
        "no": "575",
        "code": "1F49D",
        "char": "💝",
        "name": "HEART WITH RIBBON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart | ribbon | valentine"
    },
    {
        "no": "576",
        "code": "1F49E",
        "char": "💞",
        "name": "REVOLVING HEARTS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart | revolving"
    },
    {
        "no": "577",
        "code": "1F49F",
        "char": "💟",
        "name": "HEART DECORATION",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart"
    },
    {
        "no": "578",
        "code": "2763",
        "char": "❣",
        "name": "HEAVY HEART EXCLAMATION MARK ORNAMENT\n≊ heavy heart exclamation",
        "date": "1995ᶻ",
        "default": "text*",
        "keywords": "exclamation | heart | mark | punctuation"
    },
    {
        "no": "579",
        "code": "1F48C",
        "char": "💌",
        "name": "LOVE LETTER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "heart | letter | love | mail"
    },
    {
        "no": "580",
        "code": "1F4A4",
        "char": "💤",
        "name": "SLEEPING SYMBOL\n≊ zzz",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "comic | sleep"
    },
    {
        "no": "581",
        "code": "1F4A2",
        "char": "💢",
        "name": "ANGER SYMBOL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "angry | comic | mad"
    },
    {
        "no": "582",
        "code": "1F4A3",
        "char": "💣",
        "name": "BOMB",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "comic"
    },
    {
        "no": "583",
        "code": "1F4A5",
        "char": "💥",
        "name": "COLLISION SYMBOL\n≊ collision",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "boom | comic"
    },
    {
        "no": "584",
        "code": "1F4A6",
        "char": "💦",
        "name": "SPLASHING SWEAT SYMBOL\n≊ sweat droplets",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "comic | splashing | sweat"
    },
    {
        "no": "585",
        "code": "1F4A8",
        "char": "💨",
        "name": "DASH SYMBOL\n≊ dashing",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "comic | dash | running"
    },
    {
        "no": "586",
        "code": "1F4AB",
        "char": "💫",
        "name": "DIZZY SYMBOL\n≊ dizzy",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "comic | star"
    },
    {
        "no": "587",
        "code": "1F4AC",
        "char": "💬",
        "name": "SPEECH BALLOON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "balloon | bubble | comic | dialog | speech"
    },
    {
        "no": "588",
        "code": "1F5E8",
        "char": "🗨",
        "name": "LEFT SPEECH BUBBLE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "dialog | speech"
    },
    {
        "no": "589",
        "code": "1F5EF",
        "char": "🗯",
        "name": "RIGHT ANGER BUBBLE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "angry | balloon | bubble | mad"
    },
    {
        "no": "590",
        "code": "1F4AD",
        "char": "💭",
        "name": "THOUGHT BALLOON",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "balloon | bubble | comic | thought"
    },
    {
        "no": "591",
        "code": "1F573",
        "char": "🕳",
        "name": "HOLE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "hole"
    },
    {
        "no": "592",
        "code": "1F453",
        "char": "👓",
        "name": "EYEGLASSES\n≊ glasses",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "clothing | eye | eyeglasses | eyewear"
    },
    {
        "no": "593",
        "code": "1F576",
        "char": "🕶",
        "name": "DARK SUNGLASSES\n≊ sunglasses",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "dark | eye | eyewear | glasses"
    },
    {
        "no": "594",
        "code": "1F454",
        "char": "👔",
        "name": "NECKTIE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing"
    },
    {
        "no": "595",
        "code": "1F455",
        "char": "👕",
        "name": "T-SHIRT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | shirt | tshirt"
    },
    {
        "no": "596",
        "code": "1F456",
        "char": "👖",
        "name": "JEANS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | pants | trousers"
    },
    {
        "no": "597",
        "code": "1F457",
        "char": "👗",
        "name": "DRESS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing"
    },
    {
        "no": "598",
        "code": "1F458",
        "char": "👘",
        "name": "KIMONO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing"
    },
    {
        "no": "599",
        "code": "1F459",
        "char": "👙",
        "name": "BIKINI",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | swim"
    },
    {
        "no": "600",
        "code": "1F45A",
        "char": "👚",
        "name": "WOMANS CLOTHES\n≊ woman’s clothes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | woman"
    },
    {
        "no": "601",
        "code": "1F45B",
        "char": "👛",
        "name": "PURSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | coin"
    },
    {
        "no": "602",
        "code": "1F45C",
        "char": "👜",
        "name": "HANDBAG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bag | clothing"
    },
    {
        "no": "603",
        "code": "1F45D",
        "char": "👝",
        "name": "POUCH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bag | clothing"
    },
    {
        "no": "604",
        "code": "1F6CD",
        "char": "🛍",
        "name": "SHOPPING BAGS",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "bag | hotel | shopping"
    },
    {
        "no": "605",
        "code": "1F392",
        "char": "🎒",
        "name": "SCHOOL SATCHEL\n≊ school backpack",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bag | satchel | school"
    },
    {
        "no": "606",
        "code": "1F45E",
        "char": "👞",
        "name": "MANS SHOE\n≊ man’s shoe",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | man | shoe"
    },
    {
        "no": "607",
        "code": "1F45F",
        "char": "👟",
        "name": "ATHLETIC SHOE\n≊ running shoe",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "athletic | clothing | shoe | sneaker"
    },
    {
        "no": "608",
        "code": "1F460",
        "char": "👠",
        "name": "HIGH-HEELED SHOE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | heel | shoe | woman"
    },
    {
        "no": "609",
        "code": "1F461",
        "char": "👡",
        "name": "WOMANS SANDAL\n≊ woman’s sandal",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | sandal | shoe | woman"
    },
    {
        "no": "610",
        "code": "1F462",
        "char": "👢",
        "name": "WOMANS BOOTS\n≊ woman’s boot",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "boot | clothing | shoe | woman"
    },
    {
        "no": "611",
        "code": "1F451",
        "char": "👑",
        "name": "CROWN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | king | queen"
    },
    {
        "no": "612",
        "code": "1F452",
        "char": "👒",
        "name": "WOMANS HAT\n≊ woman’s hat",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | hat | woman"
    },
    {
        "no": "613",
        "code": "1F3A9",
        "char": "🎩",
        "name": "TOP HAT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | hat | top | tophat"
    },
    {
        "no": "614",
        "code": "1F393",
        "char": "🎓",
        "name": "GRADUATION CAP",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "cap | celebration | clothing | graduation | hat"
    },
    {
        "no": "615",
        "code": "26D1",
        "char": "⛑",
        "name": "HELMET WITH WHITE CROSS",
        "date": "2009ª",
        "default": "text*",
        "keywords": "aid | cross | face | hat | helmet"
    },
    {
        "no": "616",
        "code": "1F4FF",
        "char": "📿",
        "name": "PRAYER BEADS",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "beads | clothing | necklace | prayer | religion"
    },
    {
        "no": "617",
        "code": "1F484",
        "char": "💄",
        "name": "LIPSTICK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cosmetics | makeup"
    },
    {
        "no": "618",
        "code": "1F48D",
        "char": "💍",
        "name": "RING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "diamond"
    },
    {
        "no": "619",
        "code": "1F48E",
        "char": "💎",
        "name": "GEM STONE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "diamond | gem | jewel"
    },
    {
        "no": "620",
        "code": "1F435",
        "char": "🐵",
        "name": "MONKEY FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | monkey"
    },
    {
        "no": "621",
        "code": "1F412",
        "char": "🐒",
        "name": "MONKEY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "monkey"
    },
    {
        "no": "622",
        "code": "1F98D",
        "char": "🦍",
        "name": "GORILLA",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "animal | gorilla"
    },
    {
        "no": "623",
        "code": "1F436",
        "char": "🐶",
        "name": "DOG FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dog | face | pet"
    },
    {
        "no": "624",
        "code": "1F415",
        "char": "🐕",
        "name": "DOG",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "pet"
    },
    {
        "no": "625",
        "code": "1F429",
        "char": "🐩",
        "name": "POODLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dog"
    },
    {
        "no": "626",
        "code": "1F43A",
        "char": "🐺",
        "name": "WOLF FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | wolf"
    },
    {
        "no": "627",
        "code": "1F98A",
        "char": "🦊",
        "name": "FOX FACE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "animal | face | fox"
    },
    {
        "no": "628",
        "code": "1F431",
        "char": "🐱",
        "name": "CAT FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cat | face | pet"
    },
    {
        "no": "629",
        "code": "1F408",
        "char": "🐈",
        "name": "CAT",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "pet"
    },
    {
        "no": "630",
        "code": "1F981",
        "char": "🦁",
        "name": "LION FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | leo | lion | zodiac"
    },
    {
        "no": "631",
        "code": "1F42F",
        "char": "🐯",
        "name": "TIGER FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | tiger"
    },
    {
        "no": "632",
        "code": "1F405",
        "char": "🐅",
        "name": "TIGER",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "tiger"
    },
    {
        "no": "633",
        "code": "1F406",
        "char": "🐆",
        "name": "LEOPARD",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "leopard"
    },
    {
        "no": "634",
        "code": "1F434",
        "char": "🐴",
        "name": "HORSE FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | horse"
    },
    {
        "no": "635",
        "code": "1F40E",
        "char": "🐎",
        "name": "HORSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "racehorse | racing"
    },
    {
        "no": "636",
        "code": "1F98C",
        "char": "🦌",
        "name": "DEER",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "animal | deer"
    },
    {
        "no": "637",
        "code": "1F984",
        "char": "🦄",
        "name": "UNICORN FACE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "face | unicorn"
    },
    {
        "no": "638",
        "code": "1F42E",
        "char": "🐮",
        "name": "COW FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cow | face"
    },
    {
        "no": "639",
        "code": "1F402",
        "char": "🐂",
        "name": "OX",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bull | taurus | zodiac"
    },
    {
        "no": "640",
        "code": "1F403",
        "char": "🐃",
        "name": "WATER BUFFALO",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "buffalo | water"
    },
    {
        "no": "641",
        "code": "1F404",
        "char": "🐄",
        "name": "COW",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "cow"
    },
    {
        "no": "642",
        "code": "1F437",
        "char": "🐷",
        "name": "PIG FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | pig"
    },
    {
        "no": "643",
        "code": "1F416",
        "char": "🐖",
        "name": "PIG",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "sow"
    },
    {
        "no": "644",
        "code": "1F417",
        "char": "🐗",
        "name": "BOAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "pig"
    },
    {
        "no": "645",
        "code": "1F43D",
        "char": "🐽",
        "name": "PIG NOSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | nose | pig"
    },
    {
        "no": "646",
        "code": "1F40F",
        "char": "🐏",
        "name": "RAM",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "aries | sheep | zodiac"
    },
    {
        "no": "647",
        "code": "1F411",
        "char": "🐑",
        "name": "SHEEP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ewe"
    },
    {
        "no": "648",
        "code": "1F410",
        "char": "🐐",
        "name": "GOAT",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "capricorn | zodiac"
    },
    {
        "no": "649",
        "code": "1F42A",
        "char": "🐪",
        "name": "DROMEDARY CAMEL\n≊ camel",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "dromedary | hump"
    },
    {
        "no": "650",
        "code": "1F42B",
        "char": "🐫",
        "name": "BACTRIAN CAMEL\n≊ two-hump camel",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bactrian | camel | hump"
    },
    {
        "no": "651",
        "code": "1F418",
        "char": "🐘",
        "name": "ELEPHANT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "elephant"
    },
    {
        "no": "652",
        "code": "1F98F",
        "char": "🦏",
        "name": "RHINOCEROS",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "animal | rhinoceros"
    },
    {
        "no": "653",
        "code": "1F42D",
        "char": "🐭",
        "name": "MOUSE FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | mouse"
    },
    {
        "no": "654",
        "code": "1F401",
        "char": "🐁",
        "name": "MOUSE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "mouse"
    },
    {
        "no": "655",
        "code": "1F400",
        "char": "🐀",
        "name": "RAT",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "rat"
    },
    {
        "no": "656",
        "code": "1F439",
        "char": "🐹",
        "name": "HAMSTER FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | hamster | pet"
    },
    {
        "no": "657",
        "code": "1F430",
        "char": "🐰",
        "name": "RABBIT FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bunny | face | pet | rabbit"
    },
    {
        "no": "658",
        "code": "1F407",
        "char": "🐇",
        "name": "RABBIT",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bunny | pet"
    },
    {
        "no": "659",
        "code": "1F43F",
        "char": "🐿",
        "name": "CHIPMUNK",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "chipmunk"
    },
    {
        "no": "660",
        "code": "1F987",
        "char": "🦇",
        "name": "BAT",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "animal | bat | vampire"
    },
    {
        "no": "661",
        "code": "1F43B",
        "char": "🐻",
        "name": "BEAR FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bear | face"
    },
    {
        "no": "662",
        "code": "1F428",
        "char": "🐨",
        "name": "KOALA",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bear"
    },
    {
        "no": "663",
        "code": "1F43C",
        "char": "🐼",
        "name": "PANDA FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | panda"
    },
    {
        "no": "664",
        "code": "1F43E",
        "char": "🐾",
        "name": "PAW PRINTS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "feet | paw | print"
    },
    {
        "no": "665",
        "code": "1F983",
        "char": "🦃",
        "name": "TURKEY",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "turkey"
    },
    {
        "no": "666",
        "code": "1F414",
        "char": "🐔",
        "name": "CHICKEN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chicken"
    },
    {
        "no": "667",
        "code": "1F413",
        "char": "🐓",
        "name": "ROOSTER",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "rooster"
    },
    {
        "no": "668",
        "code": "1F423",
        "char": "🐣",
        "name": "HATCHING CHICK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "baby | chick | hatching"
    },
    {
        "no": "669",
        "code": "1F424",
        "char": "🐤",
        "name": "BABY CHICK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "baby | chick"
    },
    {
        "no": "670",
        "code": "1F425",
        "char": "🐥",
        "name": "FRONT-FACING BABY CHICK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "baby | chick"
    },
    {
        "no": "671",
        "code": "1F426",
        "char": "🐦",
        "name": "BIRD",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "bird"
    },
    {
        "no": "672",
        "code": "1F427",
        "char": "🐧",
        "name": "PENGUIN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "penguin"
    },
    {
        "no": "673",
        "code": "1F54A",
        "char": "🕊",
        "name": "DOVE OF PEACE\n≊ dove",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "bird | fly | peace"
    },
    {
        "no": "674",
        "code": "1F985",
        "char": "🦅",
        "name": "EAGLE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "bird | eagle"
    },
    {
        "no": "675",
        "code": "1F986",
        "char": "🦆",
        "name": "DUCK",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "bird | duck"
    },
    {
        "no": "676",
        "code": "1F989",
        "char": "🦉",
        "name": "OWL",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "bird | owl | wise"
    },
    {
        "no": "677",
        "code": "1F438",
        "char": "🐸",
        "name": "FROG FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | frog"
    },
    {
        "no": "678",
        "code": "1F40A",
        "char": "🐊",
        "name": "CROCODILE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "crocodile"
    },
    {
        "no": "679",
        "code": "1F422",
        "char": "🐢",
        "name": "TURTLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "turtle"
    },
    {
        "no": "680",
        "code": "1F98E",
        "char": "🦎",
        "name": "LIZARD",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "lizard | reptile"
    },
    {
        "no": "681",
        "code": "1F40D",
        "char": "🐍",
        "name": "SNAKE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bearer | ophiuchus | serpent | zodiac"
    },
    {
        "no": "682",
        "code": "1F432",
        "char": "🐲",
        "name": "DRAGON FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dragon | face | fairy tale"
    },
    {
        "no": "683",
        "code": "1F409",
        "char": "🐉",
        "name": "DRAGON",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "fairy tale"
    },
    {
        "no": "684",
        "code": "1F433",
        "char": "🐳",
        "name": "SPOUTING WHALE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | spouting | whale"
    },
    {
        "no": "685",
        "code": "1F40B",
        "char": "🐋",
        "name": "WHALE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "whale"
    },
    {
        "no": "686",
        "code": "1F42C",
        "char": "🐬",
        "name": "DOLPHIN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flipper"
    },
    {
        "no": "687",
        "code": "1F41F",
        "char": "🐟",
        "name": "FISH",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "pisces | zodiac"
    },
    {
        "no": "688",
        "code": "1F420",
        "char": "🐠",
        "name": "TROPICAL FISH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fish | tropical"
    },
    {
        "no": "689",
        "code": "1F421",
        "char": "🐡",
        "name": "BLOWFISH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fish"
    },
    {
        "no": "690",
        "code": "1F988",
        "char": "🦈",
        "name": "SHARK",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "fish | shark"
    },
    {
        "no": "691",
        "code": "1F419",
        "char": "🐙",
        "name": "OCTOPUS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "octopus"
    },
    {
        "no": "692",
        "code": "1F41A",
        "char": "🐚",
        "name": "SPIRAL SHELL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "shell | spiral"
    },
    {
        "no": "693",
        "code": "1F980",
        "char": "🦀",
        "name": "CRAB",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "cancer | zodiac"
    },
    {
        "no": "694",
        "code": "1F990",
        "char": "🦐",
        "name": "SHRIMP",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "food | shellfish | shrimp | small"
    },
    {
        "no": "695",
        "code": "1F991",
        "char": "🦑",
        "name": "SQUID",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "food | molusc | squid"
    },
    {
        "no": "696",
        "code": "1F98B",
        "char": "🦋",
        "name": "BUTTERFLY",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "butterfly | insect | pretty"
    },
    {
        "no": "697",
        "code": "1F40C",
        "char": "🐌",
        "name": "SNAIL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "snail"
    },
    {
        "no": "698",
        "code": "1F41B",
        "char": "🐛",
        "name": "BUG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "insect"
    },
    {
        "no": "699",
        "code": "1F41C",
        "char": "🐜",
        "name": "ANT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "insect"
    },
    {
        "no": "700",
        "code": "1F41D",
        "char": "🐝",
        "name": "HONEYBEE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bee | insect"
    },
    {
        "no": "701",
        "code": "1F41E",
        "char": "🐞",
        "name": "LADY BEETLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "beetle | insect | ladybird | ladybug"
    },
    {
        "no": "702",
        "code": "1F577",
        "char": "🕷",
        "name": "SPIDER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "insect"
    },
    {
        "no": "703",
        "code": "1F578",
        "char": "🕸",
        "name": "SPIDER WEB",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "spider | web"
    },
    {
        "no": "704",
        "code": "1F982",
        "char": "🦂",
        "name": "SCORPION",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "scorpio | scorpius | zodiac"
    },
    {
        "no": "705",
        "code": "1F490",
        "char": "💐",
        "name": "BOUQUET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower | plant"
    },
    {
        "no": "706",
        "code": "1F338",
        "char": "🌸",
        "name": "CHERRY BLOSSOM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blossom | cherry | flower | plant"
    },
    {
        "no": "707",
        "code": "1F4AE",
        "char": "💮",
        "name": "WHITE FLOWER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower"
    },
    {
        "no": "708",
        "code": "1F3F5",
        "char": "🏵",
        "name": "ROSETTE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "plant"
    },
    {
        "no": "709",
        "code": "1F339",
        "char": "🌹",
        "name": "ROSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower | plant"
    },
    {
        "no": "710",
        "code": "1F940",
        "char": "🥀",
        "name": "WILTED FLOWER",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "flower | wilted"
    },
    {
        "no": "711",
        "code": "1F33A",
        "char": "🌺",
        "name": "HIBISCUS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower | plant"
    },
    {
        "no": "712",
        "code": "1F33B",
        "char": "🌻",
        "name": "SUNFLOWER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower | plant | sun"
    },
    {
        "no": "713",
        "code": "1F33C",
        "char": "🌼",
        "name": "BLOSSOM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower | plant"
    },
    {
        "no": "714",
        "code": "1F337",
        "char": "🌷",
        "name": "TULIP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flower | plant"
    },
    {
        "no": "715",
        "code": "1F331",
        "char": "🌱",
        "name": "SEEDLING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "plant | young"
    },
    {
        "no": "716",
        "code": "1F332",
        "char": "🌲",
        "name": "EVERGREEN TREE\n≊ evergreen",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "plant | tree"
    },
    {
        "no": "717",
        "code": "1F333",
        "char": "🌳",
        "name": "DECIDUOUS TREE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "deciduous | plant | shedding | tree"
    },
    {
        "no": "718",
        "code": "1F334",
        "char": "🌴",
        "name": "PALM TREE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "palm | plant | tree"
    },
    {
        "no": "719",
        "code": "1F335",
        "char": "🌵",
        "name": "CACTUS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "plant"
    },
    {
        "no": "720",
        "code": "1F33E",
        "char": "🌾",
        "name": "EAR OF RICE\n≊ sheaf of rice",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ear | grain | plant | rice"
    },
    {
        "no": "721",
        "code": "1F33F",
        "char": "🌿",
        "name": "HERB",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "leaf | plant"
    },
    {
        "no": "722",
        "code": "2618",
        "char": "☘",
        "name": "SHAMROCK",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "plant"
    },
    {
        "no": "723",
        "code": "1F340",
        "char": "🍀",
        "name": "FOUR LEAF CLOVER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "4 | clover | four | leaf | plant"
    },
    {
        "no": "724",
        "code": "1F341",
        "char": "🍁",
        "name": "MAPLE LEAF",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "falling | leaf | maple | plant"
    },
    {
        "no": "725",
        "code": "1F342",
        "char": "🍂",
        "name": "FALLEN LEAF",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "falling | leaf | plant"
    },
    {
        "no": "726",
        "code": "1F343",
        "char": "🍃",
        "name": "LEAF FLUTTERING IN WIND",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blow | flutter | leaf | plant | wind"
    },
    {
        "no": "727",
        "code": "1F347",
        "char": "🍇",
        "name": "GRAPES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | grape | plant"
    },
    {
        "no": "728",
        "code": "1F348",
        "char": "🍈",
        "name": "MELON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | plant"
    },
    {
        "no": "729",
        "code": "1F349",
        "char": "🍉",
        "name": "WATERMELON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | plant"
    },
    {
        "no": "730",
        "code": "1F34A",
        "char": "🍊",
        "name": "TANGERINE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | orange | plant"
    },
    {
        "no": "731",
        "code": "1F34B",
        "char": "🍋",
        "name": "LEMON",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "citrus | fruit | plant"
    },
    {
        "no": "732",
        "code": "1F34C",
        "char": "🍌",
        "name": "BANANA",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | plant"
    },
    {
        "no": "733",
        "code": "1F34D",
        "char": "🍍",
        "name": "PINEAPPLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | plant"
    },
    {
        "no": "734",
        "code": "1F34E",
        "char": "🍎",
        "name": "RED APPLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "apple | fruit | plant | red"
    },
    {
        "no": "735",
        "code": "1F34F",
        "char": "🍏",
        "name": "GREEN APPLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "apple | fruit | green | plant"
    },
    {
        "no": "736",
        "code": "1F350",
        "char": "🍐",
        "name": "PEAR",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "fruit | plant"
    },
    {
        "no": "737",
        "code": "1F351",
        "char": "🍑",
        "name": "PEACH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fruit | plant"
    },
    {
        "no": "738",
        "code": "1F352",
        "char": "🍒",
        "name": "CHERRIES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cherry | fruit | plant"
    },
    {
        "no": "739",
        "code": "1F353",
        "char": "🍓",
        "name": "STRAWBERRY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "berry | fruit | plant"
    },
    {
        "no": "740",
        "code": "1F95D",
        "char": "🥝",
        "name": "KIWIFRUIT",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "food | fruit | kiwi"
    },
    {
        "no": "741",
        "code": "1F345",
        "char": "🍅",
        "name": "TOMATO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "plant | vegetable"
    },
    {
        "no": "742",
        "code": "1F951",
        "char": "🥑",
        "name": "AVOCADO",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "avocado | food | fruit"
    },
    {
        "no": "743",
        "code": "1F346",
        "char": "🍆",
        "name": "AUBERGINE\n≊ eggplant",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "aubergine | plant | vegetable"
    },
    {
        "no": "744",
        "code": "1F954",
        "char": "🥔",
        "name": "POTATO",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "food | potato | vegetable"
    },
    {
        "no": "745",
        "code": "1F955",
        "char": "🥕",
        "name": "CARROT",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "carrot | food | vegetable"
    },
    {
        "no": "746",
        "code": "1F33D",
        "char": "🌽",
        "name": "EAR OF MAIZE\n≊ ear of corn",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "corn | ear | maize | maze | plant"
    },
    {
        "no": "747",
        "code": "1F336",
        "char": "🌶",
        "name": "HOT PEPPER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "hot | pepper | plant"
    },
    {
        "no": "748",
        "code": "1F952",
        "char": "🥒",
        "name": "CUCUMBER",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "cucumber | food | pickle | vegetable"
    },
    {
        "no": "749",
        "code": "1F344",
        "char": "🍄",
        "name": "MUSHROOM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "plant"
    },
    {
        "no": "750",
        "code": "1F95C",
        "char": "🥜",
        "name": "PEANUTS",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "food | nut | peanut | vegetable"
    },
    {
        "no": "751",
        "code": "1F330",
        "char": "🌰",
        "name": "CHESTNUT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "plant"
    },
    {
        "no": "752",
        "code": "1F35E",
        "char": "🍞",
        "name": "BREAD",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "loaf"
    },
    {
        "no": "753",
        "code": "1F950",
        "char": "🥐",
        "name": "CROISSANT",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "bread | crescent roll | croissant | food | french"
    },
    {
        "no": "754",
        "code": "1F956",
        "char": "🥖",
        "name": "BAGUETTE BREAD",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "baguette | bread | food | french"
    },
    {
        "no": "755",
        "code": "1F95E",
        "char": "🥞",
        "name": "PANCAKES",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "crêpe | food | hotcake | pancake"
    },
    {
        "no": "756",
        "code": "1F9C0",
        "char": "🧀",
        "name": "CHEESE WEDGE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "cheese"
    },
    {
        "no": "757",
        "code": "1F356",
        "char": "🍖",
        "name": "MEAT ON BONE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bone | meat"
    },
    {
        "no": "758",
        "code": "1F357",
        "char": "🍗",
        "name": "POULTRY LEG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bone | chicken | leg | poultry"
    },
    {
        "no": "759",
        "code": "1F953",
        "char": "🥓",
        "name": "BACON",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "bacon | food | meat"
    },
    {
        "no": "760",
        "code": "1F354",
        "char": "🍔",
        "name": "HAMBURGER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "burger"
    },
    {
        "no": "761",
        "code": "1F35F",
        "char": "🍟",
        "name": "FRENCH FRIES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "french | fries"
    },
    {
        "no": "762",
        "code": "1F355",
        "char": "🍕",
        "name": "SLICE OF PIZZA\n≊ pizza",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cheese | slice"
    },
    {
        "no": "763",
        "code": "1F32D",
        "char": "🌭",
        "name": "HOT DOG",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "frankfurter | hotdog | sausage"
    },
    {
        "no": "764",
        "code": "1F32E",
        "char": "🌮",
        "name": "TACO",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "mexican"
    },
    {
        "no": "765",
        "code": "1F32F",
        "char": "🌯",
        "name": "BURRITO",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "mexican"
    },
    {
        "no": "766",
        "code": "1F959",
        "char": "🥙",
        "name": "STUFFED FLATBREAD",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "falafel | flatbread | food | gyro | kebab | stuffed"
    },
    {
        "no": "767",
        "code": "1F95A",
        "char": "🥚",
        "name": "EGG",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "egg | food"
    },
    {
        "no": "768",
        "code": "1F373",
        "char": "🍳",
        "name": "COOKING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "egg | frying | pan"
    },
    {
        "no": "769",
        "code": "1F958",
        "char": "🥘",
        "name": "SHALLOW PAN OF FOOD",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "casserole | food | paella | pan | shallow"
    },
    {
        "no": "770",
        "code": "1F372",
        "char": "🍲",
        "name": "POT OF FOOD",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "pot | stew"
    },
    {
        "no": "771",
        "code": "1F957",
        "char": "🥗",
        "name": "GREEN SALAD",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "food | green | salad"
    },
    {
        "no": "772",
        "code": "1F37F",
        "char": "🍿",
        "name": "POPCORN",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "popcorn"
    },
    {
        "no": "773",
        "code": "1F371",
        "char": "🍱",
        "name": "BENTO BOX",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bento | box"
    },
    {
        "no": "774",
        "code": "1F358",
        "char": "🍘",
        "name": "RICE CRACKER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cracker | rice"
    },
    {
        "no": "775",
        "code": "1F359",
        "char": "🍙",
        "name": "RICE BALL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ball | japanese | rice"
    },
    {
        "no": "776",
        "code": "1F35A",
        "char": "🍚",
        "name": "COOKED RICE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cooked | rice"
    },
    {
        "no": "777",
        "code": "1F35B",
        "char": "🍛",
        "name": "CURRY AND RICE\n≊ curry rice",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "curry | rice"
    },
    {
        "no": "778",
        "code": "1F35C",
        "char": "🍜",
        "name": "STEAMING BOWL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bowl | noodle | ramen | steaming"
    },
    {
        "no": "779",
        "code": "1F35D",
        "char": "🍝",
        "name": "SPAGHETTI",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "pasta"
    },
    {
        "no": "780",
        "code": "1F360",
        "char": "🍠",
        "name": "ROASTED SWEET POTATO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "potato | roasted | sweet"
    },
    {
        "no": "781",
        "code": "1F362",
        "char": "🍢",
        "name": "ODEN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "kebab | seafood | skewer | stick"
    },
    {
        "no": "782",
        "code": "1F363",
        "char": "🍣",
        "name": "SUSHI",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "sushi"
    },
    {
        "no": "783",
        "code": "1F364",
        "char": "🍤",
        "name": "FRIED SHRIMP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fried | prawn | shrimp | tempura"
    },
    {
        "no": "784",
        "code": "1F365",
        "char": "🍥",
        "name": "FISH CAKE WITH SWIRL DESIGN\n≊ fish cake with swirl",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cake | fish | pastry | swirl"
    },
    {
        "no": "785",
        "code": "1F361",
        "char": "🍡",
        "name": "DANGO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dessert | japanese | skewer | stick | sweet"
    },
    {
        "no": "786",
        "code": "1F366",
        "char": "🍦",
        "name": "SOFT ICE CREAM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cream | dessert | ice | icecream | soft | sweet"
    },
    {
        "no": "787",
        "code": "1F367",
        "char": "🍧",
        "name": "SHAVED ICE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dessert | ice | shaved | sweet"
    },
    {
        "no": "788",
        "code": "1F368",
        "char": "🍨",
        "name": "ICE CREAM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cream | dessert | ice | sweet"
    },
    {
        "no": "789",
        "code": "1F369",
        "char": "🍩",
        "name": "DOUGHNUT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dessert | donut | sweet"
    },
    {
        "no": "790",
        "code": "1F36A",
        "char": "🍪",
        "name": "COOKIE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dessert | sweet"
    },
    {
        "no": "791",
        "code": "1F382",
        "char": "🎂",
        "name": "BIRTHDAY CAKE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "birthday | cake | celebration | dessert | pastry | sweet"
    },
    {
        "no": "792",
        "code": "1F370",
        "char": "🍰",
        "name": "SHORTCAKE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cake | dessert | pastry | slice | sweet"
    },
    {
        "no": "793",
        "code": "1F36B",
        "char": "🍫",
        "name": "CHOCOLATE BAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | chocolate | dessert | sweet"
    },
    {
        "no": "794",
        "code": "1F36C",
        "char": "🍬",
        "name": "CANDY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dessert | sweet"
    },
    {
        "no": "795",
        "code": "1F36D",
        "char": "🍭",
        "name": "LOLLIPOP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "candy | dessert | sweet"
    },
    {
        "no": "796",
        "code": "1F36E",
        "char": "🍮",
        "name": "CUSTARD",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dessert | pudding | sweet"
    },
    {
        "no": "797",
        "code": "1F36F",
        "char": "🍯",
        "name": "HONEY POT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "honey | honeypot | pot | sweet"
    },
    {
        "no": "798",
        "code": "1F37C",
        "char": "🍼",
        "name": "BABY BOTTLE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "baby | bottle | drink | milk"
    },
    {
        "no": "799",
        "code": "1F95B",
        "char": "🥛",
        "name": "GLASS OF MILK",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "drink | glass | milk"
    },
    {
        "no": "800",
        "code": "2615",
        "char": "☕",
        "name": "HOT BEVERAGE",
        "date": "2003ʲ",
        "default": "emoji",
        "keywords": "beverage | coffee | drink | hot | steaming | tea"
    },
    {
        "no": "801",
        "code": "1F375",
        "char": "🍵",
        "name": "TEACUP WITHOUT HANDLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "beverage | cup | drink | tea | teacup"
    },
    {
        "no": "802",
        "code": "1F376",
        "char": "🍶",
        "name": "SAKE BOTTLE AND CUP\n≊ sake",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | beverage | bottle | cup | drink"
    },
    {
        "no": "803",
        "code": "1F37E",
        "char": "🍾",
        "name": "BOTTLE WITH POPPING CORK",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "bar | bottle | cork | drink | popping"
    },
    {
        "no": "804",
        "code": "1F377",
        "char": "🍷",
        "name": "WINE GLASS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | beverage | drink | glass | wine"
    },
    {
        "no": "805",
        "code": "1F378",
        "char": "🍸",
        "name": "COCKTAIL GLASS",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "bar | cocktail | drink | glass"
    },
    {
        "no": "806",
        "code": "1F379",
        "char": "🍹",
        "name": "TROPICAL DRINK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | drink | tropical"
    },
    {
        "no": "807",
        "code": "1F37A",
        "char": "🍺",
        "name": "BEER MUG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | beer | drink | mug"
    },
    {
        "no": "808",
        "code": "1F37B",
        "char": "🍻",
        "name": "CLINKING BEER MUGS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | beer | clink | drink | mug"
    },
    {
        "no": "809",
        "code": "1F942",
        "char": "🥂",
        "name": "CLINKING GLASSES",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "celebrate | clink | drink | glass"
    },
    {
        "no": "810",
        "code": "1F943",
        "char": "🥃",
        "name": "TUMBLER GLASS",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "glass | liquor | shot | tumbler | whisky"
    },
    {
        "no": "811",
        "code": "1F37D",
        "char": "🍽",
        "name": "FORK AND KNIFE WITH PLATE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cooking | fork | knife | plate"
    },
    {
        "no": "812",
        "code": "1F374",
        "char": "🍴",
        "name": "FORK AND KNIFE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cooking | fork | knife"
    },
    {
        "no": "813",
        "code": "1F944",
        "char": "🥄",
        "name": "SPOON",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "spoon | tableware"
    },
    {
        "no": "814",
        "code": "1F52A",
        "char": "🔪",
        "name": "HOCHO\n≊ kitchen knife",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cooking | hocho | knife | tool | weapon"
    },
    {
        "no": "815",
        "code": "1F3FA",
        "char": "🏺",
        "name": "AMPHORA",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "aquarius | cooking | drink | jug | tool | weapon | zodiac"
    },
    {
        "no": "816",
        "code": "1F30D",
        "char": "🌍",
        "name": "EARTH GLOBE EUROPE-AFRICA\n≊ globe showing europe-africa",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "africa | earth | europe | globe | world"
    },
    {
        "no": "817",
        "code": "1F30E",
        "char": "🌎",
        "name": "EARTH GLOBE AMERICAS\n≊ globe showing americas",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "americas | earth | globe | world"
    },
    {
        "no": "818",
        "code": "1F30F",
        "char": "🌏",
        "name": "EARTH GLOBE ASIA-AUSTRALIA\n≊ globe showing asia-australia",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "asia | australia | earth | globe | world"
    },
    {
        "no": "819",
        "code": "1F310",
        "char": "🌐",
        "name": "GLOBE WITH MERIDIANS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "earth | globe | meridians | world"
    },
    {
        "no": "820",
        "code": "1F5FA",
        "char": "🗺",
        "name": "WORLD MAP",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "map | world"
    },
    {
        "no": "821",
        "code": "1F5FE",
        "char": "🗾",
        "name": "SILHOUETTE OF JAPAN\n≊ map of japan",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "japan | map"
    },
    {
        "no": "822",
        "code": "1F3D4",
        "char": "🏔",
        "name": "SNOW CAPPED MOUNTAIN\n≊ snow-capped mountain",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cold | mountain | snow"
    },
    {
        "no": "823",
        "code": "26F0",
        "char": "⛰",
        "name": "MOUNTAIN",
        "date": "2009ª",
        "default": "text*",
        "keywords": "mountain"
    },
    {
        "no": "824",
        "code": "1F30B",
        "char": "🌋",
        "name": "VOLCANO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "eruption | mountain | weather"
    },
    {
        "no": "825",
        "code": "1F5FB",
        "char": "🗻",
        "name": "MOUNT FUJI",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fuji | mountain"
    },
    {
        "no": "826",
        "code": "1F3D5",
        "char": "🏕",
        "name": "CAMPING",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "camping"
    },
    {
        "no": "827",
        "code": "1F3D6",
        "char": "🏖",
        "name": "BEACH WITH UMBRELLA",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "beach | umbrella"
    },
    {
        "no": "828",
        "code": "1F3DC",
        "char": "🏜",
        "name": "DESERT",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "desert"
    },
    {
        "no": "829",
        "code": "1F3DD",
        "char": "🏝",
        "name": "DESERT ISLAND",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "desert | island"
    },
    {
        "no": "830",
        "code": "1F3DE",
        "char": "🏞",
        "name": "NATIONAL PARK",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "park"
    },
    {
        "no": "831",
        "code": "1F3DF",
        "char": "🏟",
        "name": "STADIUM",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "stadium"
    },
    {
        "no": "832",
        "code": "1F3DB",
        "char": "🏛",
        "name": "CLASSICAL BUILDING",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "building | classical"
    },
    {
        "no": "833",
        "code": "1F3D7",
        "char": "🏗",
        "name": "BUILDING CONSTRUCTION",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "building | construction"
    },
    {
        "no": "834",
        "code": "1F3D8",
        "char": "🏘",
        "name": "HOUSE BUILDINGS",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "building | house"
    },
    {
        "no": "835",
        "code": "1F3D9",
        "char": "🏙",
        "name": "CITYSCAPE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "building | city"
    },
    {
        "no": "836",
        "code": "1F3DA",
        "char": "🏚",
        "name": "DERELICT HOUSE BUILDING",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "building | derelict | house"
    },
    {
        "no": "837",
        "code": "1F3E0",
        "char": "🏠",
        "name": "HOUSE BUILDING",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "building | home | house"
    },
    {
        "no": "838",
        "code": "1F3E1",
        "char": "🏡",
        "name": "HOUSE WITH GARDEN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | garden | home | house"
    },
    {
        "no": "839",
        "code": "1F3E2",
        "char": "🏢",
        "name": "OFFICE BUILDING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building"
    },
    {
        "no": "840",
        "code": "1F3E3",
        "char": "🏣",
        "name": "JAPANESE POST OFFICE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | japanese | post"
    },
    {
        "no": "841",
        "code": "1F3E4",
        "char": "🏤",
        "name": "EUROPEAN POST OFFICE\n≊ post office",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "building | european | post"
    },
    {
        "no": "842",
        "code": "1F3E5",
        "char": "🏥",
        "name": "HOSPITAL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | doctor | medicine"
    },
    {
        "no": "843",
        "code": "1F3E6",
        "char": "🏦",
        "name": "BANK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building"
    },
    {
        "no": "844",
        "code": "1F3E8",
        "char": "🏨",
        "name": "HOTEL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building"
    },
    {
        "no": "845",
        "code": "1F3E9",
        "char": "🏩",
        "name": "LOVE HOTEL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | hotel | love"
    },
    {
        "no": "846",
        "code": "1F3EA",
        "char": "🏪",
        "name": "CONVENIENCE STORE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | convenience | store"
    },
    {
        "no": "847",
        "code": "1F3EB",
        "char": "🏫",
        "name": "SCHOOL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building"
    },
    {
        "no": "848",
        "code": "1F3EC",
        "char": "🏬",
        "name": "DEPARTMENT STORE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | department | store"
    },
    {
        "no": "849",
        "code": "1F3ED",
        "char": "🏭",
        "name": "FACTORY",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "building"
    },
    {
        "no": "850",
        "code": "1F3EF",
        "char": "🏯",
        "name": "JAPANESE CASTLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | castle | japanese"
    },
    {
        "no": "851",
        "code": "1F3F0",
        "char": "🏰",
        "name": "EUROPEAN CASTLE\n≊ castle",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | european"
    },
    {
        "no": "852",
        "code": "1F492",
        "char": "💒",
        "name": "WEDDING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chapel | romance"
    },
    {
        "no": "853",
        "code": "1F5FC",
        "char": "🗼",
        "name": "TOKYO TOWER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "tokyo | tower"
    },
    {
        "no": "854",
        "code": "1F5FD",
        "char": "🗽",
        "name": "STATUE OF LIBERTY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "liberty | statue"
    },
    {
        "no": "855",
        "code": "26EA",
        "char": "⛪",
        "name": "CHURCH",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "building | christian | cross | religion"
    },
    {
        "no": "856",
        "code": "1F54C",
        "char": "🕌",
        "name": "MOSQUE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "islam | muslim | religion"
    },
    {
        "no": "857",
        "code": "1F54D",
        "char": "🕍",
        "name": "SYNAGOGUE",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "jew | jewish | religion | temple"
    },
    {
        "no": "858",
        "code": "26E9",
        "char": "⛩",
        "name": "SHINTO SHRINE",
        "date": "2009ª",
        "default": "text*",
        "keywords": "religion | shinto | shrine"
    },
    {
        "no": "859",
        "code": "1F54B",
        "char": "🕋",
        "name": "KAABA",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "islam | muslim | religion"
    },
    {
        "no": "860",
        "code": "26F2",
        "char": "⛲",
        "name": "FOUNTAIN",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "fountain"
    },
    {
        "no": "861",
        "code": "26FA",
        "char": "⛺",
        "name": "TENT",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "camping"
    },
    {
        "no": "862",
        "code": "1F301",
        "char": "🌁",
        "name": "FOGGY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fog | weather"
    },
    {
        "no": "863",
        "code": "1F303",
        "char": "🌃",
        "name": "NIGHT WITH STARS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "night | star | weather"
    },
    {
        "no": "864",
        "code": "1F304",
        "char": "🌄",
        "name": "SUNRISE OVER MOUNTAINS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "morning | mountain | sun | sunrise | weather"
    },
    {
        "no": "865",
        "code": "1F305",
        "char": "🌅",
        "name": "SUNRISE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "morning | sun | weather"
    },
    {
        "no": "866",
        "code": "1F306",
        "char": "🌆",
        "name": "CITYSCAPE AT DUSK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | city | dusk | evening | landscape | sun | sunset | weather"
    },
    {
        "no": "867",
        "code": "1F307",
        "char": "🌇",
        "name": "SUNSET OVER BUILDINGS\n≊ sunset",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "building | dusk | sun | weather"
    },
    {
        "no": "868",
        "code": "1F309",
        "char": "🌉",
        "name": "BRIDGE AT NIGHT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bridge | night | weather"
    },
    {
        "no": "869",
        "code": "2668",
        "char": "♨",
        "name": "HOT SPRINGS",
        "date": "1995ªʲ",
        "default": "text*",
        "keywords": "hot | hotsprings | springs | steaming"
    },
    {
        "no": "870",
        "code": "1F30C",
        "char": "🌌",
        "name": "MILKY WAY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "space | weather"
    },
    {
        "no": "871",
        "code": "1F3A0",
        "char": "🎠",
        "name": "CAROUSEL HORSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "carousel | horse"
    },
    {
        "no": "872",
        "code": "1F3A1",
        "char": "🎡",
        "name": "FERRIS WHEEL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "amusement park | ferris | wheel"
    },
    {
        "no": "873",
        "code": "1F3A2",
        "char": "🎢",
        "name": "ROLLER COASTER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "amusement park | coaster | roller"
    },
    {
        "no": "874",
        "code": "1F488",
        "char": "💈",
        "name": "BARBER POLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "barber | haircut | pole"
    },
    {
        "no": "875",
        "code": "1F3AA",
        "char": "🎪",
        "name": "CIRCUS TENT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "circus | tent"
    },
    {
        "no": "876",
        "code": "1F3AD",
        "char": "🎭",
        "name": "PERFORMING ARTS",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "art | mask | performing | theater | theatre"
    },
    {
        "no": "877",
        "code": "1F5BC",
        "char": "🖼",
        "name": "FRAME WITH PICTURE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "art | frame | museum | painting | picture"
    },
    {
        "no": "878",
        "code": "1F3A8",
        "char": "🎨",
        "name": "ARTIST PALETTE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "art | museum | painting | palette"
    },
    {
        "no": "879",
        "code": "1F3B0",
        "char": "🎰",
        "name": "SLOT MACHINE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "game | slot"
    },
    {
        "no": "880",
        "code": "1F682",
        "char": "🚂",
        "name": "STEAM LOCOMOTIVE\n≊ locomotive",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "engine | railway | steam | train | vehicle"
    },
    {
        "no": "881",
        "code": "1F683",
        "char": "🚃",
        "name": "RAILWAY CAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "car | electric | railway | train | tram | trolleybus | vehicle"
    },
    {
        "no": "882",
        "code": "1F684",
        "char": "🚄",
        "name": "HIGH-SPEED TRAIN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "railway | shinkansen | speed | train | vehicle"
    },
    {
        "no": "883",
        "code": "1F685",
        "char": "🚅",
        "name": "HIGH-SPEED TRAIN WITH BULLET NOSE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bullet | railway | shinkansen | speed | train | vehicle"
    },
    {
        "no": "884",
        "code": "1F686",
        "char": "🚆",
        "name": "TRAIN",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "railway | vehicle"
    },
    {
        "no": "885",
        "code": "1F687",
        "char": "🚇",
        "name": "METRO",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "subway | vehicle"
    },
    {
        "no": "886",
        "code": "1F688",
        "char": "🚈",
        "name": "LIGHT RAIL",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "railway | vehicle"
    },
    {
        "no": "887",
        "code": "1F689",
        "char": "🚉",
        "name": "STATION",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "railway | train | vehicle"
    },
    {
        "no": "888",
        "code": "1F68A",
        "char": "🚊",
        "name": "TRAM",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "trolleybus | vehicle"
    },
    {
        "no": "889",
        "code": "1F69D",
        "char": "🚝",
        "name": "MONORAIL",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "890",
        "code": "1F69E",
        "char": "🚞",
        "name": "MOUNTAIN RAILWAY",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "car | mountain | railway | vehicle"
    },
    {
        "no": "891",
        "code": "1F68B",
        "char": "🚋",
        "name": "TRAM CAR",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "car | tram | trolleybus | vehicle"
    },
    {
        "no": "892",
        "code": "1F68C",
        "char": "🚌",
        "name": "BUS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "893",
        "code": "1F68D",
        "char": "🚍",
        "name": "ONCOMING BUS",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "bus | oncoming | vehicle"
    },
    {
        "no": "894",
        "code": "1F68E",
        "char": "🚎",
        "name": "TROLLEYBUS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bus | tram | trolley | vehicle"
    },
    {
        "no": "895",
        "code": "1F690",
        "char": "🚐",
        "name": "MINIBUS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bus | vehicle"
    },
    {
        "no": "896",
        "code": "1F691",
        "char": "🚑",
        "name": "AMBULANCE",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "897",
        "code": "1F692",
        "char": "🚒",
        "name": "FIRE ENGINE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "engine | fire | truck | vehicle"
    },
    {
        "no": "898",
        "code": "1F693",
        "char": "🚓",
        "name": "POLICE CAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "car | patrol | police | vehicle"
    },
    {
        "no": "899",
        "code": "1F694",
        "char": "🚔",
        "name": "ONCOMING POLICE CAR",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "car | oncoming | police | vehicle"
    },
    {
        "no": "900",
        "code": "1F695",
        "char": "🚕",
        "name": "TAXI",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "901",
        "code": "1F696",
        "char": "🚖",
        "name": "ONCOMING TAXI",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "oncoming | taxi | vehicle"
    },
    {
        "no": "902",
        "code": "1F697",
        "char": "🚗",
        "name": "AUTOMOBILE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "car | vehicle"
    },
    {
        "no": "903",
        "code": "1F698",
        "char": "🚘",
        "name": "ONCOMING AUTOMOBILE",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "automobile | car | oncoming | vehicle"
    },
    {
        "no": "904",
        "code": "1F699",
        "char": "🚙",
        "name": "RECREATIONAL VEHICLE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "recreational | rv | vehicle"
    },
    {
        "no": "905",
        "code": "1F69A",
        "char": "🚚",
        "name": "DELIVERY TRUCK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "delivery | truck | vehicle"
    },
    {
        "no": "906",
        "code": "1F69B",
        "char": "🚛",
        "name": "ARTICULATED LORRY",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "lorry | semi | truck | vehicle"
    },
    {
        "no": "907",
        "code": "1F69C",
        "char": "🚜",
        "name": "TRACTOR",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "908",
        "code": "1F6B2",
        "char": "🚲",
        "name": "BICYCLE",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "bike | vehicle"
    },
    {
        "no": "909",
        "code": "1F6F4",
        "char": "🛴",
        "name": "SCOOTER\n≊ kick scooter",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "kick | scooter"
    },
    {
        "no": "910",
        "code": "1F6F5",
        "char": "🛵",
        "name": "MOTOR SCOOTER",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "motor | scooter"
    },
    {
        "no": "911",
        "code": "1F3CE",
        "char": "🏎",
        "name": "RACING CAR",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "car | racing"
    },
    {
        "no": "912",
        "code": "1F3CD",
        "char": "🏍",
        "name": "RACING MOTORCYCLE\n≊ motorcycle",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "racing"
    },
    {
        "no": "913",
        "code": "1F68F",
        "char": "🚏",
        "name": "BUS STOP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bus | busstop | stop"
    },
    {
        "no": "914",
        "code": "1F6E3",
        "char": "🛣",
        "name": "MOTORWAY",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "highway | road"
    },
    {
        "no": "915",
        "code": "1F6E4",
        "char": "🛤",
        "name": "RAILWAY TRACK",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "railway | train"
    },
    {
        "no": "916",
        "code": "26FD",
        "char": "⛽",
        "name": "FUEL PUMP",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "fuel | fuelpump | gas | pump | station"
    },
    {
        "no": "917",
        "code": "1F6A8",
        "char": "🚨",
        "name": "POLICE CARS REVOLVING LIGHT\n≊ police car’s light",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "beacon | car | light | police | revolving | vehicle"
    },
    {
        "no": "918",
        "code": "1F6A5",
        "char": "🚥",
        "name": "HORIZONTAL TRAFFIC LIGHT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "light | signal | traffic"
    },
    {
        "no": "919",
        "code": "1F6A6",
        "char": "🚦",
        "name": "VERTICAL TRAFFIC LIGHT",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "light | signal | traffic"
    },
    {
        "no": "920",
        "code": "1F6A7",
        "char": "🚧",
        "name": "CONSTRUCTION SIGN\n≊ construction",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "barrier"
    },
    {
        "no": "921",
        "code": "1F6D1",
        "char": "🛑",
        "name": "OCTAGONAL SIGN\n≊ stop sign",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "octagonal | sign | stop"
    },
    {
        "no": "922",
        "code": "2693",
        "char": "⚓",
        "name": "ANCHOR",
        "date": "2005ªʲ",
        "default": "emoji",
        "keywords": "ship | tool"
    },
    {
        "no": "923",
        "code": "26F5",
        "char": "⛵",
        "name": "SAILBOAT",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "boat | resort | sea | vehicle | yacht"
    },
    {
        "no": "924",
        "code": "1F6F6",
        "char": "🛶",
        "name": "CANOE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "boat | canoe"
    },
    {
        "no": "925",
        "code": "1F6A4",
        "char": "🚤",
        "name": "SPEEDBOAT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "boat | vehicle"
    },
    {
        "no": "926",
        "code": "1F6F3",
        "char": "🛳",
        "name": "PASSENGER SHIP",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "passenger | ship | vehicle"
    },
    {
        "no": "927",
        "code": "26F4",
        "char": "⛴",
        "name": "FERRY",
        "date": "2009ª",
        "default": "text*",
        "keywords": "boat"
    },
    {
        "no": "928",
        "code": "1F6E5",
        "char": "🛥",
        "name": "MOTOR BOAT",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "boat | motorboat | vehicle"
    },
    {
        "no": "929",
        "code": "1F6A2",
        "char": "🚢",
        "name": "SHIP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "930",
        "code": "2708",
        "char": "✈",
        "name": "AIRPLANE",
        "date": "1995ᶻªʲʷ",
        "default": "text*",
        "keywords": "vehicle"
    },
    {
        "no": "931",
        "code": "1F6E9",
        "char": "🛩",
        "name": "SMALL AIRPLANE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "airplane | vehicle"
    },
    {
        "no": "932",
        "code": "1F6EB",
        "char": "🛫",
        "name": "AIRPLANE DEPARTURE",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "airplane | check-in | departure | departures | vehicle"
    },
    {
        "no": "933",
        "code": "1F6EC",
        "char": "🛬",
        "name": "AIRPLANE ARRIVING\n≊ airplane arrival",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "airplane | arrivals | arriving | landing | vehicle"
    },
    {
        "no": "934",
        "code": "1F4BA",
        "char": "💺",
        "name": "SEAT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chair"
    },
    {
        "no": "935",
        "code": "1F681",
        "char": "🚁",
        "name": "HELICOPTER",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "vehicle"
    },
    {
        "no": "936",
        "code": "1F69F",
        "char": "🚟",
        "name": "SUSPENSION RAILWAY",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "railway | suspension | vehicle"
    },
    {
        "no": "937",
        "code": "1F6A0",
        "char": "🚠",
        "name": "MOUNTAIN CABLEWAY",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "cable | gondola | mountain | vehicle"
    },
    {
        "no": "938",
        "code": "1F6A1",
        "char": "🚡",
        "name": "AERIAL TRAMWAY",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "aerial | cable | car | gondola | ropeway | tramway | vehicle"
    },
    {
        "no": "939",
        "code": "1F680",
        "char": "🚀",
        "name": "ROCKET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "space | vehicle"
    },
    {
        "no": "940",
        "code": "1F6F0",
        "char": "🛰",
        "name": "SATELLITE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "space | vehicle"
    },
    {
        "no": "941",
        "code": "1F6CE",
        "char": "🛎",
        "name": "BELLHOP BELL",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "bell | bellhop | hotel"
    },
    {
        "no": "942",
        "code": "1F6AA",
        "char": "🚪",
        "name": "DOOR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "door"
    },
    {
        "no": "943",
        "code": "1F6CC",
        "char": "🛌",
        "name": "SLEEPING ACCOMMODATION\n≊ person in bed",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "hotel | sleep"
    },
    {
        "no": "944",
        "code": "1F6CF",
        "char": "🛏",
        "name": "BED",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "hotel | sleep"
    },
    {
        "no": "945",
        "code": "1F6CB",
        "char": "🛋",
        "name": "COUCH AND LAMP",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "couch | hotel | lamp"
    },
    {
        "no": "946",
        "code": "1F6BD",
        "char": "🚽",
        "name": "TOILET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "toilet"
    },
    {
        "no": "947",
        "code": "1F6BF",
        "char": "🚿",
        "name": "SHOWER",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "water"
    },
    {
        "no": "948",
        "code": "1F6C0",
        "char": "🛀",
        "name": "BATH\n≊ person taking bath",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bath | bathtub"
    },
    {
        "no": "949",
        "code": "1F6C0 1F3FB",
        "char": "🛀🏻",
        "name": "person taking bath, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bath | bathtub | type-1-2"
    },
    {
        "no": "950",
        "code": "1F6C0 1F3FC",
        "char": "🛀🏼",
        "name": "person taking bath, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bath | bathtub | type-3"
    },
    {
        "no": "951",
        "code": "1F6C0 1F3FD",
        "char": "🛀🏽",
        "name": "person taking bath, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bath | bathtub | type-4"
    },
    {
        "no": "952",
        "code": "1F6C0 1F3FE",
        "char": "🛀🏾",
        "name": "person taking bath, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bath | bathtub | type-5"
    },
    {
        "no": "953",
        "code": "1F6C0 1F3FF",
        "char": "🛀🏿",
        "name": "person taking bath, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bath | bathtub | type-6"
    },
    {
        "no": "954",
        "code": "1F6C1",
        "char": "🛁",
        "name": "BATHTUB",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bath"
    },
    {
        "no": "955",
        "code": "231B",
        "char": "⌛",
        "name": "HOURGLASS",
        "date": "1995ʲ",
        "default": "emoji",
        "keywords": "sand | timer"
    },
    {
        "no": "956",
        "code": "23F3",
        "char": "⏳",
        "name": "HOURGLASS WITH FLOWING SAND",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "hourglass | sand | timer"
    },
    {
        "no": "957",
        "code": "231A",
        "char": "⌚",
        "name": "WATCH",
        "date": "1995ʲ",
        "default": "emoji",
        "keywords": "clock"
    },
    {
        "no": "958",
        "code": "23F0",
        "char": "⏰",
        "name": "ALARM CLOCK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "alarm | clock"
    },
    {
        "no": "959",
        "code": "23F1",
        "char": "⏱",
        "name": "STOPWATCH",
        "date": "2010ˣ",
        "default": "text*",
        "keywords": "clock"
    },
    {
        "no": "960",
        "code": "23F2",
        "char": "⏲",
        "name": "TIMER CLOCK",
        "date": "2010ˣ",
        "default": "text*",
        "keywords": "clock | timer"
    },
    {
        "no": "961",
        "code": "1F570",
        "char": "🕰",
        "name": "MANTELPIECE CLOCK",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "clock"
    },
    {
        "no": "962",
        "code": "1F55B",
        "char": "🕛",
        "name": "CLOCK FACE TWELVE OCLOCK\n≊ twelve o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 12 | 12:00 | clock | o’clock | twelve"
    },
    {
        "no": "963",
        "code": "1F567",
        "char": "🕧",
        "name": "CLOCK FACE TWELVE-THIRTY\n≊ twelve-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "12 | 12:30 | 30 | clock | thirty | twelve"
    },
    {
        "no": "964",
        "code": "1F550",
        "char": "🕐",
        "name": "CLOCK FACE ONE OCLOCK\n≊ one o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 1 | 1:00 | clock | o’clock | one"
    },
    {
        "no": "965",
        "code": "1F55C",
        "char": "🕜",
        "name": "CLOCK FACE ONE-THIRTY\n≊ one-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "1 | 1:30 | 30 | clock | one | thirty"
    },
    {
        "no": "966",
        "code": "1F551",
        "char": "🕑",
        "name": "CLOCK FACE TWO OCLOCK\n≊ two o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 2 | 2:00 | clock | o’clock | two"
    },
    {
        "no": "967",
        "code": "1F55D",
        "char": "🕝",
        "name": "CLOCK FACE TWO-THIRTY\n≊ two-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "2 | 2:30 | 30 | clock | thirty | two"
    },
    {
        "no": "968",
        "code": "1F552",
        "char": "🕒",
        "name": "CLOCK FACE THREE OCLOCK\n≊ three o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 3 | 3:00 | clock | o’clock | three"
    },
    {
        "no": "969",
        "code": "1F55E",
        "char": "🕞",
        "name": "CLOCK FACE THREE-THIRTY\n≊ three-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "3 | 3:30 | 30 | clock | thirty | three"
    },
    {
        "no": "970",
        "code": "1F553",
        "char": "🕓",
        "name": "CLOCK FACE FOUR OCLOCK\n≊ four o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 4 | 4:00 | clock | four | o’clock"
    },
    {
        "no": "971",
        "code": "1F55F",
        "char": "🕟",
        "name": "CLOCK FACE FOUR-THIRTY\n≊ four-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "30 | 4 | 4:30 | clock | four | thirty"
    },
    {
        "no": "972",
        "code": "1F554",
        "char": "🕔",
        "name": "CLOCK FACE FIVE OCLOCK\n≊ five o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 5 | 5:00 | clock | five | o’clock"
    },
    {
        "no": "973",
        "code": "1F560",
        "char": "🕠",
        "name": "CLOCK FACE FIVE-THIRTY\n≊ five-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "30 | 5 | 5:30 | clock | five | thirty"
    },
    {
        "no": "974",
        "code": "1F555",
        "char": "🕕",
        "name": "CLOCK FACE SIX OCLOCK\n≊ six o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 6 | 6:00 | clock | o’clock | six"
    },
    {
        "no": "975",
        "code": "1F561",
        "char": "🕡",
        "name": "CLOCK FACE SIX-THIRTY\n≊ six-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "30 | 6 | 6:30 | clock | six | thirty"
    },
    {
        "no": "976",
        "code": "1F556",
        "char": "🕖",
        "name": "CLOCK FACE SEVEN OCLOCK\n≊ seven o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 7 | 7:00 | clock | o’clock | seven"
    },
    {
        "no": "977",
        "code": "1F562",
        "char": "🕢",
        "name": "CLOCK FACE SEVEN-THIRTY\n≊ seven-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "30 | 7 | 7:30 | clock | seven | thirty"
    },
    {
        "no": "978",
        "code": "1F557",
        "char": "🕗",
        "name": "CLOCK FACE EIGHT OCLOCK\n≊ eight o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 8 | 8:00 | clock | eight | o’clock"
    },
    {
        "no": "979",
        "code": "1F563",
        "char": "🕣",
        "name": "CLOCK FACE EIGHT-THIRTY\n≊ eight-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "30 | 8 | 8:30 | clock | eight | thirty"
    },
    {
        "no": "980",
        "code": "1F558",
        "char": "🕘",
        "name": "CLOCK FACE NINE OCLOCK\n≊ nine o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 9 | 9:00 | clock | nine | o’clock"
    },
    {
        "no": "981",
        "code": "1F564",
        "char": "🕤",
        "name": "CLOCK FACE NINE-THIRTY\n≊ nine-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "30 | 9 | 9:30 | clock | nine | thirty"
    },
    {
        "no": "982",
        "code": "1F559",
        "char": "🕙",
        "name": "CLOCK FACE TEN OCLOCK\n≊ ten o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 10 | 10:00 | clock | o’clock | ten"
    },
    {
        "no": "983",
        "code": "1F565",
        "char": "🕥",
        "name": "CLOCK FACE TEN-THIRTY\n≊ ten-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "10 | 10:30 | 30 | clock | ten | thirty"
    },
    {
        "no": "984",
        "code": "1F55A",
        "char": "🕚",
        "name": "CLOCK FACE ELEVEN OCLOCK\n≊ eleven o’clock",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "00 | 11 | 11:00 | clock | eleven | o’clock"
    },
    {
        "no": "985",
        "code": "1F566",
        "char": "🕦",
        "name": "CLOCK FACE ELEVEN-THIRTY\n≊ eleven-thirty",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "11 | 11:30 | 30 | clock | eleven | thirty"
    },
    {
        "no": "986",
        "code": "1F311",
        "char": "🌑",
        "name": "NEW MOON SYMBOL\n≊ new moon",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dark | moon | space | weather"
    },
    {
        "no": "987",
        "code": "1F312",
        "char": "🌒",
        "name": "WAXING CRESCENT MOON SYMBOL\n≊ waxing crescent moon",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "crescent | moon | space | waxing | weather"
    },
    {
        "no": "988",
        "code": "1F313",
        "char": "🌓",
        "name": "FIRST QUARTER MOON SYMBOL\n≊ first quarter moon",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "moon | quarter | space | weather"
    },
    {
        "no": "989",
        "code": "1F314",
        "char": "🌔",
        "name": "WAXING GIBBOUS MOON SYMBOL\n≊ waxing gibbous moon",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "gibbous | moon | space | waxing | weather"
    },
    {
        "no": "990",
        "code": "1F315",
        "char": "🌕",
        "name": "FULL MOON SYMBOL\n≊ full moon",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "full | moon | space | weather"
    },
    {
        "no": "991",
        "code": "1F316",
        "char": "🌖",
        "name": "WANING GIBBOUS MOON SYMBOL\n≊ waning gibbous moon",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "gibbous | moon | space | waning | weather"
    },
    {
        "no": "992",
        "code": "1F317",
        "char": "🌗",
        "name": "LAST QUARTER MOON SYMBOL\n≊ last quarter moon",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "moon | quarter | space | weather"
    },
    {
        "no": "993",
        "code": "1F318",
        "char": "🌘",
        "name": "WANING CRESCENT MOON SYMBOL\n≊ waning crescent moon",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "crescent | moon | space | waning | weather"
    },
    {
        "no": "994",
        "code": "1F319",
        "char": "🌙",
        "name": "CRESCENT MOON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "crescent | moon | space | weather"
    },
    {
        "no": "995",
        "code": "1F31A",
        "char": "🌚",
        "name": "NEW MOON WITH FACE\n≊ new moon face",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "face | moon | space | weather"
    },
    {
        "no": "996",
        "code": "1F31B",
        "char": "🌛",
        "name": "FIRST QUARTER MOON WITH FACE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | moon | quarter | space | weather"
    },
    {
        "no": "997",
        "code": "1F31C",
        "char": "🌜",
        "name": "LAST QUARTER MOON WITH FACE",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "face | moon | quarter | space | weather"
    },
    {
        "no": "998",
        "code": "1F321",
        "char": "🌡",
        "name": "THERMOMETER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "weather"
    },
    {
        "no": "999",
        "code": "2600",
        "char": "☀",
        "name": "BLACK SUN WITH RAYS\n≊ sun",
        "date": "1995ªʲ",
        "default": "text*",
        "keywords": "bright | rays | space | sunny | weather"
    },
    {
        "no": "1000",
        "code": "1F31D",
        "char": "🌝",
        "name": "FULL MOON WITH FACE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bright | face | full | moon | space | weather"
    },
    {
        "no": "1001",
        "code": "1F31E",
        "char": "🌞",
        "name": "SUN WITH FACE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bright | face | space | sun | weather"
    },
    {
        "no": "1002",
        "code": "2B50",
        "char": "⭐",
        "name": "WHITE MEDIUM STAR",
        "date": "2008ʲ",
        "default": "emoji",
        "keywords": "star"
    },
    {
        "no": "1003",
        "code": "1F31F",
        "char": "🌟",
        "name": "GLOWING STAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "glittery | glow | shining | sparkle | star"
    },
    {
        "no": "1004",
        "code": "1F320",
        "char": "🌠",
        "name": "SHOOTING STAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "falling | shooting | space | star"
    },
    {
        "no": "1005",
        "code": "2601",
        "char": "☁",
        "name": "CLOUD",
        "date": "1995ªʲʷ",
        "default": "text*",
        "keywords": "weather"
    },
    {
        "no": "1006",
        "code": "26C5",
        "char": "⛅",
        "name": "SUN BEHIND CLOUD",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "cloud | sun | weather"
    },
    {
        "no": "1007",
        "code": "26C8",
        "char": "⛈",
        "name": "THUNDER CLOUD AND RAIN\n≊ cloud with lightning and rain",
        "date": "2009ª",
        "default": "text*",
        "keywords": "cloud | rain | thunder | weather"
    },
    {
        "no": "1008",
        "code": "1F324",
        "char": "🌤",
        "name": "WHITE SUN WITH SMALL CLOUD\n≊ sun behind small cloud",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | sun | weather"
    },
    {
        "no": "1009",
        "code": "1F325",
        "char": "🌥",
        "name": "WHITE SUN BEHIND CLOUD\n≊ sun behind large cloud",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | sun | weather"
    },
    {
        "no": "1010",
        "code": "1F326",
        "char": "🌦",
        "name": "WHITE SUN BEHIND CLOUD WITH RAIN\n≊ sun behind cloud with rain",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | rain | sun | weather"
    },
    {
        "no": "1011",
        "code": "1F327",
        "char": "🌧",
        "name": "CLOUD WITH RAIN",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | rain | weather"
    },
    {
        "no": "1012",
        "code": "1F328",
        "char": "🌨",
        "name": "CLOUD WITH SNOW",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | cold | snow | weather"
    },
    {
        "no": "1013",
        "code": "1F329",
        "char": "🌩",
        "name": "CLOUD WITH LIGHTNING",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | lightning | weather"
    },
    {
        "no": "1014",
        "code": "1F32A",
        "char": "🌪",
        "name": "CLOUD WITH TORNADO\n≊ tornado",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | weather | whirlwind"
    },
    {
        "no": "1015",
        "code": "1F32B",
        "char": "🌫",
        "name": "FOG",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cloud | weather"
    },
    {
        "no": "1016",
        "code": "1F32C",
        "char": "🌬",
        "name": "WIND BLOWING FACE\n≊ wind face",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "blow | cloud | face | weather | wind"
    },
    {
        "no": "1017",
        "code": "1F300",
        "char": "🌀",
        "name": "CYCLONE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dizzy | twister | typhoon | weather"
    },
    {
        "no": "1018",
        "code": "1F308",
        "char": "🌈",
        "name": "RAINBOW",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "rain | weather"
    },
    {
        "no": "1019",
        "code": "1F302",
        "char": "🌂",
        "name": "CLOSED UMBRELLA",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "clothing | rain | umbrella | weather"
    },
    {
        "no": "1020",
        "code": "2602",
        "char": "☂",
        "name": "UMBRELLA",
        "date": "1995ª",
        "default": "text*",
        "keywords": "clothing | rain | weather"
    },
    {
        "no": "1021",
        "code": "2614",
        "char": "☔",
        "name": "UMBRELLA WITH RAIN DROPS",
        "date": "2003ªʲ",
        "default": "emoji",
        "keywords": "clothing | drop | rain | umbrella | weather"
    },
    {
        "no": "1022",
        "code": "26F1",
        "char": "⛱",
        "name": "UMBRELLA ON GROUND",
        "date": "2009ª",
        "default": "text*",
        "keywords": "rain | sun | umbrella | weather"
    },
    {
        "no": "1023",
        "code": "26A1",
        "char": "⚡",
        "name": "HIGH VOLTAGE SIGN\n≊ high voltage",
        "date": "2003ªʲ",
        "default": "emoji",
        "keywords": "danger | electric | electricity | lightning | voltage | zap"
    },
    {
        "no": "1024",
        "code": "2744",
        "char": "❄",
        "name": "SNOWFLAKE",
        "date": "1995ᶻʲʷ",
        "default": "text*",
        "keywords": "cold | snow | weather"
    },
    {
        "no": "1025",
        "code": "2603",
        "char": "☃",
        "name": "SNOWMAN",
        "date": "1995ª",
        "default": "text*",
        "keywords": "cold | snow | weather"
    },
    {
        "no": "1026",
        "code": "26C4",
        "char": "⛄",
        "name": "SNOWMAN WITHOUT SNOW",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "cold | snow | snowman | weather"
    },
    {
        "no": "1027",
        "code": "2604",
        "char": "☄",
        "name": "COMET",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "space"
    },
    {
        "no": "1028",
        "code": "1F525",
        "char": "🔥",
        "name": "FIRE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "flame | tool"
    },
    {
        "no": "1029",
        "code": "1F4A7",
        "char": "💧",
        "name": "DROPLET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cold | comic | drop | sweat | weather"
    },
    {
        "no": "1030",
        "code": "1F30A",
        "char": "🌊",
        "name": "WATER WAVE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ocean | water | wave | weather"
    },
    {
        "no": "1031",
        "code": "1F383",
        "char": "🎃",
        "name": "JACK-O-LANTERN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | halloween | jack | lantern"
    },
    {
        "no": "1032",
        "code": "1F384",
        "char": "🎄",
        "name": "CHRISTMAS TREE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | christmas | tree"
    },
    {
        "no": "1033",
        "code": "1F386",
        "char": "🎆",
        "name": "FIREWORKS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration"
    },
    {
        "no": "1034",
        "code": "1F387",
        "char": "🎇",
        "name": "FIREWORK SPARKLER\n≊ sparkler",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | fireworks | sparkle"
    },
    {
        "no": "1035",
        "code": "2728",
        "char": "✨",
        "name": "SPARKLES",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "sparkle | star"
    },
    {
        "no": "1036",
        "code": "1F388",
        "char": "🎈",
        "name": "BALLOON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration"
    },
    {
        "no": "1037",
        "code": "1F389",
        "char": "🎉",
        "name": "PARTY POPPER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | party | popper | tada"
    },
    {
        "no": "1038",
        "code": "1F38A",
        "char": "🎊",
        "name": "CONFETTI BALL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ball | celebration | confetti"
    },
    {
        "no": "1039",
        "code": "1F38B",
        "char": "🎋",
        "name": "TANABATA TREE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "banner | celebration | japanese | tree"
    },
    {
        "no": "1040",
        "code": "1F38D",
        "char": "🎍",
        "name": "PINE DECORATION",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bamboo | celebration | japanese | pine | plant"
    },
    {
        "no": "1041",
        "code": "1F38E",
        "char": "🎎",
        "name": "JAPANESE DOLLS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | doll | festival | japanese"
    },
    {
        "no": "1042",
        "code": "1F38F",
        "char": "🎏",
        "name": "CARP STREAMER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "carp | celebration | streamer"
    },
    {
        "no": "1043",
        "code": "1F390",
        "char": "🎐",
        "name": "WIND CHIME",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bell | celebration | chime | wind"
    },
    {
        "no": "1044",
        "code": "1F391",
        "char": "🎑",
        "name": "MOON VIEWING CEREMONY\n≊ moon ceremony",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | ceremony | moon"
    },
    {
        "no": "1045",
        "code": "1F380",
        "char": "🎀",
        "name": "RIBBON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration"
    },
    {
        "no": "1046",
        "code": "1F381",
        "char": "🎁",
        "name": "WRAPPED PRESENT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "box | celebration | gift | present | wrapped"
    },
    {
        "no": "1047",
        "code": "1F397",
        "char": "🎗",
        "name": "REMINDER RIBBON",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "celebration | reminder | ribbon"
    },
    {
        "no": "1048",
        "code": "1F39F",
        "char": "🎟",
        "name": "ADMISSION TICKETS",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "admission | ticket"
    },
    {
        "no": "1049",
        "code": "1F3AB",
        "char": "🎫",
        "name": "TICKET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "admission"
    },
    {
        "no": "1050",
        "code": "1F396",
        "char": "🎖",
        "name": "MILITARY MEDAL",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "celebration | medal | military"
    },
    {
        "no": "1051",
        "code": "1F3C6",
        "char": "🏆",
        "name": "TROPHY",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "prize"
    },
    {
        "no": "1052",
        "code": "1F3C5",
        "char": "🏅",
        "name": "SPORTS MEDAL",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "medal"
    },
    {
        "no": "1053",
        "code": "1F947",
        "char": "🥇",
        "name": "FIRST PLACE MEDAL\n≊ 1st place medal",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "first | gold | medal"
    },
    {
        "no": "1054",
        "code": "1F948",
        "char": "🥈",
        "name": "SECOND PLACE MEDAL\n≊ 2nd place medal",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "medal | second | silver"
    },
    {
        "no": "1055",
        "code": "1F949",
        "char": "🥉",
        "name": "THIRD PLACE MEDAL\n≊ 3rd place medal",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "bronze | medal | third"
    },
    {
        "no": "1056",
        "code": "26BD",
        "char": "⚽",
        "name": "SOCCER BALL",
        "date": "2009ʲ",
        "default": "emoji",
        "keywords": "ball | soccer"
    },
    {
        "no": "1057",
        "code": "26BE",
        "char": "⚾",
        "name": "BASEBALL",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "ball"
    },
    {
        "no": "1058",
        "code": "1F3C0",
        "char": "🏀",
        "name": "BASKETBALL AND HOOP\n≊ basketball",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ball | hoop"
    },
    {
        "no": "1059",
        "code": "1F3D0",
        "char": "🏐",
        "name": "VOLLEYBALL",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "ball | game"
    },
    {
        "no": "1060",
        "code": "1F3C8",
        "char": "🏈",
        "name": "AMERICAN FOOTBALL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "american | ball | football"
    },
    {
        "no": "1061",
        "code": "1F3C9",
        "char": "🏉",
        "name": "RUGBY FOOTBALL",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "ball | football | rugby"
    },
    {
        "no": "1062",
        "code": "1F3BE",
        "char": "🎾",
        "name": "TENNIS RACQUET AND BALL\n≊ tennis",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ball | racquet"
    },
    {
        "no": "1063",
        "code": "1F3B1",
        "char": "🎱",
        "name": "BILLIARDS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "8 | 8 ball | ball | billiard | eight | game"
    },
    {
        "no": "1064",
        "code": "1F3B3",
        "char": "🎳",
        "name": "BOWLING",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ball | game"
    },
    {
        "no": "1065",
        "code": "1F3CF",
        "char": "🏏",
        "name": "CRICKET BAT AND BALL\n≊ cricket",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "ball | bat | game"
    },
    {
        "no": "1066",
        "code": "1F3D1",
        "char": "🏑",
        "name": "FIELD HOCKEY STICK AND BALL\n≊ field hockey",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "ball | field | game | hockey | stick"
    },
    {
        "no": "1067",
        "code": "1F3D2",
        "char": "🏒",
        "name": "ICE HOCKEY STICK AND PUCK",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "game | hockey | ice | puck | stick"
    },
    {
        "no": "1068",
        "code": "1F3D3",
        "char": "🏓",
        "name": "TABLE TENNIS PADDLE AND BALL\n≊ ping pong",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "ball | bat | game | paddle | table tennis"
    },
    {
        "no": "1069",
        "code": "1F3F8",
        "char": "🏸",
        "name": "BADMINTON RACQUET AND SHUTTLECOCK\n≊ badminton",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "birdie | game | racquet | shuttlecock"
    },
    {
        "no": "1070",
        "code": "1F94A",
        "char": "🥊",
        "name": "BOXING GLOVE",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "boxing | glove | sport"
    },
    {
        "no": "1071",
        "code": "1F94B",
        "char": "🥋",
        "name": "MARTIAL ARTS UNIFORM",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "judo | karate | martial arts | sport | taekwondo | uniform"
    },
    {
        "no": "1072",
        "code": "1F945",
        "char": "🥅",
        "name": "GOAL NET",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "goal | net | sport"
    },
    {
        "no": "1073",
        "code": "1F3AF",
        "char": "🎯",
        "name": "DIRECT HIT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bull | bullseye | dart | eye | game | hit | target"
    },
    {
        "no": "1074",
        "code": "26F3",
        "char": "⛳",
        "name": "FLAG IN HOLE",
        "date": "2009ªʲʷ",
        "default": "emoji",
        "keywords": "golf | hole"
    },
    {
        "no": "1075",
        "code": "26F8",
        "char": "⛸",
        "name": "ICE SKATE",
        "date": "2009ª",
        "default": "text*",
        "keywords": "ice | skate"
    },
    {
        "no": "1076",
        "code": "1F3A3",
        "char": "🎣",
        "name": "FISHING POLE AND FISH\n≊ fishing pole",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fish | pole"
    },
    {
        "no": "1077",
        "code": "1F3BD",
        "char": "🎽",
        "name": "RUNNING SHIRT WITH SASH\n≊ running shirt",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "running | sash | shirt"
    },
    {
        "no": "1078",
        "code": "1F3BF",
        "char": "🎿",
        "name": "SKI AND SKI BOOT\n≊ skis",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ski | snow"
    },
    {
        "no": "1079",
        "code": "1F93A",
        "char": "🤺",
        "name": "FENCER\n≊ person fencing",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "fencer | fencing | person | sport | sword"
    },
    {
        "no": "1080",
        "code": "1F3C7",
        "char": "🏇",
        "name": "HORSE RACING",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "horse | jockey | racehorse | racing"
    },
    {
        "no": "1081",
        "code": "26F7",
        "char": "⛷",
        "name": "SKIER",
        "date": "2009ªʷ",
        "default": "text*",
        "keywords": "ski | snow"
    },
    {
        "no": "1082",
        "code": "1F3C2",
        "char": "🏂",
        "name": "SNOWBOARDER",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "ski | snow | snowboard"
    },
    {
        "no": "1083",
        "code": "1F3CC",
        "char": "🏌",
        "name": "GOLFER\n≊ person golfing",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "ball | golf"
    },
    {
        "no": "1084",
        "code": "1F3C4",
        "char": "🏄",
        "name": "SURFER\n≊ person surfing",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "surfing"
    },
    {
        "no": "1085",
        "code": "1F3C4 1F3FB",
        "char": "🏄🏻",
        "name": "person surfing, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "surfing | type-1-2"
    },
    {
        "no": "1086",
        "code": "1F3C4 1F3FC",
        "char": "🏄🏼",
        "name": "person surfing, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "surfing | type-3"
    },
    {
        "no": "1087",
        "code": "1F3C4 1F3FD",
        "char": "🏄🏽",
        "name": "person surfing, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "surfing | type-4"
    },
    {
        "no": "1088",
        "code": "1F3C4 1F3FE",
        "char": "🏄🏾",
        "name": "person surfing, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "surfing | type-5"
    },
    {
        "no": "1089",
        "code": "1F3C4 1F3FF",
        "char": "🏄🏿",
        "name": "person surfing, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "surfing | type-6"
    },
    {
        "no": "1090",
        "code": "1F6A3",
        "char": "🚣",
        "name": "ROWBOAT\n≊ person rowing boat",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "boat | rowboat | vehicle"
    },
    {
        "no": "1091",
        "code": "1F6A3 1F3FB",
        "char": "🚣🏻",
        "name": "person rowing boat, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boat | rowboat | type-1-2 | vehicle"
    },
    {
        "no": "1092",
        "code": "1F6A3 1F3FC",
        "char": "🚣🏼",
        "name": "person rowing boat, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boat | rowboat | type-3 | vehicle"
    },
    {
        "no": "1093",
        "code": "1F6A3 1F3FD",
        "char": "🚣🏽",
        "name": "person rowing boat, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boat | rowboat | type-4 | vehicle"
    },
    {
        "no": "1094",
        "code": "1F6A3 1F3FE",
        "char": "🚣🏾",
        "name": "person rowing boat, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boat | rowboat | type-5 | vehicle"
    },
    {
        "no": "1095",
        "code": "1F6A3 1F3FF",
        "char": "🚣🏿",
        "name": "person rowing boat, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "boat | rowboat | type-6 | vehicle"
    },
    {
        "no": "1096",
        "code": "1F3CA",
        "char": "🏊",
        "name": "SWIMMER\n≊ person swimming",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "swim"
    },
    {
        "no": "1097",
        "code": "1F3CA 1F3FB",
        "char": "🏊🏻",
        "name": "person swimming, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "swim | type-1-2"
    },
    {
        "no": "1098",
        "code": "1F3CA 1F3FC",
        "char": "🏊🏼",
        "name": "person swimming, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "swim | type-3"
    },
    {
        "no": "1099",
        "code": "1F3CA 1F3FD",
        "char": "🏊🏽",
        "name": "person swimming, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "swim | type-4"
    },
    {
        "no": "1100",
        "code": "1F3CA 1F3FE",
        "char": "🏊🏾",
        "name": "person swimming, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "swim | type-5"
    },
    {
        "no": "1101",
        "code": "1F3CA 1F3FF",
        "char": "🏊🏿",
        "name": "person swimming, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "swim | type-6"
    },
    {
        "no": "1102",
        "code": "26F9",
        "char": "⛹",
        "name": "PERSON WITH BALL",
        "date": "2009ª",
        "default": "text*",
        "keywords": "ball"
    },
    {
        "no": "1103",
        "code": "26F9 1F3FB",
        "char": "⛹🏻",
        "name": "person with ball, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ball | type-1-2"
    },
    {
        "no": "1104",
        "code": "26F9 1F3FC",
        "char": "⛹🏼",
        "name": "person with ball, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ball | type-3"
    },
    {
        "no": "1105",
        "code": "26F9 1F3FD",
        "char": "⛹🏽",
        "name": "person with ball, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ball | type-4"
    },
    {
        "no": "1106",
        "code": "26F9 1F3FE",
        "char": "⛹🏾",
        "name": "person with ball, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ball | type-5"
    },
    {
        "no": "1107",
        "code": "26F9 1F3FF",
        "char": "⛹🏿",
        "name": "person with ball, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "ball | type-6"
    },
    {
        "no": "1108",
        "code": "1F3CB",
        "char": "🏋",
        "name": "WEIGHT LIFTER\n≊ person weight lifting",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "lifter | weight"
    },
    {
        "no": "1109",
        "code": "1F3CB 1F3FB",
        "char": "🏋🏻",
        "name": "person weight lifting, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "lifter | type-1-2 | weight"
    },
    {
        "no": "1110",
        "code": "1F3CB 1F3FC",
        "char": "🏋🏼",
        "name": "person weight lifting, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "lifter | type-3 | weight"
    },
    {
        "no": "1111",
        "code": "1F3CB 1F3FD",
        "char": "🏋🏽",
        "name": "person weight lifting, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "lifter | type-4 | weight"
    },
    {
        "no": "1112",
        "code": "1F3CB 1F3FE",
        "char": "🏋🏾",
        "name": "person weight lifting, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "lifter | type-5 | weight"
    },
    {
        "no": "1113",
        "code": "1F3CB 1F3FF",
        "char": "🏋🏿",
        "name": "person weight lifting, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "lifter | type-6 | weight"
    },
    {
        "no": "1114",
        "code": "1F6B4",
        "char": "🚴",
        "name": "BICYCLIST\n≊ person biking",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bicycle | bike | cyclist"
    },
    {
        "no": "1115",
        "code": "1F6B4 1F3FB",
        "char": "🚴🏻",
        "name": "person biking, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bike | cyclist | type-1-2"
    },
    {
        "no": "1116",
        "code": "1F6B4 1F3FC",
        "char": "🚴🏼",
        "name": "person biking, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bike | cyclist | type-3"
    },
    {
        "no": "1117",
        "code": "1F6B4 1F3FD",
        "char": "🚴🏽",
        "name": "person biking, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bike | cyclist | type-4"
    },
    {
        "no": "1118",
        "code": "1F6B4 1F3FE",
        "char": "🚴🏾",
        "name": "person biking, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bike | cyclist | type-5"
    },
    {
        "no": "1119",
        "code": "1F6B4 1F3FF",
        "char": "🚴🏿",
        "name": "person biking, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bike | cyclist | type-6"
    },
    {
        "no": "1120",
        "code": "1F6B5",
        "char": "🚵",
        "name": "MOUNTAIN BICYCLIST\n≊ person mountain biking",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bicycle | bicyclist | bike | cyclist | mountain"
    },
    {
        "no": "1121",
        "code": "1F6B5 1F3FB",
        "char": "🚵🏻",
        "name": "person mountain biking, type-1-2",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-1-2"
    },
    {
        "no": "1122",
        "code": "1F6B5 1F3FC",
        "char": "🚵🏼",
        "name": "person mountain biking, type-3",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-3"
    },
    {
        "no": "1123",
        "code": "1F6B5 1F3FD",
        "char": "🚵🏽",
        "name": "person mountain biking, type-4",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-4"
    },
    {
        "no": "1124",
        "code": "1F6B5 1F3FE",
        "char": "🚵🏾",
        "name": "person mountain biking, type-5",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-5"
    },
    {
        "no": "1125",
        "code": "1F6B5 1F3FF",
        "char": "🚵🏿",
        "name": "person mountain biking, type-6",
        "date": "2015ˣ",
        "default": "n/a",
        "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-6"
    },
    {
        "no": "1126",
        "code": "1F938",
        "char": "🤸",
        "name": "PERSON DOING CARTWHEEL",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "cartwheel | gymnastics | person | sport"
    },
    {
        "no": "1127",
        "code": "1F938 1F3FB",
        "char": "🤸🏻",
        "name": "person doing cartwheel, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cartwheel | gymnastics | person | sport | type-1-2"
    },
    {
        "no": "1128",
        "code": "1F938 1F3FC",
        "char": "🤸🏼",
        "name": "person doing cartwheel, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cartwheel | gymnastics | person | sport | type-3"
    },
    {
        "no": "1129",
        "code": "1F938 1F3FD",
        "char": "🤸🏽",
        "name": "person doing cartwheel, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cartwheel | gymnastics | person | sport | type-4"
    },
    {
        "no": "1130",
        "code": "1F938 1F3FE",
        "char": "🤸🏾",
        "name": "person doing cartwheel, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cartwheel | gymnastics | person | sport | type-5"
    },
    {
        "no": "1131",
        "code": "1F938 1F3FF",
        "char": "🤸🏿",
        "name": "person doing cartwheel, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "cartwheel | gymnastics | person | sport | type-6"
    },
    {
        "no": "1132",
        "code": "1F93C",
        "char": "🤼",
        "name": "WRESTLERS\n≊ people wrestling",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "person | sport | wrestle | wrestler"
    },
    {
        "no": "1133",
        "code": "1F93C 1F3FB",
        "char": "🤼🏻",
        "name": "people wrestling, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | sport | type-1-2 | wrestle | wrestler"
    },
    {
        "no": "1134",
        "code": "1F93C 1F3FC",
        "char": "🤼🏼",
        "name": "people wrestling, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | sport | type-3 | wrestle | wrestler"
    },
    {
        "no": "1135",
        "code": "1F93C 1F3FD",
        "char": "🤼🏽",
        "name": "people wrestling, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | sport | type-4 | wrestle | wrestler"
    },
    {
        "no": "1136",
        "code": "1F93C 1F3FE",
        "char": "🤼🏾",
        "name": "people wrestling, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | sport | type-5 | wrestle | wrestler"
    },
    {
        "no": "1137",
        "code": "1F93C 1F3FF",
        "char": "🤼🏿",
        "name": "people wrestling, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | sport | type-6 | wrestle | wrestler"
    },
    {
        "no": "1138",
        "code": "1F93D",
        "char": "🤽",
        "name": "WATER POLO\n≊ person playing water polo",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "person | polo | sport | water"
    },
    {
        "no": "1139",
        "code": "1F93D 1F3FB",
        "char": "🤽🏻",
        "name": "person playing water polo, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | polo | sport | type-1-2 | water"
    },
    {
        "no": "1140",
        "code": "1F93D 1F3FC",
        "char": "🤽🏼",
        "name": "person playing water polo, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | polo | sport | type-3 | water"
    },
    {
        "no": "1141",
        "code": "1F93D 1F3FD",
        "char": "🤽🏽",
        "name": "person playing water polo, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | polo | sport | type-4 | water"
    },
    {
        "no": "1142",
        "code": "1F93D 1F3FE",
        "char": "🤽🏾",
        "name": "person playing water polo, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | polo | sport | type-5 | water"
    },
    {
        "no": "1143",
        "code": "1F93D 1F3FF",
        "char": "🤽🏿",
        "name": "person playing water polo, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "person | polo | sport | type-6 | water"
    },
    {
        "no": "1144",
        "code": "1F93E",
        "char": "🤾",
        "name": "HANDBALL\n≊ person playing handball",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "ball | handball | person | sport"
    },
    {
        "no": "1145",
        "code": "1F93E 1F3FB",
        "char": "🤾🏻",
        "name": "person playing handball, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "ball | handball | person | sport | type-1-2"
    },
    {
        "no": "1146",
        "code": "1F93E 1F3FC",
        "char": "🤾🏼",
        "name": "person playing handball, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "ball | handball | person | sport | type-3"
    },
    {
        "no": "1147",
        "code": "1F93E 1F3FD",
        "char": "🤾🏽",
        "name": "person playing handball, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "ball | handball | person | sport | type-4"
    },
    {
        "no": "1148",
        "code": "1F93E 1F3FE",
        "char": "🤾🏾",
        "name": "person playing handball, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "ball | handball | person | sport | type-5"
    },
    {
        "no": "1149",
        "code": "1F93E 1F3FF",
        "char": "🤾🏿",
        "name": "person playing handball, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "ball | handball | person | sport | type-6"
    },
    {
        "no": "1150",
        "code": "1F939",
        "char": "🤹",
        "name": "JUGGLING\n≊ person juggling",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "balance | juggle | multitask | skill"
    },
    {
        "no": "1151",
        "code": "1F939 1F3FB",
        "char": "🤹🏻",
        "name": "person juggling, type-1-2",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "balance | juggle | multitask | skill | type-1-2"
    },
    {
        "no": "1152",
        "code": "1F939 1F3FC",
        "char": "🤹🏼",
        "name": "person juggling, type-3",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "balance | juggle | multitask | skill | type-3"
    },
    {
        "no": "1153",
        "code": "1F939 1F3FD",
        "char": "🤹🏽",
        "name": "person juggling, type-4",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "balance | juggle | multitask | skill | type-4"
    },
    {
        "no": "1154",
        "code": "1F939 1F3FE",
        "char": "🤹🏾",
        "name": "person juggling, type-5",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "balance | juggle | multitask | skill | type-5"
    },
    {
        "no": "1155",
        "code": "1F939 1F3FF",
        "char": "🤹🏿",
        "name": "person juggling, type-6",
        "date": "2016ˣ",
        "default": "n/a",
        "keywords": "balance | juggle | multitask | skill | type-6"
    },
    {
        "no": "1156",
        "code": "1F3AE",
        "char": "🎮",
        "name": "VIDEO GAME",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "controller | game"
    },
    {
        "no": "1157",
        "code": "1F579",
        "char": "🕹",
        "name": "JOYSTICK",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "game | video game"
    },
    {
        "no": "1158",
        "code": "1F3B2",
        "char": "🎲",
        "name": "GAME DIE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "dice | die | game"
    },
    {
        "no": "1159",
        "code": "2660",
        "char": "♠",
        "name": "BLACK SPADE SUIT\n≊ spade suit",
        "date": "1995ᶻªʲ",
        "default": "text*",
        "keywords": "card | game | spade | suit"
    },
    {
        "no": "1160",
        "code": "2665",
        "char": "♥",
        "name": "BLACK HEART SUIT\n≊ heart suit",
        "date": "1995ᶻªʲ",
        "default": "text*",
        "keywords": "card | game | heart | hearts | suit"
    },
    {
        "no": "1161",
        "code": "2666",
        "char": "♦",
        "name": "BLACK DIAMOND SUIT\n≊ diamond suit",
        "date": "1995ᶻªʲ",
        "default": "text*",
        "keywords": "card | diamond | diamonds | game | suit"
    },
    {
        "no": "1162",
        "code": "2663",
        "char": "♣",
        "name": "BLACK CLUB SUIT\n≊ club suit",
        "date": "1995ᶻªʲ",
        "default": "text*",
        "keywords": "card | club | clubs | game | suit"
    },
    {
        "no": "1163",
        "code": "1F0CF",
        "char": "🃏",
        "name": "PLAYING CARD BLACK JOKER\n≊ joker",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "card | game | playing"
    },
    {
        "no": "1164",
        "code": "1F004",
        "char": "🀄",
        "name": "MAHJONG TILE RED DRAGON\n≊ mahjong red dragon",
        "date": "2008ʲ",
        "default": "emoji",
        "keywords": "game | mahjong | red"
    },
    {
        "no": "1165",
        "code": "1F3B4",
        "char": "🎴",
        "name": "FLOWER PLAYING CARDS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "card | flower | game | japanese | playing"
    },
    {
        "no": "1166",
        "code": "1F507",
        "char": "🔇",
        "name": "SPEAKER WITH CANCELLATION STROKE\n≊ speaker off",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "mute | quiet | silent | speaker | volume"
    },
    {
        "no": "1167",
        "code": "1F508",
        "char": "🔈",
        "name": "SPEAKER",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "volume"
    },
    {
        "no": "1168",
        "code": "1F509",
        "char": "🔉",
        "name": "SPEAKER WITH ONE SOUND WAVE\n≊ speaker on",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "low | speaker | volume | wave"
    },
    {
        "no": "1169",
        "code": "1F50A",
        "char": "🔊",
        "name": "SPEAKER WITH THREE SOUND WAVES\n≊ speaker loud",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "3 | high | loud | speaker | three | volume"
    },
    {
        "no": "1170",
        "code": "1F4E2",
        "char": "📢",
        "name": "PUBLIC ADDRESS LOUDSPEAKER\n≊ loudspeaker",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "loud | public address"
    },
    {
        "no": "1171",
        "code": "1F4E3",
        "char": "📣",
        "name": "CHEERING MEGAPHONE\n≊ megaphone",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cheering"
    },
    {
        "no": "1172",
        "code": "1F4EF",
        "char": "📯",
        "name": "POSTAL HORN",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "horn | post | postal"
    },
    {
        "no": "1173",
        "code": "1F514",
        "char": "🔔",
        "name": "BELL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bell"
    },
    {
        "no": "1174",
        "code": "1F515",
        "char": "🔕",
        "name": "BELL WITH CANCELLATION STROKE\n≊ bell with slash",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bell | forbidden | mute | no | not | prohibited | quiet | silent"
    },
    {
        "no": "1175",
        "code": "1F3BC",
        "char": "🎼",
        "name": "MUSICAL SCORE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "music | score"
    },
    {
        "no": "1176",
        "code": "1F3B5",
        "char": "🎵",
        "name": "MUSICAL NOTE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "music | note"
    },
    {
        "no": "1177",
        "code": "1F3B6",
        "char": "🎶",
        "name": "MULTIPLE MUSICAL NOTES\n≊ musical notes",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "music | note | notes"
    },
    {
        "no": "1178",
        "code": "1F399",
        "char": "🎙",
        "name": "STUDIO MICROPHONE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "mic | microphone | music | studio"
    },
    {
        "no": "1179",
        "code": "1F39A",
        "char": "🎚",
        "name": "LEVEL SLIDER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "level | music | slider"
    },
    {
        "no": "1180",
        "code": "1F39B",
        "char": "🎛",
        "name": "CONTROL KNOBS",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "control | knobs | music"
    },
    {
        "no": "1181",
        "code": "1F3A4",
        "char": "🎤",
        "name": "MICROPHONE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "karaoke | mic"
    },
    {
        "no": "1182",
        "code": "1F3A7",
        "char": "🎧",
        "name": "HEADPHONE",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "earbud"
    },
    {
        "no": "1183",
        "code": "1F4FB",
        "char": "📻",
        "name": "RADIO",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "video"
    },
    {
        "no": "1184",
        "code": "1F3B7",
        "char": "🎷",
        "name": "SAXOPHONE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "instrument | music | sax"
    },
    {
        "no": "1185",
        "code": "1F3B8",
        "char": "🎸",
        "name": "GUITAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "instrument | music"
    },
    {
        "no": "1186",
        "code": "1F3B9",
        "char": "🎹",
        "name": "MUSICAL KEYBOARD",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "instrument | keyboard | music | piano"
    },
    {
        "no": "1187",
        "code": "1F3BA",
        "char": "🎺",
        "name": "TRUMPET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "instrument | music"
    },
    {
        "no": "1188",
        "code": "1F3BB",
        "char": "🎻",
        "name": "VIOLIN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "instrument | music"
    },
    {
        "no": "1189",
        "code": "1F941",
        "char": "🥁",
        "name": "DRUM WITH DRUMSTICKS\n≊ drum",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "drum | drumsticks | music"
    },
    {
        "no": "1190",
        "code": "1F4F1",
        "char": "📱",
        "name": "MOBILE PHONE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cell | mobile | phone | telephone"
    },
    {
        "no": "1191",
        "code": "1F4F2",
        "char": "📲",
        "name": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT\n≊ mobile phone with arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | call | cell | mobile | phone | receive | telephone"
    },
    {
        "no": "1192",
        "code": "260E",
        "char": "☎",
        "name": "BLACK TELEPHONE\n≊ telephone",
        "date": "1995ᶻªʲ",
        "default": "text*",
        "keywords": "phone"
    },
    {
        "no": "1193",
        "code": "1F4DE",
        "char": "📞",
        "name": "TELEPHONE RECEIVER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "phone | receiver | telephone"
    },
    {
        "no": "1194",
        "code": "1F4DF",
        "char": "📟",
        "name": "PAGER",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "pager"
    },
    {
        "no": "1195",
        "code": "1F4E0",
        "char": "📠",
        "name": "FAX MACHINE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fax"
    },
    {
        "no": "1196",
        "code": "1F50B",
        "char": "🔋",
        "name": "BATTERY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "battery"
    },
    {
        "no": "1197",
        "code": "1F50C",
        "char": "🔌",
        "name": "ELECTRIC PLUG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "electric | electricity | plug"
    },
    {
        "no": "1198",
        "code": "1F4BB",
        "char": "💻",
        "name": "PERSONAL COMPUTER\n≊ laptop computer",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "computer | pc | personal"
    },
    {
        "no": "1199",
        "code": "1F5A5",
        "char": "🖥",
        "name": "DESKTOP COMPUTER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "computer | desktop"
    },
    {
        "no": "1200",
        "code": "1F5A8",
        "char": "🖨",
        "name": "PRINTER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "computer"
    },
    {
        "no": "1201",
        "code": "2328",
        "char": "⌨",
        "name": "KEYBOARD",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "computer"
    },
    {
        "no": "1202",
        "code": "1F5B1",
        "char": "🖱",
        "name": "THREE BUTTON MOUSE\n≊ computer mouse",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "3 | button | computer | mouse | three"
    },
    {
        "no": "1203",
        "code": "1F5B2",
        "char": "🖲",
        "name": "TRACKBALL",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "computer"
    },
    {
        "no": "1204",
        "code": "1F4BD",
        "char": "💽",
        "name": "MINIDISC",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "computer | disk | minidisk | optical"
    },
    {
        "no": "1205",
        "code": "1F4BE",
        "char": "💾",
        "name": "FLOPPY DISK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "computer | disk | floppy"
    },
    {
        "no": "1206",
        "code": "1F4BF",
        "char": "💿",
        "name": "OPTICAL DISC",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "blu-ray | cd | computer | disk | dvd | optical"
    },
    {
        "no": "1207",
        "code": "1F4C0",
        "char": "📀",
        "name": "DVD",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blu-ray | cd | computer | disk | optical"
    },
    {
        "no": "1208",
        "code": "1F3A5",
        "char": "🎥",
        "name": "MOVIE CAMERA",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "camera | cinema | movie"
    },
    {
        "no": "1209",
        "code": "1F39E",
        "char": "🎞",
        "name": "FILM FRAMES",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cinema | film | frames | movie"
    },
    {
        "no": "1210",
        "code": "1F4FD",
        "char": "📽",
        "name": "FILM PROJECTOR",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cinema | film | movie | projector | video"
    },
    {
        "no": "1211",
        "code": "1F3AC",
        "char": "🎬",
        "name": "CLAPPER BOARD",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "clapper | movie"
    },
    {
        "no": "1212",
        "code": "1F4FA",
        "char": "📺",
        "name": "TELEVISION",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "tv | video"
    },
    {
        "no": "1213",
        "code": "1F4F7",
        "char": "📷",
        "name": "CAMERA",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "video"
    },
    {
        "no": "1214",
        "code": "1F4F8",
        "char": "📸",
        "name": "CAMERA WITH FLASH",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "camera | flash | video"
    },
    {
        "no": "1215",
        "code": "1F4F9",
        "char": "📹",
        "name": "VIDEO CAMERA",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "camera | video"
    },
    {
        "no": "1216",
        "code": "1F4FC",
        "char": "📼",
        "name": "VIDEOCASSETTE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "tape | vhs | video"
    },
    {
        "no": "1217",
        "code": "1F50D",
        "char": "🔍",
        "name": "LEFT-POINTING MAGNIFYING GLASS",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "glass | magnifying | search | tool"
    },
    {
        "no": "1218",
        "code": "1F50E",
        "char": "🔎",
        "name": "RIGHT-POINTING MAGNIFYING GLASS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "glass | magnifying | search | tool"
    },
    {
        "no": "1219",
        "code": "1F52C",
        "char": "🔬",
        "name": "MICROSCOPE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "tool"
    },
    {
        "no": "1220",
        "code": "1F52D",
        "char": "🔭",
        "name": "TELESCOPE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "tool"
    },
    {
        "no": "1221",
        "code": "1F4E1",
        "char": "📡",
        "name": "SATELLITE ANTENNA",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "antenna | dish | satellite"
    },
    {
        "no": "1222",
        "code": "1F56F",
        "char": "🕯",
        "name": "CANDLE",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "light"
    },
    {
        "no": "1223",
        "code": "1F4A1",
        "char": "💡",
        "name": "ELECTRIC LIGHT BULB\n≊ light bulb",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bulb | comic | electric | idea | light"
    },
    {
        "no": "1224",
        "code": "1F526",
        "char": "🔦",
        "name": "ELECTRIC TORCH\n≊ flashlight",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "electric | light | tool | torch"
    },
    {
        "no": "1225",
        "code": "1F3EE",
        "char": "🏮",
        "name": "IZAKAYA LANTERN\n≊ red paper lantern",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | japanese | lantern | light | red"
    },
    {
        "no": "1226",
        "code": "1F4D4",
        "char": "📔",
        "name": "NOTEBOOK WITH DECORATIVE COVER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "book | cover | decorated | notebook"
    },
    {
        "no": "1227",
        "code": "1F4D5",
        "char": "📕",
        "name": "CLOSED BOOK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "book | closed"
    },
    {
        "no": "1228",
        "code": "1F4D6",
        "char": "📖",
        "name": "OPEN BOOK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "book | open"
    },
    {
        "no": "1229",
        "code": "1F4D7",
        "char": "📗",
        "name": "GREEN BOOK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "book | green"
    },
    {
        "no": "1230",
        "code": "1F4D8",
        "char": "📘",
        "name": "BLUE BOOK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blue | book"
    },
    {
        "no": "1231",
        "code": "1F4D9",
        "char": "📙",
        "name": "ORANGE BOOK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "book | orange"
    },
    {
        "no": "1232",
        "code": "1F4DA",
        "char": "📚",
        "name": "BOOKS",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "book"
    },
    {
        "no": "1233",
        "code": "1F4D3",
        "char": "📓",
        "name": "NOTEBOOK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "notebook"
    },
    {
        "no": "1234",
        "code": "1F4D2",
        "char": "📒",
        "name": "LEDGER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "notebook"
    },
    {
        "no": "1235",
        "code": "1F4C3",
        "char": "📃",
        "name": "PAGE WITH CURL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "curl | document | page"
    },
    {
        "no": "1236",
        "code": "1F4DC",
        "char": "📜",
        "name": "SCROLL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "paper"
    },
    {
        "no": "1237",
        "code": "1F4C4",
        "char": "📄",
        "name": "PAGE FACING UP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "document | page"
    },
    {
        "no": "1238",
        "code": "1F4F0",
        "char": "📰",
        "name": "NEWSPAPER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "news | paper"
    },
    {
        "no": "1239",
        "code": "1F5DE",
        "char": "🗞",
        "name": "ROLLED-UP NEWSPAPER",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "news | newspaper | paper | rolled"
    },
    {
        "no": "1240",
        "code": "1F4D1",
        "char": "📑",
        "name": "BOOKMARK TABS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bookmark | mark | marker | tabs"
    },
    {
        "no": "1241",
        "code": "1F516",
        "char": "🔖",
        "name": "BOOKMARK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "mark"
    },
    {
        "no": "1242",
        "code": "1F3F7",
        "char": "🏷",
        "name": "LABEL",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "label"
    },
    {
        "no": "1243",
        "code": "1F4B0",
        "char": "💰",
        "name": "MONEY BAG",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "bag | dollar | money | moneybag"
    },
    {
        "no": "1244",
        "code": "1F4B4",
        "char": "💴",
        "name": "BANKNOTE WITH YEN SIGN\n≊ yen banknote",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bank | banknote | bill | currency | money | note | yen"
    },
    {
        "no": "1245",
        "code": "1F4B5",
        "char": "💵",
        "name": "BANKNOTE WITH DOLLAR SIGN\n≊ dollar banknote",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bank | banknote | bill | currency | dollar | money | note"
    },
    {
        "no": "1246",
        "code": "1F4B6",
        "char": "💶",
        "name": "BANKNOTE WITH EURO SIGN\n≊ euro banknote",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bank | banknote | bill | currency | euro | money | note"
    },
    {
        "no": "1247",
        "code": "1F4B7",
        "char": "💷",
        "name": "BANKNOTE WITH POUND SIGN\n≊ pound banknote",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bank | banknote | bill | currency | money | note | pound"
    },
    {
        "no": "1248",
        "code": "1F4B8",
        "char": "💸",
        "name": "MONEY WITH WINGS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bank | banknote | bill | dollar | fly | money | note | wings"
    },
    {
        "no": "1249",
        "code": "1F4B3",
        "char": "💳",
        "name": "CREDIT CARD",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "bank | card | credit | money"
    },
    {
        "no": "1250",
        "code": "1F4B9",
        "char": "💹",
        "name": "CHART WITH UPWARDS TREND AND YEN SIGN\n≊ chart increasing with yen",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bank | chart | currency | graph | growth | market | money | rise | trend | upward | yen"
    },
    {
        "no": "1251",
        "code": "1F4B1",
        "char": "💱",
        "name": "CURRENCY EXCHANGE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bank | currency | exchange | money"
    },
    {
        "no": "1252",
        "code": "1F4B2",
        "char": "💲",
        "name": "HEAVY DOLLAR SIGN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "currency | dollar | money"
    },
    {
        "no": "1253",
        "code": "2709",
        "char": "✉",
        "name": "ENVELOPE",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "e-mail | email"
    },
    {
        "no": "1254",
        "code": "1F4E7",
        "char": "📧",
        "name": "E-MAIL SYMBOL\n≊ e-mail",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "email | letter | mail"
    },
    {
        "no": "1255",
        "code": "1F4E8",
        "char": "📨",
        "name": "INCOMING ENVELOPE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "e-mail | email | envelope | incoming | letter | mail | receive"
    },
    {
        "no": "1256",
        "code": "1F4E9",
        "char": "📩",
        "name": "ENVELOPE WITH DOWNWARDS ARROW ABOVE\n≊ envelope with arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | down | e-mail | email | envelope | letter | mail | outgoing | sent"
    },
    {
        "no": "1257",
        "code": "1F4E4",
        "char": "📤",
        "name": "OUTBOX TRAY",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "box | letter | mail | outbox | sent | tray"
    },
    {
        "no": "1258",
        "code": "1F4E5",
        "char": "📥",
        "name": "INBOX TRAY",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "box | inbox | letter | mail | receive | tray"
    },
    {
        "no": "1259",
        "code": "1F4E6",
        "char": "📦",
        "name": "PACKAGE",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "box | parcel"
    },
    {
        "no": "1260",
        "code": "1F4EB",
        "char": "📫",
        "name": "CLOSED MAILBOX WITH RAISED FLAG",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "closed | mail | mailbox | postbox"
    },
    {
        "no": "1261",
        "code": "1F4EA",
        "char": "📪",
        "name": "CLOSED MAILBOX WITH LOWERED FLAG",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "closed | lowered | mail | mailbox | postbox"
    },
    {
        "no": "1262",
        "code": "1F4EC",
        "char": "📬",
        "name": "OPEN MAILBOX WITH RAISED FLAG",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "mail | mailbox | open | postbox"
    },
    {
        "no": "1263",
        "code": "1F4ED",
        "char": "📭",
        "name": "OPEN MAILBOX WITH LOWERED FLAG",
        "date": "2010ʷ",
        "default": "emoji",
        "keywords": "lowered | mail | mailbox | open | postbox"
    },
    {
        "no": "1264",
        "code": "1F4EE",
        "char": "📮",
        "name": "POSTBOX",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "mail | mailbox"
    },
    {
        "no": "1265",
        "code": "1F5F3",
        "char": "🗳",
        "name": "BALLOT BOX WITH BALLOT",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "ballot | box"
    },
    {
        "no": "1266",
        "code": "270F",
        "char": "✏",
        "name": "PENCIL",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "pencil"
    },
    {
        "no": "1267",
        "code": "2712",
        "char": "✒",
        "name": "BLACK NIB",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "nib | pen"
    },
    {
        "no": "1268",
        "code": "1F58B",
        "char": "🖋",
        "name": "LOWER LEFT FOUNTAIN PEN\n≊ fountain pen",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "fountain | pen"
    },
    {
        "no": "1269",
        "code": "1F58A",
        "char": "🖊",
        "name": "LOWER LEFT BALLPOINT PEN\n≊ pen",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "ballpoint"
    },
    {
        "no": "1270",
        "code": "1F58C",
        "char": "🖌",
        "name": "LOWER LEFT PAINTBRUSH\n≊ paintbrush",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "painting"
    },
    {
        "no": "1271",
        "code": "1F58D",
        "char": "🖍",
        "name": "LOWER LEFT CRAYON\n≊ crayon",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "crayon"
    },
    {
        "no": "1272",
        "code": "1F4DD",
        "char": "📝",
        "name": "MEMO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "pencil"
    },
    {
        "no": "1273",
        "code": "1F4BC",
        "char": "💼",
        "name": "BRIEFCASE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "briefcase"
    },
    {
        "no": "1274",
        "code": "1F4C1",
        "char": "📁",
        "name": "FILE FOLDER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "file | folder"
    },
    {
        "no": "1275",
        "code": "1F4C2",
        "char": "📂",
        "name": "OPEN FILE FOLDER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "file | folder | open"
    },
    {
        "no": "1276",
        "code": "1F5C2",
        "char": "🗂",
        "name": "CARD INDEX DIVIDERS",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "card | dividers | index"
    },
    {
        "no": "1277",
        "code": "1F4C5",
        "char": "📅",
        "name": "CALENDAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "date"
    },
    {
        "no": "1278",
        "code": "1F4C6",
        "char": "📆",
        "name": "TEAR-OFF CALENDAR",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "calendar"
    },
    {
        "no": "1279",
        "code": "1F5D2",
        "char": "🗒",
        "name": "SPIRAL NOTE PAD\n≊ spiral notepad",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "note | pad | spiral"
    },
    {
        "no": "1280",
        "code": "1F5D3",
        "char": "🗓",
        "name": "SPIRAL CALENDAR PAD\n≊ spiral calendar",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "calendar | pad | spiral"
    },
    {
        "no": "1281",
        "code": "1F4C7",
        "char": "📇",
        "name": "CARD INDEX",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "card | index | rolodex"
    },
    {
        "no": "1282",
        "code": "1F4C8",
        "char": "📈",
        "name": "CHART WITH UPWARDS TREND\n≊ chart increasing",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chart | graph | growth | trend | upward"
    },
    {
        "no": "1283",
        "code": "1F4C9",
        "char": "📉",
        "name": "CHART WITH DOWNWARDS TREND\n≊ chart decreasing",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chart | down | graph | trend"
    },
    {
        "no": "1284",
        "code": "1F4CA",
        "char": "📊",
        "name": "BAR CHART",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bar | chart | graph"
    },
    {
        "no": "1285",
        "code": "1F4CB",
        "char": "📋",
        "name": "CLIPBOARD",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "clipboard"
    },
    {
        "no": "1286",
        "code": "1F4CC",
        "char": "📌",
        "name": "PUSHPIN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "pin"
    },
    {
        "no": "1287",
        "code": "1F4CD",
        "char": "📍",
        "name": "ROUND PUSHPIN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "pin | pushpin"
    },
    {
        "no": "1288",
        "code": "1F4CE",
        "char": "📎",
        "name": "PAPERCLIP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "paperclip"
    },
    {
        "no": "1289",
        "code": "1F587",
        "char": "🖇",
        "name": "LINKED PAPERCLIPS",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "link | paperclip"
    },
    {
        "no": "1290",
        "code": "1F4CF",
        "char": "📏",
        "name": "STRAIGHT RULER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ruler | straight edge"
    },
    {
        "no": "1291",
        "code": "1F4D0",
        "char": "📐",
        "name": "TRIANGULAR RULER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ruler | set | triangle"
    },
    {
        "no": "1292",
        "code": "2702",
        "char": "✂",
        "name": "BLACK SCISSORS\n≊ scissors",
        "date": "1995ᶻʲʷ",
        "default": "text*",
        "keywords": "tool"
    },
    {
        "no": "1293",
        "code": "1F5C3",
        "char": "🗃",
        "name": "CARD FILE BOX",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "box | card | file"
    },
    {
        "no": "1294",
        "code": "1F5C4",
        "char": "🗄",
        "name": "FILE CABINET",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "cabinet | file"
    },
    {
        "no": "1295",
        "code": "1F5D1",
        "char": "🗑",
        "name": "WASTEBASKET",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "wastebasket"
    },
    {
        "no": "1296",
        "code": "1F512",
        "char": "🔒",
        "name": "LOCK",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "closed"
    },
    {
        "no": "1297",
        "code": "1F513",
        "char": "🔓",
        "name": "OPEN LOCK",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "lock | open | unlock"
    },
    {
        "no": "1298",
        "code": "1F50F",
        "char": "🔏",
        "name": "LOCK WITH INK PEN\n≊ lock with pen",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ink | lock | nib | pen | privacy"
    },
    {
        "no": "1299",
        "code": "1F510",
        "char": "🔐",
        "name": "CLOSED LOCK WITH KEY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "closed | key | lock | secure"
    },
    {
        "no": "1300",
        "code": "1F511",
        "char": "🔑",
        "name": "KEY",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "lock | password"
    },
    {
        "no": "1301",
        "code": "1F5DD",
        "char": "🗝",
        "name": "OLD KEY",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "clue | key | lock | old"
    },
    {
        "no": "1302",
        "code": "1F528",
        "char": "🔨",
        "name": "HAMMER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "tool"
    },
    {
        "no": "1303",
        "code": "26CF",
        "char": "⛏",
        "name": "PICK",
        "date": "2009ª",
        "default": "text*",
        "keywords": "mining | tool"
    },
    {
        "no": "1304",
        "code": "2692",
        "char": "⚒",
        "name": "HAMMER AND PICK",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "hammer | pick | tool"
    },
    {
        "no": "1305",
        "code": "1F6E0",
        "char": "🛠",
        "name": "HAMMER AND WRENCH",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "hammer | tool | wrench"
    },
    {
        "no": "1306",
        "code": "1F5E1",
        "char": "🗡",
        "name": "DAGGER KNIFE\n≊ dagger",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "knife | weapon"
    },
    {
        "no": "1307",
        "code": "2694",
        "char": "⚔",
        "name": "CROSSED SWORDS",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "crossed | swords | weapon"
    },
    {
        "no": "1308",
        "code": "1F52B",
        "char": "🔫",
        "name": "PISTOL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "gun | handgun | revolver | tool | weapon"
    },
    {
        "no": "1309",
        "code": "1F3F9",
        "char": "🏹",
        "name": "BOW AND ARROW",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "archer | arrow | bow | sagittarius | tool | weapon | zodiac"
    },
    {
        "no": "1310",
        "code": "1F6E1",
        "char": "🛡",
        "name": "SHIELD",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "weapon"
    },
    {
        "no": "1311",
        "code": "1F527",
        "char": "🔧",
        "name": "WRENCH",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "tool"
    },
    {
        "no": "1312",
        "code": "1F529",
        "char": "🔩",
        "name": "NUT AND BOLT",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "bolt | nut | tool"
    },
    {
        "no": "1313",
        "code": "2699",
        "char": "⚙",
        "name": "GEAR",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "tool"
    },
    {
        "no": "1314",
        "code": "1F5DC",
        "char": "🗜",
        "name": "COMPRESSION",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "tool | vice"
    },
    {
        "no": "1315",
        "code": "2697",
        "char": "⚗",
        "name": "ALEMBIC",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "chemistry | tool"
    },
    {
        "no": "1316",
        "code": "2696",
        "char": "⚖",
        "name": "SCALES\n≊ balance scale",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "balance | justice | libra | scales | tool | weight | zodiac"
    },
    {
        "no": "1317",
        "code": "1F517",
        "char": "🔗",
        "name": "LINK SYMBOL\n≊ link",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "link"
    },
    {
        "no": "1318",
        "code": "26D3",
        "char": "⛓",
        "name": "CHAINS",
        "date": "2009ª",
        "default": "text*",
        "keywords": "chain"
    },
    {
        "no": "1319",
        "code": "1F489",
        "char": "💉",
        "name": "SYRINGE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "doctor | medicine | needle | shot | sick | tool"
    },
    {
        "no": "1320",
        "code": "1F48A",
        "char": "💊",
        "name": "PILL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "doctor | medicine | sick"
    },
    {
        "no": "1321",
        "code": "1F6AC",
        "char": "🚬",
        "name": "SMOKING SYMBOL\n≊ smoking",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "smoking"
    },
    {
        "no": "1322",
        "code": "26B0",
        "char": "⚰",
        "name": "COFFIN",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "death"
    },
    {
        "no": "1323",
        "code": "26B1",
        "char": "⚱",
        "name": "FUNERAL URN",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "death | funeral | urn"
    },
    {
        "no": "1324",
        "code": "1F5FF",
        "char": "🗿",
        "name": "MOYAI\n≊ moai",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "face | moyai | statue"
    },
    {
        "no": "1325",
        "code": "1F6E2",
        "char": "🛢",
        "name": "OIL DRUM",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "drum | oil"
    },
    {
        "no": "1326",
        "code": "1F52E",
        "char": "🔮",
        "name": "CRYSTAL BALL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ball | crystal | fairy tale | fantasy | fortune | tool"
    },
    {
        "no": "1327",
        "code": "1F6D2",
        "char": "🛒",
        "name": "SHOPPING TROLLEY\n≊ shopping cart",
        "date": "2016ˣ",
        "default": "emoji",
        "keywords": "cart | shopping | trolley"
    },
    {
        "no": "1328",
        "code": "1F3E7",
        "char": "🏧",
        "name": "AUTOMATED TELLER MACHINE\n≊ ATM sign",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "atm | automated | bank | teller"
    },
    {
        "no": "1329",
        "code": "1F6AE",
        "char": "🚮",
        "name": "PUT LITTER IN ITS PLACE SYMBOL\n≊ litter in bin sign",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "litter | litterbox"
    },
    {
        "no": "1330",
        "code": "1F6B0",
        "char": "🚰",
        "name": "POTABLE WATER SYMBOL\n≊ potable water",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "drink | potable | water"
    },
    {
        "no": "1331",
        "code": "267F",
        "char": "♿",
        "name": "WHEELCHAIR SYMBOL\n≊ wheelchair",
        "date": "2005ʲʷ",
        "default": "emoji",
        "keywords": "access"
    },
    {
        "no": "1332",
        "code": "1F6B9",
        "char": "🚹",
        "name": "MENS SYMBOL\n≊ men’s room",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "lavatory | man | restroom | wc"
    },
    {
        "no": "1333",
        "code": "1F6BA",
        "char": "🚺",
        "name": "WOMENS SYMBOL\n≊ women’s room",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "lavatory | restroom | wc | woman"
    },
    {
        "no": "1334",
        "code": "1F6BB",
        "char": "🚻",
        "name": "RESTROOM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "lavatory | wc"
    },
    {
        "no": "1335",
        "code": "1F6BC",
        "char": "🚼",
        "name": "BABY SYMBOL",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "baby | changing"
    },
    {
        "no": "1336",
        "code": "1F6BE",
        "char": "🚾",
        "name": "WATER CLOSET",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "closet | lavatory | restroom | water | wc"
    },
    {
        "no": "1337",
        "code": "1F6C2",
        "char": "🛂",
        "name": "PASSPORT CONTROL",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "control | passport"
    },
    {
        "no": "1338",
        "code": "1F6C3",
        "char": "🛃",
        "name": "CUSTOMS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "customs"
    },
    {
        "no": "1339",
        "code": "1F6C4",
        "char": "🛄",
        "name": "BAGGAGE CLAIM",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "baggage | claim"
    },
    {
        "no": "1340",
        "code": "1F6C5",
        "char": "🛅",
        "name": "LEFT LUGGAGE",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "baggage | locker | luggage"
    },
    {
        "no": "1341",
        "code": "26A0",
        "char": "⚠",
        "name": "WARNING SIGN\n≊ warning",
        "date": "2003ʲ",
        "default": "text*",
        "keywords": "warning"
    },
    {
        "no": "1342",
        "code": "1F6B8",
        "char": "🚸",
        "name": "CHILDREN CROSSING",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "child | crossing | pedestrian | traffic"
    },
    {
        "no": "1343",
        "code": "26D4",
        "char": "⛔",
        "name": "NO ENTRY",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "entry | forbidden | no | not | prohibited | traffic"
    },
    {
        "no": "1344",
        "code": "1F6AB",
        "char": "🚫",
        "name": "NO ENTRY SIGN\n≊ prohibited",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "entry | forbidden | no | not"
    },
    {
        "no": "1345",
        "code": "1F6B3",
        "char": "🚳",
        "name": "NO BICYCLES",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bicycle | bike | forbidden | no | not | prohibited | vehicle"
    },
    {
        "no": "1346",
        "code": "1F6AD",
        "char": "🚭",
        "name": "NO SMOKING SYMBOL\n≊ no smoking",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "forbidden | no | not | prohibited | smoking"
    },
    {
        "no": "1347",
        "code": "1F6AF",
        "char": "🚯",
        "name": "DO NOT LITTER SYMBOL\n≊ no littering",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "forbidden | litter | no | not | prohibited"
    },
    {
        "no": "1348",
        "code": "1F6B1",
        "char": "🚱",
        "name": "NON-POTABLE WATER SYMBOL\n≊ non-potable water",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "drink | forbidden | no | not | potable | prohibited | water"
    },
    {
        "no": "1349",
        "code": "1F6B7",
        "char": "🚷",
        "name": "NO PEDESTRIANS",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "forbidden | no | not | pedestrian | prohibited"
    },
    {
        "no": "1350",
        "code": "1F4F5",
        "char": "📵",
        "name": "NO MOBILE PHONES",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "cell | forbidden | mobile | no | not | phone | prohibited | telephone"
    },
    {
        "no": "1351",
        "code": "1F51E",
        "char": "🔞",
        "name": "NO ONE UNDER EIGHTEEN SYMBOL\n≊ no one under eighteen",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "18 | age restriction | eighteen | forbidden | no | not | prohibited | underage"
    },
    {
        "no": "1352",
        "code": "2622",
        "char": "☢",
        "name": "RADIOACTIVE SIGN\n≊ radioactive",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "radioactive | sign"
    },
    {
        "no": "1353",
        "code": "2623",
        "char": "☣",
        "name": "BIOHAZARD SIGN\n≊ biohazard",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "biohazard | sign"
    },
    {
        "no": "1354",
        "code": "2B06",
        "char": "⬆",
        "name": "UPWARDS BLACK ARROW\n≊ up arrow",
        "date": "2003ªʲ",
        "default": "text*",
        "keywords": "arrow | cardinal | direction | north"
    },
    {
        "no": "1355",
        "code": "2197",
        "char": "↗",
        "name": "NORTH EAST ARROW\n≊ up-right arrow",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "arrow | direction | intercardinal | northeast"
    },
    {
        "no": "1356",
        "code": "27A1",
        "char": "➡",
        "name": "BLACK RIGHTWARDS ARROW\n≊ right arrow",
        "date": "1995ᶻªʲ",
        "default": "text*",
        "keywords": "arrow | cardinal | direction | east"
    },
    {
        "no": "1357",
        "code": "2198",
        "char": "↘",
        "name": "SOUTH EAST ARROW\n≊ down-right arrow",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "arrow | direction | intercardinal | southeast"
    },
    {
        "no": "1358",
        "code": "2B07",
        "char": "⬇",
        "name": "DOWNWARDS BLACK ARROW\n≊ down arrow",
        "date": "2003ªʲ",
        "default": "text*",
        "keywords": "arrow | cardinal | direction | down | south"
    },
    {
        "no": "1359",
        "code": "2199",
        "char": "↙",
        "name": "SOUTH WEST ARROW\n≊ down-left arrow",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "arrow | direction | intercardinal | southwest"
    },
    {
        "no": "1360",
        "code": "2B05",
        "char": "⬅",
        "name": "LEFTWARDS BLACK ARROW\n≊ left arrow",
        "date": "2003ªʲ",
        "default": "text*",
        "keywords": "arrow | cardinal | direction | west"
    },
    {
        "no": "1361",
        "code": "2196",
        "char": "↖",
        "name": "NORTH WEST ARROW\n≊ up-left arrow",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "arrow | direction | intercardinal | northwest"
    },
    {
        "no": "1362",
        "code": "2195",
        "char": "↕",
        "name": "UP DOWN ARROW\n≊ up-down arrow",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "arrow"
    },
    {
        "no": "1363",
        "code": "2194",
        "char": "↔",
        "name": "LEFT RIGHT ARROW\n≊ left-right arrow",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "arrow"
    },
    {
        "no": "1364",
        "code": "21A9",
        "char": "↩",
        "name": "LEFTWARDS ARROW WITH HOOK\n≊ right arrow curving left",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "arrow"
    },
    {
        "no": "1365",
        "code": "21AA",
        "char": "↪",
        "name": "RIGHTWARDS ARROW WITH HOOK\n≊ left arrow curving right",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "arrow"
    },
    {
        "no": "1366",
        "code": "2934",
        "char": "⤴",
        "name": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS\n≊ right arrow curving up",
        "date": "2002ʲ",
        "default": "text*",
        "keywords": "arrow"
    },
    {
        "no": "1367",
        "code": "2935",
        "char": "⤵",
        "name": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS\n≊ right arrow curving down",
        "date": "2002ʲ",
        "default": "text*",
        "keywords": "arrow | down"
    },
    {
        "no": "1368",
        "code": "1F503",
        "char": "🔃",
        "name": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS\n≊ clockwise vertical arrows",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | clockwise | reload"
    },
    {
        "no": "1369",
        "code": "1F504",
        "char": "🔄",
        "name": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS\n≊ anticlockwise arrows button",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "anticlockwise | arrow | counterclockwise | withershins"
    },
    {
        "no": "1370",
        "code": "1F519",
        "char": "🔙",
        "name": "BACK WITH LEFTWARDS ARROW ABOVE\n≊ back arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | back"
    },
    {
        "no": "1371",
        "code": "1F51A",
        "char": "🔚",
        "name": "END WITH LEFTWARDS ARROW ABOVE\n≊ end arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | end"
    },
    {
        "no": "1372",
        "code": "1F51B",
        "char": "🔛",
        "name": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE\n≊ on! arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | mark | on"
    },
    {
        "no": "1373",
        "code": "1F51C",
        "char": "🔜",
        "name": "SOON WITH RIGHTWARDS ARROW ABOVE\n≊ soon arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | soon"
    },
    {
        "no": "1374",
        "code": "1F51D",
        "char": "🔝",
        "name": "TOP WITH UPWARDS ARROW ABOVE\n≊ top arrow",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | top | up"
    },
    {
        "no": "1375",
        "code": "1F6D0",
        "char": "🛐",
        "name": "PLACE OF WORSHIP",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "religion | worship"
    },
    {
        "no": "1376",
        "code": "269B",
        "char": "⚛",
        "name": "ATOM SYMBOL",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "atheist | atom"
    },
    {
        "no": "1377",
        "code": "1F549",
        "char": "🕉",
        "name": "OM SYMBOL\n≊ om",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "hindu | religion"
    },
    {
        "no": "1378",
        "code": "2721",
        "char": "✡",
        "name": "STAR OF DAVID",
        "date": "1995ʷ",
        "default": "text*",
        "keywords": "david | jew | jewish | religion | star"
    },
    {
        "no": "1379",
        "code": "2638",
        "char": "☸",
        "name": "WHEEL OF DHARMA",
        "date": "1995ʷ",
        "default": "text*",
        "keywords": "buddhist | dharma | religion | wheel"
    },
    {
        "no": "1380",
        "code": "262F",
        "char": "☯",
        "name": "YIN YANG",
        "date": "1995ʷ",
        "default": "text*",
        "keywords": "religion | tao | taoist | yang | yin"
    },
    {
        "no": "1381",
        "code": "271D",
        "char": "✝",
        "name": "LATIN CROSS",
        "date": "1995ʷ",
        "default": "text*",
        "keywords": "christian | cross | religion"
    },
    {
        "no": "1382",
        "code": "2626",
        "char": "☦",
        "name": "ORTHODOX CROSS",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "christian | cross | religion"
    },
    {
        "no": "1383",
        "code": "262A",
        "char": "☪",
        "name": "STAR AND CRESCENT",
        "date": "1995ʷ",
        "default": "text*",
        "keywords": "islam | muslim | religion"
    },
    {
        "no": "1384",
        "code": "262E",
        "char": "☮",
        "name": "PEACE SYMBOL",
        "date": "1995ˣ",
        "default": "text*",
        "keywords": "peace"
    },
    {
        "no": "1385",
        "code": "1F54E",
        "char": "🕎",
        "name": "MENORAH WITH NINE BRANCHES\n≊ menorah",
        "date": "2015ˣ",
        "default": "emoji",
        "keywords": "candelabrum | candlestick | religion"
    },
    {
        "no": "1386",
        "code": "1F52F",
        "char": "🔯",
        "name": "SIX POINTED STAR WITH MIDDLE DOT\n≊ dotted six-pointed star",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "fortune | star"
    },
    {
        "no": "1387",
        "code": "267B",
        "char": "♻",
        "name": "BLACK UNIVERSAL RECYCLING SYMBOL\n≊ recycling symbol",
        "date": "2002ʲ",
        "default": "text*",
        "keywords": "recycle"
    },
    {
        "no": "1388",
        "code": "1F4DB",
        "char": "📛",
        "name": "NAME BADGE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "badge | name"
    },
    {
        "no": "1389",
        "code": "269C",
        "char": "⚜",
        "name": "FLEUR-DE-LIS",
        "date": "2005ˣ",
        "default": "text*",
        "keywords": "fleur-de-lis"
    },
    {
        "no": "1390",
        "code": "1F530",
        "char": "🔰",
        "name": "JAPANESE SYMBOL FOR BEGINNER",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "beginner | chevron | green | japanese | leaf | tool | yellow"
    },
    {
        "no": "1391",
        "code": "1F531",
        "char": "🔱",
        "name": "TRIDENT EMBLEM",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "anchor | emblem | ship | tool | trident"
    },
    {
        "no": "1392",
        "code": "2B55",
        "char": "⭕",
        "name": "HEAVY LARGE CIRCLE",
        "date": "2009ʲ",
        "default": "emoji",
        "keywords": "circle | o"
    },
    {
        "no": "1393",
        "code": "2705",
        "char": "✅",
        "name": "WHITE HEAVY CHECK MARK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "check | mark"
    },
    {
        "no": "1394",
        "code": "2611",
        "char": "☑",
        "name": "BALLOT BOX WITH CHECK",
        "date": "1995ʲʷ",
        "default": "text*",
        "keywords": "ballot | box | check"
    },
    {
        "no": "1395",
        "code": "2714",
        "char": "✔",
        "name": "HEAVY CHECK MARK",
        "date": "1995ᶻʲʷ",
        "default": "text*",
        "keywords": "check | mark"
    },
    {
        "no": "1396",
        "code": "2716",
        "char": "✖",
        "name": "HEAVY MULTIPLICATION X",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "cancel | multiplication | multiply | x"
    },
    {
        "no": "1397",
        "code": "274C",
        "char": "❌",
        "name": "CROSS MARK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cancel | mark | multiplication | multiply | x"
    },
    {
        "no": "1398",
        "code": "274E",
        "char": "❎",
        "name": "NEGATIVE SQUARED CROSS MARK\n≊ cross mark button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "mark | square"
    },
    {
        "no": "1399",
        "code": "2795",
        "char": "➕",
        "name": "HEAVY PLUS SIGN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "math | plus"
    },
    {
        "no": "1400",
        "code": "2796",
        "char": "➖",
        "name": "HEAVY MINUS SIGN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "math | minus"
    },
    {
        "no": "1401",
        "code": "2797",
        "char": "➗",
        "name": "HEAVY DIVISION SIGN",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "division | math"
    },
    {
        "no": "1402",
        "code": "27B0",
        "char": "➰",
        "name": "CURLY LOOP",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "curl | loop"
    },
    {
        "no": "1403",
        "code": "27BF",
        "char": "➿",
        "name": "DOUBLE CURLY LOOP",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "curl | double | loop"
    },
    {
        "no": "1404",
        "code": "303D",
        "char": "〽",
        "name": "PART ALTERNATION MARK",
        "date": "2002ʲ",
        "default": "text*",
        "keywords": "mark | part"
    },
    {
        "no": "1405",
        "code": "2733",
        "char": "✳",
        "name": "EIGHT SPOKED ASTERISK\n≊ eight-spoked asterisk",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "asterisk"
    },
    {
        "no": "1406",
        "code": "2734",
        "char": "✴",
        "name": "EIGHT POINTED BLACK STAR\n≊ eight-pointed star",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "star"
    },
    {
        "no": "1407",
        "code": "2747",
        "char": "❇",
        "name": "SPARKLE",
        "date": "1995ᶻʲ",
        "default": "text*",
        "keywords": "sparkle"
    },
    {
        "no": "1408",
        "code": "203C",
        "char": "‼",
        "name": "DOUBLE EXCLAMATION MARK",
        "date": "1995ªʲ",
        "default": "text*",
        "keywords": "bangbang | exclamation | mark | punctuation"
    },
    {
        "no": "1409",
        "code": "2049",
        "char": "⁉",
        "name": "EXCLAMATION QUESTION MARK",
        "date": "2000ªʲ",
        "default": "text*",
        "keywords": "exclamation | interrobang | mark | punctuation | question"
    },
    {
        "no": "1410",
        "code": "2753",
        "char": "❓",
        "name": "BLACK QUESTION MARK ORNAMENT\n≊ question mark",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "mark | punctuation | question"
    },
    {
        "no": "1411",
        "code": "2754",
        "char": "❔",
        "name": "WHITE QUESTION MARK ORNAMENT\n≊ white question mark",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "mark | outlined | punctuation | question"
    },
    {
        "no": "1412",
        "code": "2755",
        "char": "❕",
        "name": "WHITE EXCLAMATION MARK ORNAMENT\n≊ white exclamation mark",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "exclamation | mark | outlined | punctuation"
    },
    {
        "no": "1413",
        "code": "2757",
        "char": "❗",
        "name": "HEAVY EXCLAMATION MARK SYMBOL\n≊ exclamation mark",
        "date": "2009ʲ",
        "default": "emoji",
        "keywords": "exclamation | mark | punctuation"
    },
    {
        "no": "1414",
        "code": "3030",
        "char": "〰",
        "name": "WAVY DASH",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "dash | punctuation | wavy"
    },
    {
        "no": "1415",
        "code": "00A9",
        "char": "©",
        "name": "COPYRIGHT SIGN\n≊ copyright",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "copyright"
    },
    {
        "no": "1416",
        "code": "00AE",
        "char": "®",
        "name": "REGISTERED SIGN\n≊ registered",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "registered"
    },
    {
        "no": "1417",
        "code": "2122",
        "char": "™",
        "name": "TRADE MARK SIGN\n≊ trade mark",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "mark | tm | trademark"
    },
    {
        "no": "1418",
        "code": "2648",
        "char": "♈",
        "name": "ARIES",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "ram | zodiac"
    },
    {
        "no": "1419",
        "code": "2649",
        "char": "♉",
        "name": "TAURUS",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "bull | ox | zodiac"
    },
    {
        "no": "1420",
        "code": "264A",
        "char": "♊",
        "name": "GEMINI",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "twins | zodiac"
    },
    {
        "no": "1421",
        "code": "264B",
        "char": "♋",
        "name": "CANCER",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "crab | zodiac"
    },
    {
        "no": "1422",
        "code": "264C",
        "char": "♌",
        "name": "LEO",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "lion | zodiac"
    },
    {
        "no": "1423",
        "code": "264D",
        "char": "♍",
        "name": "VIRGO",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "maiden | virgin | zodiac"
    },
    {
        "no": "1424",
        "code": "264E",
        "char": "♎",
        "name": "LIBRA",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "balance | justice | scales | zodiac"
    },
    {
        "no": "1425",
        "code": "264F",
        "char": "♏",
        "name": "SCORPIUS",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "scorpio | scorpion | zodiac"
    },
    {
        "no": "1426",
        "code": "2650",
        "char": "♐",
        "name": "SAGITTARIUS",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "archer | zodiac"
    },
    {
        "no": "1427",
        "code": "2651",
        "char": "♑",
        "name": "CAPRICORN",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "goat | zodiac"
    },
    {
        "no": "1428",
        "code": "2652",
        "char": "♒",
        "name": "AQUARIUS",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "bearer | water | zodiac"
    },
    {
        "no": "1429",
        "code": "2653",
        "char": "♓",
        "name": "PISCES",
        "date": "1995ʲʷ",
        "default": "emoji",
        "keywords": "fish | zodiac"
    },
    {
        "no": "1430",
        "code": "26CE",
        "char": "⛎",
        "name": "OPHIUCHUS",
        "date": "2010ªʲ",
        "default": "emoji",
        "keywords": "bearer | serpent | snake | zodiac"
    },
    {
        "no": "1431",
        "code": "1F500",
        "char": "🔀",
        "name": "TWISTED RIGHTWARDS ARROWS\n≊ shuffle tracks button",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "arrow | crossed"
    },
    {
        "no": "1432",
        "code": "1F501",
        "char": "🔁",
        "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS\n≊ repeat button",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "arrow | clockwise | repeat"
    },
    {
        "no": "1433",
        "code": "1F502",
        "char": "🔂",
        "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY\n≊ repeat single button",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "arrow | clockwise | once"
    },
    {
        "no": "1434",
        "code": "25B6",
        "char": "▶",
        "name": "BLACK RIGHT-POINTING TRIANGLE\n≊ play button",
        "date": "1995ªʲʷ",
        "default": "text*",
        "keywords": "arrow | play | right | triangle"
    },
    {
        "no": "1435",
        "code": "23E9",
        "char": "⏩",
        "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE\n≊ fast-forword button",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "arrow | double | fast | forward"
    },
    {
        "no": "1436",
        "code": "23ED",
        "char": "⏭",
        "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR\n≊ next track button",
        "date": "2010ʷ",
        "default": "text*",
        "keywords": "arrow | next scene | next track | triangle"
    },
    {
        "no": "1437",
        "code": "23EF",
        "char": "⏯",
        "name": "BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR\n≊ play or pause button",
        "date": "2010ˣ",
        "default": "text*",
        "keywords": "arrow | pause | play | right | triangle"
    },
    {
        "no": "1438",
        "code": "25C0",
        "char": "◀",
        "name": "BLACK LEFT-POINTING TRIANGLE\n≊ reverse button",
        "date": "1995ªʲʷ",
        "default": "text*",
        "keywords": "arrow | left | reverse | triangle"
    },
    {
        "no": "1439",
        "code": "23EA",
        "char": "⏪",
        "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE\n≊ fast reverse button",
        "date": "2010ʲʷ",
        "default": "emoji",
        "keywords": "arrow | double | rewind"
    },
    {
        "no": "1440",
        "code": "23EE",
        "char": "⏮",
        "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR\n≊ last track button",
        "date": "2010ʷ",
        "default": "text*",
        "keywords": "arrow | previous scene | previous track | triangle"
    },
    {
        "no": "1441",
        "code": "1F53C",
        "char": "🔼",
        "name": "UP-POINTING SMALL RED TRIANGLE\n≊ up button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | button | red"
    },
    {
        "no": "1442",
        "code": "23EB",
        "char": "⏫",
        "name": "BLACK UP-POINTING DOUBLE TRIANGLE\n≊ fast up button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | double"
    },
    {
        "no": "1443",
        "code": "1F53D",
        "char": "🔽",
        "name": "DOWN-POINTING SMALL RED TRIANGLE\n≊ down button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | button | down | red"
    },
    {
        "no": "1444",
        "code": "23EC",
        "char": "⏬",
        "name": "BLACK DOWN-POINTING DOUBLE TRIANGLE\n≊ fast down button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "arrow | double | down"
    },
    {
        "no": "1445",
        "code": "23F8",
        "char": "⏸",
        "name": "DOUBLE VERTICAL BAR\n≊ pause button",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "bar | double | pause | vertical"
    },
    {
        "no": "1446",
        "code": "23F9",
        "char": "⏹",
        "name": "BLACK SQUARE FOR STOP\n≊ stop button",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "square | stop"
    },
    {
        "no": "1447",
        "code": "23FA",
        "char": "⏺",
        "name": "BLACK CIRCLE FOR RECORD\n≊ record button",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "circle | record"
    },
    {
        "no": "1448",
        "code": "23CF",
        "char": "⏏",
        "name": "EJECT SYMBOL\n≊ eject button",
        "date": "2003ˣ",
        "default": "text*",
        "keywords": "eject"
    },
    {
        "no": "1449",
        "code": "1F3A6",
        "char": "🎦",
        "name": "CINEMA",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "camera | film | movie"
    },
    {
        "no": "1450",
        "code": "1F505",
        "char": "🔅",
        "name": "LOW BRIGHTNESS SYMBOL\n≊ dim button",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "brightness | dim | low"
    },
    {
        "no": "1451",
        "code": "1F506",
        "char": "🔆",
        "name": "HIGH BRIGHTNESS SYMBOL\n≊ bright button",
        "date": "2010ˣ",
        "default": "emoji",
        "keywords": "bright | brightness"
    },
    {
        "no": "1452",
        "code": "1F4F6",
        "char": "📶",
        "name": "ANTENNA WITH BARS\n≊ antenna bars",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "antenna | bar | cell | mobile | phone | signal | telephone"
    },
    {
        "no": "1453",
        "code": "1F4F3",
        "char": "📳",
        "name": "VIBRATION MODE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cell | mobile | mode | phone | telephone | vibration"
    },
    {
        "no": "1454",
        "code": "1F4F4",
        "char": "📴",
        "name": "MOBILE PHONE OFF",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cell | mobile | off | phone | telephone"
    },
    {
        "no": "1455",
        "code": "0023 FE0F 20E3",
        "char": "#️⃣",
        "name": "keycap #",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1456",
        "code": "002A FE0F 20E3",
        "char": "*️⃣",
        "name": "keycap *",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1457",
        "code": "0030 FE0F 20E3",
        "char": "0️⃣",
        "name": "keycap 0",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1458",
        "code": "0031 FE0F 20E3",
        "char": "1️⃣",
        "name": "keycap 1",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1459",
        "code": "0032 FE0F 20E3",
        "char": "2️⃣",
        "name": "keycap 2",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1460",
        "code": "0033 FE0F 20E3",
        "char": "3️⃣",
        "name": "keycap 3",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1461",
        "code": "0034 FE0F 20E3",
        "char": "4️⃣",
        "name": "keycap 4",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1462",
        "code": "0035 FE0F 20E3",
        "char": "5️⃣",
        "name": "keycap 5",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1463",
        "code": "0036 FE0F 20E3",
        "char": "6️⃣",
        "name": "keycap 6",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1464",
        "code": "0037 FE0F 20E3",
        "char": "7️⃣",
        "name": "keycap 7",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1465",
        "code": "0038 FE0F 20E3",
        "char": "8️⃣",
        "name": "keycap 8",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1466",
        "code": "0039 FE0F 20E3",
        "char": "9️⃣",
        "name": "keycap 9",
        "date": "2002ˣ",
        "default": "n/a",
        "keywords": "keycap"
    },
    {
        "no": "1467",
        "code": "1F51F",
        "char": "🔟",
        "name": "KEYCAP TEN\n≊ keycap #",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "keycap"
    },
    {
        "no": "1468",
        "code": "1F4AF",
        "char": "💯",
        "name": "HUNDRED POINTS SYMBOL\n≊ hundred points",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "100 | full | hundred | score"
    },
    {
        "no": "1469",
        "code": "1F520",
        "char": "🔠",
        "name": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS\n≊ input latin uppercase",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "input | latin | letters | uppercase"
    },
    {
        "no": "1470",
        "code": "1F521",
        "char": "🔡",
        "name": "INPUT SYMBOL FOR LATIN SMALL LETTERS\n≊ input latin lowercase",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "abcd | input | latin | letters | lowercase"
    },
    {
        "no": "1471",
        "code": "1F522",
        "char": "🔢",
        "name": "INPUT SYMBOL FOR NUMBERS\n≊ input numbers",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "1234 | input | numbers"
    },
    {
        "no": "1472",
        "code": "1F523",
        "char": "🔣",
        "name": "INPUT SYMBOL FOR SYMBOLS\n≊ input symbols",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "input"
    },
    {
        "no": "1473",
        "code": "1F524",
        "char": "🔤",
        "name": "INPUT SYMBOL FOR LATIN LETTERS\n≊ input latin letters",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "abc | alphabet | input | latin | letters"
    },
    {
        "no": "1474",
        "code": "1F170",
        "char": "🅰",
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER A\n≊ a button",
        "date": "2010ʲ",
        "default": "text*",
        "keywords": "a | blood"
    },
    {
        "no": "1475",
        "code": "1F18E",
        "char": "🆎",
        "name": "NEGATIVE SQUARED AB\n≊ ab button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ab | blood"
    },
    {
        "no": "1476",
        "code": "1F171",
        "char": "🅱",
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER B\n≊ b button",
        "date": "2010ʲ",
        "default": "text*",
        "keywords": "b | blood"
    },
    {
        "no": "1477",
        "code": "1F191",
        "char": "🆑",
        "name": "SQUARED CL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cl"
    },
    {
        "no": "1478",
        "code": "1F192",
        "char": "🆒",
        "name": "SQUARED COOL",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "cool"
    },
    {
        "no": "1479",
        "code": "1F193",
        "char": "🆓",
        "name": "SQUARED FREE",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "free"
    },
    {
        "no": "1480",
        "code": "2139",
        "char": "ℹ",
        "name": "INFORMATION SOURCE",
        "date": "2000ʲ",
        "default": "text*",
        "keywords": "i | information"
    },
    {
        "no": "1481",
        "code": "1F194",
        "char": "🆔",
        "name": "SQUARED ID",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "id | identity"
    },
    {
        "no": "1482",
        "code": "24C2",
        "char": "Ⓜ",
        "name": "CIRCLED LATIN CAPITAL LETTER M\n≊ circled letter m",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "circle | m"
    },
    {
        "no": "1483",
        "code": "1F195",
        "char": "🆕",
        "name": "SQUARED NEW",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "new"
    },
    {
        "no": "1484",
        "code": "1F196",
        "char": "🆖",
        "name": "SQUARED NG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ng"
    },
    {
        "no": "1485",
        "code": "1F17E",
        "char": "🅾",
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER O\n≊ o button",
        "date": "2010ʲ",
        "default": "text*",
        "keywords": "blood | o"
    },
    {
        "no": "1486",
        "code": "1F197",
        "char": "🆗",
        "name": "SQUARED OK",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "ok"
    },
    {
        "no": "1487",
        "code": "1F17F",
        "char": "🅿",
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER P\n≊ p button",
        "date": "2009ªʲ",
        "default": "text*",
        "keywords": "parking"
    },
    {
        "no": "1488",
        "code": "1F198",
        "char": "🆘",
        "name": "SQUARED SOS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "help | sos"
    },
    {
        "no": "1489",
        "code": "1F199",
        "char": "🆙",
        "name": "SQUARED UP WITH EXCLAMATION MARK\n≊ up! button",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "mark | up"
    },
    {
        "no": "1490",
        "code": "1F19A",
        "char": "🆚",
        "name": "SQUARED VS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "versus | vs"
    },
    {
        "no": "1491",
        "code": "1F201",
        "char": "🈁",
        "name": "SQUARED KATAKANA KOKO",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1492",
        "code": "1F202",
        "char": "🈂",
        "name": "SQUARED KATAKANA SA",
        "date": "2010ʲ",
        "default": "text*",
        "keywords": "japanese"
    },
    {
        "no": "1493",
        "code": "1F237",
        "char": "🈷",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6708\n≊ squared moon ideograph",
        "date": "2010ʲ",
        "default": "text*",
        "keywords": "japanese"
    },
    {
        "no": "1494",
        "code": "1F236",
        "char": "🈶",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6709\n≊ squared exist ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1495",
        "code": "1F22F",
        "char": "🈯",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6307\n≊ squared finger ideograph",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1496",
        "code": "1F250",
        "char": "🉐",
        "name": "CIRCLED IDEOGRAPH ADVANTAGE\n≊ circled advantage ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1497",
        "code": "1F239",
        "char": "🈹",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-5272\n≊ squared divide ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1498",
        "code": "1F21A",
        "char": "🈚",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7121\n≊ squared negation ideograph",
        "date": "2009ªʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1499",
        "code": "1F232",
        "char": "🈲",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7981\n≊ squared prohibit ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "japanese"
    },
    {
        "no": "1500",
        "code": "1F251",
        "char": "🉑",
        "name": "CIRCLED IDEOGRAPH ACCEPT\n≊ circled accept ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chinese"
    },
    {
        "no": "1501",
        "code": "1F238",
        "char": "🈸",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7533\n≊ squared apply ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chinese"
    },
    {
        "no": "1502",
        "code": "1F234",
        "char": "🈴",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-5408\n≊ squared together ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chinese"
    },
    {
        "no": "1503",
        "code": "1F233",
        "char": "🈳",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A\n≊ squared empty ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chinese"
    },
    {
        "no": "1504",
        "code": "3297",
        "char": "㊗",
        "name": "CIRCLED IDEOGRAPH CONGRATULATION\n≊ circled congratulate ideograph",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "chinese | congratulation | congratulations | ideograph"
    },
    {
        "no": "1505",
        "code": "3299",
        "char": "㊙",
        "name": "CIRCLED IDEOGRAPH SECRET\n≊ circled secret ideograph",
        "date": "1995ªʲ",
        "default": "text*",
        "keywords": "chinese | ideograph | secret"
    },
    {
        "no": "1506",
        "code": "1F23A",
        "char": "🈺",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-55B6\n≊ squared operating ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chinese"
    },
    {
        "no": "1507",
        "code": "1F235",
        "char": "🈵",
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6E80\n≊ squared fullness ideograph",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "chinese"
    },
    {
        "no": "1508",
        "code": "25AA",
        "char": "▪",
        "name": "BLACK SMALL SQUARE",
        "date": "1995ʲʷ",
        "default": "text*",
        "keywords": "geometric | square"
    },
    {
        "no": "1509",
        "code": "25AB",
        "char": "▫",
        "name": "WHITE SMALL SQUARE",
        "date": "1995ʲ",
        "default": "text*",
        "keywords": "geometric | square"
    },
    {
        "no": "1510",
        "code": "25FB",
        "char": "◻",
        "name": "WHITE MEDIUM SQUARE",
        "date": "2002ʲ",
        "default": "text*",
        "keywords": "geometric | square"
    },
    {
        "no": "1511",
        "code": "25FC",
        "char": "◼",
        "name": "BLACK MEDIUM SQUARE",
        "date": "2002ʲʷ",
        "default": "text*",
        "keywords": "geometric | square"
    },
    {
        "no": "1512",
        "code": "25FD",
        "char": "◽",
        "name": "WHITE MEDIUM SMALL SQUARE\n≊ white medium-small square",
        "date": "2002ʲ",
        "default": "emoji",
        "keywords": "geometric | square"
    },
    {
        "no": "1513",
        "code": "25FE",
        "char": "◾",
        "name": "BLACK MEDIUM SMALL SQUARE\n≊ black medium-small square",
        "date": "2002ʲʷ",
        "default": "emoji",
        "keywords": "geometric | square"
    },
    {
        "no": "1514",
        "code": "2B1B",
        "char": "⬛",
        "name": "BLACK LARGE SQUARE",
        "date": "2008ªʲʷ",
        "default": "emoji",
        "keywords": "geometric | square"
    },
    {
        "no": "1515",
        "code": "2B1C",
        "char": "⬜",
        "name": "WHITE LARGE SQUARE",
        "date": "2008ʲʷ",
        "default": "emoji",
        "keywords": "geometric | square"
    },
    {
        "no": "1516",
        "code": "1F536",
        "char": "🔶",
        "name": "LARGE ORANGE DIAMOND",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "diamond | geometric | orange"
    },
    {
        "no": "1517",
        "code": "1F537",
        "char": "🔷",
        "name": "LARGE BLUE DIAMOND",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blue | diamond | geometric"
    },
    {
        "no": "1518",
        "code": "1F538",
        "char": "🔸",
        "name": "SMALL ORANGE DIAMOND",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "diamond | geometric | orange"
    },
    {
        "no": "1519",
        "code": "1F539",
        "char": "🔹",
        "name": "SMALL BLUE DIAMOND",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blue | diamond | geometric"
    },
    {
        "no": "1520",
        "code": "1F53A",
        "char": "🔺",
        "name": "UP-POINTING RED TRIANGLE\n≊ red triangle pointed up",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "geometric | red"
    },
    {
        "no": "1521",
        "code": "1F53B",
        "char": "🔻",
        "name": "DOWN-POINTING RED TRIANGLE\n≊ red triangle pointed down",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "down | geometric | red"
    },
    {
        "no": "1522",
        "code": "1F4A0",
        "char": "💠",
        "name": "DIAMOND SHAPE WITH A DOT INSIDE\n≊ diamond with a dot",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "comic | diamond | geometric | inside"
    },
    {
        "no": "1523",
        "code": "1F518",
        "char": "🔘",
        "name": "RADIO BUTTON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "button | geometric | radio"
    },
    {
        "no": "1524",
        "code": "1F532",
        "char": "🔲",
        "name": "BLACK SQUARE BUTTON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "button | geometric | square"
    },
    {
        "no": "1525",
        "code": "1F533",
        "char": "🔳",
        "name": "WHITE SQUARE BUTTON",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "button | geometric | outlined | square"
    },
    {
        "no": "1526",
        "code": "26AA",
        "char": "⚪",
        "name": "MEDIUM WHITE CIRCLE\n≊ white circle",
        "date": "2005ʲ",
        "default": "emoji",
        "keywords": "circle | geometric"
    },
    {
        "no": "1527",
        "code": "26AB",
        "char": "⚫",
        "name": "MEDIUM BLACK CIRCLE\n≊ black circle",
        "date": "2005ʲʷ",
        "default": "emoji",
        "keywords": "circle | geometric"
    },
    {
        "no": "1528",
        "code": "1F534",
        "char": "🔴",
        "name": "LARGE RED CIRCLE\n≊ red circle",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "circle | geometric | red"
    },
    {
        "no": "1529",
        "code": "1F535",
        "char": "🔵",
        "name": "LARGE BLUE CIRCLE\n≊ blue circle",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "blue | circle | geometric"
    },
    {
        "no": "1530",
        "code": "1F3C1",
        "char": "🏁",
        "name": "CHEQUERED FLAG",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "checkered | chequered | racing"
    },
    {
        "no": "1531",
        "code": "1F6A9",
        "char": "🚩",
        "name": "TRIANGULAR FLAG ON POST\n≊ triangular flag",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "post"
    },
    {
        "no": "1532",
        "code": "1F38C",
        "char": "🎌",
        "name": "CROSSED FLAGS",
        "date": "2010ʲ",
        "default": "emoji",
        "keywords": "celebration | cross | crossed | japanese"
    },
    {
        "no": "1533",
        "code": "1F3F4",
        "char": "🏴",
        "name": "WAVING BLACK FLAG",
        "date": "2014ˣ",
        "default": "emoji",
        "keywords": "waving"
    },
    {
        "no": "1534",
        "code": "1F3F3",
        "char": "🏳",
        "name": "WAVING WHITE FLAG",
        "date": "2014ʷ",
        "default": "text*",
        "keywords": "waving"
    },
    {
        "no": "1535",
        "code": "1F1E6 1F1E8",
        "char": "🇦🇨",
        "name": "Ascension Island",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1536",
        "code": "1F1E6 1F1E9",
        "char": "🇦🇩",
        "name": "Andorra",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1537",
        "code": "1F1E6 1F1EA",
        "char": "🇦🇪",
        "name": "United Arab Emirates",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1538",
        "code": "1F1E6 1F1EB",
        "char": "🇦🇫",
        "name": "Afghanistan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1539",
        "code": "1F1E6 1F1EC",
        "char": "🇦🇬",
        "name": "Antigua & Barbuda",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1540",
        "code": "1F1E6 1F1EE",
        "char": "🇦🇮",
        "name": "Anguilla",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1541",
        "code": "1F1E6 1F1F1",
        "char": "🇦🇱",
        "name": "Albania",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1542",
        "code": "1F1E6 1F1F2",
        "char": "🇦🇲",
        "name": "Armenia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1543",
        "code": "1F1E6 1F1F4",
        "char": "🇦🇴",
        "name": "Angola",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1544",
        "code": "1F1E6 1F1F6",
        "char": "🇦🇶",
        "name": "Antarctica",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1545",
        "code": "1F1E6 1F1F7",
        "char": "🇦🇷",
        "name": "Argentina",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1546",
        "code": "1F1E6 1F1F8",
        "char": "🇦🇸",
        "name": "American Samoa",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1547",
        "code": "1F1E6 1F1F9",
        "char": "🇦🇹",
        "name": "Austria",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1548",
        "code": "1F1E6 1F1FA",
        "char": "🇦🇺",
        "name": "Australia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1549",
        "code": "1F1E6 1F1FC",
        "char": "🇦🇼",
        "name": "Aruba",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1550",
        "code": "1F1E6 1F1FD",
        "char": "🇦🇽",
        "name": "Åland Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1551",
        "code": "1F1E6 1F1FF",
        "char": "🇦🇿",
        "name": "Azerbaijan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1552",
        "code": "1F1E7 1F1E6",
        "char": "🇧🇦",
        "name": "Bosnia & Herzegovina",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1553",
        "code": "1F1E7 1F1E7",
        "char": "🇧🇧",
        "name": "Barbados",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1554",
        "code": "1F1E7 1F1E9",
        "char": "🇧🇩",
        "name": "Bangladesh",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1555",
        "code": "1F1E7 1F1EA",
        "char": "🇧🇪",
        "name": "Belgium",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1556",
        "code": "1F1E7 1F1EB",
        "char": "🇧🇫",
        "name": "Burkina Faso",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1557",
        "code": "1F1E7 1F1EC",
        "char": "🇧🇬",
        "name": "Bulgaria",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1558",
        "code": "1F1E7 1F1ED",
        "char": "🇧🇭",
        "name": "Bahrain",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1559",
        "code": "1F1E7 1F1EE",
        "char": "🇧🇮",
        "name": "Burundi",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1560",
        "code": "1F1E7 1F1EF",
        "char": "🇧🇯",
        "name": "Benin",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1561",
        "code": "1F1E7 1F1F1",
        "char": "🇧🇱",
        "name": "St. Barthélemy",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1562",
        "code": "1F1E7 1F1F2",
        "char": "🇧🇲",
        "name": "Bermuda",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1563",
        "code": "1F1E7 1F1F3",
        "char": "🇧🇳",
        "name": "Brunei",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1564",
        "code": "1F1E7 1F1F4",
        "char": "🇧🇴",
        "name": "Bolivia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1565",
        "code": "1F1E7 1F1F6",
        "char": "🇧🇶",
        "name": "Caribbean Netherlands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1566",
        "code": "1F1E7 1F1F7",
        "char": "🇧🇷",
        "name": "Brazil",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1567",
        "code": "1F1E7 1F1F8",
        "char": "🇧🇸",
        "name": "Bahamas",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1568",
        "code": "1F1E7 1F1F9",
        "char": "🇧🇹",
        "name": "Bhutan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1569",
        "code": "1F1E7 1F1FB",
        "char": "🇧🇻",
        "name": "Bouvet Island",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1570",
        "code": "1F1E7 1F1FC",
        "char": "🇧🇼",
        "name": "Botswana",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1571",
        "code": "1F1E7 1F1FE",
        "char": "🇧🇾",
        "name": "Belarus",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1572",
        "code": "1F1E7 1F1FF",
        "char": "🇧🇿",
        "name": "Belize",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1573",
        "code": "1F1E8 1F1E6",
        "char": "🇨🇦",
        "name": "Canada",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1574",
        "code": "1F1E8 1F1E8",
        "char": "🇨🇨",
        "name": "Cocos (Keeling) Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1575",
        "code": "1F1E8 1F1E9",
        "char": "🇨🇩",
        "name": "Congo - Kinshasa",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1576",
        "code": "1F1E8 1F1EB",
        "char": "🇨🇫",
        "name": "Central African Republic",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1577",
        "code": "1F1E8 1F1EC",
        "char": "🇨🇬",
        "name": "Congo - Brazzaville",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1578",
        "code": "1F1E8 1F1ED",
        "char": "🇨🇭",
        "name": "Switzerland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1579",
        "code": "1F1E8 1F1EE",
        "char": "🇨🇮",
        "name": "Côte d’Ivoire",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1580",
        "code": "1F1E8 1F1F0",
        "char": "🇨🇰",
        "name": "Cook Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1581",
        "code": "1F1E8 1F1F1",
        "char": "🇨🇱",
        "name": "Chile",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1582",
        "code": "1F1E8 1F1F2",
        "char": "🇨🇲",
        "name": "Cameroon",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1583",
        "code": "1F1E8 1F1F3",
        "char": "🇨🇳",
        "name": "China",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1584",
        "code": "1F1E8 1F1F4",
        "char": "🇨🇴",
        "name": "Colombia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1585",
        "code": "1F1E8 1F1F5",
        "char": "🇨🇵",
        "name": "Clipperton Island",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1586",
        "code": "1F1E8 1F1F7",
        "char": "🇨🇷",
        "name": "Costa Rica",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1587",
        "code": "1F1E8 1F1FA",
        "char": "🇨🇺",
        "name": "Cuba",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1588",
        "code": "1F1E8 1F1FB",
        "char": "🇨🇻",
        "name": "Cape Verde",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1589",
        "code": "1F1E8 1F1FC",
        "char": "🇨🇼",
        "name": "Curaçao",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1590",
        "code": "1F1E8 1F1FD",
        "char": "🇨🇽",
        "name": "Christmas Island",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1591",
        "code": "1F1E8 1F1FE",
        "char": "🇨🇾",
        "name": "Cyprus",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1592",
        "code": "1F1E8 1F1FF",
        "char": "🇨🇿",
        "name": "Czech Republic",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1593",
        "code": "1F1E9 1F1EA",
        "char": "🇩🇪",
        "name": "Germany",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1594",
        "code": "1F1E9 1F1EC",
        "char": "🇩🇬",
        "name": "Diego Garcia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1595",
        "code": "1F1E9 1F1EF",
        "char": "🇩🇯",
        "name": "Djibouti",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1596",
        "code": "1F1E9 1F1F0",
        "char": "🇩🇰",
        "name": "Denmark",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1597",
        "code": "1F1E9 1F1F2",
        "char": "🇩🇲",
        "name": "Dominica",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1598",
        "code": "1F1E9 1F1F4",
        "char": "🇩🇴",
        "name": "Dominican Republic",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1599",
        "code": "1F1E9 1F1FF",
        "char": "🇩🇿",
        "name": "Algeria",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1600",
        "code": "1F1EA 1F1E6",
        "char": "🇪🇦",
        "name": "Ceuta & Melilla",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1601",
        "code": "1F1EA 1F1E8",
        "char": "🇪🇨",
        "name": "Ecuador",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1602",
        "code": "1F1EA 1F1EA",
        "char": "🇪🇪",
        "name": "Estonia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1603",
        "code": "1F1EA 1F1EC",
        "char": "🇪🇬",
        "name": "Egypt",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1604",
        "code": "1F1EA 1F1ED",
        "char": "🇪🇭",
        "name": "Western Sahara",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1605",
        "code": "1F1EA 1F1F7",
        "char": "🇪🇷",
        "name": "Eritrea",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1606",
        "code": "1F1EA 1F1F8",
        "char": "🇪🇸",
        "name": "Spain",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1607",
        "code": "1F1EA 1F1F9",
        "char": "🇪🇹",
        "name": "Ethiopia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1608",
        "code": "1F1EA 1F1FA",
        "char": "🇪🇺",
        "name": "European Union",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1609",
        "code": "1F1EB 1F1EE",
        "char": "🇫🇮",
        "name": "Finland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1610",
        "code": "1F1EB 1F1EF",
        "char": "🇫🇯",
        "name": "Fiji",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1611",
        "code": "1F1EB 1F1F0",
        "char": "🇫🇰",
        "name": "Falkland Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1612",
        "code": "1F1EB 1F1F2",
        "char": "🇫🇲",
        "name": "Micronesia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1613",
        "code": "1F1EB 1F1F4",
        "char": "🇫🇴",
        "name": "Faroe Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1614",
        "code": "1F1EB 1F1F7",
        "char": "🇫🇷",
        "name": "France",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1615",
        "code": "1F1EC 1F1E6",
        "char": "🇬🇦",
        "name": "Gabon",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1616",
        "code": "1F1EC 1F1E7",
        "char": "🇬🇧",
        "name": "United Kingdom",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1617",
        "code": "1F1EC 1F1E9",
        "char": "🇬🇩",
        "name": "Grenada",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1618",
        "code": "1F1EC 1F1EA",
        "char": "🇬🇪",
        "name": "Georgia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1619",
        "code": "1F1EC 1F1EB",
        "char": "🇬🇫",
        "name": "French Guiana",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1620",
        "code": "1F1EC 1F1EC",
        "char": "🇬🇬",
        "name": "Guernsey",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1621",
        "code": "1F1EC 1F1ED",
        "char": "🇬🇭",
        "name": "Ghana",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1622",
        "code": "1F1EC 1F1EE",
        "char": "🇬🇮",
        "name": "Gibraltar",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1623",
        "code": "1F1EC 1F1F1",
        "char": "🇬🇱",
        "name": "Greenland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1624",
        "code": "1F1EC 1F1F2",
        "char": "🇬🇲",
        "name": "Gambia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1625",
        "code": "1F1EC 1F1F3",
        "char": "🇬🇳",
        "name": "Guinea",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1626",
        "code": "1F1EC 1F1F5",
        "char": "🇬🇵",
        "name": "Guadeloupe",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1627",
        "code": "1F1EC 1F1F6",
        "char": "🇬🇶",
        "name": "Equatorial Guinea",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1628",
        "code": "1F1EC 1F1F7",
        "char": "🇬🇷",
        "name": "Greece",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1629",
        "code": "1F1EC 1F1F8",
        "char": "🇬🇸",
        "name": "South Georgia & South Sandwich Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1630",
        "code": "1F1EC 1F1F9",
        "char": "🇬🇹",
        "name": "Guatemala",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1631",
        "code": "1F1EC 1F1FA",
        "char": "🇬🇺",
        "name": "Guam",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1632",
        "code": "1F1EC 1F1FC",
        "char": "🇬🇼",
        "name": "Guinea-Bissau",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1633",
        "code": "1F1EC 1F1FE",
        "char": "🇬🇾",
        "name": "Guyana",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1634",
        "code": "1F1ED 1F1F0",
        "char": "🇭🇰",
        "name": "Hong Kong SAR China",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1635",
        "code": "1F1ED 1F1F2",
        "char": "🇭🇲",
        "name": "Heard & McDonald Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1636",
        "code": "1F1ED 1F1F3",
        "char": "🇭🇳",
        "name": "Honduras",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1637",
        "code": "1F1ED 1F1F7",
        "char": "🇭🇷",
        "name": "Croatia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1638",
        "code": "1F1ED 1F1F9",
        "char": "🇭🇹",
        "name": "Haiti",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1639",
        "code": "1F1ED 1F1FA",
        "char": "🇭🇺",
        "name": "Hungary",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1640",
        "code": "1F1EE 1F1E8",
        "char": "🇮🇨",
        "name": "Canary Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1641",
        "code": "1F1EE 1F1E9",
        "char": "🇮🇩",
        "name": "Indonesia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1642",
        "code": "1F1EE 1F1EA",
        "char": "🇮🇪",
        "name": "Ireland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1643",
        "code": "1F1EE 1F1F1",
        "char": "🇮🇱",
        "name": "Israel",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1644",
        "code": "1F1EE 1F1F2",
        "char": "🇮🇲",
        "name": "Isle of Man",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1645",
        "code": "1F1EE 1F1F3",
        "char": "🇮🇳",
        "name": "India",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1646",
        "code": "1F1EE 1F1F4",
        "char": "🇮🇴",
        "name": "British Indian Ocean Territory",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1647",
        "code": "1F1EE 1F1F6",
        "char": "🇮🇶",
        "name": "Iraq",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1648",
        "code": "1F1EE 1F1F7",
        "char": "🇮🇷",
        "name": "Iran",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1649",
        "code": "1F1EE 1F1F8",
        "char": "🇮🇸",
        "name": "Iceland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1650",
        "code": "1F1EE 1F1F9",
        "char": "🇮🇹",
        "name": "Italy",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1651",
        "code": "1F1EF 1F1EA",
        "char": "🇯🇪",
        "name": "Jersey",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1652",
        "code": "1F1EF 1F1F2",
        "char": "🇯🇲",
        "name": "Jamaica",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1653",
        "code": "1F1EF 1F1F4",
        "char": "🇯🇴",
        "name": "Jordan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1654",
        "code": "1F1EF 1F1F5",
        "char": "🇯🇵",
        "name": "Japan",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1655",
        "code": "1F1F0 1F1EA",
        "char": "🇰🇪",
        "name": "Kenya",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1656",
        "code": "1F1F0 1F1EC",
        "char": "🇰🇬",
        "name": "Kyrgyzstan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1657",
        "code": "1F1F0 1F1ED",
        "char": "🇰🇭",
        "name": "Cambodia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1658",
        "code": "1F1F0 1F1EE",
        "char": "🇰🇮",
        "name": "Kiribati",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1659",
        "code": "1F1F0 1F1F2",
        "char": "🇰🇲",
        "name": "Comoros",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1660",
        "code": "1F1F0 1F1F3",
        "char": "🇰🇳",
        "name": "St. Kitts & Nevis",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1661",
        "code": "1F1F0 1F1F5",
        "char": "🇰🇵",
        "name": "North Korea",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1662",
        "code": "1F1F0 1F1F7",
        "char": "🇰🇷",
        "name": "South Korea",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1663",
        "code": "1F1F0 1F1FC",
        "char": "🇰🇼",
        "name": "Kuwait",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1664",
        "code": "1F1F0 1F1FE",
        "char": "🇰🇾",
        "name": "Cayman Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1665",
        "code": "1F1F0 1F1FF",
        "char": "🇰🇿",
        "name": "Kazakhstan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1666",
        "code": "1F1F1 1F1E6",
        "char": "🇱🇦",
        "name": "Laos",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1667",
        "code": "1F1F1 1F1E7",
        "char": "🇱🇧",
        "name": "Lebanon",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1668",
        "code": "1F1F1 1F1E8",
        "char": "🇱🇨",
        "name": "St. Lucia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1669",
        "code": "1F1F1 1F1EE",
        "char": "🇱🇮",
        "name": "Liechtenstein",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1670",
        "code": "1F1F1 1F1F0",
        "char": "🇱🇰",
        "name": "Sri Lanka",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1671",
        "code": "1F1F1 1F1F7",
        "char": "🇱🇷",
        "name": "Liberia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1672",
        "code": "1F1F1 1F1F8",
        "char": "🇱🇸",
        "name": "Lesotho",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1673",
        "code": "1F1F1 1F1F9",
        "char": "🇱🇹",
        "name": "Lithuania",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1674",
        "code": "1F1F1 1F1FA",
        "char": "🇱🇺",
        "name": "Luxembourg",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1675",
        "code": "1F1F1 1F1FB",
        "char": "🇱🇻",
        "name": "Latvia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1676",
        "code": "1F1F1 1F1FE",
        "char": "🇱🇾",
        "name": "Libya",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1677",
        "code": "1F1F2 1F1E6",
        "char": "🇲🇦",
        "name": "Morocco",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1678",
        "code": "1F1F2 1F1E8",
        "char": "🇲🇨",
        "name": "Monaco",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1679",
        "code": "1F1F2 1F1E9",
        "char": "🇲🇩",
        "name": "Moldova",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1680",
        "code": "1F1F2 1F1EA",
        "char": "🇲🇪",
        "name": "Montenegro",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1681",
        "code": "1F1F2 1F1EB",
        "char": "🇲🇫",
        "name": "St. Martin",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1682",
        "code": "1F1F2 1F1EC",
        "char": "🇲🇬",
        "name": "Madagascar",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1683",
        "code": "1F1F2 1F1ED",
        "char": "🇲🇭",
        "name": "Marshall Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1684",
        "code": "1F1F2 1F1F0",
        "char": "🇲🇰",
        "name": "Macedonia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1685",
        "code": "1F1F2 1F1F1",
        "char": "🇲🇱",
        "name": "Mali",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1686",
        "code": "1F1F2 1F1F2",
        "char": "🇲🇲",
        "name": "Myanmar (Burma)",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1687",
        "code": "1F1F2 1F1F3",
        "char": "🇲🇳",
        "name": "Mongolia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1688",
        "code": "1F1F2 1F1F4",
        "char": "🇲🇴",
        "name": "Macau SAR China",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1689",
        "code": "1F1F2 1F1F5",
        "char": "🇲🇵",
        "name": "Northern Mariana Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1690",
        "code": "1F1F2 1F1F6",
        "char": "🇲🇶",
        "name": "Martinique",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1691",
        "code": "1F1F2 1F1F7",
        "char": "🇲🇷",
        "name": "Mauritania",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1692",
        "code": "1F1F2 1F1F8",
        "char": "🇲🇸",
        "name": "Montserrat",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1693",
        "code": "1F1F2 1F1F9",
        "char": "🇲🇹",
        "name": "Malta",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1694",
        "code": "1F1F2 1F1FA",
        "char": "🇲🇺",
        "name": "Mauritius",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1695",
        "code": "1F1F2 1F1FB",
        "char": "🇲🇻",
        "name": "Maldives",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1696",
        "code": "1F1F2 1F1FC",
        "char": "🇲🇼",
        "name": "Malawi",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1697",
        "code": "1F1F2 1F1FD",
        "char": "🇲🇽",
        "name": "Mexico",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1698",
        "code": "1F1F2 1F1FE",
        "char": "🇲🇾",
        "name": "Malaysia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1699",
        "code": "1F1F2 1F1FF",
        "char": "🇲🇿",
        "name": "Mozambique",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1700",
        "code": "1F1F3 1F1E6",
        "char": "🇳🇦",
        "name": "Namibia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1701",
        "code": "1F1F3 1F1E8",
        "char": "🇳🇨",
        "name": "New Caledonia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1702",
        "code": "1F1F3 1F1EA",
        "char": "🇳🇪",
        "name": "Niger",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1703",
        "code": "1F1F3 1F1EB",
        "char": "🇳🇫",
        "name": "Norfolk Island",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1704",
        "code": "1F1F3 1F1EC",
        "char": "🇳🇬",
        "name": "Nigeria",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1705",
        "code": "1F1F3 1F1EE",
        "char": "🇳🇮",
        "name": "Nicaragua",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1706",
        "code": "1F1F3 1F1F1",
        "char": "🇳🇱",
        "name": "Netherlands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1707",
        "code": "1F1F3 1F1F4",
        "char": "🇳🇴",
        "name": "Norway",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1708",
        "code": "1F1F3 1F1F5",
        "char": "🇳🇵",
        "name": "Nepal",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1709",
        "code": "1F1F3 1F1F7",
        "char": "🇳🇷",
        "name": "Nauru",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1710",
        "code": "1F1F3 1F1FA",
        "char": "🇳🇺",
        "name": "Niue",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1711",
        "code": "1F1F3 1F1FF",
        "char": "🇳🇿",
        "name": "New Zealand",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1712",
        "code": "1F1F4 1F1F2",
        "char": "🇴🇲",
        "name": "Oman",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1713",
        "code": "1F1F5 1F1E6",
        "char": "🇵🇦",
        "name": "Panama",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1714",
        "code": "1F1F5 1F1EA",
        "char": "🇵🇪",
        "name": "Peru",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1715",
        "code": "1F1F5 1F1EB",
        "char": "🇵🇫",
        "name": "French Polynesia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1716",
        "code": "1F1F5 1F1EC",
        "char": "🇵🇬",
        "name": "Papua New Guinea",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1717",
        "code": "1F1F5 1F1ED",
        "char": "🇵🇭",
        "name": "Philippines",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1718",
        "code": "1F1F5 1F1F0",
        "char": "🇵🇰",
        "name": "Pakistan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1719",
        "code": "1F1F5 1F1F1",
        "char": "🇵🇱",
        "name": "Poland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1720",
        "code": "1F1F5 1F1F2",
        "char": "🇵🇲",
        "name": "St. Pierre & Miquelon",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1721",
        "code": "1F1F5 1F1F3",
        "char": "🇵🇳",
        "name": "Pitcairn Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1722",
        "code": "1F1F5 1F1F7",
        "char": "🇵🇷",
        "name": "Puerto Rico",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1723",
        "code": "1F1F5 1F1F8",
        "char": "🇵🇸",
        "name": "Palestinian Territories",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1724",
        "code": "1F1F5 1F1F9",
        "char": "🇵🇹",
        "name": "Portugal",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1725",
        "code": "1F1F5 1F1FC",
        "char": "🇵🇼",
        "name": "Palau",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1726",
        "code": "1F1F5 1F1FE",
        "char": "🇵🇾",
        "name": "Paraguay",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1727",
        "code": "1F1F6 1F1E6",
        "char": "🇶🇦",
        "name": "Qatar",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1728",
        "code": "1F1F7 1F1EA",
        "char": "🇷🇪",
        "name": "Réunion",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1729",
        "code": "1F1F7 1F1F4",
        "char": "🇷🇴",
        "name": "Romania",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1730",
        "code": "1F1F7 1F1F8",
        "char": "🇷🇸",
        "name": "Serbia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1731",
        "code": "1F1F7 1F1FA",
        "char": "🇷🇺",
        "name": "Russia",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1732",
        "code": "1F1F7 1F1FC",
        "char": "🇷🇼",
        "name": "Rwanda",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1733",
        "code": "1F1F8 1F1E6",
        "char": "🇸🇦",
        "name": "Saudi Arabia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1734",
        "code": "1F1F8 1F1E7",
        "char": "🇸🇧",
        "name": "Solomon Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1735",
        "code": "1F1F8 1F1E8",
        "char": "🇸🇨",
        "name": "Seychelles",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1736",
        "code": "1F1F8 1F1E9",
        "char": "🇸🇩",
        "name": "Sudan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1737",
        "code": "1F1F8 1F1EA",
        "char": "🇸🇪",
        "name": "Sweden",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1738",
        "code": "1F1F8 1F1EC",
        "char": "🇸🇬",
        "name": "Singapore",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1739",
        "code": "1F1F8 1F1ED",
        "char": "🇸🇭",
        "name": "St. Helena",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1740",
        "code": "1F1F8 1F1EE",
        "char": "🇸🇮",
        "name": "Slovenia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1741",
        "code": "1F1F8 1F1EF",
        "char": "🇸🇯",
        "name": "Svalbard & Jan Mayen",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1742",
        "code": "1F1F8 1F1F0",
        "char": "🇸🇰",
        "name": "Slovakia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1743",
        "code": "1F1F8 1F1F1",
        "char": "🇸🇱",
        "name": "Sierra Leone",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1744",
        "code": "1F1F8 1F1F2",
        "char": "🇸🇲",
        "name": "San Marino",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1745",
        "code": "1F1F8 1F1F3",
        "char": "🇸🇳",
        "name": "Senegal",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1746",
        "code": "1F1F8 1F1F4",
        "char": "🇸🇴",
        "name": "Somalia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1747",
        "code": "1F1F8 1F1F7",
        "char": "🇸🇷",
        "name": "Suriname",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1748",
        "code": "1F1F8 1F1F8",
        "char": "🇸🇸",
        "name": "South Sudan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1749",
        "code": "1F1F8 1F1F9",
        "char": "🇸🇹",
        "name": "São Tomé & Príncipe",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1750",
        "code": "1F1F8 1F1FB",
        "char": "🇸🇻",
        "name": "El Salvador",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1751",
        "code": "1F1F8 1F1FD",
        "char": "🇸🇽",
        "name": "Sint Maarten",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1752",
        "code": "1F1F8 1F1FE",
        "char": "🇸🇾",
        "name": "Syria",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1753",
        "code": "1F1F8 1F1FF",
        "char": "🇸🇿",
        "name": "Swaziland",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1754",
        "code": "1F1F9 1F1E6",
        "char": "🇹🇦",
        "name": "Tristan da Cunha",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1755",
        "code": "1F1F9 1F1E8",
        "char": "🇹🇨",
        "name": "Turks & Caicos Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1756",
        "code": "1F1F9 1F1E9",
        "char": "🇹🇩",
        "name": "Chad",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1757",
        "code": "1F1F9 1F1EB",
        "char": "🇹🇫",
        "name": "French Southern Territories",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1758",
        "code": "1F1F9 1F1EC",
        "char": "🇹🇬",
        "name": "Togo",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1759",
        "code": "1F1F9 1F1ED",
        "char": "🇹🇭",
        "name": "Thailand",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1760",
        "code": "1F1F9 1F1EF",
        "char": "🇹🇯",
        "name": "Tajikistan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1761",
        "code": "1F1F9 1F1F0",
        "char": "🇹🇰",
        "name": "Tokelau",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1762",
        "code": "1F1F9 1F1F1",
        "char": "🇹🇱",
        "name": "Timor-Leste",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1763",
        "code": "1F1F9 1F1F2",
        "char": "🇹🇲",
        "name": "Turkmenistan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1764",
        "code": "1F1F9 1F1F3",
        "char": "🇹🇳",
        "name": "Tunisia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1765",
        "code": "1F1F9 1F1F4",
        "char": "🇹🇴",
        "name": "Tonga",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1766",
        "code": "1F1F9 1F1F7",
        "char": "🇹🇷",
        "name": "Turkey",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1767",
        "code": "1F1F9 1F1F9",
        "char": "🇹🇹",
        "name": "Trinidad & Tobago",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1768",
        "code": "1F1F9 1F1FB",
        "char": "🇹🇻",
        "name": "Tuvalu",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1769",
        "code": "1F1F9 1F1FC",
        "char": "🇹🇼",
        "name": "Taiwan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1770",
        "code": "1F1F9 1F1FF",
        "char": "🇹🇿",
        "name": "Tanzania",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1771",
        "code": "1F1FA 1F1E6",
        "char": "🇺🇦",
        "name": "Ukraine",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1772",
        "code": "1F1FA 1F1EC",
        "char": "🇺🇬",
        "name": "Uganda",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1773",
        "code": "1F1FA 1F1F2",
        "char": "🇺🇲",
        "name": "U.S. Outlying Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1774",
        "code": "1F1FA 1F1F8",
        "char": "🇺🇸",
        "name": "United States",
        "date": "2010ʲ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1775",
        "code": "1F1FA 1F1FE",
        "char": "🇺🇾",
        "name": "Uruguay",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1776",
        "code": "1F1FA 1F1FF",
        "char": "🇺🇿",
        "name": "Uzbekistan",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1777",
        "code": "1F1FB 1F1E6",
        "char": "🇻🇦",
        "name": "Vatican City",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1778",
        "code": "1F1FB 1F1E8",
        "char": "🇻🇨",
        "name": "St. Vincent & Grenadines",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1779",
        "code": "1F1FB 1F1EA",
        "char": "🇻🇪",
        "name": "Venezuela",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1780",
        "code": "1F1FB 1F1EC",
        "char": "🇻🇬",
        "name": "British Virgin Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1781",
        "code": "1F1FB 1F1EE",
        "char": "🇻🇮",
        "name": "U.S. Virgin Islands",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1782",
        "code": "1F1FB 1F1F3",
        "char": "🇻🇳",
        "name": "Vietnam",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1783",
        "code": "1F1FB 1F1FA",
        "char": "🇻🇺",
        "name": "Vanuatu",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1784",
        "code": "1F1FC 1F1EB",
        "char": "🇼🇫",
        "name": "Wallis & Futuna",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1785",
        "code": "1F1FC 1F1F8",
        "char": "🇼🇸",
        "name": "Samoa",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1786",
        "code": "1F1FD 1F1F0",
        "char": "🇽🇰",
        "name": "Kosovo",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1787",
        "code": "1F1FE 1F1EA",
        "char": "🇾🇪",
        "name": "Yemen",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1788",
        "code": "1F1FE 1F1F9",
        "char": "🇾🇹",
        "name": "Mayotte",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1789",
        "code": "1F1FF 1F1E6",
        "char": "🇿🇦",
        "name": "South Africa",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1790",
        "code": "1F1FF 1F1F2",
        "char": "🇿🇲",
        "name": "Zambia",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    },
    {
        "no": "1791",
        "code": "1F1FF 1F1FC",
        "char": "🇿🇼",
        "name": "Zimbabwe",
        "date": "2010ˣ",
        "default": "n/a",
        "keywords": "flag"
    }
];
class EmojiDecorator {
    constructor(s) {
        this.s = s;
    }
    getText() {
        const words = this.s.split(" ");
        const emojis = words.map(word => {
            let return_emoji = null;
            if (!return_emoji) {
                return_emoji = emoji[Math.floor(Math.random() * emoji.length)];
            }
            return String.fromCodePoint(parseInt("0x" + return_emoji.code));
        });
        return emojis.join(" ");
    }
}
class LowercaseDecorator {
    constructor(s) {
        this.s = s;
    }
    getText() {
        console.log(this.s.toLowerCase());
        return this.s.toLowerCase();
    }
}
class ReverseTextDecorator {
    constructor(s) {
        this.s = s;
    }
    getText() {
        return this.s.split("").reverse().join("");
    }
}
class SummeryDecorator {
    constructor(s) {
        this.s = s;
    }
    getText() {
        return this.s.split(" ").slice(0, 6).join("") + '...';
    }
}
window.addEventListener("load", function () {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", handleSubmit);
});
function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById("the-form");
    let text = form.search.value, output_text = "";
    if (form.lowercase.checked) {
        output_text += new ConcreteDecorator(new LowercaseDecorator(text)).getText();
    }
    if (form.summary.checked) {
        output_text += new ConcreteDecorator(new SummeryDecorator(text)).getText();
    }
    if (form.capital.checked) {
        output_text += new ConcreteDecorator(new CapitalDecorator(text)).getText();
    }
    if (form.reverse.checked) {
        output_text += new ConcreteDecorator(new ReverseTextDecorator(text)).getText();
    }
    if (form.emojify.checked) {
        output_text += new ConcreteDecorator(new EmojiDecorator(text)).getText();
    }
    if (form.antiSwearify.checked) {
        output_text += new ConcreteDecorator(new AntiSwearDectorater(text)).getText();
    }
    let output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = output_text;
}
//# sourceMappingURL=main.js.map