# word-format-converterc
This library is used to change words beautifully.

# Samples
```ts
// Sample #1
var test = new Case("helloWorld");
console.log(test.to);

// Sample #2
var formatter: Formatter = new Formatter((text: string) => {
    return text.toLowerCase();
})
var test2 = new Case("HELLO WORLD", formatter);
console.log(test2.to);
```
