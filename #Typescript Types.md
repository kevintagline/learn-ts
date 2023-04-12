#Typescript Types
Most common types of values in JavaScript code, and the corresponding ways to describe those types in TypeScript.


## The primitives
- Very commonly used primitives: `string`, `number`, and `boolean`.
> The type names `String`, `Number`, and `Boolean` are legal, but refer to some special built-in types that will very rarely appear in your code. ==Always use `string`, `number`, or `boolean` for types==.

## Arrays
- Syntax: `number[]`, `string[]`, `boolean[]`.
- In generics: `Array<number>` from syntax `T<U>`.

## Special type `any`
- For Example:
```
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```
- `noImplicitAny` option
:   Use the compiler flag `noImplicitAny` to flag any implicit any as an error