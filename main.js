window.addEventListener('load', () => {
    attachEventHandlers();
})


function attachEventHandlers(){
    document.addEventListener('keydown', changeSize)
}

function changeSize(event){
    let balloon = document.getElementById('balloon')
    if(event.key.toLowerCase() === "i"){
        balloon.style.fontSize = (parseInt(balloon.style.fontSize) + 10) +'px'
        if(parseInt(balloon.style.fontSize) >= 60){
            balloon.innerText="💥";
            document.removeEventListener('keydown', changeSize)
        }
    }
    if(event.key.toLowerCase() === "d"){
        balloon.style.fontSize = (parseInt(balloon.style.fontSize) - 10) +'px';
        if(parseInt(balloon.style.fontSize) <= 0){
            balloon.innerText="Done";
            document.removeEventListener('keydown', changeSize)
        }

    }
}

