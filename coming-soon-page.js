document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/coming-soon") { return; }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://infocredee-gif.github.io/credee-site-assets/coming-soon-page.css";

  /* CSSが届いてから本文を入れる。先に入れると、スタイルの無い状態が一瞬見える */
  var started = false;
  var start = function () {
    if (started) { return; }
    started = true;

    var heroTitle = Array.from(document.querySelectorAll("p")).find(function (p) {
      return p.textContent.trim() === "お問合せ" && p.closest('[class*="image--horizontal"]');
    });
    if (heroTitle) {
      heroTitle.textContent = "準備中";
      heroTitle.style.setProperty("margin-top", "90px", "important");
    }

    var form = document.querySelector('form[name="form1"]');
    if (!form) { return; }
    var contentBox = form.parentElement;
    if (!contentBox) { return; }
    contentBox.style.display = "none";

    var html =
      '<div class="comingsoon-legacy">' +
      "<h2>ただいま準備中です</h2>" +
      "<p>このページは現在準備中です。<br>公開まで今しばらくお待ちくださいませ。</p>" +
      '<a class="comingsoon-home-btn" href="/">トップページへ戻る</a>' +
      "</div>";

    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    contentBox.parentNode.insertBefore(wrap, contentBox.nextSibling);
  };

  css.onload = start;
  css.onerror = start;            /* CSSが取れなくても本文は出す */
  window.setTimeout(start, 3000); /* 保険：遅くても3秒で出す */
  document.head.appendChild(css);
});
