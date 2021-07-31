let opened = -1;

const faqs = document.querySelectorAll('.faq')

const addClass = (object, selector, className) =>{
    object.querySelector(selector).classList.add(className)
}
const removeClass = (object, selector, className) =>{
    object.querySelector(selector).classList.remove(className)
}

faqs.forEach( (f) =>{
    f.addEventListener('click', function(){
        const index = this.dataset.faqNumber;
        if(opened === index){
            removeClass(this, '.answer', 'answer-visible')
            removeClass(this,'.question-title', 'question-active')
            removeClass(this,'.chevron', 'chevron-active')
            opened = -1
            return
        }else if(opened === -1){
            addClass(this,'.answer', 'answer-visible')
            addClass(this,'.question-title', 'question-active')
            addClass(this,'.chevron', 'chevron-active')
        }else{
            removeClass(faqs[opened], '.answer', 'answer-visible')
            removeClass(faqs[opened],'.question-title', 'question-active')
            removeClass(faqs[opened],'.chevron', 'chevron-active')

            addClass(this,'.answer', 'answer-visible')
            addClass(this,'.question-title', 'question-active')
            addClass(this,'.chevron', 'chevron-active')
        }
        opened = index;
    })
})


