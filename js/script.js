// Footscan Centre Ponteland — site scripts

document.addEventListener('DOMContentLoaded', function () {
  /* Mobile nav toggle */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Mark current page as active in nav */
  var currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    var isCurrent = href === currentPage || (currentPage === '' && href === 'index.html');
    var isBlogArticle = href === 'blog.html' && currentPage.indexOf('blog-') === 0;
    if (isCurrent || isBlogArticle) {
      link.classList.add('active');
    }
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* Booking / contact form validation (front-end only demo) */
  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        var group = field.closest('.form-group');
        var value = field.value.trim();
        var fieldValid = value.length > 0;

        if (field.type === 'email' && value) {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        if (field.type === 'tel' && value) {
          fieldValid = /^[0-9+\s()-]{7,}$/.test(value);
        }

        if (group) {
          group.classList.toggle('invalid', !fieldValid);
        }
        if (!fieldValid) {
          valid = false;
        }
      });

      var successBox = document.getElementById('form-success');
      var errorBox = document.getElementById('form-error-general');

      if (!valid) {
        if (successBox) {
          successBox.classList.remove('visible');
        }
        return;
      }

      if (errorBox) {
        errorBox.classList.remove('visible');
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.dataset.originalText || submitBtn.textContent;
        submitBtn.textContent = 'Sending…';
      }

      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Form submission failed');
          }
          form.reset();
          form.querySelectorAll('.invalid').forEach(function (g) {
            g.classList.remove('invalid');
          });
          if (successBox) {
            successBox.classList.add('visible');
            successBox.setAttribute('tabindex', '-1');
            successBox.focus();
          }
        })
        .catch(function () {
          if (errorBox) {
            errorBox.classList.add('visible');
            errorBox.setAttribute('tabindex', '-1');
            errorBox.focus();
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.dataset.originalText;
          }
        });
    });
  }

  /* Set current year in footer */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
