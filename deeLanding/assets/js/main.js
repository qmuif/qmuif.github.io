function createHoverImage() {
    document.querySelectorAll('[data-hover-src]').forEach((img) => {
        const src = img.getAttribute('src');
        const srcH = img.getAttribute('data-hover-src');

        img.addEventListener('mouseover', () => {
            img.src = srcH;
        })
        img.addEventListener('mouseout', () => {
            img.src = src;
        })
    });
}

createHoverImage();


let active = "PreviewBox"

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (active === target.id) return null
    document.getElementById(active).classList.remove("active")
    active = target.id
    document.getElementById(target.id).classList.add("active")
    ShowDefined(target.id)
}

let seeAllState = false

let BusinessCardsImages = document.getElementById("BusinessCardsImages")
let CorporateIdentityImages = document.getElementById("CorporateIdentityImages")
let FoodShootingImages = document.getElementById("FoodShootingImages")
let LeafletsImages = document.getElementById("LeafletsImages")
let LogosImages = document.getElementById("LogosImages")
let PromotionalMaterialsImages = document.getElementById("PromotionalMaterialsImages")
let PreviewBoxImages = document.getElementById("PreviewBoxImages")
let EmptyBox = document.getElementById("EmptyBox")
let SeeAllBtn = document.getElementsByClassName("see_all")[0]

function hideImages() {
    BusinessCardsImages.style.display = "none"
    CorporateIdentityImages.style.display = "none"
    FoodShootingImages.style.display = "none"
    LeafletsImages.style.display = "none"
    LogosImages.style.display = "none"
    PromotionalMaterialsImages.style.display = "none"
    PreviewBoxImages.style.display = "none"
    EmptyBox.style.display = "none"
}

function seeAll() {
    if (!seeAllState) {
        BusinessCardsImages.style.display = "block"
        CorporateIdentityImages.style.display = "block"
        FoodShootingImages.style.display = "block"
        LeafletsImages.style.display = "block"
        LogosImages.style.display = "block"
        PromotionalMaterialsImages.style.display = "block"
        PreviewBoxImages.style.display = "none"
        SeeAllBtn.innerHTML = "Скрыть все"
        seeAllState = true
    } else {
        hideImages()
        PreviewBoxImages.style.display = "block"
        SeeAllBtn.innerHTML = "Показать все"
        seeAllState = false
    }
}

function ShowDefined(id) {
    hideImages()
    let tab = document.getElementById(`${id}Images`)
    if (tab) {
        tab.style.display = "block"
    } else {
        EmptyBox.style.display = "block"
    }
    if (id !== "PreviewBox") {
        SeeAllBtn.style.display = "none"
    } else {
        SeeAllBtn.style.display = "block"
    }
    seeAllState = false

}
