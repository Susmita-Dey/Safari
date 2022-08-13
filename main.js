const stateData = {
	Kerala: {
		photo: "Assets/images/kerala.jpg",
	},
	Tamil_Nadu: {
		photo: "Assets/images/tamil_nadu.jpg",
	},
	Andaman_Nicobar: {
		photo: "Assets/images/andaman_nicobar.jpeg",
	},
	Puducherry: {
		photo: "Assets/images/puducherry.jpg",
	},
	Andhra_Pradesh: {
		photo: "Assets/images/andhra_pradesh.jpg",
	},
	Karnataka: {
		photo: "Assets/images/karnataka.jpg",
	},
	Lakshadweep: {
		photo: "Assets/images/lakshadweep.jpg",
	},
	Goa: {
		photo: "Assets/images/goa.jpg",
	},
	Telangana: {
		photo: "Assets/images/telangana.jpg",
	},
	Odisha: {
		photo: "Assets/images/odisha.jpg",
	},
	Chhattisgarh: {
		photo: "Assets/images/chhattisgarh.jpg",
	},
	Maharashtra: {
		photo: "Assets/images/mumbai.jpg",
	},
	Daman_Diu: {
		photo: "Assets/images/daman_and_diu.jpeg",
	},
	Gujarat: {
		photo: "Assets/images/gujarat.jpg",
	},
	Rajasthan: {
		photo: "Assets/images/rajasthan.jpg",
	},
	Madhya_Pradesh: {
		photo: "Assets/images/madhya_pradesh.jpg",
	},
	Jharkhand: {
		photo: "Assets/images/jharkhand.jpg",
	},
	West_Bengal: {
		photo: "Assets/images/west_bengal.jpg",
	},
	Tripura: {
		photo: "Assets/images/tripura.jpg",
	},
	Mizoram: {
		photo: "Assets/images/mizoram.jpg",
	},
	Manipur: {
		photo: "Assets/images/manipur.jpg",
	},
	Nagaland: {
		photo: "Assets/images/nagaland.jpg",
	},
	Arunachal_Pradesh: {
		photo: "Assets/images/arunachal-pradesh.jpg",
	},
	Assam: {
		photo: "Assets/images/assam.jpg",
	},
	Meghalaya: {
		photo: "Assets/images/meghalaya.jpg",
	},
	Sikkim: {
		photo: "Assets/images/sikkim.jpg",
	},
	Bihar: {
		photo: "Assets/images/bihar.jpg",
	},
	Uttar_Pradesh: {
		photo: "Assets/images/uttar_pradesh.jpeg",
	},

	Uttarakhand: {
		photo: "Assets/images/uttarakhand.jpg",
	},
	Haryana: {
		photo: "Assets/images/haryana.jpg",
	},
	Delhi: {
		photo: "Assets/images/delhi.jpg",
	},
	Punjab: {
		photo: "Assets/images/punjab.jpg",
	},
	Himachal_Pradesh: {
		photo: "Assets/images/himachal_pradesh.jpg",
	},
	Jammu_Kashmir: {
		photo: "Assets/images/kashmir.jpg",
	},
	Ladakh: {
		photo: "Assets/images/ladakh.jpeg",
	},
};

function StateCard() {
	/**
	 * This is a factory function same like class,
	 * It is use to create states cards, all the property & methods
	 * of cards are stored inside this.
	 */
	const drawCard = (stateName, stateImg, stateCardId) => {
		/**
		 * This will create a card element
		 * It will take a name, image
		 * Then assign classes and return the card.
		 */
		const cardClasses = [
			"w-36",
			"rounded",
			"overflow-hidden",
			"shadow-lg",
			"relative",
			"flex-auto",
		];
		const card = document.createElement("div");
		card.classList.add(...cardClasses);

		const imgClasses = ["w-full", "h-[90px]"];
		const img = document.createElement("img");
		img.src = stateImg;
		img.classList.add(...imgClasses);

		const nameClasses = ["flex", "justify-center"];
		const name = document.createElement("div");
		name.textContent = stateName;
		name.classList.add(...nameClasses);

		card.setAttribute("data-id", stateCardId);

		card.append(img, name);

		return card;
	};

	return { drawCard };
}

function BonusAndTrapCard() {
	/**
	 * This is the factory same like classes
	 * It is for creating the bonus and trap cards
	 * All the properties and methods of these cards will be
	 * store here.
	 */

	const drawBonusCard = (bonusCardId) => {
		const cardClasses = [
			"w-36",
			"rounded",
			"overflow-hidden",
			"shadow-lg",
			"flex",
			"justify-center",
			"items-center",
			"border-2",
			"border-green-400",
			"border-solid",
			"relative",
			"flex-auto",
		];
		const card = document.createElement("div");
		card.classList.add(...cardClasses);
		card.textContent = "Bonus";
		card.setAttribute("data-id", bonusCardId);

		return card;
	};

	const drawTrapCard = (trapCardId) => {
		const cardClasses = [
			"w-36",
			"rounded",
			"overflow-hidden",
			"shadow-lg",
			"flex",
			"justify-center",
			"items-center",
			"border-2",
			"border-red-400",
			"border-solid",
			"relative",
			"flex-auto",
		];
		const card = document.createElement("div");
		card.classList.add(...cardClasses);
		card.textContent = "Trap";
		card.setAttribute("data-id", trapCardId);

		return card;
	};

	return { drawBonusCard, drawTrapCard };
}

function Dice() {
	let sides = 6;

	const roll = () => {
		let randomNumber = Math.floor(Math.random() * sides) + 1;
		return randomNumber;
	};

	//Prints dice roll to the page
	const printNumber = (number) => {
		var placeholder = document.getElementById("placeholder");
		placeholder.textContent = number;
	};

	return { roll, printNumber };
}

function Player(bgColor, posTop, posLeft) {
	let currentPosition = 1;
	let playerId = "";
	// Will get the first card from the board
	let currentParentElement = "";

	const drawPlayer = () => {
		currentParentElement = document.querySelector(
			`[data-id="${currentPosition}"]`
		);
		const playerDivClasses = [
			"h-[36px]",
			"w-[36px]",
			"rounded-full",
			`bg-[${bgColor}]`,
			"absolute",
			`top-[${posTop}]`,
			`left-[${posLeft}]`,
		];
		const playerDiv = document.createElement("div");

		playerDiv.classList.add(...playerDivClasses);
		playerDiv.setAttribute("data-player-id", playerId);

		currentParentElement.appendChild(playerDiv);
	};

	const move = (newStepsToMove, idOfPlayer) => {
		// First removed the the player from the current card element
		removePlayer(currentParentElement, idOfPlayer);
		// Updating the positon as per dice
		let nextPositon = currentPosition + newStepsToMove;
		currentPosition = nextPositon;
		// Also changing the current card to the next state
		currentParentElement = document.querySelector(
			`[data-id="${currentPosition}"]`
		);
		// drawing the player again
		drawPlayer();
	};

	const removePlayer = (parentElm, idOfPlayer) => {
		// Find out the player inside the parent card
		let playerDivElm = document.querySelector(
			`[data-player-id="${idOfPlayer}"]`
		);
		parentElm.removeChild(playerDivElm);
		// playerDivElm.remove();
	};

	const getPlayerId = () => {
		return playerId;
	};

	const setPlayerId = (id) => {
		playerId = id;
	};

	const printValues = () => {
		console.log("playerId: " + playerId);
		console.log("currentPosition: " + currentPosition);
		console.log("currentParentElement: " + currentParentElement.outerHTML);
	};

	return {
		drawPlayer,
		move,
		removePlayer,
		playerId: getPlayerId,
		printValues,
		setPlayerId,
	};
}

const ID = function () {
	// Math.random should be unique because of its seeding algorithm.
	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
	// after the decimal.
	return "_" + Math.random().toString(36).substr(2, 9);
};

function mainGameController() {
	// Dice object
	const myDice = Dice();
	let diceBtn = document.querySelector(".dice-btn");

	// Player object
	const playerOne = Player("blue", "10px", "10px");
	playerOne.setPlayerId(ID());
	const playerTwo = Player("orange", "10px", "80px");
	playerTwo.setPlayerId(ID());
	let currentPlayer = playerOne;

	diceBtn.addEventListener("click", () => {
		let result = myDice.roll();
		myDice.printNumber(result);
		currentPlayer.printValues();
		currentPlayer.move(result, currentPlayer.playerId());
		currentPlayer.printValues();
		// It will just swith the players
		currentPlayer = swtichPlayer();
	});

	const swtichPlayer = () => {
		if (currentPlayer === playerOne) {
			currentPlayer = playerTwo;
		} else {
			currentPlayer = playerOne;
		}
		return currentPlayer;
	};

	function renderBoard() {
		/**
		 * Render the cards, dice when the game starts
		 */
		const totalCards = 42;
		const gameBoard = document.querySelector(".game-board");

		let stateCardCounter = 0;
		// let stateId = 42;
		const bonusTrapCardObj = BonusAndTrapCard();
		for (let i = 6; i >= 1; i--) {
			for (let j = 0; j < 7; j++) {
				if (
					(i === 6 && j === 1) ||
					(i === 4 && j === 2) ||
					(i === 3 && j === 1) ||
					(i === 2 && j === 4)
				) {
					const row = document.querySelector(
						`[data-row-position="${i}"]`
					);
					row.append(bonusTrapCardObj.drawTrapCard(`${i * 7 - j}`));
				} else if (
					(i === 5 && j === 4) ||
					(i === 1 && j === 4) ||
					(i === 3 && j === 5)
				) {
					const row = document.querySelector(
						`[data-row-position="${i}"]`
					);
					row.append(bonusTrapCardObj.drawBonusCard(`${i * 7 - j}`));
				} else {
					const row = document.querySelector(
						`[data-row-position="${i}"]`
					);
					const StateCardObj = StateCard();
					let stateName = Object.keys(stateData)[stateCardCounter];
					let statePhoto = stateData[stateName].photo;
					let card = StateCardObj.drawCard(
						stateName,
						statePhoto,
						`${i * 7 - j}`
					);
					row.append(card);
					stateCardCounter++;
				}
			}
		}

		playerOne.drawPlayer();
		playerTwo.drawPlayer();
	}

	return { renderBoard };
}

const myGame = mainGameController();
myGame.renderBoard();
