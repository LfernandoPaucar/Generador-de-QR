const inputUrl = document.getElementById('url-enlace');
const btnGenerar = document.getElementById('btn-generator');
const containerQr = document.querySelector('.qr-generado');
const backBtn = document.getElementById('btn-regresar');

btnGenerar.addEventListener('click', (e) => {
    e.preventDefault();

    const url = inputUrl.value.trim();

    if (url){
        const encodedUrl = encodeURIComponent(url);

        const resultPageUrl = `./../pages/generador-de-codigo.html?data=${encodedUrl}`;

        globalThis.location.href = resultPageUrl
    } else {
        alert('Por favor ingresa una URL válida.');
    }
});

function getUrlDataFromQuery(){

    const urlParams = new URLSearchParams(globalThis.location.search);

    const data = urlParams.get('data');

    return data;
}

function initQRGenerator(){
    const dataToEncode = getUrlDataFromQuery();
    
    if(dataToEncode){
        new QRCode(containerQr, {
            text: dataToEncode,
            width: 250,
            height: 250,
        });
    } else {
        containerQr.innerHTML = "<h2>¡Uy! Falta la URL</h2>";
    }
};

window.onload = initQRGenerator;

backBtn.addEventListener('click', (e) => {
    globalThis.location.href = "index.html";
});