document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/evidence") { return; }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://infocredee-gif.github.io/credee-site-assets/evidence-page.css";
  document.head.appendChild(css);

  var desc = Array.from(document.querySelectorAll("p")).find(function (p) {
    return p.textContent.indexOf("「シリカのある生活」では") !== -1;
  });
  if (!desc) { return; }

  desc.textContent = "クレディーでは、取り扱う商品（原料）の安全性を正しく判断出来る様に、安全試験のデータや機能性エビデンスなどを公開しています。 何故、「信頼・信用できるのか」根拠をご確認して下さい。";
  desc.style.textAlign = "left";

  var oldGrid = desc.nextElementSibling;
  if (oldGrid) { oldGrid.style.display = "none"; }

  function row(tagClass, tagLabel, title, url, note) {
    var link = url
      ? '<a href="' + url + '" target="_blank" rel="noreferrer">' + title + "</a>"
      : title;
    var noteHtml = note ? '<span class="note">' + note + "</span>" : "";
    return (
      '<li class="evidence-row">' +
      '<span class="tag ' + tagClass + '">' + tagLabel + "</span>" +
      '<span class="title">' + link + "</span>" +
      noteHtml +
      "</li>"
    );
  }

  var contactNote = "※閲覧を希望の場合は、直接お問い合わせください。";

  var evidenceRows = [
    row("safety", "安全性", "276残留農薬試験", "https://shiryo.credit-group.ne.jp/ev1.pdf"),
    row("safety", "安全性", "植物性シリカ粉末　非臨床試験", "https://shiryo.credit-group.ne.jp/ev3.pdf"),
    row("safety", "安全性", "一般生菌・重金属試験", "https://shiryo.credit-group.ne.jp/ev10.pdf"),
    row("safety", "安全性", "放射能試験", "https://shiryo.credit-group.ne.jp/ev14.pdf"),
    row("safety", "安全性", "トランス脂肪酸試験", "https://shiryo.credit-group.ne.jp/ev8.pdf"),
    row("safety", "安全性", "飽和脂肪酸試験", "https://shiryo.credit-group.ne.jp/ev9.pdf"),
    row("safety", "安全性", "植物性シリカ濃縮液の経年による品質試験(開封済み)", "https://shiryo.credit-group.ne.jp/ev11.pdf"),
    row("safety", "安全性", "植物性シリカ濃縮液の経年による品質試験(未開封)", "https://shiryo.credit-group.ne.jp/ev12.pdf"),
    row("safety", "安全性", "アモルファスＸ線回析測定試験", null, contactNote),
    row("efficacy", "有効性", "鉱物由来及び植物由来のシリカによる体内吸収比較試験", null, contactNote),
    row("efficacy", "有効性", "植物由来のシリカによる体内アルミニウム排泄試験", null, contactNote),
    row("health", "健康", "糖尿病患者への補助治療作用治験報告書", null, contactNote),
    row("health", "健康", "100名を対象とした体内ケイ素濃度試験", null, contactNote)
  ].join("");

  var literatureRows = [
    row("health", "健康", "籾殻シリカ液の糖尿病治療効果", "https://pubmed.ncbi.nlm.nih.gov/34356312/"),
    row("health", "健康", "シリカがラットの糖尿病を予防する", "https://pubmed.ncbi.nlm.nih.gov/2981751/"),
    row("health", "健康", "シリカがラットのコレステロール濃度に及ぼす影響", "https://pubmed.ncbi.nlm.nih.gov/8207542/"),
    row("health", "健康", "シリカやサンゴに含まれる成分に関する血圧調節や血管機能の影響", "https://pubmed.ncbi.nlm.nih.gov/21419319/"),
    row("health", "健康", "シリカ水の摂取が抗酸化作用、胃腸機能、および腸内細菌叢に及ぼす影響", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8011764/"),
    row("health", "健康", "シリカの骨粗しょう症の予防と治療効果", "https://onlinelibrary.wiley.com/doi/10.1155/2013/316783"),
    row("health", "健康", "ラットにおけるシリカの肝臓抗酸化効果", "https://pubmed.ncbi.nlm.nih.gov/26807847/"),
    row("beauty", "美容", "シリカが皮膚、髪、爪に与える影響", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4938278/"),
    row("beauty", "美容", "オルトケイ酸の経口補給と髪質への影響", "https://www.medigraphic.com/cgi-bin/new/resumenI.cgi?IDARTICULO=73080")
  ].join("");

  var html =
    '<div class="evidence-legacy">' +
    "<h2>エビデンス</h2>" +
    '<ul class="evidence-list">' + evidenceRows + "</ul>" +
    "<h2>文献・論文</h2>" +
    '<ul class="evidence-list">' + literatureRows + "</ul>" +
    "</div>";

  var wrap = document.createElement("div");
  wrap.innerHTML = html;
  oldGrid.parentNode.insertBefore(wrap, oldGrid.nextSibling);
});
