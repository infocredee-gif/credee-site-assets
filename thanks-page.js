document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/thanks") { return; }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://infocredee-gif.github.io/credee-site-assets/thanks-page.css";
  document.head.appendChild(css);

  var heroTitle = Array.from(document.querySelectorAll("p")).find(function (p) {
    return p.textContent.trim() === "お問合せ" && p.closest('[class*="image--horizontal"]');
  });
  if (heroTitle) { heroTitle.textContent = "送信完了"; }

  var form = document.querySelector('form[name="form1"]');
  if (!form) { return; }
  var contentBox = form.parentElement;
  if (!contentBox) { return; }
  contentBox.style.display = "none";

  var html =
    '<div class="thanks-legacy">' +
    "<h2>お問い合わせありがとうございました</h2>" +
    "<p>お問い合わせいただき、誠にありがとうございます。<br>" +
    "内容を確認の上、担当者よりご連絡いたします。今しばらくお待ちくださいませ。</p>" +
    '<a class="thanks-home-btn" href="/">トップページへ戻る</a>' +
    "</div>";

  var wrap = document.createElement("div");
  wrap.innerHTML = html;
  contentBox.parentNode.insertBefore(wrap, contentBox.nextSibling);
});
