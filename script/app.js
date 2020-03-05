var counter = true;
function changeWindow() {
    document.getElementById("first").classList.toggle("active");
    document.getElementById("second").classList.toggle("active");
    document.getElementById("page1").classList.toggle("hide");
    document.getElementById("page2").classList.toggle("hide");
}

function slide() {
    if(counter){
        document.getElementById("slide-1").classList.toggle("hide");
        document.getElementById("slide-2").classList.toggle("hide");
    }
    setTimeout("slide()",1900)



}