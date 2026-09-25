/**
 * INICIATIVA CIUDADANA - COADYUVANCIA ACCIÓN DE TUTELA
 * Radicado N° 11001-2203-000-2026-03364-00
 * JavaScript de interactividad, modales y difusión
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initAccordions();
  initStatsCounter();
  initMobileMenu();
  initSmoothScroll();
});

/* Barra de progreso de lectura */
function initReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* Acordeón de motivos jurídicos */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Cerrar otros si se prefiere navegación focalizada, o permitir múltiples
      // Permitimos toggling fluido
      item.classList.toggle('active', !isActive);
      
      const content = item.querySelector('.accordion-content');
      if (content) {
        if (!isActive) {
          content.style.maxHeight = content.scrollHeight + 100 + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      }
    });
  });

  // Botón expandir/colapsar todos
  const toggleAllBtn = document.getElementById('toggle-all-motivos');
  if (toggleAllBtn) {
    let allExpanded = false;
    toggleAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      accordionItems.forEach(item => {
        item.classList.toggle('active', allExpanded);
        const content = item.querySelector('.accordion-content');
        if (content) {
          content.style.maxHeight = allExpanded ? (content.scrollHeight + 100 + "px") : "0px";
        }
      });
      toggleAllBtn.innerHTML = allExpanded 
        ? '<i class="fas fa-compress-alt mr-2"></i> Colapsar todos los motivos'
        : '<i class="fas fa-expand-alt mr-2"></i> Desplegar todos los motivos';
    });
  }
}

/* Contador animado para estadísticas clave */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target') || '0', 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        
        let start = 0;
        const duration = 1600;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = targetValue / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            target.textContent = prefix + targetValue.toLocaleString('es-CO') + suffix;
            clearInterval(timer);
          } else {
            target.textContent = prefix + Math.floor(start).toLocaleString('es-CO') + suffix;
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

/* Menú móvil */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Cerrar al hacer click en un enlace
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }
}

/* Desplazamiento suave */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/* Control de Modales */
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

// Cerrar modales con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-wrapper:not(.hidden)').forEach(modal => {
      modal.classList.add('hidden');
    });
    document.body.style.overflow = 'auto';
  }
});

/* Funcionalidad de Compartir y Copiar */
const GOOGLE_FORM_URL = "https://forms.gle/UrTeZuqjvCvnhndD7";
const PAGE_TITLE = "Memorial Ciudadano del Pueblo Colombiano en Respaldo a la Impugnación de Tutela - Rad. 11001-2203-000-2026-03364-00";

window.shareOnWhatsApp = function() {
  const message = `🇨🇴 *MEMORIAL CIUDADANO EN DEFENSA DE LA CONSTITUCIÓN*\n\nMe he sumado como coadyuvante a la impugnación de la Acción de Tutela (Rad. 11001-2203-000-2026-03364-00) interpuesta por el jurista y exjuez Dr. Gabriel Jorge Triana Perdomo ante la Sala de Casación Civil de la Corte Suprema de Justicia.\n\nFirma el memorial y coadyuva aquí: ${GOOGLE_FORM_URL}\n\n¡La defensa del Estado de Derecho nos convoca a todos!`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

window.shareOnTwitter = function() {
  const text = `🇨🇴 Ciudadanos respaldamos como coadyuvantes al jurista Dr. Gabriel Jorge Triana Perdomo en la tutela ante la Corte Suprema de Justicia (Rad. 11001-2203-000-2026-03364-00). ¡Firma aquí!`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(GOOGLE_FORM_URL)}`;
  window.open(url, '_blank');
};

window.shareOnTelegram = function() {
  const text = `🇨🇴 Respaldo Ciudadano como Coadyuvantes a la Impugnación de Tutela (Rad. 11001-2203-000-2026-03364-00). Firma aquí:`;
  const url = `https://t.me/share/url?url=${encodeURIComponent(GOOGLE_FORM_URL)}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

window.shareOnFacebook = function() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(GOOGLE_FORM_URL)}`;
  window.open(url, '_blank');
};

window.copyFormLink = function() {
  navigator.clipboard.writeText(GOOGLE_FORM_URL).then(() => {
    showToast("¡Enlace del formulario copiado al portapapeles!");
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = GOOGLE_FORM_URL;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast("¡Enlace del formulario copiado al portapapeles!");
  });
};

window.copyPageLink = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("¡Enlace de la página copiado al portapapeles!");
  }).catch(() => {
    showToast("¡Enlace copiado!");
  });
};

/* Notificación Toast */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3 border border-amber-500/40';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
    <span class="font-medium text-sm text-slate-100">${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* Imprimir Memorial */
window.printMemorial = function() {
  window.print();
};

/* Administración Remota */
const ADMIN_USER = "admin";
const ADMIN_PASS = "Dignidad2026!";

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const userInput = document.getElementById('admin-username');
  const passInput = document.getElementById('admin-password');
  const errorDiv = document.getElementById('admin-login-error');

  const user = userInput ? userInput.value.trim() : "";
  const pass = passInput ? passInput.value.trim() : "";

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    if (errorDiv) errorDiv.classList.add('hidden');
    closeModal('admin-login-modal');
    openModal('admin-panel-modal');
    showToast("¡Sesión de administrador iniciada!");
  } else {
    if (errorDiv) errorDiv.classList.remove('hidden');
  }
};

window.saveAdminChanges = function() {
  const newFormUrlInput = document.getElementById('admin-edit-form-url');
  const newAlertTextInput = document.getElementById('admin-edit-alert-text');

  if (newFormUrlInput && newFormUrlInput.value.trim()) {
    localStorage.setItem('custom_form_url', newFormUrlInput.value.trim());
  }
  if (newAlertTextInput && newAlertTextInput.value.trim()) {
    const val = newAlertTextInput.value.trim();
    localStorage.setItem('custom_alert_text', val);
    const alertEl = document.querySelector('.bg-gradient-to-r span.font-medium');
    if (alertEl) alertEl.textContent = val;
  }

  closeModal('admin-panel-modal');
  showToast("¡Cambios aplicados correctamente!");
};

