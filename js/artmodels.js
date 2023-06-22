const mainHeaderTag = document.querySelector("header")
const myBlobsGroups = document.querySelectorAll("g.blob")
const mySectionTags = document.querySelectorAll("section")
const myArrowTag = document.querySelectorAll("img.arrow")

const easing = function(x) {
  return x * x * x
}

const isFadeHeader = function() {
   const pixels = window.pageYOffset

   mainHeaderTag.artstyle.opacity = 1 - easing(pixels / 500)
}

const myFadeArrow = function() {
    const pixels = window.pageYOffset

    myArrowTag.artstyle.opacity = 1 - easing(pixels / 250)
}

const checkMyBlobs = function() {
    const pixels = window.pageYOffset

    myBlobsGroups.forEach((blob, index) => {
        const currentSection = mySectionTags[index]

        if(pixels > currentSection.offsetTop -300) {
            blob.classList.add("in-view")
        } else {
            blob.classList.remove("in-view")
        }
    })
}

window.addEventListener("scroll", function() {
    isFadeHeader()
    myFadeArrow()
    checkMyBlobs()
})