let elem = document.querySelectorAll('.vagon');
let exp = document.querySelectorAll('.exp');
let i=0;
elem.forEach((item) => {
    visible = item.children[0];
    visible.addEventListener('click', function () {
        prop = item.children[1].style.getPropertyValue("display");
        if (prop != "flex"){
            item.children[1].style.setProperty("display", "flex")
        } 
        else{
            item.children[1].style.setProperty("display", "none")
        }
    });
    i+=1;
})
