document.addEventListener('DOMContentLoaded', function () {

    function CountN(str, arr) {
        let N = 0;
        alert("S = " + str + '\n');

        for (let i = 0; i < arr.length; i++)
        {
            for (let char of arr[i])
            {
                if (str.search(char) === -1)
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