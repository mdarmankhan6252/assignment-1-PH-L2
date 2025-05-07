## 01. Explain the difference between any, unknown, and never types in TypeScript.

- <p>The <b>any</b> type refer to a value that can be of any kind of type. Suppose, the user inputs a string, number, or boolean, typescript will not mind. Not only that, the <b>any</b> type disables all type checking for the variable. As a result, the typescript compiler does not know what the actual type of the variable is, and we can assign any kind of value to it without getting an error.</p>

```ts
let value: any = "Hello";
value = 42;
value = true;
value = { name: "Alice" };


