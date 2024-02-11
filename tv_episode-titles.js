const patterns = /(\d{2}-[A-Za-z]{3}-\d{4})/g;

const testString = prompt("Enter your data: ");

const matches = testString.match(patterns);

console.log("Search results: ", matches);

