function Plus()
{
        const elem1 = document.getElementById("n1").value;
        const elem2 = document.getElementById("n2").value;
        document.getElementById("out").textContent = parseInt(elem1) + parseInt(elem2);
}

function Minus() 
{
    const elem1 = document.getElementById("n1").value;
    const elem2 = document.getElementById("n2").value;
    document.getElementById("out").textContent = parseInt(elem1) - parseInt(elem2);
}

    // getElementById — функція об'єкту document, який дозволяє знайти елемент на веб-сторінці по його id;
    // parseInt — глобальна функція, яка перетворює рядок на число. Якщо рядок не можливо перетворити у число — повертає Nan;
    // innerHTML — дозволяє зчитувати вміст елемента у вигляді HTML-рядка або встановити новий HTML;
    // textContent — зчитання або задавання текстового вмісту елемента.     