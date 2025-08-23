document.getElementById('postForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const postData = {
        userId: parseInt(userId),
        title: title,
        body: body
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const result = await response.json();
        document.getElementById('response').textContent = JSON.stringify(result, null, 2);

    } catch (error) {
        document.getElementById('response').textContent = `Ошибка: ${error.message}`;
    }
});

document.getElementById('loadPostsBtn').addEventListener('click', async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const posts = await response.json();
        displayPosts(posts);

    } catch (error) {
        document.getElementById('postsList').innerHTML = `<li>Ошибка: ${error.message}</li>`;
    }
});

async function deletePost(postId) {
    if (!confirm('Вы уверены, что хотите удалить этот пост?')) {
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const postElement = document.getElementById(`post-${postId}`);
        if (postElement) {
            postElement.remove();
        }

        alert('Пост успешно удален!');

    } catch (error) {
        alert(`Ошибка при удалении поста: ${error.message}`);
    }
}

function displayPosts(posts) {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = '';

    const limitedPosts = posts.slice(0, 20);

    limitedPosts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.id = `post-${post.id}`;
        listItem.innerHTML = `
                    <strong>ID: ${post.id}</strong> | <strong>User ID: ${post.userId}</strong>
                    <br><strong>Заголовок:</strong> ${post.title}
                    <br><strong>Текст:</strong> ${post.body.substring(0, 100)}...
                    <br>
                    <button onclick="deletePost(${post.id})">Удалить</button>
                    <br><br>
                `;
        postsList.appendChild(listItem);
    });

    if (posts.length > 20) {
        const moreItem = document.createElement('li');
        moreItem.textContent = `... и еще ${posts.length - 20} постов`;
        postsList.appendChild(moreItem);
    }
}