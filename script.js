document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const resultDiv = document.querySelector('.display');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').value;
        const video = document.getElementById('video').value;

        // Create a new blog post element
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
            <h3>Name : ${title}</h3>
            <h4>Description : ${content}</h4>
            ${image ? `<img src="${image}"  alt="${title}" width="200" height="200" />` : ''}
            ${video ? `<iframe width="200" height="200" src="${video}"> </iframe>` : ''}
        `;

        // Append the new blog post to the result section
        resultDiv.appendChild(postDiv);

        // Clear form inputs
        form.reset();
    });
});