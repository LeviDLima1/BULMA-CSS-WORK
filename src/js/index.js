const activeButton1 = document.getElementById("activeButton1")
const activeButton2 = document.getElementById("activeButton2")
const activeButton3 = document.getElementById("activeButton3")
const activeButton4 = document.getElementById("activeButton4")
const activeButton5 = document.getElementById("activeButton5")


const closeBnt1 = document.getElementById("closeBnt1")
const closeBnt2 = document.getElementById("closeBnt2")
const closeBnt3 = document.getElementById("closeBnt3")
const closeBnt4 = document.getElementById("closeBnt4")
const closeBnt5 = document.getElementById("closeBnt5")


const OutlineModal = document.getElementById("OutlineModal")

const modal1 = document.getElementById("modal1")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const modal4 = document.getElementById("modal4")
const modal5 = document.getElementById("modal5")



const openModal = document.getElementsByClassName("openModal")

const main = document.getElementById("Main")


activeButton1.onclick = function() {
    modal1.style.display = 'flex'
}

activeButton2.onclick = function() {
    modal2.style.display = 'flex'
}

activeButton3.onclick = function() {
    modal3.style.display = 'flex'
}

activeButton4.onclick = function() {
    modal4.style.display = 'flex'
}

activeButton5.onclick = function() {
    modal5.style.display = 'flex'
}





closeBnt1.onclick = function() {
    modal1.style.display = 'none'
}

closeBnt2.onclick = function() {
    modal2.style.display = 'none'
}
closeBnt3.onclick = function() {
    modal3.style.display = 'none'
}
closeBnt4.onclick = function() {
    modal4.style.display = 'none'
}
closeBnt5.onclick = function() {
    modal5.style.display = 'none'
}



OutlineModal.onclick = function() {
    modal1.style.display = 'none'
}

OutlineModal.onclick = function() {
    modal2.style.display = 'none'
}

OutlineModal.onclick = function() {
    modal3.style.display = 'none'
}

OutlineModal.onclick = function() {
    modal4.style.display = 'none'
}
OutlineModal.onclick = function() {
    modal5.style.display = 'none'
}





async function delay() {
    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll('.animate-left')
        const gitDirectionLevi = document.querySelectorAll('.git-levi')
        const gitDirectionEverton = document.querySelectorAll('.git-everton')
        const gitDirectionNobrega = document.querySelectorAll('.git-nobrega')
        const gitDirectionGustavo = document.querySelectorAll('.git-gustavo')
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Usar requestAnimationFrame para suavizar a animação
                    requestAnimationFrame(() => {
                        entry.target.classList.add('visible');
                    });
                    observer.unobserve(entry.target); // Parar de observar após a animação
                }
            });
        };

        const observerOptions = {
            root: null, // Usa o viewport como referência
            rootMargin: '0px',
            threshold: 0.1 // Iniciar animação quando 10% do elemento estiver visível
        };
    
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        
        elements.forEach(element => {
            observer.observe(element)
        })
        gitDirectionLevi.forEach(element => {
            observer.observe(element)
        })
        gitDirectionEverton.forEach(element => {
            observer.observe(element)
        })
        gitDirectionNobrega.forEach(element => {
            observer.observe(element)
        })
        gitDirectionGustavo.forEach(element => {
            observer.observe(element)
        })
    })
}
delay()

