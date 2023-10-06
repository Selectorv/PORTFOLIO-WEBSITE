
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn . onclick = function () {
    dropDownMenu .classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"

    
}




    var slideIndex = 0;
    carousel();
    function carousel(){
      var i;
      var x=

      document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++ ) 
      {
        x [i] . style.display ="none";
      }
      slideIndex ++;
      if (slideIndex > x . length)
      {slideIndex=1}
      x [slideIndex-1]. style.display="block";
      setTimeout(carousel,2000); //change image every 2 seconds
    }
  
  
