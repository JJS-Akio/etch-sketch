document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button-grid');

    function gridCreate(size) {
        let screen = document.querySelector('.sketch-screen');
        screen.innerHTML = '';

        for (let i = 0; i < size; i++) {
            let column = document.createElement('div');
            column.classList.add('column');
            for (let j = 0; j < size; j++) {
                let row = document.createElement('div');
                row.classList.add("row");
                row.style.border = ".01px solid black";
                column.appendChild(row);
            }
            screen.appendChild(column);
        }
        document.querySelectorAll(".row").forEach(function(cell) {
            cell.onmouseover = function() {
                this.style.backgroundColor = 'black';
            }
        });
    }

    button.addEventListener('click', function() {
        let userInput = Number(window.prompt('Please enter a grid count between 0 - 100:'));
        while (userInput > 100) {
            userInput = Number(window.prompt('Please enter a grid count less than 100:'));
        }
        gridCreate(userInput);
    });
});
