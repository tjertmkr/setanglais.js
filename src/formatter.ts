import { empty } from "./varriables";

class Formatter {
    method: (text: string) => string;

    constructor(middleware?: (text: string) => string) {
        this.method = middleware;
    }
    static default(): Formatter {
        return new Formatter((text: string) => {
            let content = empty;
            let character = empty;

            for (let i = 0; i < text.length; i++) {
                character = text.charAt(i);
                if (i == 0)
                    content += character.toUpperCase();
                else {
                    if (!(/^[a-zA-Z]+$/.test(character)) || character.toUpperCase() != character)
                        content += character;
                    else if (character.toUpperCase() == character) {
                        if (content.charAt(i - 1) == content.charAt(i - 1).toUpperCase()) content += character;
                        else content += (' ' + character);
                    }
                }
            }
            return content;
        });
    }
}
export default Formatter;