let headArray = Array.from(document.getElementsByTagName("h2"));
let paraghArray = Array.from(document.getElementsByTagName("p"));
let iconArray = Array.from(document.querySelectorAll(".fa-chevron-down"))

headArray.forEach((head) => {
    paraghArray.forEach((paragph) => {
        head.addEventListener("click", () => {
            if (headArray.indexOf(head) == paraghArray.indexOf(paragph)) {
                paraghArray.forEach((pp) => {
                    if (paragph.classList.contains("accordion")) {
                        pp.setAttribute("class", "accordion")
                    }
                })
                headArray.forEach((hh) => {
                    hh.classList.remove("h2-style")
                })
                paragph.classList.toggle("accordion");
                head.classList.toggle('h2-style');
            }
        })
    })
})

headArray.forEach((headTwo) => {
    iconArray.forEach((icon) => {
        headTwo.addEventListener("click", () => {
            if (headArray.indexOf(headTwo) == iconArray.indexOf(icon)) {
                iconArray.forEach((resticon)=>{
                    resticon.style.transform = "none";
                })
                icon.style.transform = "rotate(177deg)";
                // headTwo.style.background = "#e7f1ff"
                // headTwo.style.color = "#0c63e4"
                if(headTwo.nextElementSibling.classList.contains("accordion")){
                    icon.style.transform = "none";
                    // headTwo.style.background = "initial";
                    // headTwo.style.color = "initial";
                }
                
            }
        })
    })
})
