document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', event => {
        document.getElementById('progress').value = event.loaded / event.total;
    });

    xhr.upload.addEventListener('error', () => {
        console.log(`${xhr.response.error}`);
    }); 
		
    xhr.open('post', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(document.getElementById('form'));
    xhr.send(formData);
});