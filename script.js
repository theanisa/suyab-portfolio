// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Portfolio Loaded Successfully");
// });
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.hero-name');
  if (!el) return;

  // Lines to type (first line then second line)
  const lines = ["Hello! I'm", "Md Suyab Ahmed"];

  typeLines(el, lines, { charDelay: 60, lineDelay: 500 });
});

function typeLines(el, lines, opts = {}) {
  const charDelay = opts.charDelay ?? 60;
  const lineDelay = opts.lineDelay ?? 500;

  el.innerHTML = '';
  el.classList.add('typing');

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      el.classList.remove('typing');
      return;
    }

    const text = lines[lineIndex];
    const span = document.createElement('span');
    el.appendChild(span);

    let i = 0;
    const t = setInterval(() => {
      span.textContent += text[i] ?? '';
      i++;
      if (i >= text.length) {
        clearInterval(t);
        lineIndex++;
        if (lineIndex < lines.length) {
          // add line break then pause before next
          el.appendChild(document.createElement('br'));
          setTimeout(typeLine, lineDelay);
        } else {
          // finished
          el.classList.remove('typing');
        }
      }
    }, charDelay);
  }

  typeLine();
}