// main.js
function goToLink() {
    window.location.href = "https://t.me/valli48"; 
}

let user = {
    Привет: "Ты готова изменить свою жизнь прямо сейчас?",
    Пока: "Как дела?",
};



// Окна
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const img = card.querySelector('img'); // Select the image within the card
    const modal = document.createElement('div'); // Create modal element
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;'; // Close symbol
    const modalText = document.createElement('p'); // Create text element for modal
    const text = img.dataset.text; // Get text from data-text attribute
    modalText.textContent = text;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalText); // Add text to modal content
    modal.appendChild(modalContent);
    document.body.appendChild(modal);


    img.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});




function confetti(el = document.body, opt_properties) {
	if (!el) {
		console.error("Must have element to populate the confetti!");
		return;
	}
	const defaultProperties = {
		addBlur: true,
		angle: 0,
		angleEmoji: 0,
		beginStart: false,
		colors: "random",
		delay: 10,
		drop: 400,
		fadeout: true,
		fixedSize: false,
		flakes: 100,
		scale: 1,
		speed: 5000,
		spread: 400,
		spin: true,
		zSpin: true,
		type: "default",
		zIndex: 99999
	};
	// properties passed in from user onto the defaults
	const c = Object.assign(defaultProperties, opt_properties);
	const randInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	const hh = c.drop;
	const ww = c.spread;
	const randomBlur = () => {
		if (c.addBlur) return randInt(1, 2);
		else return 1;
	};
	const overlayId = `conf${randInt(0, 1000)}etti${randInt(0, 1000)}ver${randInt(0, 1000)}lay`;
	let animatedConfetti = ``;
	// make sure number of flakes is a number
	if (!c.flakes || Number.isNaN(c.flakes * 1)) {
		c.flakes = 100;
	}
	for (let i = 0; i < c.flakes; i++) {
		const conId = `con${randInt(0, 1000)}fet${randInt(0, 1000)}ti${randInt(0, 1000)}`;
		const confettiDur = `${randInt(c.speed / 2, c.speed)}`;
		let confettiSpin = ``;
		let confettiType = ``;
		if (c.spin) {
			confettiSpin = `<animateTransform attributeName="transform" type="rotate" values="0 0 0; ${(Math.random() < 0.5 ? -1 : 1) * 360} 0 0" dur="${randInt(c.speed / 6, c.speed / 2)}ms" begin="-${randInt(100, 5000)}ms" repeatCount="indefinite" additive="sum" />`;
		}
		if (c.zSpin) {
			let xySpin = `-1 1`;
			if (randInt(0, 1) == 0) xySpin = `1 -1`;
			confettiSpin += `<animateTransform attributeName="transform" type="scale" values="1 1; ${xySpin}; 1 1" dur="${randInt(c.speed / 10, c.speed / 2)}ms" repeatCount="indefinite" additive="sum" />`;
		}
		// are we using an array of colors or random ones?
		let confettiColor = ``;
		// fixed circle r
		let fixedR = 6;
		let fixedFontSize = `calc(1em * ${c.scale})`;
		let fixedScale = 1;
		if (!c.fixedSize) {
			fixedR = randInt(4, 7);
			fixedFontSize = `calc(${randInt(5, 15) / 10}em * ${c.scale})`;
			fixedScale = randInt(5, 20) / 10;
		}
		
			// user passes in an array of values. (ex. array of emojis)
			const typeArray = c.type;
			const randArrVal = typeArray[randInt(0, typeArray.length - 1)];
			let midpoints = randInt(3, 12);
			let snowFlakePath = `M 50 50 v-35`;
			for (let i = 0; i < midpoints; i++) {
				let linelength = randInt(20, 120) / 10;
				let yPos = 50 - randInt(50, 350) / 10;
				let path = `M50 ${yPos}l-${linelength} -${linelength}M50 ${yPos}l${linelength} -${linelength}`;
				snowFlakePath += path;
			}
			let arms = randInt(6, 12);
			let angle = 360 / arms;
			let armCopies = ``;
			let sw = randInt(10, 40) / 10;
			for (let i = 1; i < arms; i++) {
				armCopies += `<g transform="rotate(${angle * i} 50 50)"><path id="${conId + i}" fill="none" stroke="#fff" stroke-width="${sw}" d="${snowFlakePath}" /></g>`;
			}
			let snowflake = `<svg viewBox="0 0 100 100"><g><path id="arm" d="${snowFlakePath}" fill="none" stroke="#fff" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" />${armCopies}</g></svg>`;
			confettiType = `<g transform="scale(${c.scale})" id="${conId}"><image href="${baseEncode(snowflake)[1]}" height="${fixedScale * 20}" width="${fixedScale * 20}" x="${fixedScale * -10}" y="${fixedScale * -10}">${confettiSpin}</image></g>`;
		let topY = (hh * randInt(5, 25)) / 100;
		let startX = (ww * randInt(0, 100)) / 100;
		// add confetti to group
		animatedConfetti += `<g>${confettiType}<animateMotion xlink:href="#${conId}" dur="${confettiDur}ms" begin="${c.beginStart ? 0 : -randInt(0, c.speed)}ms" fill="freeze" repeatCount="indefinite" keyTimes="0;1" keySplines="${randInt(0, 1) / 10} ${randInt(0, 1) / 10} ${randInt(0, 10) / 10} ${randInt(0, 1) / 10}" calcMode="spline" path="M ${startX} ${hh * -0.1} q ${((ww * randInt(10, 40)) / 100) * (Math.random() < 0.5 ? -1 : 1)} ${(hh * randInt(20, 40)) / 100} 0 ${(hh * randInt(40, 60)) / 100} T ${startX} ${hh * 1.1}"></animateMotion></g>`;
	}

	const elemRect = el.getBoundingClientRect();
	const centerY = elemRect.top + (elemRect.bottom - elemRect.top) / 2;
	const centerX = elemRect.left - (elemRect.left - elemRect.right) / 2;
	let fadeAnim = ``;
	if (c.fadeout) {
		fadeAnim = `<animate attributeName="opacity" values="1; 0" dur="${c.speed / 4}ms" begin="${c.speed / 4}ms" repeatCount="none" fill="freeze"/>`;
	}
	const svg = `<svg id="${overlayId}" viewBox="0 0 ${ww} ${hh}" height="${hh}px" width="${ww}px" preserveAspectRatio="none" style="left:${centerX}px; top:${centerY}px; pointer-events: none; position: fixed; transform: translate(-50%,-50%) rotate(${c.angle}deg); user-select: none; z-index: ${c.zIndex}"><filter id="blur1" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="0" /></filter><filter id="blur2" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="1" /></filter><g>${animatedConfetti}${fadeAnim}</g></svg>`;
	const wrapper = document.createElement("div");
	wrapper.innerHTML = svg;
	const svgChild = wrapper.firstChild;
	document.body.appendChild(svgChild);
}

const randInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.querySelector("body").addEventListener("click", (el) => {
	confetti(el.target, {
		beginStart: true,
		spread: window.innerWidth,
		flakes: 40,
		speed: 30000,
		delay: 0,
		fadeout: false,
		drop: window.innerHeight,
		spin: true
	});
});

function letItSnow() {
	confetti(undefined, {
		spread: window.innerWidth,
		flakes: randInt(20, 40),
		speed: randInt(25000, 40000),
		delay: 0,
		fadeout: false,
		drop: window.innerHeight,
		spin: true
	});
}

function baseEncode(vall = document.querySelector("#usrInput").value) {
	let usrVal = vall.replace(/\s\s+/g, ` `);
	let btoa = window.btoa(usrVal);
	let res = encodeURI(vall);
	//need to check and see if svg has xmlns='http://www.w3.org/2000/svg' and if not, add it in
	if (res.indexOf("xmlns=") == -1) {
		res = res.replace(`%3Csvg`, `%3Csvg xmlns=%22http://www.w3.org/2000/svg%22`);
	}
	res = res
		.replaceAll(`#`, `%23`)
		.replaceAll(`%22`, `'`)
		.replaceAll(`%0A`, ``)
		.replaceAll(`%09`, ``)
		.replaceAll(`%20`, ` `)
		.replace(/\s\s+/g, ` `);
	let baseEncodedSVG = `data:image/svg+xml,${res}`;

	let bgIm = `background-image: url("${baseEncodedSVG}");`;

	return [`data:image/svg+xml;base64,${btoa}`, baseEncodedSVG];
}

letItSnow();






const quizQuestions = [
    {
        question: "Какой цвет ассоциируется с Новым годом?",
        answers: ["Красный", "Синий", "Зеленый", "Желтый"],
        correct: 0
    },
    {
        question: "Какой напиток традиционно пьют на Новый год?",
        answers: ["Чай", "Кофе", "Шампанское", "Сок"],
        correct: 2
    },
    {
        question: "Какое животное символизирует Новый год в китайском календаре 2025?",
        answers: ["Тигр", "Кролик", "Дракон", "Змея"],
        correct: 3
    },
    {
        question: "Какой праздник отмечают 1 января?",
        answers: ["Рождество", "День благодарения", "Новый год", "Хэллоуин"],
        correct: 2
    },
    {
        question: "Как называется традиция обмена подарками на Новый год?",
        answers: ["Секретный Санта", "Обмен подарками", "Подарочный обмен", "Подарочный круг"],
        correct: 0
    },
    {
        question: "Какой фрукт часто используют для украшения новогоднего стола?",
        answers: ["Яблоко", "Апельсин", "Банан", "Груша"],
        correct: 1
    },
    {
        question: "Какой месяц следует за декабрем?",
        answers: ["Ноябрь", "Январь", "Февраль", "Март"],
        correct: 1
    },
    {
        question: "Какой популярный новогодний фильм с Маколеем Калкиным?",
        answers: ["Один дома", "Эльф", "Гринч", "Полярный экспресс"],
        correct: 0
    }
];

function startQuiz() {
    const quizModal = document.getElementById('quizModal');
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.answers.map((answer, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${answer}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });

    quizModal.style.display = 'block';
}

function closeModal() {
    const quizModal = document.getElementById('quizModal');
    quizModal.style.display = 'none';
}

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    alert(`Вы набрали ${score} из ${quizQuestions.length} правильных ответов!`);
    closeModal();
}



//Желание
function submitWish() {
	const wish = document.getElementById('wishInput').value;
	if (wish) {
		alert('Ваше желание отправлено!');
		document.getElementById('wishInput').value = ''; // Clear the input field
	} else {
		alert('Пожалуйста, введите желание.');
	}
}


document.addEventListener('DOMContentLoaded', function() {
    const gifts = [
        "Счастье", "Удача", "Любовь", "Здоровье", "Богатство", "Путешествие", "Дружба", "Мудрость", "Творчество", "Успех",
        "Спокойствие", "Радость", "Вдохновение", "Смех", "Сюрприз", "Подарок", "Приключение", "Мечта", "Надежда", "Энергия",
        "Гармония", "Красота", "Сила", "Терпение", "Процветание", "Знание", "Свобода", "Вера", "Музыка", "Свет"
    ];

    const atomImage = document.getElementById('atomImage');
    const atomModal = document.getElementById('atom-modal');
    const giftMessage = document.getElementById('gift-message');
    const closeButtonAtom = document.querySelector('.close-button-atom');

    atomImage.addEventListener('click', function() {
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        giftMessage.textContent = `В этом году твоим главным подарком будет - ${randomGift}!`;
        atomModal.style.display = 'flex'; /* Отображаем модальное окно */
    });

    closeButtonAtom.addEventListener('click', function() {
        atomModal.style.display = 'none'; /* Скрываем модальное окно */
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target == atomModal) {
            atomModal.style.display = 'none';
        }
    });
});

// Функция для кнопки закрытия внутри модального окна
function closeAtomModal() {
    document.getElementById('atom-modal').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    // Ваш существующий код...

    const kotikImage = document.getElementById('kotikImage');
    let isOriginalImage = true; // Флаг для отслеживания текущего изображения

    kotikImage.addEventListener('click', function() {
        if (isOriginalImage) {
            kotikImage.src = 'Котик1.png';
        } else {
            kotikImage.src = 'Котик.png';
        }
        isOriginalImage = !isOriginalImage; // Переключаем флаг
    });

    // Ваш существующий код...
});

document.addEventListener('DOMContentLoaded', function() {
    // Ваш существующий код...

    const kotImage = document.getElementById('kotImage');
    let isKotOriginal = true; // Флаг для отслеживания текущего изображения

    kotImage.addEventListener('click', function() {
        if (isKotOriginal) {
            kotImage.src = 'Кот1.png';
        } else {
            kotImage.src = 'Кот.png';
        }
        isKotOriginal = !isKotOriginal; // Переключаем флаг
    });

    // Ваш существующий код...
});

document.addEventListener('DOMContentLoaded', function() {
    // Ваш существующий код...

    const kotikImage = document.getElementById('kotikImage');
    let isOriginalImage = true; // Флаг для отслеживания текущего изображения

    kotikImage.addEventListener('click', function() {
        if (isOriginalImage) {
            kotikImage.src = 'Котик1.png';
        } else {
            kotikImage.src = 'Котик.png';
        }
        isOriginalImage = !isOriginalImage; // Переключаем флаг

        // Показать сообщение при нажатии
        const magicText = document.getElementById('magicText');
        magicText.style.display = 'block'; // Показываем элемент
    });

    // Ваш существующий код...
});

kotikImage.addEventListener('click', function() {
    // Ваш существующий код переключения изображений...

    // Показать сообщение при нажатии
    const magicText = document.getElementById('magicText');
    magicText.style.display = 'block'; // Показываем элемент

    // Скрыть сообщение через 5 секунд
    setTimeout(function() {
        magicText.style.display = 'none';
    }, 2500); // 5000 миллисекунд = 5 секунд
});

kotikImage.addEventListener('click', function() {
    // Ваш существующий код переключения изображений...

    // Показать или скрыть сообщение при нажатии
    const magicText = document.getElementById('magicText');
    if (magicText.style.display === 'block') {
        magicText.style.display = 'none';
    } else {
        magicText.style.display = 'block';
    }
});