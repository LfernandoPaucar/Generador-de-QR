const containerQr = document.querySelector('.qr-generado');
const backBtn = document.getElementById('btn-regresar');



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

document.addEventListener('DOMContentLoaded', initQRGenerator);

backBtn.addEventListener('click', (e) => {
    globalThis.location.href = "index.html";
});