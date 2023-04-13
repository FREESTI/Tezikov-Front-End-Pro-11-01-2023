const apiUrl = 'https://jsonplaceholder.typicode.com';

function getPostById(postId) {
  return fetch(`${apiUrl}/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Пост не знайдено');
      }
      return response.json();
    });
}

function getPostComments(postId) {
  return fetch(`${apiUrl}/comments?postId=${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при отриманні коментарів');
      }
      return response.json();
    });
}

const form = document.querySelector('form');
const postContainer = document.querySelector('#post-container');

form.addEventListener('submit', event => {
  event.preventDefault();
  const postId = form.elements['post-id'].value;
  getPostById(postId)
    .then(post =>    {
      postContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="load-comments">Завантажити коментарі</button>
      `;
      const loadCommentsButton = document.querySelector('#load-comments');
      loadCommentsButton.addEventListener('click', () => {
        const commentsList = postContainer.querySelector('ul');
        if (commentsList) {
          commentsList.remove();
        }
        getPostComments(postId)
          .then(comments => {
            const commentsList = document.createElement('ul');
            comments.forEach(comment => {
              const commentItem = document.createElement('li');
              commentItem.textContent = comment.body;
              commentsList.appendChild(commentItem);
            });
            postContainer.appendChild(commentsList);
          })
          .catch(error => {
            console.error(error);
            alert(error.message);
          });
      });
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
});
