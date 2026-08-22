// Shared script for all pages.
// 1) Fills in the footer year + "compiled" date.
// 2) Fades sections in as they scroll into view (skipped if the
//    visitor has "reduce motion" turned on).

document.addEventListener('DOMContentLoaded', function () {
  var yearLine = document.getElementById('year-line');
  if (yearLine) {
    yearLine.textContent = '© ' + new Date().getFullYear() + ' YU Huiquan';
  }
  var compiledLine = document.getElementById('compiled-line');
  if (compiledLine) {
    compiledLine.textContent =
      'Preprint · v1.0 · Compiled ' +
      new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (!prefersReduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
