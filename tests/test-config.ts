import { FormatterType, as, config } from "../src";

const cf: FormatterType = (text: string) => {
    return text.toLowerCase();
}
config(cf);
console.log(as("HELLOWORLD"))