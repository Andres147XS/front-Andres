
function dropDown(id) {
    const iconDrop = document.querySelectorAll('dropdownIcon')
    const drop = document.querySelectorAll(".dropdown-content");

    drop.forEach(drops => {
        if (drops.id === id) {
            drops.style.display = drops.style.display === "block" ? "none" : "block";
        } else {
            drops.style.display = "none";
        }
    });
    iconDrop.forEach(icons => {
        if (icons.id === id) {
            icons.classList.toggle('rotate-icon');
        } else {
            icons.classList.remove('rotate-icon');
        }
    });
}



