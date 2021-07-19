const field = document.querySelector(".field");
const ceilSize = 100;

const Game = function () {
    const emptyField = {
        value: 16,
        top: 3,
        left: 3
    };

    const ceils = [];

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

        const isFinished = ceils.every(cell => {
            return cell.value === (cell.top*4 + cell.left) + 1;
        });

        if (isFinished) {
            alert("Ты выиграл");
        }

    }
    this.generate = function(isRandom) {
        const numbers = [...Array(15).keys()].map(x => x+1);
        if (isRandom) {
            numbers.sort(() => Math.random() - 0.5);
        }

        for (let i = 0; i < 15; ++i) {
            const cell = document.createElement('div');
            const value = numbers[i];
            cell.className = 'cell';
            cell.innerHTML = value;

            const left = i % 4; //колонки (columns)
            const top = (i-left)/4; //строки (row)

            ceils.push({
                value: value,
                element: cell,
                top: top,
                left: left
            });

            cell.style.left = `${left * ceilSize}px`;
            cell.style.top = `${top * ceilSize}px`;

            field.append(cell);
            cell.addEventListener('click', () => {
                move(i);
            });
        }
        ceils.push(emptyField);
    }
}