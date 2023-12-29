

document.getElementById('vagon').addEventListener('click', function () {
    prop = document.getElementById('exp').style.getPropertyValue("display");
    if (prop != "flex"){
        document.getElementById('exp').style.setProperty("display", "flex")
    } 
    else{
        document.getElementById('exp').style.setProperty("display", "none")
    }
});

document.getElementById('vagon1').addEventListener('click', function () {
    prop = document.getElementById('exp1').style.getPropertyValue("display");
    if (prop != "flex"){
        document.getElementById('exp1').style.setProperty("display", "flex")
    } 
    else{
        document.getElementById('exp1').style.setProperty("display", "none")
    }
});