document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/sustainability") { return; }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://infocredee-gif.github.io/credee-site-assets/sustainability-page.css";
  document.head.appendChild(css);

  var titleP = Array.from(document.querySelectorAll("p")).find(function (p) {
    return p.textContent.trim() === "サステナビリティ";
  });
  if (!titleP) { return; }

  var heroBox = titleP.parentElement ? titleP.parentElement.parentElement : null;
  var outerHero = heroBox ? heroBox.parentElement : null;
  var mainContent = outerHero ? outerHero.nextElementSibling : null;
  if (!outerHero || !mainContent) { return; }

  outerHero.style.display = "none";
  mainContent.style.display = "none";

  var heroImg = "https://storage.googleapis.com/studio-design-asset-files/projects/7kad69mbO3/s-2000x1334_v-frms_webp_6c61f07a-4c27-449c-be23-e1ad57a5dc66.jpg";
  var infographicImg = "https://storage.googleapis.com/studio-design-asset-files/projects/7kad69mbO3/s-1983x793_v-frms_webp_d173831b-bbcf-404c-bfb7-58d9ddeeafc9.png";
  var sdgsImg = "https://storage.googleapis.com/studio-design-asset-files/projects/VGOK5bB7an/s-1500x1500_v-fms_webp_2fb0c880-6b43-4d1f-8ca5-65e9539d1411.png";
  var paddyImg = "https://images.unsplash.com/photo-1666073633128-a4afecfb9c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MjM3fHxwYWRkeXxlbnwwfHx8fDE3MTMwOTMyOTJ8MA&ixlib=rb-4.0.3&q=80&w=1080";
  var cleanroomImg = "https://storage.googleapis.com/studio-design-asset-files/projects/7kad69mbO3/s-2000x1333_v-frms_webp_b56322ad-f666-4d02-851a-4a224f3174ac.jpg";

  var html =
    '<div class="sus-page">' +
    '<section class="sus-hero" style="background-image:url(\'' + heroImg + '\')">' +
      '<div class="sus-hero-inner">' +
        '<p class="eyebrow">SUSTAINABILITY</p>' +
        '<h1>サステナビリティ</h1>' +
        '<p class="lead">厄介者を、必要とされるものへ。</p>' +
      '</div>' +
    '</section>' +

    '<div class="sus-infographic-wrap">' +
      '<img class="sus-infographic" src="' + infographicImg + '" alt="もみ殻の課題と解決、実績を示すインフォグラフィック" />' +
    '</div>' +

    '<section class="sus-section narrow">' +
      '<h2 class="sus-h2">世界では年間1億トン。</h2>' +
      '<div class="sus-outlook">' +
        '<div class="sus-text">' +
          '<p class="sus-body">もみ殻の発生量は、世界全体で年間1億トンにのぼります。その多くが未活用のままです。<br>' +
          '私たちは今後、日本だけでなく、世界中のもみ殻活用に向けて挑戦していきます。<br>' +
          '「厄介者」のもみ殻を、人々が健康で美しくあるために必要なものへ。</p>' +
        '</div>' +
        '<div class="sus-sdgs"><img src="' + sdgsImg + '" alt="SDGs" /></div>' +
      '</div>' +
    '</section>' +

    '<section class="sus-section narrow">' +
      '<h2 class="sus-h2">完全無農薬米のもみ殻を使う。</h2>' +
      '<p class="sus-body">原料に何が残っているかは、製品に直結します。私たちは完全無農薬で栽培された国産米のもみ殻のみを使用しています。<br>' +
      'もみ殻を焼くと、通常は炭素が残って黒や灰色になります。白い灰にできるということは、不純物を残さず、結晶化させずに焼成できているということです。<br>' +
      '不完全燃焼の状態では、農薬・細菌・重金属などが残留する可能性があります。品質の追求が、そのまま安全性につながっています。</p>' +
      '<div class="sus-commitment-photos">' +
        '<figure><img src="' + paddyImg + '" alt="完全無農薬米の稲穂" /></figure>' +
        '<figure><img src="' + cleanroomImg + '" alt="クリーンルーム内での製造風景" /></figure>' +
      '</div>' +
    '</section>' +

    '<section class="sus-cta">' +
      '<div class="sus-cta-inner">' +
        '<a class="primary" href="/inquiry">原料・OEMのご相談</a>' +
        '<a class="secondary" href="/manufacture">研究開発・製造を見る</a>' +
      '</div>' +
    '</section>' +
    '</div>';

  var wrap = document.createElement("div");
  wrap.innerHTML = html;
  outerHero.parentNode.insertBefore(wrap, outerHero);
});
