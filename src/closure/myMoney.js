function moneyBox() {
    let saveCoins = 0;
    
    function countCoins (coins) {
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`);
    };
    return countCoins;
};

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

// Se pueden acceder a variables haciendo uso de la memoria
const moneyBoxMate = moneyBox();
moneyBoxMate(10);
moneyBoxMate(20);
moneyBoxMate(5);