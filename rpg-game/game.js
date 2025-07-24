const enemies = {
    forest: {
        name: "орк",
        atk: 4,
        hp: 20,
        max_hp: 20
    },
    castle: {
        name: "рыцарь",
        atk: 15,
        hp: 100,
        max_hp: 100
    }
};

const hero = {
    level: 1,
    hp_hero: 100,
    def_hero: 20,
    atk_hero: 8,
    inventory: ["меч", "щит"],
    activeEffects: {
        doubleAttack: false,
        doubleDefense: false
    }
};

const village_button = document.getElementById("village");
const forest_button = document.getElementById("forest");
const castle_button = document.getElementById("castle");

const atk_hero_button = document.getElementById("atk_button");
const def_hero_button = document.getElementById("def_button");
const inv_hero_button = document.getElementById("inv_button");
const heal_hero_button = document.getElementById("heal_button");
const logWindow = document.querySelector('.log-window');

atk_hero_button.addEventListener("click", attack);
def_hero_button.addEventListener("click", defence);

let currentLocation = null;
let currentEnemy = null;

atk_hero_button.disabled = true;
def_hero_button.disabled = true;
inv_hero_button.disabled = true;

addLog("Добро пожаловать в игру! Выберите локацию чтобы начать приключение!");


village_button.addEventListener("click", () => {
    currentLocation = "village";
    changeLocationImage(currentLocation);
    addLog("Вы прибыли в деревню. Здесь можно отдохнуть и восстановить здоровье.");

    resetButtons()
    atk_hero_button.disabled = true;
    def_hero_button.disabled = true;
    inv_hero_button.disabled = true;
    document.getElementById("heal_button").style.display = "block";
    heal_hero_button.disabled = false;
    village_button.disabled = true;
});

forest_button.addEventListener("click", () => {
    currentLocation = "forest";
    changeLocationImage(currentLocation);
    currentEnemy = {...enemies.forest};
    currentEnemy.hp = currentEnemy.max_hp;
    addLog(`Вы вошли в лес. Здесь вас ждет ${currentEnemy.name}!`);

    resetButtons();

    atk_hero_button.disabled = false;
    def_hero_button.disabled = false;
    inv_hero_button.disabled = false;
    heal_hero_button.style.display = "none";
    forest_button.disabled = true;
});

castle_button.addEventListener("click", () => {
    currentLocation = "castle";
    changeLocationImage(currentLocation);
    currentEnemy = {...enemies.castle};
    currentEnemy.hp = currentEnemy.max_hp;
    addLog(`Вы подошли к замку. Здесь вас ждет могучий ${currentEnemy.name}!`);

    resetButtons();

    atk_hero_button.disabled = false;
    def_hero_button.disabled = false;
    inv_hero_button.disabled = false;
    heal_hero_button.style.display = "none";
    castle_button.disabled = true;
});

function heal(){
    const healAmount = 30;
    
    if (hero.hp_hero < 100) {
        hero.hp_hero = Math.min(hero.hp_hero + healAmount, 100);
        document.getElementById("hp_hero").textContent = hero.hp_hero;
        addLog(`Вы восстановили ${healAmount} HP. Теперь у вас ${hero.hp_hero} HP.`);
    }
    
    if (hero.hp_hero >= 100){
        addLog("Вы полностью отдохнули и готовы к путешествию");
        heal_hero_button.disabled = true;
    };
};

document.getElementById("heal_button").addEventListener("click", heal);

function attack() {
    if (!currentEnemy) return;

    let damage = hero.atk_hero;

    if (hero.activeEffects.doubleAttack) {
        damage *= 2;
        addLog("Эффект меча: урон удвоен!");
        hero.activeEffects.doubleAttack = false;
    }

    currentEnemy.hp -= damage;
    hero.hp_hero -= currentEnemy.atk;

    currentEnemy.hp = Math.max(0, currentEnemy.hp);
    hero.hp_hero = Math.max(0, hero.hp_hero);

    document.getElementById("hp_hero").textContent = hero.hp_hero;

    addLog(`
        Вы нанесли ${currentEnemy.name}у ${damage} урона.
        ${currentEnemy.name.charAt(0).toUpperCase() + currentEnemy.name.slice(1)} нанес вам ${currentEnemy.atk} урона.
        У ${currentEnemy.name}а осталось ${currentEnemy.hp} HP.
        У вас осталось ${hero.hp_hero} HP.
    `);

    if (currentEnemy.hp <= 0) {
        addLog(`${currentEnemy.name.charAt(0).toUpperCase() + currentEnemy.name.slice(1)} побеждён!`);

        hero.level += 1;
        hero.def_hero += 1;
        hero.atk_hero += 1;

        document.getElementById("level").textContent = hero.level;
        document.getElementById("def_hero").textContent = hero.def_hero;
        document.getElementById("atk_hero").textContent = hero.atk_hero;

        atk_hero_button.disabled = true;
        def_hero_button.disabled = true;
        inv_hero_button.disabled = true;
    }
    if (hero.hp_hero <= 0) {
        addLog("Вы проиграли!");
        atk_hero_button.disabled = true;
        def_hero_button.disabled = true;
        inv_hero_button.disabled = true;
        village_button.disabled = true;
        forest_button.disabled = true;
        castle_button.disabled = true;
    }
};

function defence(){
    if (!currentEnemy) return;
    let defenseMultiplier = 1 - (hero.def_hero / 100);

    if (hero.activeEffects.doubleDefense) {
        defenseMultiplier /= 2;
        addLog("Эффект щита: защита удвоена!");
        hero.activeEffects.doubleDefense = false;
    }

    const finalDamage = Math.floor(currentEnemy.atk * defenseMultiplier);
    hero.hp_hero -= finalDamage;

    document.getElementById("hp_hero").textContent = hero.hp_hero;

    addLog(`
        Вы защитились! Ваша броня (${hero.def_hero}%) уменьшила урон.
        ${currentEnemy.name.charAt(0).toUpperCase() + currentEnemy.name.slice(1)} нанес ${finalDamage} урона (вместо ${currentEnemy.atk}).
        У вас осталось ${hero.hp_hero} HP.
    `);

    if (hero.hp_hero <= 0) {
        addLog("Вы проиграли!");
        atk_hero_button.disabled = true;
        def_hero_button.disabled = true;
        inv_hero_button.disabled = true;
        village_button.disabled = true;
        forest_button.disabled = true;
        castle_button.disabled = true;
    }
};

function addLog(message){
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    logWindow.appendChild(logEntry);
    logWindow.scrollTop = logWindow.scrollHeight;
};

function resetButtons() {
    atk_hero_button.disabled = false;
    def_hero_button.disabled = false;
    inv_hero_button.disabled = false;
    heal_hero_button.disabled = false;
    village_button.disabled = false;
    forest_button.disabled = false;
    castle_button.disabled = false;
    
    heal_hero_button.style.display = "none";
};

inv_hero_button.addEventListener("click", use_item);

function use_item() {
    if (hero.inventory.length === 0) {
        addLog("В инвентаре нет предметов!");
        return;
    }

    const item = hero.inventory[0];
    
    if (item === "меч") {
        hero.activeEffects.doubleAttack = true;
        addLog("Вы использовали меч! Следующая атака нанесет двойной урон!");
    } 
    else if (item === "щит") {
        hero.activeEffects.doubleDefense = true;
        addLog("Вы использовали щит! Следующая защита будет вдвое эффективнее!");
    }
    
    hero.inventory.shift();
    updateInventoryDisplay();
}

function updateInventoryDisplay() {
    const inventoryElement = document.getElementById("inventory");
    inventoryElement.textContent = hero.inventory.join(", ") || "нет предметов";
};


function changeLocationImage(location) {
    document.querySelectorAll('.location-img .img-size').forEach(img => {
        img.classList.remove('active');
    });
    
    switch(location) {
        case "village":
            document.getElementById('fantasy-village').classList.add('active');
            break;
        case "forest":
            document.getElementById('fantasy-forest').classList.add('active');
            break;
        case "castle":
            document.getElementById('fantasy-castle').classList.add('active');
            break;
        case "road":
            document.getElementById('fantasy-road').classList.add('active');
            break;
    }
}
changeLocationImage("road");
updateInventoryDisplay();