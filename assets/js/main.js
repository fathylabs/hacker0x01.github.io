// Main JavaScript file for Mohammed Fathy's website

// Language translations
const translations = {
    ar: {
        'nav-about': 'عني',
        'nav-consultation': 'احجز استشارة',
        'nav-youtube': 'قناتي',
        'hero-title': 'مرحباً، أنا محمد فتحي',
        'hero-subtitle': 'خبير في التكنولوجيا والاستشارات التقنية',
        'hero-description': 'أساعد الأفراد والشركات في تطوير حلولهم التقنية وتحقيق أهدافهم الرقمية من خلال خبرتي الواسعة في مجال التكنولوجيا.',
        'hero-youtube-btn': 'شاهد فيديوهاتي على يوتيوب',
        'hero-consultation-btn': 'احجز استشارة مجانية',
        'about-title': 'عني',
        'about-subtitle': 'خبرتي ومؤهلاتي في مجال التكنولوجيا',
        'experience-title': 'الخبرة المهنية',
        'certifications-title': 'الشهادات والمؤهلات',
        'consultation-title': 'احجز استشارة',
        'consultation-subtitle': 'احصل على استشارة تقنية مخصصة لاحتياجاتك',
        'site-description': 'موقع محمد فتحي الشخصي',
        'footer-links': 'روابط مهمة',
        'footer-youtube': 'قناتي على يوتيوب',
        'footer-contact': 'تواصل معي',
        'footer-copyright': '© 2024 محمد فتحي. جميع الحقوق محفوظة.',
        'consultation-benefits-title': 'ماذا ستحصل عليه؟',
        'benefit-1': 'تحليل شامل لمشروعك التقني',
        'benefit-2': 'خطة عمل واضحة ومفصلة',
        'benefit-3': 'توصيات بأفضل التقنيات المناسبة',
        'benefit-4': 'متابعة مجانية لمدة أسبوعين',
        'quick-consultation-title': 'استشارة سريعة',
        'comprehensive-consultation-title': 'استشارة شاملة',
        'free': 'مجانية',
        '30-minutes': '30 دقيقة',
        '90-minutes': '90 دقيقة',
        'quick-consultation-desc': 'مناقشة سريعة لفكرتك والحصول على نصائح أولية',
        'comprehensive-consultation-desc': 'تحليل مفصل مع خطة عمل كاملة وتوصيات تقنية',
        'form-name': 'الاسم الكامل',
        'form-email': 'البريد الإلكتروني',
        'form-phone': 'رقم الهاتف',
        'form-consultation-type': 'نوع الاستشارة',
        'form-select-consultation': 'اختر نوع الاستشارة',
        'form-quick-option': 'استشارة سريعة (مجانية)',
        'form-comprehensive-option': 'استشارة شاملة ($99)',
        'form-project-description': 'وصف المشروع أو الفكرة',
        'form-submit-btn': 'احجز الاستشارة الآن'
    },
    en: {
        'nav-about': 'About',
        'nav-consultation': 'Book Consultation',
        'nav-youtube': 'My Channel',
        'hero-title': 'Hello, I\'m Mohammed Fathy',
        'hero-subtitle': 'Technology Expert and Technical Consultant',
        'hero-description': 'I help individuals and companies develop their technical solutions and achieve their digital goals through my extensive experience in technology.',
        'hero-youtube-btn': 'Watch My YouTube Videos',
        'hero-consultation-btn': 'Book Free Consultation',
        'about-title': 'About Me',
        'about-subtitle': 'My experience and qualifications in technology',
        'experience-title': 'Professional Experience',
        'certifications-title': 'Certifications & Qualifications',
        'consultation-title': 'Book a Consultation',
        'consultation-subtitle': 'Get a customized technical consultation for your needs',
        'site-description': 'Mohammed Fathy\'s Personal Website',
        'footer-links': 'Important Links',
        'footer-youtube': 'My YouTube Channel',
        'footer-contact': 'Contact Me',
        'footer-copyright': '© 2024 Mohammed Fathy. All rights reserved.',
        'consultation-benefits-title': 'What will you get?',
        'benefit-1': 'Comprehensive analysis of your technical project',
        'benefit-2': 'Clear and detailed action plan',
        'benefit-3': 'Recommendations for the best suitable technologies',
        'benefit-4': 'Free follow-up for two weeks',
        'quick-consultation-title': 'Quick Consultation',
        'comprehensive-consultation-title': 'Comprehensive Consultation',
        'free': 'Free',
        '30-minutes': '30 minutes',
        '90-minutes': '90 minutes',
        'quick-consultation-desc': 'Quick discussion of your idea and get initial advice',
        'comprehensive-consultation-desc': 'Detailed analysis with complete action plan and technical recommendations',
        'form-name': 'Full Name',
        'form-email': 'Email Address',
        'form-phone': 'Phone Number',
        'form-consultation-type': 'Consultation Type',
        'form-select-consultation': 'Select consultation type',
        'form-quick-option': 'Quick Consultation (Free)',
        'form-comprehensive-option': 'Comprehensive Consultation ($99)',
        'form-project-description': 'Project or Idea Description',
        'form-submit-btn': 'Book Consultation Now'
    }
};

// Language switching functionality
let currentLang = 'ar';

function switchLanguage(lang) {
    currentLang = lang;
    const body = document.body;
    const langButton = document.getElementById('languageSwitch');
    const langText = langButton.querySelector('.lang-text');
    
    // Update body class and attributes
    if (lang === 'en') {
        body.classList.add('lang-en');
        body.setAttribute('dir', 'ltr');
        body.setAttribute('lang', 'en');
        langText.textContent = 'AR';
    } else {
        body.classList.remove('lang-en');
        body.setAttribute('dir', 'rtl');
        body.setAttribute('lang', 'ar');
        langText.textContent = 'EN';
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Handle select options differently
            if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize language from localStorage or default to Arabic
    const savedLang = localStorage.getItem('preferred-language') || 'ar';
    switchLanguage(savedLang);
    
    // Language switch button event listener
    const languageSwitch = document.getElementById('languageSwitch');
    if (languageSwitch) {
        languageSwitch.addEventListener('click', function() {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            switchLanguage(newLang);
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                alert('تم إرسال طلب الاستشارة بنجاح! سيتم التواصل معك قريباً.');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Add scroll effect to header
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.experience-item, .certification-item, .consultation-type');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.experience-item, .certification-item, .btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Add mobile toggle button
        document.querySelector('.navbar .container').appendChild(mobileToggle);
        
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            const icon = this.querySelector('i');
            icon.className = navMenu.classList.contains('mobile-active') ? 'fas fa-times' : 'fas fa-bars';
        });
    };
    
    // Initialize mobile menu on small screens
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
            createMobileMenu();
        }
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
});
