document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/voice") { return; }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://infocredee-gif.github.io/credee-site-assets/voice-page.css";
  document.head.appendChild(css);

  var desc = Array.from(document.querySelectorAll("p")).find(function (p) {
    return p.textContent.indexOf("「シリカのある生活」では") !== -1;
  });
  if (!desc) { return; }

  var oldGrid = desc.nextElementSibling;
  if (oldGrid) { oldGrid.style.display = "none"; }

  var heroBox = desc.parentElement && desc.parentElement.parentElement
    ? desc.parentElement.parentElement.previousElementSibling
    : null;
  var heroTitle = heroBox ? heroBox.querySelector("p") : null;
  if (!heroTitle) {
    heroTitle = Array.from(document.querySelectorAll("p")).find(function (p) {
      return p.textContent.trim() === "エビデンス" &&
        !p.closest("header") && !p.closest("footer") && !p.closest("dialog");
    });
  }
  if (heroTitle) { heroTitle.textContent = "販売店様の声"; }

  desc.textContent = "植物由来ケイ素（シリカ）商品を実際にお取り扱いいただいている販売店様より、率直な声をお寄せいただきました。";
  desc.style.textAlign = "left";

  function qa(question, answer) {
    return (
      '<li class="qa-item">' +
      '<div class="qa-q">' + question + "</div>" +
      '<div class="qa-a">' + answer + "</div>" +
      "</li>"
    );
  }

  function shop(name, meta, lead, qaList) {
    return (
      '<div class="shop">' +
      '<h3 class="shop-name">' + name + "</h3>" +
      '<div class="shop-meta">' + meta + "</div>" +
      (lead ? '<p class="shop-lead">' + lead + "</p>" : "") +
      '<ul class="qa-list">' + qaList.join("") + "</ul>" +
      "</div>"
    );
  }

  var shopsHtml = [
    shop(
      "じゅえる花子",
      "住所：〒660-0884　兵庫県尼崎市神田中通5丁目197-5<br>電話：06-6411-7124<br>URL：<a href=\"http://j-hanako.jp\" target=\"_blank\" rel=\"noreferrer\">http://j-hanako.jp</a>",
      "",
      [
        qa("クレディーと出会ったキッカケ", "ケイ素に出会ったのは１本のメールでした。沢山くる宣伝メールの中にいつもはうもれているのですが、なぜかその日は気に成りました。しかも尼崎の住所で近隣ということもあり一度話をお聞きしようと訪問しました。植物性ということで、まず体験から始めました。"),
        qa("なぜクレディーにＯＥＭを依頼しようと思いましたか？", "飲めば飲むほど体にいいので忘れずに飲んでいます。アトピーの肌もどんどんきれいになり、その後もきれいなまま継続しています。犬の飲み水にも入れています。"),
        qa("植物性ケイ素商品の良い所。（ご利用者さまの声など）", "一年近くお客様にも使用していただき数々の喜びの声をいただきました。血糖値がさがった／鬱の改善／髪の毛がつやつや　行きつけの美容師からびっくりされた／爪が強くなった／肌がつるつる　若返った／長年の花粉症の劇的改善／頑固な冷え症改善／疲れしらず／夏バテ知らず／便秘改善。まだまだ沢山です。"),
        qa("これからクレディーに望むこと。", "あとはケイ素入れたキャンディーを作ってみたいと思います。のどにも口内にもいいので、ぜひお願いします。"),
        qa("メッセージ", "尼崎で３０年近く地域一番宝石店として地元の人に愛され応援していただきました。『元気で　明るく　宝石を通して幸せを』そのモットーどおりに、元気で明るい人のご来店が絶えない店です。")
      ]
    ),
    shop(
      "杜のカフェ　シャナ",
      "遠藤様<br>住所：〒019-1108 秋田県横手市山内土渕字小目倉沢43-2<br>電話：0182-23-6325<br>URL：<a href=\"http://aki-ichi.com/cafe_syana/\" target=\"_blank\" rel=\"noreferrer\">http://aki-ichi.com/cafe_syana/</a>",
      "山と渓谷に囲まれた秋田県横手市山内地方。秋田杉の山あいにひっそりと佇む小さな「杜のカフェ シャナ」奥羽山地から湧き出す清らかな水。丹精込めて育てられた山のめぐみをひとつひとつ心を込めて、からだに嬉しいメニュー作りをしています。",
      [
        qa("クレディーと出会ったキッカケ", "以前からケイ素には大変興味を持ち、その良さを知っていました。ネットで調べていると、私の求めていたケイ素はこれだ！と直感で感じました。"),
        qa("販売店になって良かったこと。", "ケイ素の効果を勉強する機会が出来て、それを体験したことで多くの人に健康になれることを伝えられるようになりました。"),
        qa("植物性ケイ素商品の良い所。（ご利用者さまの声など）", "ケイ素を飲んで実感したのは髪の毛のボリュームが無くなっていたのが、コシが出てふわっとなりました。主人と私ふたりとも風邪をひかなくなりました。主人の糖尿病にも良いようです。これからいろいろな変化が期待出来そうで楽しみです。"),
        qa("これからクレディーに望むこと。", "「ライスシリカ」をＰＲして多くの人に知ってもらいたいことと、より良い商品の開発をお願いしたいです。"),
        qa("メッセージ", "病気で苦しむことのない世界になると良いですね！")
      ]
    ),
    shop(
      "Karada Renovation",
      "森實様<br>住所：〒663-8204　兵庫県西宮市高松町7-29 エレナ西宮北口101<br>電話：0798-77-8635<br>URL：<a href=\"https://karada-renovation.amebaownd.com/\" target=\"_blank\" rel=\"noreferrer\">https://karada-renovation.amebaownd.com/</a>",
      "西宮北口駅徒歩4分の隠れ家的整体サロンです。「整体のイメージを変える」をコンセプトに店づくりをしました。一見美容室かと思うようなオシャレな空間を是非ご堪能下さい。",
      [
        qa("クレディーと出会ったキッカケ", "営業担当の方からライスシリカのお話を聞き凄く興味を持ったのが始まりです。今でもその担当の方にはかなりお世話になっており、親切丁寧なご対応にいつも感激しております。"),
        qa("なぜ販売店になろうと思いましたか？", "ライスシリカシリーズの効果とケイ素の重要性をもっと多くの方に知ってほしいと思ったのがひとつ。もうひとつが、営業担当の方の人柄です。"),
        qa("販売店になって良かったこと。", "整体＝健康、ケイ素＝健康という感じでお客様のイメージが結びつきやすく、お身体の外面（骨格や筋肉）の調整は整体で！内面（体内環境や栄養面）の調整はケイ素で補う！という方に大変喜ばれております。"),
        qa("植物性ケイ素商品の良い所。（ご利用者さまの声など）", "まずは何と言ってもその効果です！顧客様に糖尿病でお悩みの方がおり、その方にお試しいただいたところ、2ヵ月で数値に変化がみられたとお喜びの声をいただきました。今まで色んなものを試しては効果がなくガッカリということを繰り返してこられたそうで半ば諦めていたとのことでしたが、この植物性ケイ素（ライスシリカプレミアム）と出会い気持ちが一転しもっと健康になるぞ！と前向きになられました。今では毎月定期購入をしていただいております。"),
        qa("これからクレディーに望むこと。", "これからも皆様の健康のためにより良い商品の開発にご尽力いただければと思います。"),
        qa("メッセージ", "いつもおせわになっております。今後ともどうぞよろしくお願い致します。")
      ]
    )
  ].join("");

  var wrap = document.createElement("div");
  wrap.className = "voice-legacy";
  wrap.innerHTML = shopsHtml;

  oldGrid.parentNode.insertBefore(wrap, oldGrid.nextSibling);
});
