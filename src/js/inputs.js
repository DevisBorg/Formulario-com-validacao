const input = document.querySelectorAll('input')

input.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.remove('vermelho')
            input.classList.add('verde')
            input.nextElementSibling.classList.remove('mostrar')
        } else {
            input.classList.remove('verde')
            input.classList.add('vermelho')
            input.nextElementSibling.classList.add('mostrar')
        }
    })

})



