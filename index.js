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
    let pageNumber = 0
    let currentPage = pages[pageNumber];
    appType.innerText = currentPage

    rightArrow.addEventListener("click", event => {
        // console.log(currentPage)
        // console.log(appType)
        // console.log(pageNumber)
        if (pageNumber < pages.length - 1) {
            pageNumber++
            currentPage = pages[pageNumber]
            appType.innerText = currentPage
            // console.log(currentPage)
            // console.log(appType)
        }
    })

    leftArrow.addEventListener("click", event => {
        // console.log(currentPage)
        // console.log(appType)
        // console.log("hi")
        if (pageNumber > 0) {
            pageNumber--
            currentPage = pages[pageNumber]
            appType.innerText = currentPage
            // console.log(currentPage)
            // console.log(appType)
        }
    })

})