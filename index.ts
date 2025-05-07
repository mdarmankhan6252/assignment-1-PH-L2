function formatString(input: string, toUpper?: boolean) {
   if (toUpper) {
      return input.toUpperCase();
   } else {
      return input.toLowerCase();
   }
}

// console.log(formatString('Arman', false))


// -----------------------------------

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
   const filteredDataByRating = items.filter((item) => item.rating >= 4)
   return filteredDataByRating;

}

const books = [
   { title: "Book A", rating: 4.5 },
   { title: "Book B", rating: 3.2 },
   { title: "Book C", rating: 3.0 }
];

// console.log(filterByRating(books));


// -----------------------------------


function concatenateArrays<T>(...arrays: T[][]): T[] {
   return ([] as T[]).concat(...arrays)
}

// console.log(concatenateArrays(['Arman', 'Yeassin'], ["JS", "TS"], ["C++"], ['Tomi', 'Ami']));


//---------------------------------

class Vehicle {
   private make: string;
   private year: number;
   constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
   }

   getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`)
   }
}

class Car extends Vehicle {
   model: string;

   constructor(make: string, year: number, model: string) {
      super(make, year)
      this.model = model;
   }

   getModel() {
      console.log(`Model: ${this.model}`)
   }
}


const myCar = new Car('Toyota', 2024, 'Corolla')
myCar.getInfo();
myCar.getModel();



// ----------------------------


function processValue(value: string | number): number {
   if (typeof value === 'string') {
      return value.length
   } else {
      return value * 2
   }
}


// console.log(processValue(10));
// console.log(processValue("hello"));


// ----------------------------------------

interface Product {
   name: string;
   price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

   if (products.length === 0) {
      return null
   }
   return products.reduce((maxValue, currentValue) => {
      return currentValue.price > maxValue.price  ? currentValue : maxValue
   })
}

const products = [
   { name: "Pen", price: 100 },
   { name: "Notebook", price: 25 },
   { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));










