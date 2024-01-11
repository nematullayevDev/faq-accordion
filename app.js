const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3= document.getElementById("img3")
const img4 = document.getElementById("img4")
const imgmin = document.getElementById("imgmin")
const imgmin2 = document.getElementById("imgmin2")
const imgmin3= document.getElementById("imgmin3")
const imgmin4 = document.getElementById("imgmin4")


const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")



img1.addEventListener("click", () => {
    p1.innerText = `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.`
    imgmin.classList.remove("hidden")
    img1.classList.add("hidden")
})
imgmin.addEventListener("click", (e) => {
    img1.classList.remove("hidden")
    p1.textContent= ""
    imgmin.classList.add("hidden")
})




img2.addEventListener("click", () => {
    p2.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eos est sunt excepturi dolore eaque fugiat, soluta voluptate commodi perspiciatis corrupti quis tempore? Et repellat laboriosam itaque ut facere sint aliquam quo, facilis similique? Repudiandae eius similique voluptatem provident asperiores sed`
    imgmin2.classList.remove("hidden")
    img2.classList.add("hidden")
})
imgmin2.addEventListener("click", (e) => {
    img2.classList.remove("hidden")
    p2.textContent= ""
    imgmin2.classList.add("hidden")
})



img3.addEventListener("click", () => {
    p3.innerText = `Sit amet consectetur adipisicing elit. Quod repellat similique vitae quisquam ipsam labore porro! Fugiat placeat sapiente corrupti recusandae officiis expedita, magni aut aperiam dolore ab consequatur numquam fuga sit alias. Rem possimus fugit quam dolorum quia consectetur..`
    imgmin3.classList.remove("hidden")
    img3.classList.add("hidden")
})
imgmin3.addEventListener("click", (e) => {
    img3.classList.remove("hidden")
    p3.textContent= ""
    imgmin3.classList.add("hidden")
})




img4.addEventListener("click", () => {
    p4.innerText =`Consectetur adipisicing elit. Suscipit quis, nesciunt aspernatur minus blanditiis culpa consectetur modi delectus nisi vero error maxime exercitationem dignissimos ea ex architecto aliquid aperiam sunt.`
    imgmin4.classList.remove("hidden")
    img4.classList.add("hidden")
})
imgmin4.addEventListener("click", (e) => {
    img4.classList.remove("hidden")
    p4.textContent= ""
    imgmin4.classList.add("hidden")
})

