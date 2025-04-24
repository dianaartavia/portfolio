document.addEventListener('DOMContentLoaded', function () {
    const imgDiv = document.querySelector('.my-img');
    imgDiv.addEventListener('click', function () {
       void imgDiv.offsetWidth;
        imgDiv.classList.toggle('active');
        document.body.classList.toggle('light-mode');
    });
});
