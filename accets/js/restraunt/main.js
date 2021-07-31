let menu_state = false

const menu_click = () =>{
    console.log('clicked')
    const menu = document.querySelector('.burger')
    const menu_open_icon = document.querySelector('.burger-open-icon')
    const menu_close_icon = document.querySelector('.burger-close-icon')
    const nav = document.querySelector('.nav')

    if(menu_state){
        // menu is open
        menu_open_icon.classList.toggle('hide');
        menu_close_icon.classList.toggle('hide');
        nav.classList.toggle('rotate-out');
        
    }else{
        // menu is closed
        menu_open_icon.classList.toggle('hide');
        menu_close_icon.classList.toggle('hide');
        nav.classList.toggle('rotate-out')
    }

    menu_state = !menu_state
}