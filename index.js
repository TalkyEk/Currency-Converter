// const input = document.getElementById("input");
// const output = document.getElementById("output");
// const selin =  document.getElementById("selin");
// const selout =  document.getElementById("selout");
// document.getElementById("get").addEventListener("click", count);
// function count() {
//     fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${selout.value}&date=20190401&json`)
//         .then((res) => res.json())
//         .then((data) => {
//             const course = data[0].rate;
//             const uah = input.value;
//             output.value = uah / course;
//         })
// }
const input = document.getElementById("input");
const output = document.getElementById("output");
const selin =  document.getElementById("selin");
const selout =  document.getElementById("selout");
document.getElementById("get").addEventListener("click", count);
function count() {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`)
        .then((res) => res.json())
        .then(data => {
            if (selin.value === "UAH") {
                const element = data.filter(l => l.ccy === selout.value);
                const uah = input.value;
                const course = element[0].sale;
                const result = uah / course;
                output.value = parseInt(result * 100) / 100;
            }
            else {
                const element = data.filter(l => l.ccy === selin.value);
                const uah = input.value;
                const course = element[0].buy;
                const result = uah * course;
                output.value = parseInt(result * 100) / 100;
            }
        })
}