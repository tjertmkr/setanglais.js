import { defaultFormatter } from "./constants";
import { FormatterType } from "./types";

class Case {
    private formatter: FormatterType = defaultFormatter;
    private static instance: Case;

    convert(text: string): string {
        return this.formatter(text);
    }
    setFormatter(func: FormatterType) {
        this.formatter = func;  
    }
    static getInstance(): Case {
        if (!this.instance)
            this.instance = new Case();
        return this.instance;
    }
}
export default Case;