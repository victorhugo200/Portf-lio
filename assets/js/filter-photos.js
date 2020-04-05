const filterMenu = document.querySelectorAll('[data-menu]');
const filterPhoto = document.querySelectorAll('[data-photo]');




filterPhoto.forEach(photos => {
  photos.classList.add('show');
})


filterMenu.forEach(menu => {
  menu.addEventListener('click',function(e){
    e.preventDefault();

    const filterMenuValue = menu.getAttribute('data-menu');
  
    filterPhoto.forEach(photo =>{
      photo.classList.remove('show');
    })

    if(filterMenuValue === 'all') {
      filterPhoto.forEach(photo => {
        photo.classList.add('show');
      })
    }

    filterPhoto.forEach(item =>{
      if(item.getAttribute('data-photo') === filterMenuValue){
        item.classList.add('show');
        item.c
      }
    })


    
    
  })
})