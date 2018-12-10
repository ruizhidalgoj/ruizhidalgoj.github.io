function mostrarBuenas(){
    var buenasnoticias = document.getElementById("buenasnoticias");
    if(buenasnoticias.style.display = "none"){
        buenasnoticias.style.display = "flex";
    }
    if(malasnoticias.style.display = "flex"){
        malasnoticias.style.display = "none";
    }
    if(regularesnoticias.style.display = "flex"){
        regularesnoticias.style.display = "none";
    }
}

function mostrarMalas(){
    var malasnoticias = document.getElementById("malasnoticias");
    if(malasnoticias.style.display = "none"){
        malasnoticias.style.display = "flex";
    }
    if(buenasnoticias.style.display = "flex"){
        buenasnoticias.style.display = "none";
    }
    if(regularesnoticias.style.display = "flex"){
        regularesnoticias.style.display = "none";
    }
}

function mostrarRegulares(){
    var regularesnoticias = document.getElementById("regularesnoticias");
    if(regularesnoticias.style.display = "none"){
        regularesnoticias.style.display = "flex";
    }
    if(buenasnoticias.style.display = "flex"){
        buenasnoticias.style.display = "none";
    }
    if(malasnoticias.style.display = "flex"){
        malasnoticias.style.display = "none";
    }
}