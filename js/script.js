let modal = document.getElementById('modal')
let button = document.getElementById('head_box_buttom')
let close_button = document.getElementById('close_modal')



 button.addEventListener("click",  function name(params) {                     
    button.style.backgroundColor = " #8986b8"   
    modal.style.display = "flex"    
                modal.style.justifyContent = "center"       
                modal.style.alignItems = "center"
})

 close_button.addEventListener("click",  function name(params) {                     
    modal.style.display = "none"                       
})



