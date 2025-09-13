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

async function fetchUserData() {
    try {
        const response = await fetch(`https://randomuser.me/api/`);

        if (!response.ok) {
            throw new Error('HTTP error');
        }
        return await response.json();
        
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        throw error;
    }
}