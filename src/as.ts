import Case from "./case";
import { FormatterType } from "./types";

export const config = (func: FormatterType): void => {
    Case.getInstance().setFormatter(func);
}
export const as = (text: string): string => {
    return Case.getInstance().convert(text);
}