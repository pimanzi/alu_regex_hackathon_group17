const inputs = 
document.querySelectorAll('input'); 
const patterns = { 
 movies: /^(.+\(\d{4}\))$/, 
 songLyrics: /^(\[Verse\d\]).+$/, 
 twitterNames: /^(@\w+)$/, 
 isbnNumbers: /^(ISBN)(\d{3}-\d-
\d{3}-\d{5}-\d)$/,
