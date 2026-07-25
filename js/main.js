
  /* Header scroll state */
  const orbitShell = document.getElementById('orbitShell');
  window.addEventListener('scroll', () => {
    orbitShell.classList.toggle('is-scrolled', window.scrollY > 16);
  }, { passive:true });

  /* Desktop dropdowns */
  function orbitToggleDesktop(id){
    const li = document.getElementById(id);
    const isOpen = li.classList.contains('is-open');
    document.querySelectorAll('.orbit-links > li.is-open').forEach(el=>{
      el.classList.remove('is-open');
      const b = el.querySelector('button'); if(b) b.setAttribute('aria-expanded','false');
    });
    if(!isOpen){
      li.classList.add('is-open');
      const b = li.querySelector('button'); if(b) b.setAttribute('aria-expanded','true');
    }
  }
  document.addEventListener('click', e=>{
    if(!e.target.closest('.orbit-links > li')){
      document.querySelectorAll('.orbit-links > li.is-open').forEach(el=>{
        el.classList.remove('is-open');
        const b = el.querySelector('button'); if(b) b.setAttribute('aria-expanded','false');
      });
    }
  });

  /* Mobile full-screen menu */
  const orbitBurger = document.getElementById('orbitBurger');
  const orbitMobile = document.getElementById('orbitMobile');
  function orbitToggleMobile(){
    const isOpen = orbitMobile.classList.contains('is-open');
    orbitMobile.classList.toggle('is-open');
    orbitBurger.classList.toggle('is-active');
    orbitBurger.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  /* Mobile accordion (Industries/Products) */
  function orbitToggleSub(id){
    const li = document.getElementById(id);
    const isOpen = li.classList.contains('d-open');
    document.querySelectorAll('.orbit-mobile-nav > li.d-open').forEach(el=>{
      if(el.id !== id){
        el.classList.remove('d-open');
        const b = el.querySelector('.orbit-mobile-toggle'); if(b) b.setAttribute('aria-expanded','false');
      }
    });
    li.classList.toggle('d-open', !isOpen);
    const btn = li.querySelector('.orbit-mobile-toggle'); if(btn) btn.setAttribute('aria-expanded', String(!isOpen));
  }

  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && orbitMobile.classList.contains('is-open')) orbitToggleMobile();
  });


  let orbitHoverTimer = null;

document.querySelectorAll('.orbit-links > li').forEach(li => {
  li.addEventListener('mouseenter', () => {
    clearTimeout(orbitHoverTimer);
    document.querySelectorAll('.orbit-links > li.is-open').forEach(el => {
      if (el !== li) {
        el.classList.remove('is-open');
        const b = el.querySelector('button');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
    li.classList.add('is-open');
    const btn = li.querySelector('button');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  });

  li.addEventListener('mouseleave', () => {
    orbitHoverTimer = setTimeout(() => {
      li.classList.remove('is-open');
      const btn = li.querySelector('button');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }, 250); // forgiveness window in ms
  });
});





// main page pr hero me animations 

  const heroItems = document.querySelectorAll(
    ".hero-text h1, .hero-text h2, .hero-text h3, .hero-text p, .hero-text h4,.Cta-btn"
  );

  // Pehle sabko gayab karo bina move kiye
  heroItems.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "none";
    el.style.visibility = "visible"; // Ensure hidden na ho
  });

  // Ek ek karke fade-in
  heroItems.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease";
      el.style.opacity = "1";
    }, index * 500);
  });


// stats counter 
        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.stat-number');
            const duration = 2000;

            const formatNumber = (num) => {
                return num.toLocaleString('en-US');
            };

            const animateCounter = (counter) => {
                if (counter.dataset.animated) return;
                counter.dataset.animated = 'true';

                const target = parseInt(counter.dataset.target);
                const suffix = counter.dataset.suffix || '';
                let startTime = null;

                const step = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);
                    const eased = percentage * (2 - percentage);
                    const value = Math.floor(eased * target);

                    counter.textContent = formatNumber(value) + suffix;

                    if (percentage < 1) {
                        requestAnimationFrame(step);
                    } else {
                        counter.textContent = formatNumber(target) + suffix;
                    }
                };

                requestAnimationFrame(step);
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target
                            .querySelectorAll('.stat-number')
                            .forEach(animateCounter);

                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const section = document.querySelector('.stats-section');
            observer.observe(section);
        });
    


// industry track 
    const industryTrack = document.getElementById('mp-industryTrack');
const industryPrev  = document.getElementById('mp-industryPrev');
const industryNext  = document.getElementById('mp-industryNext');

function industryScrollAmount(){
  const card = industryTrack.querySelector('.mp-industry-card');
  return card ? card.offsetWidth + 24 : 300;
}
industryPrev.addEventListener('click', () => {
  industryTrack.scrollBy({ left: -industryScrollAmount(), behavior: 'smooth' });
});
industryNext.addEventListener('click', () => {
  industryTrack.scrollBy({ left: industryScrollAmount(), behavior: 'smooth' });
});


//about us reveal 
// Scroll reveal
(function(){
  const els = document.querySelectorAll('.os-reveal');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{threshold:.12});
  els.forEach(el=>obs.observe(el));
})();

// Animated counters
document.addEventListener('DOMContentLoaded',()=>{
  const counters = document.querySelectorAll('.stat-number');
  const dur = 2000;
  const fmt = n => n.toLocaleString('en-US');
  const animate = c => {
    if(c.dataset.animated) return;
    c.dataset.animated='true';
    const target=parseInt(c.dataset.target);
    const suffix=c.dataset.suffix||'';
    let t0=null;
    const step=ts=>{
      if(!t0)t0=ts;
      const prog=Math.min((ts-t0)/dur,1);
      const eased=prog*(2-prog);
      c.textContent=fmt(Math.floor(eased*target))+suffix;
      if(prog<1)requestAnimationFrame(step);
      else c.textContent=fmt(target)+suffix;
    };
    requestAnimationFrame(step);
  };
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.querySelectorAll('.stat-number').forEach(animate); obs.unobserve(e.target); }
    });
  },{threshold:.5});
  const sec=document.querySelector('.stats-section');
  if(sec) obs.observe(sec);
});











// ===== Back to Top Button (Gear + Sparks) =====
(function () {
  const btn = document.getElementById('backToTop');
  const gearBig = btn.querySelector('.btt-gear-big');
  const gearSmall = btn.querySelector('.btt-gear-small');
  const sparkBox = btn.querySelector('.btt-sparks');

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  function spawnSparks() {
    const sparkCount = 8;
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('span');
      spark.className = 'spark';

      // random angle around full circle + random distance for organic burst
      const angle = (360 / sparkCount) * i + (Math.random() * 20 - 10);
      const distance = 18 + Math.random() * 14;

      spark.style.setProperty('--angle', `${angle}deg`);
      spark.style.setProperty('--distance', `${distance}px`);

      sparkBox.appendChild(spark);

      // cleanup after animation ends
      setTimeout(() => spark.remove(), 600);
    }
  }

  function triggerGearBurst() {
    gearBig.classList.remove('burst');
    gearSmall.classList.remove('burst');
    void gearBig.offsetWidth; // reflow trick taaki animation restart ho baar baar click pe
    gearBig.classList.add('burst');
    gearSmall.classList.add('burst');
    spawnSparks();

    setTimeout(() => {
      gearBig.classList.remove('burst');
      gearSmall.classList.remove('burst');
    }, 550);
  }

  btn.addEventListener('click', () => {
    triggerGearBurst();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
})();




