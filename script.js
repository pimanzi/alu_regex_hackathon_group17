
const inputs = document.querySelectorAll('input');
const patterns = {
    movies: /^(.+\(\d{4}\))$/,
    songLyrics: /^(\[Verse\d\]).+$/,
    twitterNames: /^(@\w+)$/,
    isbnNumbers: /^(ISBN)(\d{3}-\d-\d{3}-\d{5}-\d)$/,
    jokes: /^Why did the .+ \? Because.+$/,
    tvEpisode: /^(.+)\s(S\d{2})(E\d{2}):.+$/,
    dates: /^(\d{2})-(\d{3})-(\d{4})$/,
    hexColor: /(^#[\D\d]{6}$)/,
    ipAddress: /^((\d{0,255}){3}\.){3}(\d{0,255}){3}$/
};

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.remove("invalid");
        field.classList.add("valid");
    } else {
        field.classList.remove("valid");
        field.classList.add("invalid");

        switch (field.getAttribute('name')) {
            case 'movies':
                console.log("Wrong input, here is an example: Game of Thrones (2004)");
                break;

            case 'songLyrics':
                console.log("Wrong input, here is an example: [Verse 1] God is good");
                break;

            case 'twitterNames':
                console.log("Wrong input, here is an example: @pk");
                break;

            case 'isbnNumbers':
                console.log("Wrong input, here is an example: ISBN 123-2-432-12345-1");
                break;

            case 'jokes':
                console.log("Wrong input, here is an example: Why did the cat laugh? Because it is funny hhhh");
                break;

            case 'tvEpisode':
                console.log("Wrong input, here is an example: Prison Break S01E01: Into");
                break;

            case 'dates':
                console.log("Wrong input, here is an example: 12-012-2004");
                break;

            case 'hexColor':
                console.log("Wrong input, here is an example: #ffffff");
                break;

            case 'ipAddress':
                console.log("Wrong input, here is an example: 123.123.123.121");
                break;

            default:
                console.log("Not found");
                break;
        }
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.getAttribute('name')]);
    });
});
