## 01. Explain the difference between any, unknown, and never types in TypeScript.

#### any unknown and never are datatype in typescript but there are some difference between them. I have included some difference between them and has been given below:

- <p>The <b>any</b> type refer to a value that can be of any kind of type. Suppose, the user inputs a string, number, or boolean, typescript will not mind. Not only that, the <b>any</b> type disables all type checking for the variable. As a result, the typescript compiler does not know what the actual type of the variable is, and we can assign any kind of value to it without getting an error.</p>

```ts
let value: any = "Arman";
value = 42;
value = true;

```

- The <b>unknown</b> type is similar to <b>any</b>, but it is safer more than any type. That means the value can be anything, but unlike <b>any</b>, we cannot directly perform operations on it without checking its type. TypeScript will force us to do type checking before using a <b>unknown</b> value. This helps maintain type safety in our code.


```ts 
let value: unknown = "Arman";
value = 100;
console.log(value.toFixed(2))

```

- <p>The <b>never</b> type represents values that never occur in our code. It is used to indicate that a function never returns.</p>


```ts
function createError(message: string): never{
   throw new Error(message)
}
createError("Hey Bro, Something went wrong")

```


## 02. Provide an example of using union and intersection types in TypeScript.

- <b>Union</b>: A Union is a special type in TypeScript that allows a variable to hold values of different types. It uses the pipe symbol (|) to separate the types.

```ts
let myValue: string | number;
value = "Hello Typescript"
value = 143
```
##### in the example we can see that we have declired a variable name is myValue and we have set the type of the variable string or number. That means it will take any kinds of number and string value; and this icon ( | ) is called union type in typescript.

- <b>Intersection</b>: An Intersection is a special type in TypeScript that combines multiple types into one. It uses the ampersand symbol (&) to merge the properties of two or more types.


```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Arman",
  employeeId: 101,
};

```
##### In the example, we have created two types: Person and Employee. Then we used the ampersand symbol (&) to combine them into a new type called Staff. That means Staff must have all the properties from both Person and Employee. This is called intersection type in TypeScript.










