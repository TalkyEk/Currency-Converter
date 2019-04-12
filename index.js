const amount = document.getElementById("inputAmount");
const result = document.getElementById("inputResult");
const inputfromto = document.getElementById("inputFromTo");
document.getElementById("convert").addEventListener("click", count);
function count() {
    event.preventDefault();
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`)
        .then((res) => res.json())
        .then(data => {
            let input = inputfromto.value;
            let fromto = input.split("/");

            if (fromto[0] === "UAH") {
                const element = data.filter(l => l.ccy === fromto[1]);
                const uah = amount.value;
                const course = element[0].sale;
                const result1 = uah / course;
                result.value = parseInt(result1 * 100) / 100;
            }
            else {
                const element = data.filter(l => l.ccy === fromto[0]);
                const uah = amount.value;
                const course = element[0].buy;
                const result1 = uah * course;
                result.value = parseInt(result1 * 100) / 100;
            }
        })
}