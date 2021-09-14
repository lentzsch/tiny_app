window.addEventListener("DOMContentLoaded", event => {
    const appNavButton = document.getElementById("app-nav-button");
    const blogNavBUtton = document.getElementById("blog-nav-button");
    const shopNavBUtton = document.getElementById("shop-nav-button");
    const noteNavBUtton = document.getElementById("note-nav-button");
    const gameNavBUtton = document.getElementById("game-nav-button");

    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    const appType = document.getElementById("content-text-apptype")

    const pages = ["app", "blog", "shop", "note", "game", "grave"];
    let currentPage = pages[0];

    rightArrow.addEventListener("click", event => {
        if (currentPage < pages.length) {
            curentPage++
            appType.innerText = currentPage
        }
    })

    leftArrow.addEventListener("click", event => {
        if (currentPage > 0) {
            curentPage--
            appType.innerText = currentPage
        }
    })

})