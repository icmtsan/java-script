/* document.getElementById('postForm').addEventListener('submit', async function (e) {
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
        
        const bodyText = post.body.length > 100 
            ? `${post.body.substring(0, 100)}...` 
            : post.body;
        
        listItem.innerHTML = `
                    <strong>ID: ${post.id}</strong> | <strong>User ID: ${post.userId}</strong>
                    <br><strong>Заголовок:</strong> ${post.title}
                    <br><strong>Текст:</strong> ${bodyText}
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
} */

document.getElementById('editForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const postId = document.getElementById('editId').value;
    const userId = document.getElementById('editUserId').value;
    const title = document.getElementById('editTitle').value;
    const body = document.getElementById('editBody').value;

    const postData = {
        id: parseInt(postId),
        userId: parseInt(userId),
        title: title,
        body: body
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const result = await response.json();
        document.getElementById('editResponse').textContent = JSON.stringify(result, null, 2);
        updatePostInList(result);

    } catch (error) {
        document.getElementById('editResponse').textContent = `Ошибка: ${error.message}`;
    }
});

function updatePostInList(updatedPost) {
    const postElement = document.getElementById(`post-${updatedPost.id}`);
    if (postElement) {
        postElement.innerHTML = `
            <strong>ID: ${updatedPost.id}</strong> | <strong>User ID: ${updatedPost.userId}</strong>
            <br><strong>Заголовок:</strong> ${updatedPost.title}
            <br><strong>Текст:</strong> ${updatedPost.body.substring(0, 100)}<br>
        `;
    }
}