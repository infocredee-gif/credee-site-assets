海外市場開拓パートナー募集　GitHub用データ
更新日：2026年11月2日

使い方
このフォルダの中身を、そのままGitHubのリポジトリのルートへアップロードしてください。
index.htmlとassetsフォルダが同じ階層にある状態を維持します。
ZIPファイルそのものをアップロードするのではなく、解凍した中身をアップロードします。
HTML・CSS・JavaScript・画像で構成した静的サイトです。npmのインストールやビルドは不要です。
index.htmlをブラウザーで開くと、完成見本を確認できます。

GitHubにファイルを保存する手順
GitHubでリポジトリを作成するか、保存先の既存リポジトリを開きます。
既存サイトのコードがある場合は、このデータ専用のリポジトリを使うと管理できます。
「Add file」→「Upload files」で、このフォルダ内のファイルとassets・studioフォルダを追加します。
変更内容を確認してコミットします。
ファイルの保管と制作担当者への受け渡しだけであれば、Pagesの設定は不要です。
このデータの作成時点ではGitHubへのアップロードと公開設定は実行していません。

完成見本をGitHub Pagesで表示する場合
リポジトリの「Settings」→「Pages」を開きます。
「Source」は「Deploy from a branch」を選択します。
アップロードしたブランチ（通常はmain）と「/(root)」を選択して保存します。
GitHub側に表示されたPagesのURLで表示を確認します。
Pagesは通常インターネットに公開されるため、外部に完成見本を見せる場合に利用してください。
Pagesの利用条件はGitHubのプランとリポジトリの公開範囲によります。
.nojekyllを同梱しています。アップロード時に隠しファイルが選択されない場合は、GitHub上で同名の空ファイルを追加できます。

検索エンジン向けの設定
GitHub用index.htmlはSTUDIO本番とは別の確認用見本なので、noindex,followを設定しています。
本文・見出し・表示デザインは完成見本と同じです。
旧Sitesの非公開URLを使うOGP画像URL・og:urlはGitHub用HTMLから外しています。
本番のタイトル・説明文・OGP画像の指定方法はstudio/SEO-settings.txtを参照します。
STUDIOの公開ページには、見本用のnoindexを転記しないでください。

STUDIOへの実装
GitHubにHTMLを登録しただけでは、STUDIO内にページは自動作成されません。
STUDIOで文章を編集できるように、Box・テキスト・画像を配置して構成します。
studio/STUDIO-implementation-guide.txtの順序・寸法に合わせて配置してください。
studio/text-data.tsvは30ブロックの原文、studio/elements.tsvは表示順とHTMLタグです。
studio/image-alt.tsvとstudio/asset-map.tsvは画像と説明の対応表です。
studio/links.tsvはリンク先、studio/seo-settings.tsvは公開時のページ設定です。
これらは実装用の資料です。TSVを読み込むだけでページが生成される専用形式ではありません。
GitHub Pagesをページ全体のiframeとして埋め込む方式は、この実装手順には含めていません。

変更していない内容
原稿の文章・構成、修正済みの各画像、商品の比率、4カテゴリ共通の画像枠、特許資料の内容を維持しています。
特許証は生成し直さず、既存画像をそのまま使用しています。

公式資料（確認日：2026年11月2日）
GitHubへのファイル追加
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
GitHub Pagesの公開元設定
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
StudioでHTMLを利用する場合の仕様
https://help.studio.design/ja/articles/8864939
