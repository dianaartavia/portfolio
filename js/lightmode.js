document.addEventListener('DOMContentLoaded', function () {
    const imgDiv = document.querySelector('.my-img');
    imgDiv.addEventListener('click', function () {
        imgDiv.classList.toggle('active');
        document.body.classList.toggle('light-mode');
    });
});