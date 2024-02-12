const inputs = document.querySelectorAll('input'); 
const patterns = { 
 movies: /^(.+\(\d{4}\))$/, 
 songLyrics: /^(\[Verse\d\]).+$/, 
 twitterNames: /^(@\w+)$/, 
 isbnNumbers: /^(ISBN)(\d{3}-\d-\d{3}-\d{5}-\d)$/,



 };

function validate(field, regex) {
   console.log('Field value:', field.value);
   console.log('Regex test result:', regex.test(field.value));
