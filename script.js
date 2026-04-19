document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. PARTICLES.JS ENGINE (מהיר ויעיל) --- */
    // זה מחליף את הלולאה הכבדה שהייתה קודם.
    // ההגדרות נלקחו מהרפרנס ששלחת, הותאמו לצבעים של האתר שלך (ציאן וסגול).
    
    if (document.getElementById('hero-particles')) {
        particlesJS('hero-particles', {
            "particles": {
                "number": {
                    "value": 600, // כמות טובה שלא מכבידה מדי אבל נראית מלאה בקופסה
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f0ff" // צבעי המותג שלך (ציאן וסגול)
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                },
                "size": {
                    "value": 1.5,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#00f0ff", // קווים סגולים
                    "opacity": 0.5,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 1, // מהירות נעימה
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out", // שיניתי ל-bounce כדי שיישארו בתוך הקופסה
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse" // דחייה כמו שביקשת
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 80,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                }
            },
            "retina_detect": true
        });
    }

    /* --- 2. SCROLL ANIMATION (OBSERVER) --- */
    // גורם לכרטיסים לעלות למעלה ברכות כשהם נכנסים למסך
    const cards = document.querySelectorAll('.animate-card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // יתחיל כש-15% מהכרטיס גלוי
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    /* --- 3. SMOOTH SCROLL FOR CTA --- */
    const heroBtn = document.getElementById('hero-cta');
    const contactSection = document.getElementById('contact');

    if (heroBtn && contactSection) {
        heroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    /* --- 4. NETLIFY FORM AJAX SUBMISSION --- */
  /* --- 4. FORM HANDLING (FAKE SUBMIT - אינטראקציה בלבד) --- */
  const contactForm = document.querySelector('.tech-form');
  const successMsg = document.querySelector('.success-message');

  if (contactForm && successMsg) {
      contactForm.addEventListener('submit', (e) => {
          // 1. עוצרים את שליחת הטופס האמיתית
          e.preventDefault(); 
          
          // 2. אפקט ויזואלי: מעלימים את הטופס
          contactForm.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          contactForm.style.opacity = '0';
          contactForm.style.transform = 'translateY(-20px)';

          // 3. אחרי שהטופס נעלם, מציגים את הודעת התודה
          setTimeout(() => {
              contactForm.style.display = 'none'; // מסירים לגמרי מהמסך
              
              successMsg.style.display = 'block'; // מציגים את ההודעה
              
              // אנימציית כניסה להודעה
              // (אנחנו משתמשים ב-requestAnimationFrame או setTimeout קצר כדי שה-transition יעבוד)
              requestAnimationFrame(() => {
                  successMsg.style.opacity = '1';
                  successMsg.style.transform = 'translateY(0)';
              });
              
          }, 400); // ממתינים 400ms שזה זמן האנימציה של הטופס
      });
  }

    /* --- 5. EMAIL COPY FUNCTIONALITY --- */
    const emailText = document.getElementById('email-text');
    const tooltip = document.getElementById('copy-tooltip');
    
    if (emailText && tooltip) {
        const wrapper = emailText.parentElement.parentElement; // הכפתור העוטף
        
        wrapper.addEventListener('click', () => {
            const email = emailText.innerText;
            
            navigator.clipboard.writeText(email).then(() => {
                tooltip.classList.add('visible');
                setTimeout(() => {
                    tooltip.classList.remove('visible');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy', err);
            });
        });
    }

    /* --- 6. PRICING GRAPH (הקוד הקליל המקורי שנשמר) --- */
    // זה קוד פשוט מאוד שלא מכביד, אז השארתי אותו
    const graphData = [
        { month: 'התנעה', expenses: 100, income: 0 },
        { month: 'חודש 1', expenses: 20, income: 10 },
        { month: 'חודש 2', expenses: 20, income: 25 },
        { month: 'חודש 3', expenses: 20, income: 45 },
        { month: 'חודש 4', expenses: 20, income: 70 },
        { month: 'חודש 5', expenses: 20, income: 100 },
        { month: 'חודש 6', expenses: 20, income: 140 },
    ];

    const overlay = document.getElementById('chartOverlay');
    const graphTooltip = document.getElementById('tooltip');
    
    if (overlay && graphData) {
        // ... (הקוד לגרף נשאר זהה לקוד המקורי, הוא יעיל מאוד)
        const padding = { top: 10, bottom: 20, left: 10, right: 10 };
        const viewBoxW = 400;
        const viewBoxH = 200;
        const chartW = viewBoxW - padding.left - padding.right;
        const chartH = viewBoxH - padding.top - padding.bottom;
        const maxVal = 140; 

        const getY = (val) => padding.top + chartH - (val / maxVal * chartH);
        const getX = (idx) => padding.left + (idx / (graphData.length - 1)) * chartW;

        const gridGroup = document.getElementById('gridGroup');
        if(gridGroup) {
            gridGroup.innerHTML = ''; 
            [0, 50, 100, 140].forEach(val => {
                const y = getY(val);
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", padding.left);
                line.setAttribute("y1", y);
                line.setAttribute("x2", viewBoxW - padding.right);
                line.setAttribute("y2", y);
                line.setAttribute("class", "grid-line");
                gridGroup.appendChild(line);
            });
        }

        let dIncome = `M ${getX(0)} ${getY(graphData[0].income)}`;
        for (let i = 0; i < graphData.length - 1; i++) {
            dIncome += ` Q ${getX(i)+20} ${getY(graphData[i].income)} ${getX(i+1)} ${getY(graphData[i+1].income)}`;
        }
        
        let dExpenses = `M ${getX(0)} ${getY(graphData[0].expenses)}`;
        for (let i = 0; i < graphData.length - 1; i++) {
            dExpenses += ` L ${getX(i+1)} ${getY(graphData[i].expenses)}`; 
            dExpenses += ` L ${getX(i+1)} ${getY(graphData[i+1].expenses)}`; 
        }

        document.getElementById('lineIncome').setAttribute('d', dIncome);
        document.getElementById('lineExpenses').setAttribute('d', dExpenses);
        document.getElementById('areaIncome').setAttribute('d', dIncome + ` L ${getX(6)} ${getY(0)} L ${getX(0)} ${getY(0)} Z`);
        document.getElementById('areaExpenses').setAttribute('d', dExpenses + ` L ${getX(6)} ${getY(0)} L ${getX(0)} ${getY(0)} Z`);

        const xLabelsContainer = document.getElementById('xLabels');
        if(xLabelsContainer) {
            xLabelsContainer.innerHTML = '';
            graphData.forEach(d => {
                const span = document.createElement('span');
                span.innerText = d.month;
                xLabelsContainer.appendChild(span);
            });
        }

        overlay.addEventListener('mousemove', (e) => {
            const rect = overlay.getBoundingClientRect();
            const mouseX = e.clientX - rect.left; 
            const relX = (mouseX / rect.width) * viewBoxW;

            let minDist = Infinity;
            let closestIdx = 0;
            graphData.forEach((_, i) => {
                const dist = Math.abs(getX(i) - relX);
                if (dist < minDist) {
                    minDist = dist;
                    closestIdx = i;
                }
            });

            const point = graphData[closestIdx];
            graphTooltip.style.opacity = 1;
            const cssX = (getX(closestIdx) / viewBoxW) * rect.width;
            
            graphTooltip.style.left = `${cssX}px`;
            graphTooltip.style.top = `10px`;

            document.getElementById('tpLabel').innerText = point.month;
            document.getElementById('tpIncome').innerText = point.income;
            document.getElementById('tpExpense').innerText = point.expenses;
        });

        overlay.addEventListener('mouseleave', () => {
            graphTooltip.style.opacity = 0;
        });
    }

    /* --- 7. NAVBAR: scroll glass + hamburger --- */
    const mainNav = document.getElementById('main-nav');
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks  = document.getElementById('nav-links');

    if (mainNav) {
        window.addEventListener('scroll', () => {
            mainNav.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        // close menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    /* --- 8. STAT COUNTER --- */
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length) {
        const statObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const card   = entry.target;
                const numEl  = card.querySelector('.stat-number');
                const target = parseInt(numEl.getAttribute('data-target'), 10);

                card.classList.add('counted');   // triggers fill bar

                const start = performance.now();
                const dur   = 1800;

                const step = (now) => {
                    const progress = Math.min((now - start) / dur, 1);
                    const eased    = 1 - Math.pow(1 - progress, 3);
                    numEl.textContent = Math.round(eased * target);
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
                statObserver.unobserve(card);
            });
        }, { threshold: 0.35 });

        statCards.forEach(c => statObserver.observe(c));
    }

    /* --- 10. FAQ LOGIC --- */
    const faqBoxes = document.querySelectorAll('.faq-box');
    faqBoxes.forEach(box => {
        box.querySelector('.faq-question').addEventListener('click', () => {
            faqBoxes.forEach(other => {
                if (other !== box) {
                    other.classList.remove('active');
                    other.querySelector('.faq-symbol').innerText = '?';
                }
            });
            box.classList.toggle('active');
            const symbol = box.querySelector('.faq-symbol');
            if (box.classList.contains('active')) {
                setTimeout(() => { symbol.innerText = '!'; }, 150);
            } else {
                setTimeout(() => { symbol.innerText = '?'; }, 150);
            }
        });
    });
});