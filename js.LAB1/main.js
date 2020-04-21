document.addEventListener('DOMContentLoaded', function () {

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
           let value = map.get(char);
           if (value === 0)
               N++;
           else map.set(char, value - 1);
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
S.toLowerCase();
Kn.toLowerCase();
CountN(S,Kn);

});
