/* ローダーから後で読み込まれても動くようにしてある（tools/make_loader.py）。
   静的な <script src> で読んだときの動きは、書き換える前と同じ。 */
(function () {
  var __start = function () {
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
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", __start);
  } else {
    __start();
  }
})();

/* ============================================================
   全ページ共通：用語置換（2026-11-25 追加）
   「産業廃棄物」→「農業副産物」

   STUDIOの管理画面に直接入力された本文（/development・/sustainability）は
   GitHub側のソースに存在しないため、表示時にDOM上で置き換えています。
   このファイルは全ページで読み込まれているので、ここに置けば全ページに効きます。

   恒久対応としてSTUDIO本文そのものを修正したら、このブロックは削除して構いません
   （置換対象が無くなるだけなので、残しても害はありません）。

   注意：このファイルは tools/make_loader.py の生成対象です。
   再生成する際は、このブロックを生成元にも反映してください。
   ============================================================ */
(function () {
  var RULES = [
    { from: /産業廃棄物/g, to: "農業副産物" }
  ];

  /* 中身がコードや入力値の要素は触らない */
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, INPUT: 1, CODE: 1, PRE: 1 };

  var applyTo = function (node) {
    var t = node.nodeValue;
    if (!t) { return; }
    var out = t;
    for (var i = 0; i < RULES.length; i++) {
      RULES[i].from.lastIndex = 0;
      out = out.replace(RULES[i].from, RULES[i].to);
    }
    if (out !== t) { node.nodeValue = out; }
  };

  var replaceIn = function (root) {
    if (!root) { return; }
    if (root.nodeType === 3) { applyTo(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) { return; }

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        if (p && p.nodeName && SKIP[p.nodeName]) { return NodeFilter.FILTER_REJECT; }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var list = [];
    var n;
    while ((n = walker.nextNode())) { list.push(n); }
    for (var i = 0; i < list.length; i++) { applyTo(list[i]); }
  };

  var run = function () { replaceIn(document.body); };

  /* 1) できるだけ早く */
  if (document.body) { run(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  }

  /* 2) 後から差し込まれる本文（他のpage.jsが書き出す部分）にも効かせる */
  var startObserver = function () {
    if (!document.body || !window.MutationObserver) { return; }
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var r = records[i];
        if (r.type === "characterData") { applyTo(r.target); continue; }
        for (var j = 0; j < r.addedNodes.length; j++) { replaceIn(r.addedNodes[j]); }
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  };
  if (document.body) { startObserver(); }
  else { document.addEventListener("DOMContentLoaded", startObserver); }

  /* 3) 保険 */
  window.setTimeout(run, 1000);
  window.setTimeout(run, 3000);
})();
