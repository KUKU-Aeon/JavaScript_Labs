document.addEventListener('DOMContentLoaded', function () {

//Считает кол-во символов в слове S
// по типу символ => key , кол-во вхождений => value
function CountSymbol(word)
{
    let CounterMap = new Map();

    for (let char of word)
    {
        let count = CounterMap.get(char) || 0;
        CounterMap.set(char, count + 1);
    }
    return CounterMap;
}

//Проверяет можно ли из символов строки S составить слово Kn
function CountN(str, substr)
{
    let N = 0;
    let result = "";
    let map = CountSymbol(str);
    console.log(map);
    let word = substr.split(' ');
    word.forEach(function (word) {
        for (let char of word)
        {
            if (!map.has(char))
                N++;
            else
            {
                if (map.get(char) === 0)
                    N++;
                else map.set(char, map.get(char) - 1);
            }
        }
     result += word + " = " + N + "\n";
     map = CountSymbol(str);
     N = 0;
 });
    alert(result);
 }

let S = prompt("Введите слово S");
let Kn = prompt("Введите слова k..kn");
S.toUpperCase();
Kn.toUpperCase();
CountN(S,Kn);

});
