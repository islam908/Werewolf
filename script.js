        // إنشاء النجوم المتحركة
        function createStars() {
            const starsContainer = document.querySelector('.stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // إنشاء الكرات العائمة
        function createOrbs() {
            const orbsContainer = document.querySelector('.floating-orbs');
            for (let i = 0; i < 8; i++) {
                const orb = document.createElement('div');
                orb.className = 'orb';
                const size = Math.random() * 100 + 50;
                orb.style.width = size + 'px';
                orb.style.height = size + 'px';
                orb.style.left = Math.random() * 100 + '%';
                orb.style.top = Math.random() * 100 + '%';
                orb.style.animationDelay = Math.random() * 6 + 's';
                orb.style.animationDuration = (Math.random() * 4 + 4) + 's';
                orbsContainer.appendChild(orb);
            }
        }

        // تأثير الماوس على البطاقات
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotateX(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0)';
            });
        });

      
        // إضافة CSS للتأثيرات
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // تشغيل الوظائف
        createStars();
        createOrbs();

        // تأثير التمرير السلس
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
    