
const burgerButton = document.querySelector("nav .nav-burger");
const faBars = document.querySelector(".fa-bars")
burgerButton.addEventListener("click" ,function(event){
   
    document.querySelector("nav .nav-list").classList.toggle("active")
    document.querySelector(".fa-bars").classList.toggle("fa-angle-up");


       if(faBars.classList.contains("fa-angle-up")){
        document.documentElement.style.overflow = 'hidden';
   }else{
    document.documentElement.style.overflow = 'scroll';
   }
})
