const inputs = document.querySelectorAll('input'); 
const patterns = { 
 movies: /^(.+\(\d{4}\))$/, 
 songLyrics: /^(\[Verse\d\]).+$/, 
 twitterNames: /^(@\w+)$/, 
 isbnNumbers: /^(ISBN)(\d{3}-\d-\d{3}-\d{5}-\d)$/,
 jokes: /^Why did the .+ \? Because.+$/,
 tvEpisode: /^(.+)\s(S\d{2})(E\d{2}):.+)$/,
 dates: /^(\d{2})-(\d{3})-(\d{4})$/,
 hexColor: /(^#[\D\d]{6}$)/,
 };

function validate(field, regex) {
   console.log('Field value:', field.value);
   console.log('Regex test result:', regex.test(field.value));



	if (regex.test(field.value)) {
       field.classList.remove("invalid");
       field.classList.add("valid");
    }
