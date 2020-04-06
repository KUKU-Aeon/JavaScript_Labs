document.addEventListener('DOMContentLoaded', function () {

    function CountN(str, arr) {
        let N = 0;
        alert("S = " + str + '\n');

        for (let i = 0; i < arr.length; i++) // проходим по всем словам в массиве
        {
            for (let char of arr[i])  // посимвольно проверяем вхождение символа строки Ki в S 
            {
                if (str.search(char) === -1) // не нашли совпадение увеличиваем переменную
                    N++;
            }
            alert(arr[i] + " = " + N);
            N = 0;
        }
    }

    let str = prompt("Введите слово S");

    let s = prompt("Введите слова K");

    let NArr = s.split(' '); // разбиваем строку на массив строк слов K

    CountN(str, NArr);

});
