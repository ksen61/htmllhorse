document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cloneBtn1").addEventListener("click", () => cloneElement("horse1"));
    document.getElementById("cloneBtn2").addEventListener("click", () => cloneElement("horse2"));
    document.getElementById("cloneBtn3").addEventListener("click", () => cloneElement("horse3"));
});

function cloneElement(elementId) {
    const original = document.getElementById(elementId);
    const clone = original.cloneNode(true);
    clone.classList.add("cloned");
    original.parentNode.insertBefore(clone, original.nextSibling);
}


document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.querySelector(".kn");

    var toggle = true;

    addButton.addEventListener("click", function() {
        var originalElement;
        // Проверяем флаг, чтобы определить, какой элемент клонировать
        if (toggle) {
            originalElement = document.querySelector(".kar1");
        } else {
            originalElement = document.querySelector(".kar2");
        }

        // Проверяем, есть ли хотя бы один элемент для клонирования
        if (originalElement) {
            var clonedElement = originalElement.cloneNode(true);
            clonedElement.style.display = "block";
            originalElement.parentNode.insertBefore(clonedElement, originalElement.nextSibling);
        } else {
            // Если нет ни одного элемента, создаем новый элемент
            var newElement = document.createElement("div");
            newElement.className = toggle ? "kar1" : "kar2";
            newElement.style.display = "block";
            document.body.appendChild(newElement);
        }

        // Переключаем флаг
        toggle = !toggle;

        // Проверяем, нужно ли активировать кнопки "Добавить" и "Убрать"
        toggleButtons();
    });

    function toggleButtons() {
        var kar1 = document.querySelectorAll(".kar1");
        var kar2 = document.querySelectorAll(".kar2");
        var addButton = document.querySelector(".kn");
        var removeButton = document.querySelector(".kn1");

        // Кнопка "Добавить" всегда активна
        addButton.disabled = false;

        // Кнопка "Убрать" неактивна, если осталось два или менее элементов
        removeButton.disabled = (kar1.length + kar2.length) <= 2;
    }

    toggleButtons(); // Проверяем статус кнопок при загрузке страницы
});

document.addEventListener("DOMContentLoaded", function() {
    var removeButton = document.querySelector(".kn1");
    var isKarNext = true;

    removeButton.addEventListener("click", function() {
        if (isKarNext) {
            var kar = document.querySelector(".kar1");
            if (kar) {
                kar.parentNode.removeChild(kar);
            }
        } else {
            var kar1 = document.querySelector(".kar2");
            if (kar1) {
                kar1.parentNode.removeChild(kar1);
            }
        }

        // Переключаем флаг для следующего удаления
        isKarNext = !isKarNext;

        // Проверяем, нужно ли активировать кнопки "Добавить" и "Убрать"
        toggleButtons();
    });

    function toggleButtons() {
        var kar1 = document.querySelectorAll(".kar1");
        var kar2 = document.querySelectorAll(".kar2");
        var addButton = document.querySelector(".kn");
        var removeButton = document.querySelector(".kn1");

        // Кнопка "Добавить" всегда активна
        addButton.disabled = false;

        // Кнопка "Убрать" неактивна, если осталось два или менее элементов
        removeButton.disabled = (kar1.length + kar2.length) <= 2;
    }

    toggleButtons(); // Проверяем статус кнопок при загрузке страницы
});
