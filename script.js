document.addEventListener('DOMContentLoaded', () => {
    
    const bookButtons = document.querySelectorAll('.btn');

    bookButtons.forEach(button => {
        if (button.textContent.trim().toLowerCase() === 'book now') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const phoneNumber = "+79847683308";
                const choice = confirm("Do you want to call and book your slot now?");
                
                if (choice) {
                    window.location.href = `tel:${phoneNumber}`;
                }
            });
        }
    });

    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    const menuLinks = document.querySelectorAll('.link, .logo');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            header.style.backgroundColor = '#070707';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'var(--header-black)';
        }
    });
});