// Translation object containing all text in different languages
const translations = {
    ro: {
        // Navigation
        'nav.home': 'Acasă',
        'nav.services': 'Servicii',
        'nav.booking': 'Programare',
        'nav.contact': 'Contact',
        'nav.ourSite': 'Site-ul Nostru',
        
        // Hero section
        'hero.title': 'Bine ați venit la AUTODOC',
        'hero.subtitle': 'Servicii profesionale de service auto în Chișinău',
        'hero.cta': 'Programează o verificare',
        
        // Services section
        'services.title': 'Serviciile Noastre',
        'services.diagnostic.title': 'Diagnosticare',
        'services.diagnostic.description': 'Verificare completă a sistemului electronic al mașinii',
        'services.repair.title': 'Reparații',
        'services.repair.description': 'Reparații de calitate pentru toate mărcile de mașini',
        'services.maintenance.title': 'Întreținere',
        'services.maintenance.description': 'Servicii de întreținere regulată și schimb de ulei',
        
        // Booking section
        'booking.title': 'Programează o verificare',
        'booking.name': 'Nume',
        'booking.phone': 'Telefon',
        'booking.email': 'Email',
        'booking.carBrand': 'Marca mașinii',
        'booking.carModel': 'Modelul mașinii',
        'booking.carType': 'Tip mașină',
        'booking.selectCar': 'Selectează tipul mașinii',
        'booking.serviceType': 'Tip serviciu',
        'booking.selectService': 'Selectează serviciul',
        'booking.submit': 'Trimite',
        
        // Service types
        'serviceTypes.diagnostic': 'Diagnosticare',
        'serviceTypes.repair': 'Reparații',
        'serviceTypes.maintenance': 'Întreținere',
        
        // Car types
        'carTypes.sedan': 'Sedan',
        'carTypes.suv': 'SUV',
        'carTypes.hatchback': 'Hatchback',
        'carTypes.coupe': 'Coupe',
        'carTypes.wagon': 'Wagon',
        
        // Contact section
        'contact.title': 'Contact',
        'contact.phone.title': 'Telefon',
        'contact.phone.value': '022 844-550',
        'contact.email.title': 'Email',
        'contact.email.value': 'contact@autodoc.md',
        
        // Footer section
        'footer.aboutUs.title': 'Despre Noi',
        'footer.aboutUs.description': 'Servicii auto profesionale pentru toate tipurile de mașini.',
        'footer.schedule.title': 'Program',
        'footer.schedule.weekdays': 'Luni - Vineri: 8:00 - 18:00',
        'footer.schedule.saturday': 'Sâmbătă: 9:00 - 14:00',
        'footer.schedule.sunday': 'Duminică: Închis',
        'footer.followUs.title': 'Urmărește-ne',
        'footer.social.facebook': 'Facebook',
        'footer.social.instagram': 'Instagram',
        'footer.copyright': '© 2024 AUTODOC. Toate drepturile rezervate.',
        
        // Form messages
        'form.success': 'Mulțumim pentru cererea de programare! Vă rugăm să verificați clientul de email pentru a finaliza trimiterea.',
        'form.emailSubject': 'Cerere nouă de programare',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.booking': 'Booking',
        'nav.contact': 'Contact',
        'nav.ourSite': 'Our Site',
        
        // Hero section
        'hero.title': 'Welcome to AUTODOC',
        'hero.subtitle': 'Professional auto service in Chisinau',
        'hero.cta': 'Schedule a Check-up',
        
        // Services section
        'services.title': 'Our Services',
        'services.diagnostic.title': 'Diagnostics',
        'services.diagnostic.description': 'Complete electronic system check',
        'services.repair.title': 'Repairs',
        'services.repair.description': 'Quality repairs for all car brands',
        'services.maintenance.title': 'Maintenance',
        'services.maintenance.description': 'Regular maintenance and oil change services',
        
        // Booking section
        'booking.title': 'Schedule a Check-up',
        'booking.name': 'Name',
        'booking.phone': 'Phone',
        'booking.email': 'Email',
        'booking.carBrand': 'Car Brand',
        'booking.carModel': 'Car Model',
        'booking.carType': 'Car Type',
        'booking.selectCar': 'Select car type',
        'booking.serviceType': 'Service Type',
        'booking.selectService': 'Select service',
        'booking.submit': 'Submit',
        
        // Service types
        'serviceTypes.diagnostic': 'Diagnostics',
        'serviceTypes.repair': 'Repairs',
        'serviceTypes.maintenance': 'Maintenance',
        
        // Car types
        'carTypes.sedan': 'Sedan',
        'carTypes.suv': 'SUV',
        'carTypes.hatchback': 'Hatchback',
        'carTypes.coupe': 'Coupe',
        'carTypes.wagon': 'Wagon',
        
        // Contact section
        'contact.title': 'Contact',
        'contact.phone.title': 'Phone',
        'contact.phone.value': '022 844-550',
        'contact.email.title': 'Email',
        'contact.email.value': 'contact@autodoc.md',
        
        // Footer section
        'footer.aboutUs.title': 'About Us',
        'footer.aboutUs.description': 'Professional auto services for all types of vehicles.',
        'footer.schedule.title': 'Schedule',
        'footer.schedule.weekdays': 'Monday - Friday: 8:00 AM - 6:00 PM',
        'footer.schedule.saturday': 'Saturday: 9:00 AM - 2:00 PM',
        'footer.schedule.sunday': 'Sunday: Closed',
        'footer.followUs.title': 'Follow Us',
        'footer.social.facebook': 'Facebook',
        'footer.social.instagram': 'Instagram',
        'footer.copyright': '© 2024 AUTODOC. All rights reserved.',
        
        // Form messages
        'form.success': 'Thank you for your booking request! Please check your email client to complete the submission.',
        'form.emailSubject': 'New Booking Request',
    },
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.services': 'Услуги',
        'nav.booking': 'Запись',
        'nav.contact': 'Контакты',
        'nav.ourSite': 'Наш Сайт',
        
        // Hero section
        'hero.title': 'Добро пожаловать в AUTODOC',
        'hero.subtitle': 'Профессиональный автосервис в Кишиневе',
        'hero.cta': 'Записаться на проверку',
        
        // Services section
        'services.title': 'Наши Услуги',
        'services.diagnostic.title': 'Диагностика',
        'services.diagnostic.description': 'Полная проверка электронной системы автомобиля',
        'services.repair.title': 'Ремонт',
        'services.repair.description': 'Качественный ремонт всех марок автомобилей',
        'services.maintenance.title': 'Обслуживание',
        'services.maintenance.description': 'Регулярное обслуживание и замена масла',
        
        // Booking section
        'booking.title': 'Записаться на проверку',
        'booking.name': 'Имя',
        'booking.phone': 'Телефон',
        'booking.email': 'Email',
        'booking.carBrand': 'Марка автомобиля',
        'booking.carModel': 'Модель автомобиля',
        'booking.carType': 'Тип автомобиля',
        'booking.selectCar': 'Выберите тип автомобиля',
        'booking.serviceType': 'Тип услуги',
        'booking.selectService': 'Выберите услугу',
        'booking.submit': 'Отправить',
        
        // Service types
        'serviceTypes.diagnostic': 'Диагностика',
        'serviceTypes.repair': 'Ремонт',
        'serviceTypes.maintenance': 'Обслуживание',
        
        // Car types
        'carTypes.sedan': 'Седан',
        'carTypes.suv': 'Внедорожник',
        'carTypes.hatchback': 'Хэтчбек',
        'carTypes.coupe': 'Купе',
        'carTypes.wagon': 'Универсал',
        
        // Contact section
        'contact.title': 'Контакты',
        'contact.phone.title': 'Телефон',
        'contact.phone.value': '022 844-550',
        'contact.email.title': 'Email',
        'contact.email.value': 'contact@autodoc.md',
        
        // Footer section
        'footer.aboutUs.title': 'О Нас',
        'footer.aboutUs.description': 'Профессиональные автоуслуги для всех типов автомобилей.',
        'footer.schedule.title': 'Расписание',
        'footer.schedule.weekdays': 'Понедельник - Пятница: 8:00 - 18:00',
        'footer.schedule.saturday': 'Суббота: 9:00 - 14:00',
        'footer.schedule.sunday': 'Воскресенье: Закрыто',
        'footer.followUs.title': 'Следите за нами',
        'footer.social.facebook': 'Facebook',
        'footer.social.instagram': 'Instagram',
        'footer.copyright': '© 2024 AUTODOC. Все права защищены.',
        
        // Form messages
        'form.success': 'Спасибо за ваш запрос на бронирование! Пожалуйста, проверьте ваш почтовый клиент для завершения отправки.',
        'form.emailSubject': 'Новый запрос на бронирование',
    }
};

// Function to change the language
function changeLanguage(lang) {
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize the language based on localStorage or default to Romanian
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ro';
    document.getElementById('language-selector').value = savedLanguage;
    changeLanguage(savedLanguage);
});

// Add event listener for language selector
document.getElementById('language-selector').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    // Set initial language from localStorage or default to Romanian
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ro';
    document.getElementById('language-select').value = savedLanguage;
    changeLanguage(savedLanguage);

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    // Set time constraints (8:00 - 18:00)
    timeInput.addEventListener('change', function() {
        const selectedTime = this.value;
        const [hours, minutes] = selectedTime.split(':');
        const selectedDate = new Date();
        selectedDate.setHours(hours, minutes);

        const startTime = new Date();
        startTime.setHours(8, 0);
        const endTime = new Date();
        endTime.setHours(18, 0);

        if (selectedDate < startTime || selectedDate > endTime) {
            alert('Vă rugăm să selectați o oră între 8:00 și 18:00');
            this.value = '';
        }
    });

    // Form submission handling
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                carBrand: document.getElementById('car-brand').value,
                carModel: document.getElementById('car-model').value,
                carType: document.getElementById('car-type').value,
                serviceType: document.getElementById('service-type').value
            };

            if (!validateForm(formData)) {
                e.preventDefault();
                return;
            }

            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        });
    }

    // Form validation
    function validateForm(data) {
        // Validate name
        if (data.name.length < 3) {
            alert('Vă rugăm să introduceți un nume valid (minimum 3 caractere)');
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Vă rugăm să introduceți o adresă de email validă');
            return false;
        }

        // Validate phone
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
            alert('Vă rugăm să introduceți un număr de telefon valid (10 cifre)');
            return false;
        }

        // Validate car type
        if (!data.carType) {
            alert('Vă rugăm să selectați tipul de caroserie');
            return false;
        }

        // Validate service type
        if (!data.serviceType) {
            alert('Vă rugăm să selectați tipul de serviciu');
            return false;
        }

        // Validate date
        if (!data.date) {
            alert('Vă rugăm să selectați o dată');
            return false;
        }

        // Validate time
        if (!data.time) {
            alert('Vă rugăm să selectați o oră');
            return false;
        }

        return true;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function toggleDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('show');
}

// Close the dropdown if user clicks outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('language-dropdown');
    const selectedFlag = document.querySelector('.selected-flag');
    
    if (!selectedFlag.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
}); 

function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Dacă vrei, poți adăuga și un cod să închidă meniul când dai click pe un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('show');
        }
    });
});

