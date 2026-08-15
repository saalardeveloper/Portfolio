const text = "Hi, I'm Saalar Baloch | Frontend Developer"
let i=0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}

typing();