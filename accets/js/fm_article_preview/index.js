const share = document.querySelector('.share-container')

if(share){
    share.addEventListener('click', ()=>{
        const desktop_container = document.querySelector('.active-desktop')
        desktop_container.classList.toggle('hidden');
        const mobile_container = document.querySelector('.active-mobile')
        mobile_container.classList.toggle('hidden')
    })
}