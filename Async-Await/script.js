//1


/* async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("Начало задержки");
    await delay(1500);
    console.log("Задержка завершена");
}

main(); */

//2

async function fetchUserData(userId = 1) {
    const response = await fetch(`https://randomuser.me/api/users/${userId}`);
    return await response.json();
}