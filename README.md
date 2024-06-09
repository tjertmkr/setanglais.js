# word-format-converter
This library is used to change words beautifully.

# Usage
```ts
import { FormatterType, as, config } from "index";

// default
console.log(as("helloWorld")); // Hello World

// config -> format
const cf: FormatterType = (text: string) => {
    return text.toLowerCase();
}
config(cf);
console.log(as("HELLOWORLD")) // helloworld
```
