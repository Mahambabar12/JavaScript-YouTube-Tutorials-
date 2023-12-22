window.addEventListener("scroll",function(){
    console.log("Scrolling....")
})
window.addEventListener("scroll",function(){
    if(window.pageYOffset >150){
        document.body.style.backgroundColor = "red"
    }else{
        document.body.style.backgroundColor ="white"
    }
})