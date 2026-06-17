document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.closest('.showcase-text');
      const isExpanded = text.classList.toggle('expanded');
      btn.textContent = isExpanded ? 'Read Less' : 'Read More';
    });
  });
});

