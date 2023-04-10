const images=["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
const slider=document.querySelector('.slider')
const items=document.querySelector('.items')
let idx=0
images.forEach((img, i)=>{
    items.innerHTML+=`
    <div class="item"  onclick="changeImage(${i})" style="background-image: url(./Images/${img})"></div>
    `
})
function switchSlide(value){
    if (value==='right') {
        idx++
        if(idx===images.length) idx=0
    }
    else{
        idx--
        if(idx<0) idx=images.length-1

    }
    slider.style.backgroundImage=`url(./Images/${images[idx]})`
    setActive()
}
function changeImage(i){
    slider.style.backgroundImage=`url(./Images/${images[i]})`
    idx=i
    setActive()

}
function setActive(){
    let allItems=document.querySelectorAll('.item')
    allItems.forEach(e=>e.classList.remove('active'))
    allItems[idx].classList.add('active')
}