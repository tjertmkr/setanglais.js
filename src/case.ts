import Formatter from "./formatter";

class Case {
    private text: string;
    private formatter: Formatter;
    to: string;

    constructor(_text: string, _formatter?: Formatter) {
        this.text = _text;
        this.formatter = _formatter ? _formatter : Formatter.default();

        this.convert();
    }
    
    getText() {
        return this.text;
    }
    getFormatter() {
        return this.formatter;
    }
    private convert() {
        this.to = this.formatter.method(this.text);
    }
}
export default Case;
