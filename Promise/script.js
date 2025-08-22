//1
/* 
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const userData = {
                id: 1,
                name: "Иван",
                email: "ivan@ya.ru",
                age: 28,
                city: "Москва"
            };
            resolve(userData);

        }, 2000);
    });
}

getUserData()
    .then(userData => {
        console.log("Данные пользователя получены:", userData);

        const processedData = {
            fullName: userData.name,
            contact: userData.email,
            location: userData.city
        };

        return processedData;
    })
    .then(processedData => {
        console.log("Обработанные данные:", processedData);
        console.log(`Пользователь: ${processedData.fullName}`);
        console.log(`Контакт: ${processedData.contact}`);
        console.log(`Город: ${processedData.location}`);
    })
    .catch(error => {
        console.error("Произошла ошибка:", error.message);
    })
    .finally(() => {
        console.log("Обработка данных завершена");
    }); */

//2

/* function getDataAfter3Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Данные через 3 секунды');
        }, 3000);
    });
}

function getDataAfter5Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Данные через 5 секунд');
        }, 5000);
    });
}

Promise.all([
    getDataAfter3Seconds(),
    getDataAfter5Seconds()
])
    .then((results) => {
        console.log('Оба промиса выполнены!');
        console.log('Результат первого промиса:', results[0]);
        console.log('Результат второго промиса:', results[1]);
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });

console.log('Выполнение промисов');
 */

//3

function firstPromise() {
    const randomTime = Math.floor(Math.random() * 5000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Первый промис выполнен за ${randomTime}мс`);
        }, randomTime);
    });
}

function secondPromise() {
    const randomTime = Math.floor(Math.random() * 5000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Второй промис выполнен за ${randomTime}мс`);
        }, randomTime);
    });
}

Promise.race([firstPromise(), secondPromise()])
    .then((result) => {
        console.log('Победитель:', result);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });

console.log('Запущены два промиса');