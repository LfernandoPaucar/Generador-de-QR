const inputUrl = document.getElementById('url-enlace');
const btnGenerar = document.getElementById('btn-generator');

btnGenerar.addEventListener('click', (e) => {
    e.preventDefault();

    const url = inputUrl.value.trim();

    if (url){
        const encodedUrl = encodeURIComponent(url);

        const resultPageUrl = `pages/generador-de-codigo.html?data=${encodedUrl}`;

        globalThis.location.href = resultPageUrl
    } else {
        alert('Por favor ingresa una URL válida.');
    }
});