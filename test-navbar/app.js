const icon = document.getElementById("icon")
const list = document.getElementById("list")
const listLink = document.querySelectorAll("a")

icon.addEventListener("click", () => {

        list.classList.toggle("show-menu");

        for (let i = 0; i < listLink.length; i++) {
            const link = listLink[i];
            link.classList.toggle("show-menu");
        }
})