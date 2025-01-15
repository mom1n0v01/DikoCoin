let score = 0;  // Счётчик монет
let clickCount = 0;  // Счётчик кликов
let clickValue = 1;  // Начальная стоимость клика
let autoClickerInterval = null;  // Интервал для автокликера
let autoClickerEnabled = false;  // Статус автокликера

// Получаем элементы
const scoreElement = document.getElementById('score');
const clickCountElement = document.getElementById('click-count');
const coinElement = document.getElementById('coin');
const upgradeClickButton = document.getElementById('upgrade-click');
const autoClickerButton = document.getElementById('auto-clicker');

// Обработчик нажатий на монету
coinElement.addEventListener('click', function() {
    clickCount++;  // Увеличиваем количество кликов
    score += clickValue;    // Увеличиваем очки за каждый клик

    // Обновляем отображение счета
    scoreElement.textContent = `Монеты: ${score} D`;
    clickCountElement.textContent = clickCount;

    // Обновляем кнопки улучшений
    updateUpgradeButtons();
});

// Функция для обновления кнопок улучшений
function updateUpgradeButtons() {
    // Улучшение клика
    if (score >= 100) {
        upgradeClickButton.disabled = false;
    } else {
        upgradeClickButton.disabled = true;
    }

    // Автокликер
    if (score >= 500) {
        autoClickerButton.disabled = false;
    } else {
        autoClickerButton.disabled = true;
    }
}

// Функция для улучшения клика
upgradeClickButton.addEventListener('click', function() {
    if (score >= 100) {
        score -= 100;  // Уменьшаем количество очков на 100
        clickValue += 1;  // Увеличиваем стоимость клика
        scoreElement.textContent = `Монеты: ${score} D`;
        updateUpgradeButtons();
    }
});

// Функция для включения автокликера
autoClickerButton.addEventListener('click', function() {
    if (score >= 500 && !autoClickerEnabled) {
        score -= 500;  // Уменьшаем количество очков на 500
        autoClickerEnabled = true;
        autoClickerInterval = setInterval(function() {
            score += clickValue;  // Автоматическое увеличение очков
            scoreElement.textContent = `Монеты: ${score} D`;
        }, 1000);  // Каждую секунду добавляются очки
        updateUpgradeButtons();
    }
});

// Инициализация
updateUpgradeButtons();