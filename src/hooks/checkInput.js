

export function checkInput(el, error) {
    if(el.value === ""){
        el.style.borderColor = "red";
        error.style.display = "block";
        return false;
    } else {
        el.style.borderColor = "#757575";
        error.style.display = "none";
        return true;
    }
}