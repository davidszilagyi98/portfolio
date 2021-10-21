document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body')
    const toggleSwitch = document.querySelector('.switch')
    
    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark-theme')
        
    })
})



