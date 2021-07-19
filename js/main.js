const field = document.querySelector(".field");
const ceilSize = 100;

const emptyField = {
    value: 0,
    top: 0,
    left: 0
};

const ceils = [];
ceils.push(emptyField);


function move(index) {
    const ceil = ceils[index];

    const leftDiff = Math.abs(emptyField.left - ceil.left);
    const topDiff = Math.abs(emptyField.top - ceil.top);

    if (leftDiff + topDiff > 1) return;

    ceil.element.style.left = `${emptyField.left * ceilSize}px`;
    ceil.element.style.top = `${emptyField.top * ceilSize}px`;

    const emptyLeft = emptyField.left;
    const emptyTop = emptyField.top;
    emptyField.left = ceil.left;
    emptyField.top = ceil.top;
    ceil.left = emptyLeft;
    ceil.top = emptyTop;

    const isFinished = ceils.every(ceil => {
        return ceil.value === ceil.top * 4 + ceil.left;
    });

    if (isFinished) {
        alert("Ты выиграл");
    }
}

//сортировка чисел
const numbers = [...Array(15).keys()];
    // .sort(() => Math.random() - 0.5);

for (let i = 1; i < 16; ++i) {

    const ceil = document.createElement('div');
    const value = numbers[i-1]+1;
    ceil.className = 'ceil';
    ceil.innerHTML = value;

    const left = i % 4; //колонки (columns)
    const top = (i-left)/4; //строки (row)

    ceils.push({
        value: value,
        element: ceil,
        top: top,
        left: left
    });

    ceil.style.left = `${left * ceilSize}px`;
    ceil.style.top = `${top * ceilSize}px`;

    field.append(ceil);

    ceil.addEventListener('click', () => {
        move(i);
    });
}