(() => {
  const locales = { zh: '中文', en: 'English', ja: '日本語', ko: '한국어' };
  const rows = [
    ['译镜 TransMirror｜网页与本地文档镜像翻译','TransMirror | Web and Local Document Translation','トランスミラー｜ウェブとローカル文書の対訳表示','트랜스미러 | 웹 및 로컬 문서 번역'],
    ['译镜支持网页、PDF、DOCX 与图片的原文译文并排阅读。本地打开文件、本地 OCR 识别，按需点击翻译或全篇翻译；翻译文字由所选引擎处理。','TransMirror displays websites, PDFs, DOCX files, and images beside their translations. Open files and run OCR locally; click to translate selected text or translate the whole file using your chosen engine.','トランスミラーはウェブページ、PDF、DOCX、画像の原文と翻訳を並べて表示します。ファイルの読み取りとOCRは端末上で行い、クリックした部分または全文を選択した翻訳エンジンで翻訳できます。','트랜스미러는 웹페이지, PDF, DOCX, 이미지의 원본과 번역을 나란히 보여줍니다. 파일 열기와 OCR은 기기에서 처리하고, 선택한 부분 또는 전체를 지정한 번역 엔진으로 번역합니다.'],
    ['本地打开 PDF、DOCX 与图片，原文译文并排对照；本地 OCR 识别，按需点击或全篇翻译。','Open PDFs, DOCX files, and images locally. Compare source and translation side by side, with local OCR and click or full-file translation.','PDF、DOCX、画像を端末上で開き、原文と翻訳を並べて比較。ローカルOCRとクリック翻訳・全文翻訳に対応。','PDF, DOCX, 이미지를 기기에서 열고 원본과 번역을 나란히 비교하세요. 로컬 OCR과 클릭 또는 전체 번역을 지원합니다.'],
    ['文档翻译','Document translation','文書翻訳','문서 번역'],
    ['网页、PDF、Word 与图片，都能在原文旁阅读译文。文件从本机打开，OCR 在本机识别，跨语言阅读更顺手。','Read translations beside the original on websites, PDFs, Word files, and images. Open files and recognize image text on your device.','ウェブページ、PDF、Word文書、画像の原文の横で翻訳を読めます。ファイルの読み取りと画像文字の認識は端末上で行います。','웹페이지, PDF, Word 문서, 이미지의 원본 옆에서 번역을 읽어 보세요. 파일 열기와 이미지 문자 인식은 기기에서 처리합니다.'],
    ['把本地文档，放进双语镜像。','Bring local documents into a bilingual mirror.','ローカル文書を対訳表示に。','로컬 문서를 이중 언어 화면으로.'],
    ['无需复制整页文字。打开文件，左侧看原文，右侧看译文。','No need to copy an entire page. Open a file and see the original on the left and translation on the right.','ページ全体をコピーする必要はありません。ファイルを開けば、左に原文、右に翻訳を表示します。','페이지 전체를 복사할 필요가 없습니다. 파일을 열면 왼쪽에 원본, 오른쪽에 번역이 표시됩니다.'],
    ['阅读论文、报告、说明书和图片文字，始终有原文可对照。','Keep the source in view while reading papers, reports, manuals, and text in images.','論文、レポート、説明書、画像内の文字を、いつでも原文と照らし合わせて読めます。','논문, 보고서, 설명서, 이미지 속 글을 읽을 때 언제든 원본과 비교할 수 있습니다.'],
    ['文件留在本机，阅读更安心','Your source file stays on your device','元のファイルは端末に保持','원본 파일은 기기에 유지'],
    ['直接添加 PDF、DOCX 与图片。源文件在本机读取和解析，不会因加入工作区而复制或上传文件本体。','Add PDFs, DOCX files, and images directly. The source is read and parsed locally; adding it to a workspace does not copy or upload the file itself.','PDF、DOCX、画像を直接追加できます。元のファイルは端末上で読み取り・解析され、ワークスペースへの追加によってファイル本体がコピーまたはアップロードされることはありません。','PDF, DOCX, 이미지를 바로 추가할 수 있습니다. 원본 파일은 기기에서 읽고 분석하며 작업 공간에 추가해도 파일 자체가 복사되거나 업로드되지 않습니다.'],
    ['点选重点，或翻译全篇','Translate a selection or the whole file','必要な部分、または全文を翻訳','필요한 부분 또는 전체 번역'],
    ['在右侧镜像点击对应段落或文字区域，只翻译需要的内容；选择全篇模式，则打开文件后翻译整份内容。','Click a paragraph or text area in the right mirror to translate only what you need. In full-document mode, the entire file is translated when opened.','右側の翻訳ビューで段落や文字の領域をクリックすると、必要な部分だけ翻訳できます。全文モードではファイルを開いた後に全体を翻訳します。','오른쪽 번역 화면에서 문단이나 문자 영역을 클릭해 필요한 부분만 번역하세요. 전체 번역 모드에서는 파일을 열면 전체 내용을 번역합니다.'],
    ['图片文字，也能对照阅读','Read text in images side by side','画像内の文字も対訳表示','이미지 속 글도 나란히 읽기'],
    ['本地 OCR 版可在设备上识别图片和扫描 PDF 的文字。识别语言与翻译目标语言分别设置，英语和简体中文随安装包提供。','The local OCR edition recognizes text in images and scanned PDFs on your device. Set recognition and translation target languages separately; English and Simplified Chinese are included.','ローカルOCR版は画像やスキャンPDFの文字を端末上で認識します。認識言語と翻訳先言語を別々に設定でき、英語と簡体字中国語を同梱しています。','로컬 OCR 버전은 이미지와 스캔 PDF의 문자를 기기에서 인식합니다. 인식 언어와 번역 대상 언어를 따로 설정할 수 있으며 영어와 중국어 간체가 포함됩니다.'],
    ['本地处理指文件读取、解析与 OCR 识别。生成译文时，提取的文字会发送给你选择的翻译引擎；源文件本体不会上传。','Local processing covers file reading, parsing, and OCR. To generate a translation, extracted text is sent to your selected translation engine; the source file itself is not uploaded.','ローカル処理はファイルの読み取り、解析、OCR認識を指します。翻訳時には抽出した文字が選択した翻訳エンジンに送信されますが、元のファイル本体はアップロードされません。','로컬 처리는 파일 읽기, 분석, OCR 인식을 뜻합니다. 번역문을 만들 때 추출된 텍스트는 선택한 번역 엔진으로 전송되지만 원본 파일 자체는 업로드되지 않습니다.'],
    ['文档翻译会上传源文件吗？','Does document translation upload the source file?','文書翻訳で元のファイルはアップロードされますか？','문서 번역 시 원본 파일이 업로드되나요?'],
    ['网页翻译处理页面中可提取的文字；网页内嵌图片和部分高度动态内容可能无法直接翻译。PDF、DOCX 与本机图片可通过','Web translation handles extractable page text; embedded images and some highly dynamic content may not translate directly. Open PDFs, DOCX files, and local images separately in the','ウェブ翻訳はページから抽出できる文字を処理します。埋め込み画像や一部の動的コンテンツは直接翻訳できない場合があります。PDF、DOCX、ローカル画像は','웹 번역은 페이지에서 추출할 수 있는 텍스트를 처리합니다. 삽입된 이미지와 일부 동적 콘텐츠는 직접 번역되지 않을 수 있습니다. PDF, DOCX, 로컬 이미지는'],
    ['文件工作区','file workspace','ファイルワークスペース','파일 작업 공간'],
    ['单独打开；本地 OCR 版还支持识别图片和扫描 PDF。网站访问仍取决于登录状态、地区限制和权限。','; the local OCR edition also recognizes text in images and scanned PDFs. Website access still depends on login, regional restrictions, and permissions.','で個別に開けます。ローカルOCR版は画像やスキャンPDFの文字も認識します。サイトへのアクセスはログイン、地域制限、権限によって異なります。','에서 별도로 열 수 있습니다. 로컬 OCR 버전은 이미지와 스캔 PDF의 글도 인식합니다. 웹사이트 접근은 로그인, 지역 제한, 권한에 따라 달라집니다.'],
    ['源文件在本机读取、解析；OCR 版在本机识别图片文字。生成译文时，提取的文字会发送给所选翻译引擎，文件本体不会上传。','The source file is read and parsed locally; the OCR edition recognizes image text on your device. Extracted text is sent to your selected translation engine, but the file itself is not uploaded.','元のファイルは端末上で読み取り・解析され、OCR版は画像内の文字も端末上で認識します。翻訳時には抽出した文字が選択した翻訳エンジンに送信されますが、ファイル本体はアップロードされません。','원본 파일은 기기에서 읽고 분석하며 OCR 버전은 이미지 문자도 기기에서 인식합니다. 번역 시 추출된 텍스트는 선택한 번역 엔진으로 전송되지만 파일 자체는 업로드되지 않습니다.'],
    ['译镜 TransMirror｜网页翻译软件与企业出海跨语言沟通工具','TransMirror | Web translation and global business communication','トランスミラー｜ウェブ翻訳と海外ビジネスコミュニケーション','트랜스미러 | 웹 번역 및 글로벌 비즈니스 소통'],
    ['网页翻译软件｜任意网站双语对照阅读与多网站翻译 - 译镜 TransMirror','Web Translation Software | Bilingual and Multi-site Translation - TransMirror','ウェブ翻訳ソフト｜バイリンガル表示と複数サイト翻訳 - トランスミラー','웹 번역 소프트웨어 | 이중 언어 및 다중 사이트 번역 - 트랜스미러'],
    ['企业出海翻译｜跨境电商与外贸客户跨语言沟通 - 译镜 TransMirror','Global Business Translation | Cross-language Customer Communication - TransMirror','海外ビジネス翻訳｜越境ECと多言語顧客対応 - トランスミラー','글로벌 비즈니스 번역 | 크로스보더 고객 소통 - 트랜스미러'],
    ['译镜 TransMirror','TransMirror','トランスミラー','트랜스미러'],
    ['AI+跨语言翻译工作台','AI-powered cross-language translation workspace','AIクロスランゲージ翻訳ワークスペース','AI 다국어 번역 작업 공간'],
    ['跳转到主要内容','Skip to main content','メインコンテンツへ移動','주요 콘텐츠로 이동'],
    ['展开导航','Open navigation','ナビゲーションを開く','탐색 메뉴 열기'],
    ['收起导航','Close navigation','ナビゲーションを閉じる','탐색 메뉴 닫기'],
    ['主导航','Main navigation','メインナビゲーション','주요 탐색'],
    ['产品总览','Overview','製品概要','제품 개요'],
    ['产品功能','Features','製品機能','제품 기능'],
    ['企业出海','Global business','海外ビジネス','글로벌 비즈니스'],
    ['网页学习','Web learning','ウェブ学習','웹 학습'],
    ['网页翻译','Web translation','ウェブ翻訳','웹 번역'],
    ['价格方案','Pricing','料金プラン','요금제'],
    ['联系我们','Contact us','お問い合わせ','문의하기'],
    ['常见问题','FAQ','よくある質問','자주 묻는 질문'],
    ['下载客户端','Download app','アプリをダウンロード','앱 다운로드'],
    ['联系官方','Contact us','公式窓口に連絡','공식 문의'],
    ['译镜首页','TransMirror home','トランスミラー ホーム','트랜스미러 홈'],
    ['译镜客户端整体界面：网站工作区、原始网页、翻译内容和 AI 对话','TransMirror interface with workspaces, original page, translation, and AI chat','ワークスペース、原文、翻訳、AIチャットを表示するトランスミラー画面','작업 공간, 원본 웹페이지, 번역 내용 및 AI 대화가 표시된 트랜스미러 화면'],
    ['译镜网页原文与中文译文逐段对应的学习界面示意','TransMirror learning view with aligned original and translated paragraphs','原文と翻訳を段落ごとに対応表示するトランスミラー学習画面','원문과 번역문을 문단별로 나란히 보여주는 트랜스미러 학습 화면'],
    ['译镜连接多个海外网站并翻译客户消息的动画示意','Animation of TransMirror connecting international websites and translating customer messages','複数の海外サイトに接続し顧客メッセージを翻訳するトランスミラーのアニメーション','여러 해외 웹사이트를 연결하고 고객 메시지를 번역하는 트랜스미러 애니메이션'],
    ['从网页原文到中文翻译再到回复辅助的流程示意','Flow from original web content to translation and reply assistance','ウェブ原文から翻訳、返信支援までの流れ','웹 원문에서 번역과 답변 지원으로 이어지는 흐름'],
    ['让语言不再是距离。','Language should never keep us apart.','言葉の壁を、距離にしない。','언어가 더 이상 거리가 되지 않도록.'],
    ['关于与常见问题','About & FAQ','概要・よくある質問','소개 및 FAQ'],
    ['正在内测 · 新用户注册免费送 5 万字符','Beta · New users receive 50,000 translation characters','ベータ版 · 新規登録で翻訳50,000文字を無料提供','베타 · 신규 가입 시 번역 50,000자 무료 제공'],
    ['正在内测 · 新用户注册免费送5万字符','Beta · New users receive 50,000 translation characters','ベータ版 · 新規登録で翻訳50,000文字を無料提供','베타 · 신규 가입 시 번역 50,000자 무료 제공'],
    ['译镜 Windows 内测现已开启','TransMirror for Windows is now in beta','トランスミラー Windows版ベータ公開中','트랜스미러 Windows 베타 출시'],
    ['一个客户端，','One app,','1つのアプリで、','하나의 앱으로,'],
    ['读懂网页，','understand the web,','ウェブを理解し、','웹을 이해하고,'],
    ['也连接世界。','and connect with the world.','世界とつながる。','세상과 연결하세요.'],
    ['添加常用网站，在原文旁查看译文；理解海外客户消息，并用 AI 辅助组织更自然的回复。','Add your favorite sites, read translations beside the original, understand overseas customers, and use AI to craft natural replies.','よく使うサイトを追加し、原文の横で翻訳を確認。海外顧客のメッセージを理解し、AIで自然な返信を作成できます。','자주 쓰는 사이트를 추가하고 원문 옆에서 번역을 확인하세요. 해외 고객의 메시지를 이해하고 AI로 자연스러운 답변을 작성할 수 있습니다.'],
    ['新用户注册免费赠送','Free for new users','新規登録特典','신규 가입 무료 제공'],
    ['翻译字符','translation characters','翻訳文字','번역 문자'],
    ['下载 Windows 内测版','Download Windows beta','Windowsベータ版をダウンロード','Windows 베타 다운로드'],
    ['查看产品能力 ↓','Explore features ↓','機能を見る ↓','기능 보기 ↓'],
    ['主页','Home','ホーム','홈'],
    ['工作区','Workspaces','ワークスペース','작업 공간'],
    ['拖动可调整工作区顺序','Drag to reorder workspaces','ドラッグして並べ替え','드래그하여 작업 공간 순서 변경'],
    ['研究学习','Research','研究・学習','연구 및 학습'],
    ['知识阅读','Knowledge','知識リーディング','지식 읽기'],
    ['客户沟通','Customer chat','顧客対応','고객 소통'],
    ['添加网站','Add website','サイトを追加','웹사이트 추가'],
    ['＋ 添加网站','＋ Add website','＋ サイトを追加','＋ 웹사이트 추가'],
    ['♢ 工作区数据保存在本机','♢ Workspace data is stored locally','♢ ワークスペースデータは端末内に保存','♢ 작업 공간 데이터는 기기에 저장됩니다'],
    ['个人工作空间 /','Personal workspace /','個人ワークスペース /','개인 작업 공간 /'],
    ['个人工作空间　/','Personal workspace　/','個人ワークスペース　/','개인 작업 공간　/'],
    ['• 双语阅读','• Bilingual reading','• バイリンガル表示','• 이중 언어 읽기'],
    ['◌ 独立会话','◌ Separate session','◌ 独立セッション','◌ 독립 세션'],
    ['⌕ 搜索或开始新聊天','⌕ Search or start a new chat','⌕ 検索または新しいチャット','⌕ 검색 또는 새 채팅 시작'],
    ['⌕　搜索或开始新聊天','⌕　Search or start a new chat','⌕　検索または新しいチャット','⌕　검색 또는 새 채팅 시작'],
    ['⌂ 主页','⌂ Home','⌂ ホーム','⌂ 홈'],
    ['⌂　主页','⌂　Home','⌂　ホーム','⌂　홈'],
    ['工作区 3','Workspaces 3','ワークスペース 3','작업 공간 3'],
    ['工作区　3','Workspaces　3','ワークスペース　3','작업 공간　3'],
    ['工作区数据保存在本机','Workspace data is stored locally','ワークスペースデータは端末内に保存','작업 공간 데이터는 기기에 저장됩니다'],
    ['个人账户','Personal account','個人アカウント','개인 계정'],
    ['个人工作空间','Personal workspace','個人ワークスペース','개인 작업 공간'],
    ['双语阅读','Bilingual reading','バイリンガル表示','이중 언어 읽기'],
    ['原始网页','Original page','元のウェブページ','원본 웹페이지'],
    ['独立会话','Separate session','独立セッション','독립 세션'],
    ['修复网页数据','Repair website data','ウェブデータを修復','웹사이트 데이터 복구'],
    ['搜索或开始新聊天','Search or start a new chat','検索または新しいチャット','검색 또는 새 채팅 시작'],
    ['新的业务消息……','New business message…','新しいビジネスメッセージ…','새 비즈니스 메시지…'],
    ['回复客户消息 🎙','Reply to customer 🎙','顧客に返信 🎙','고객에게 답장 🎙'],
    ['回复客户消息　　🎙','Reply to customer　　🎙','顧客に返信　　🎙','고객에게 답장　　🎙'],
    ['译写已开启 · zh → en · 翻译后确认','Translation composer on · zh → en · Review before sending','翻訳入力オン · zh → en · 送信前に確認','번역 작성 켜짐 · zh → en · 전송 전 확인'],
    ['翻译内容','Translation','翻訳内容','번역 내용'],
    ['简体中文','Simplified Chinese','簡体字中国語','중국어 간체'],
    ['手动局部：点击聊天气泡翻译','Manual: click a chat bubble to translate','手動翻訳：チャット吹き出しをクリック','수동 번역: 채팅 말풍선을 클릭하세요'],
    ['✓ 已翻译 4 个内容块','✓ 4 blocks translated','✓ 4件を翻訳済み','✓ 콘텐츠 블록 4개 번역됨'],
    ['业务客户','Business customer','ビジネス顧客','비즈니스 고객'],
    ['你好','Hello','こんにちは','안녕하세요'],
    ['你来自哪里？','Where are you from?','どちらのご出身ですか？','어디에서 오셨나요?'],
    ['可以把产品目录发给我吗？','Could you send me the catalog?','製品カタログを送っていただけますか？','제품 카탈로그를 보내 주실 수 있나요?'],
    ['你们支持全球配送吗？','Do you ship worldwide?','世界各地へ配送できますか？','전 세계 배송이 가능한가요?'],
    ['围绕当前网页总结需求、组织回复','Summarize needs and draft replies using this page','現在のページを基に要件を整理し、返信を作成','현재 페이지를 바탕으로 요구사항 요약 및 답변 작성'],
    ['# 总结客户需求','# Summarize needs','# 顧客ニーズを要約','# 고객 요구 요약'],
    ['# 帮我回复','# Draft a reply','# 返信を作成','# 답변 작성'],
    ['# 提取订单信息','# Extract order details','# 注文情報を抽出','# 주문 정보 추출'],
    ['界面为功能演示。网站加载和可翻译内容取决于网站结构、登录状态与访问权限。','This interface is a feature demo. Site loading and translatable content depend on site structure, login status, and access permissions.','この画面は機能デモです。サイトの読み込みと翻訳可能な内容は、構造、ログイン状態、アクセス権限によって異なります。','이 화면은 기능 데모입니다. 사이트 로딩 및 번역 가능한 콘텐츠는 사이트 구조, 로그인 상태, 접근 권한에 따라 달라집니다.'],
    ['企业出海沟通神器。','A powerful tool for global business communication.','海外ビジネスコミュニケーションの強力なツール。','글로벌 비즈니스 소통을 위한 강력한 도구.'],
    ['任何可以通过网页访问的聊天工具都能添加到工作区。','Add any browser-based chat tool to your workspace.','ブラウザで使えるチャットツールをワークスペースに追加できます。','웹에서 이용 가능한 모든 채팅 도구를 작업 공간에 추가할 수 있습니다.'],
    ['读懂客户、自由回复，再让 AI 帮你把表达变得更自然。','Understand customers, reply freely, and let AI make your message more natural.','顧客を理解し、自由に返信。AIがより自然な表現に整えます。','고객을 이해하고 자유롭게 답변하세요. AI가 더 자연스러운 표현을 도와줍니다.'],
    ['客户沟通工作区','Customer communication workspace','顧客対応ワークスペース','고객 소통 작업 공간'],
    ['客户服务网页','Customer service site','カスタマーサービスサイト','고객 서비스 웹사이트'],
    ['＋ 添加聊天网站','＋ Add chat website','＋ チャットサイトを追加','＋ 채팅 웹사이트 추가'],
    ['Translation · 简体中文','Translation · Chinese','Translation · 中国語','Translation · 중국어'],
    ['当然可以，我会整理报价与运输方案。','Of course. I’ll prepare the quote and shipping plan.','もちろんです。見積もりと配送プランをまとめます。','물론입니다. 견적과 배송 방안을 정리하겠습니다.'],
    ['实时理解','Understand in real time','リアルタイム理解','실시간 이해'],
    ['可以为 500 件产品准备一份报价吗？','Could you prepare a quotation for 500 units?','500個分の見積書を作成できますか？','500개 제품에 대한 견적을 준비해 주실 수 있나요?'],
    ['我们还需要配送到新加坡。','We also need delivery to Singapore.','シンガポールへの配送も必要です。','싱가포르 배송도 필요합니다.'],
    ['✦ AI 回复优化','✦ AI reply refinement','✦ AI返信の最適化','✦ AI 답변 다듬기'],
    ['让表达更专业、更符合客户语境','Make replies professional and appropriate for the customer','よりプロフェッショナルで顧客に合う表現へ','더 전문적이고 고객 상황에 맞는 표현으로'],
    ['聊天网站自由添加','Add chat websites freely','チャットサイトを自由に追加','채팅 웹사이트 자유롭게 추가'],
    ['不同平台和账号，分别建立工作区。','Create separate workspaces for each platform and account.','プラットフォームやアカウントごとにワークスペースを作成。','플랫폼과 계정별로 작업 공간을 만드세요.'],
    ['原文译文同步阅读','Read original and translation together','原文と翻訳を並べて読む','원문과 번역을 함께 읽기'],
    ['保留对话上下文，理解每一句客户需求。','Keep conversation context and understand every customer request.','会話の文脈を保ち、顧客の要望を一つずつ理解。','대화 맥락을 유지하며 고객의 모든 요구를 이해하세요.'],
    ['中文回复，翻译后发送','Reply in Chinese, translate, then send','中国語で返信し、翻訳して送信','중국어로 답변 후 번역하여 전송'],
    ['先确认意思，再把回复转换成目标语言。','Confirm the meaning, then convert the reply to the target language.','意味を確認してから、返信を目的言語に変換。','의미를 확인한 뒤 답변을 대상 언어로 변환하세요.'],
    ['AI 优化语言','AI language refinement','AIによる表現改善','AI 언어 다듬기'],
    ['辅助调整语气、措辞和商务表达。','Refine tone, wording, and business language.','口調、言葉選び、ビジネス表現を整えます。','어조, 단어 선택, 비즈니스 표현을 다듬습니다.'],
    ['网页阅读与学习神器。','A powerful tool for web reading and learning.','ウェブ閲覧と学習のための強力なツール。','웹 읽기와 학습을 위한 강력한 도구.'],
    ['原网页在左，中文译文在右。','Original on the left, Chinese translation on the right.','左に原文、右に中国語訳を表示。','왼쪽에는 원문, 오른쪽에는 중국어 번역을 표시합니다.'],
    ['段落与段落相互对应，查术语、读论文、学语言都更方便。','Matching paragraphs make it easier to check terms, read papers, and learn languages.','段落ごとに対応するため、用語確認、論文読解、語学学習がより簡単です。','문단별로 대응되어 용어 확인, 논문 읽기, 언어 학습이 더 편리합니다.'],
    ['聊天网站','Chat website','チャットサイト','채팅 웹사이트'],
    ['沟通协作','Communication','コミュニケーション','소통 및 협업'],
    ['搜索　提交　捐赠　登录','Search　Submit　Donate　Log in','検索　投稿　寄付　ログイン','검색　제출　후원　로그인'],
    ['搜索 提交 捐赠 登录','Search Submit Donate Log in','検索 投稿 寄付 ログイン','검색 제출 후원 로그인'],
    ['物理学','Physics','物理学','물리학'],
    ['天体物理学','Astrophysics','天体物理学','천체물리학'],
    ['凝聚态物理','Condensed Matter','物性物理学','응집물질물리학'],
    ['数学','Mathematics','数学','수학'],
    ['代数几何','Algebraic Geometry','代数幾何学','대수기하학'],
    ['计算机科学','Computer Science','コンピューター科学','컴퓨터 과학'],
    ['计算研究资料库','Computing Research Repository','計算機研究リポジトリ','컴퓨팅 연구 저장소'],
    ['总结全文　·　核心贡献　·　解释注意力机制','Summarize · Key contributions · Explain attention','全文要約 · 主な貢献 · Attentionの解説','전체 요약 · 핵심 기여 · 어텐션 설명'],
    ['总结全文 · 核心贡献 · 解释注意力机制','Summarize · Key contributions · Explain attention','全文要約 · 主な貢献 · Attentionの解説','전체 요약 · 핵심 기여 · 어텐션 설명'],
    ['新的、最近、搜索 · 星系天体物理学；宇宙学和非银河天体物理学；地球和行星天体物理学','New, recent, search · Astrophysics categories','新着・最近・検索 · 天体物理学カテゴリ','신규, 최근, 검색 · 천체물리학 분야'],
    ['新的、最近、搜索 · 无序系统与神经网络；材料科学；超导性','New, recent, search · Condensed matter categories','新着・最近・検索 · 物性物理学カテゴリ','신규, 최근, 검색 · 응집물질물리학 분야'],
    ['· 偏微分方程分析；范畴论；组合学；微分几何；逻辑','· Mathematics categories','・数学カテゴリ','· 수학 분야'],
    ['· 人工智能；计算机视觉；密码学与安全','· Computer science categories','・コンピューター科学カテゴリ','· 컴퓨터 과학 분야'],
    ['发','Send','送信','전송'], ['译','Tr','訳','번역'], ['中','Zh','中','중'],
    ['逐段对应','Paragraph alignment','段落対応','문단 대응'],
    ['保留原文','Keep original','原文を保持','원문 유지'],
    ['智能局部翻译','Smart partial translation','スマート部分翻訳','스마트 부분 번역'],
    ['术语对照','Term comparison','用語対照','용어 대조'],
    ['AI 辅助理解','AI-assisted understanding','AIによる理解支援','AI 이해 지원'],
    ['你的声音，让译镜更好。','Your voice makes TransMirror better.','あなたの声がトランスミラーをより良くします。','여러분의 의견이 트랜스미러를 더 좋게 만듭니다.'],
    ['内测反馈、产品建议、企业定制或合作交流，期待与你联系。','Contact us for beta feedback, product suggestions, enterprise customization, or partnerships.','ベータ版へのご意見、製品提案、企業向けカスタマイズ、提携についてお気軽にご連絡ください。','베타 피드백, 제품 제안, 기업 맞춤화 또는 협업 문의를 기다립니다.'],
    ['微信联系','WeChat','WeChat','WeChat'],
    ['使用微信扫一扫，添加译镜。','Scan with WeChat to add TransMirror.','WeChatでスキャンしてトランスミラーを追加。','WeChat으로 스캔하여 트랜스미러를 추가하세요.'],
    ['查看二维码原图 ↗','View full QR code ↗','QRコード原寸表示 ↗','QR 코드 원본 보기 ↗'],
    ['扫码联系，或点击账号开启对话。','Scan the code or click the account to start a chat.','コードを読み取るか、アカウントをクリックして会話を開始。','코드를 스캔하거나 계정을 클릭하여 대화를 시작하세요.'],
    ['邮箱联系','Email','メール','이메일'],
    ['内测反馈 · 使用咨询 · 合作交流','Beta feedback · Support · Partnerships','ベータ版のご意見 · 利用相談 · 提携','베타 피드백 · 사용 문의 · 협업'],
    ['点击邮箱即可撰写邮件，也可以复制地址到常用邮箱发送。','Click the address to compose an email, or copy it into your email app.','アドレスをクリックしてメールを作成するか、コピーしてお使いのメールアプリから送信できます。','주소를 클릭해 이메일을 작성하거나 복사하여 사용하는 이메일 앱에서 보내세요.'],
    ['关于译镜与常见问题。','About TransMirror and FAQ.','トランスミラーについて・よくある質問。','트랜스미러 소개 및 자주 묻는 질문.'],
    ['了解产品，也帮助你安全完成下载和安装。','Learn about the product and how to download and install it safely.','製品と、安全なダウンロード・インストール方法をご案内します。','제품과 안전한 다운로드 및 설치 방법을 알아보세요.'],
    ['网页翻译软件','Web translation software','ウェブ翻訳ソフト','웹 번역 소프트웨어'],
    ['/ 网页翻译软件','/ Web translation','/ ウェブ翻訳','/ 웹 번역'],
    ['网页翻译不只是一键替换，','Web translation is more than one-click replacement—','ウェブ翻訳はワンクリック置換だけではありません。','웹 번역은 단순한 원클릭 대체가 아닙니다.'],
    ['原文与译文应该同时看见。','the original and translation should appear together.','原文と翻訳を同時に表示すべきです。','원문과 번역을 함께 볼 수 있어야 합니다.'],
    ['译镜支持把任意网站地址添加到工作区，集中管理多个网站，并以双语对照方式阅读网页内容。阅读海外资讯、技术文档、博客、论坛或在线沟通页面时，不必在原网页和翻译页面之间反复切换。','TransMirror lets you add any website to a workspace, manage multiple sites, and read pages bilingually. Read international news, technical documentation, blogs, forums, and online conversations without switching between the original and a translation page.','トランスミラーでは、任意のサイトをワークスペースに追加し、複数サイトを一元管理してバイリンガル表示で閲覧できます。海外ニュース、技術文書、ブログ、フォーラム、オンライン会話を読む際に、原文と翻訳ページを行き来する必要はありません。','트랜스미러에서는 모든 웹사이트를 작업 공간에 추가하고 여러 사이트를 한곳에서 관리하며 이중 언어로 읽을 수 있습니다. 해외 뉴스, 기술 문서, 블로그, 포럼, 온라인 대화를 원문과 번역 페이지 사이를 오가지 않고 확인하세요.'],
    ['查看产品界面示意 →','View product interface →','製品画面を見る →','제품 화면 보기 →'],
    ['适合正在寻找网页翻译、整页翻译、多网站翻译、双语对照阅读或技术文档翻译工具的用户。译镜强调保留原文上下文，并把常用网站放进统一工作区。','For anyone seeking web, full-page, multi-site, bilingual, or technical-document translation. TransMirror preserves the original context and brings frequently used sites into one workspace.','ウェブ翻訳、ページ全体翻訳、複数サイト翻訳、対訳表示、技術文書翻訳を求める方に適しています。トランスミラーは原文の文脈を保ち、よく使うサイトを1つのワークスペースにまとめます。','웹 번역, 전체 페이지 번역, 다중 사이트 번역, 이중 언어 읽기, 기술 문서 번역 도구를 찾는 분께 적합합니다. 트랜스미러는 원문 맥락을 유지하고 자주 쓰는 사이트를 하나의 작업 공간에 모읍니다.'],
    ['什么是译镜网页翻译？','What is TransMirror web translation?','トランスミラーのウェブ翻訳とは？','트랜스미러 웹 번역이란?'],
    ['传统网页翻译往往直接替换页面文字，遇到专业术语或复杂上下文时，用户很难快速回看原文。译镜采用“原网页 +译镜视图”的并排方式，在理解译文的同时保留原文依据。用户可以根据阅读任务选择全篇、智能局部或手动局部翻译。','Traditional web translation often replaces page text, making it hard to check the original when terminology or context is complex. TransMirror places the original page beside the translated view, preserving the source while you read. Choose full-page, smart partial, or manual partial translation for each task.','従来のウェブ翻訳はページの文字を置き換えるため、専門用語や複雑な文脈では原文をすぐ確認できません。トランスミラーは「元のページ＋翻訳ビュー」を並べ、翻訳を読みながら原文を保持します。用途に応じて全文、スマート部分、手動部分翻訳を選べます。','기존 웹 번역은 페이지 문자를 대체하여 전문 용어나 복잡한 맥락에서 원문을 다시 확인하기 어렵습니다. 트랜스미러는 원본 페이지와 번역 보기를 나란히 배치해 번역을 읽으면서 원문 근거를 유지합니다. 전체, 스마트 부분, 수동 부분 번역을 선택할 수 있습니다.'],
    ['网页中的可提取文字会进入翻译流程；图片文字、扫描 PDF 和部分高度动态内容暂不属于通用翻译范围。网站是否可以正常打开，也取决于登录状态、地区限制和网站自身权限。','Extractable page text enters the translation flow. Text in images, scanned PDFs, and some highly dynamic content is currently outside general translation support. Site access also depends on login status, regional restrictions, and permissions.','ページから抽出できる文字が翻訳対象です。画像内文字、スキャンPDF、一部の高度に動的な内容は現在の一般翻訳対象外です。サイトの表示可否はログイン状態、地域制限、権限にも左右されます。','페이지에서 추출 가능한 텍스트가 번역됩니다. 이미지 속 텍스트, 스캔 PDF, 일부 동적 콘텐츠는 현재 일반 번역 범위에 포함되지 않습니다. 사이트 접근은 로그인 상태, 지역 제한, 권한에 따라 달라집니다.'],
    ['任意网站添加与多网站工作区','Add any website and manage multiple sites','任意サイトの追加と複数サイトのワークスペース','모든 웹사이트 추가 및 다중 사이트 작업 공간'],
    ['复制网站地址，为工作区命名并设置目标语言，就可以建立新的阅读入口。不同网站和账号可以使用各自的翻译偏好，适合同时处理多个信息来源。','Copy a website address, name the workspace, and select a target language to create a new reading entry. Each site and account can use its own translation preferences, making it easy to handle multiple sources.','サイトのURLをコピーし、ワークスペース名と対象言語を設定すれば、新しい閲覧入口を作成できます。サイトやアカウントごとに翻訳設定を分け、複数の情報源を同時に扱えます。','웹사이트 주소를 복사하고 작업 공간 이름과 대상 언어를 설정하면 새 읽기 공간이 만들어집니다. 사이트와 계정마다 번역 환경설정을 따로 사용해 여러 정보원을 동시에 처리할 수 있습니다.'],
    ['海外资讯翻译','International news translation','海外ニュース翻訳','해외 뉴스 번역'],
    ['阅读行业新闻、市场动态和海外媒体内容，同时保留原文供核对。','Read industry news, market updates, and international media while keeping the original for reference.','業界ニュース、市場動向、海外メディアを、確認用の原文を残したまま読めます。','업계 뉴스, 시장 동향, 해외 미디어를 원문과 함께 읽고 확인할 수 있습니다.'],
    ['技术文档翻译','Technical documentation translation','技術文書翻訳','기술 문서 번역'],
    ['对照英文文档、开发资料和产品说明，减少术语脱离上下文的问题。','Compare English documentation, developer resources, and product guides without losing terminology context.','英語文書、開発資料、製品説明を対照表示し、用語が文脈から離れる問題を減らします。','영문 문서, 개발 자료, 제품 설명을 대조하여 용어가 맥락에서 벗어나는 문제를 줄입니다.'],
    ['博客与论坛翻译','Blog and forum translation','ブログ・フォーラム翻訳','블로그 및 포럼 번역'],
    ['添加个人博客、社区论坛和知识网站，在一个工作区持续阅读。','Add blogs, community forums, and knowledge sites for continuous reading in one workspace.','個人ブログ、コミュニティフォーラム、知識サイトを追加し、1つのワークスペースで継続して読めます。','개인 블로그, 커뮤니티 포럼, 지식 사이트를 추가하여 하나의 작업 공간에서 계속 읽을 수 있습니다.'],
    ['聊天网站翻译','Chat website translation','チャットサイト翻訳','채팅 웹사이트 번역'],
    ['理解跨语言消息，在熟悉的网页环境中辅助组织回复内容。','Understand cross-language messages and compose replies in a familiar web environment.','異なる言語のメッセージを理解し、使い慣れたウェブ画面で返信を作成できます。','다른 언어의 메시지를 이해하고 익숙한 웹 환경에서 답변을 작성할 수 있습니다.'],
    ['三步开始网页双语阅读','Start bilingual web reading in three steps','3ステップでバイリンガル閲覧を開始','세 단계로 이중 언어 웹 읽기 시작'],
    ['复制希望阅读的网站地址。','Copy the address of the website you want to read.','読みたいサイトのURLをコピーします。','읽고 싶은 웹사이트 주소를 복사합니다.'],
    ['在译镜客户端中添加网站，设置名称、目标语言和翻译模式。','Add it in TransMirror and set a name, target language, and translation mode.','トランスミラーにサイトを追加し、名前、対象言語、翻訳モードを設定します。','트랜스미러에 사이트를 추가하고 이름, 대상 언어, 번역 모드를 설정합니다.'],
    ['进入网站工作区，按需执行整页或局部翻译，并在原文旁查看译文。','Open the workspace, translate the whole page or selected sections, and read the translation beside the original.','サイトのワークスペースを開き、必要に応じて全文または部分翻訳を実行し、原文の横で翻訳を確認します。','웹사이트 작업 공간을 열고 필요에 따라 전체 또는 부분 번역을 실행한 뒤 원문 옆에서 번역을 확인합니다.'],
    ['翻译结果会结合本地缓存减少相同内容的重复请求，用量记录可以在客户端中查询。内测期间，个人新用户注册免费赠送5万翻译字符。','Local caching reduces repeated requests for the same content, and usage records are available in the app. During beta, new personal accounts receive 50,000 translation characters free.','ローカルキャッシュにより同じ内容の重複リクエストを減らし、利用履歴はアプリで確認できます。ベータ期間中、新規個人アカウントには翻訳50,000文字を無料提供します。','로컬 캐시로 동일 콘텐츠의 반복 요청을 줄이며 사용 기록은 앱에서 확인할 수 있습니다. 베타 기간에는 신규 개인 계정에 번역 50,000자를 무료 제공합니다.'],
    ['网页翻译与普通复制翻译有什么不同？','How is web translation different from copy-and-paste translation?','ウェブ翻訳とコピー翻訳の違いは？','웹 번역과 복사 번역은 어떻게 다른가요?'],
    ['复制到翻译框适合处理短句，但面对长文章、产品资料和持续更新的网站时，会打断阅读。译镜把网页作为长期工作区保存，让网站、语言偏好、原文位置和译文阅读形成连续流程，更适合需要频繁接触海外内容的个人与团队。','Copy-and-paste translation works for short sentences, but interrupts reading for long articles, product materials, and changing websites. TransMirror saves sites as ongoing workspaces, preserving language preferences and reading position for people and teams that frequently use international content.','翻訳欄へのコピーは短文には便利ですが、長文、製品資料、更新されるサイトでは読書を中断します。トランスミラーはサイトを継続的なワークスペースとして保存し、言語設定や閲覧位置を維持します。海外コンテンツを頻繁に扱う個人やチームに適しています。','번역창에 복사하는 방식은 짧은 문장에 적합하지만 긴 글, 제품 자료, 계속 갱신되는 사이트에서는 읽기 흐름을 끊습니다. 트랜스미러는 웹사이트를 지속적인 작업 공간으로 저장하고 언어 설정과 읽기 위치를 유지해 해외 콘텐츠를 자주 접하는 개인과 팀에 적합합니다.'],
    ['把下一个网站，放进译镜。','Bring your next website into TransMirror.','次のサイトをトランスミラーへ。','다음 웹사이트를 트랜스미러에 추가하세요.'],
    ['Windows 内测版现已开放。注册个人账户，免费领取5万翻译字符。','The Windows beta is available now. Create a personal account and receive 50,000 translation characters free.','Windowsベータ版を公開中。個人アカウント登録で翻訳50,000文字を無料で受け取れます。','Windows 베타를 지금 이용할 수 있습니다. 개인 계정을 만들면 번역 50,000자를 무료로 받을 수 있습니다.'],
    ['前往下载','Download','ダウンロード','다운로드'],
    ['本页内容','On this page','このページの内容','이 페이지의 내용'],
    ['网页翻译是什么','What is web translation?','ウェブ翻訳とは','웹 번역이란'],
    ['多网站工作区','Multi-site workspace','複数サイトのワークスペース','다중 사이트 작업 공간'],
    ['使用步骤','How it works','利用手順','사용 방법'],
    ['与复制翻译的区别','Compared with copy translation','コピー翻訳との違い','복사 번역과의 차이'],
    ['企业出海方案','Global business solution','海外ビジネス向け','글로벌 비즈니스 솔루션'],
    ['企业出海翻译','Global business translation','海外ビジネス翻訳','글로벌 비즈니스 번역'],
    ['/ 企业出海翻译','/ Global business translation','/ 海外ビジネス翻訳','/ 글로벌 비즈니스 번역'],
    ['看懂世界，','Understand the world,','世界を理解し、','세상을 이해하고,'],
    ['回应全球客户。','respond to customers everywhere.','世界の顧客に応える。','전 세계 고객에게 답하세요.'],
    ['网页、消息、市场资料，在一个工作区完成跨语言理解。','Understand websites, messages, and market materials across languages in one workspace.','ウェブ、メッセージ、市場資料を1つのワークスペースで言語を越えて理解。','웹, 메시지, 시장 자료를 하나의 작업 공간에서 언어 장벽 없이 이해하세요.'],
    ['网页翻译功能 →','Web translation →','ウェブ翻訳機能 →','웹 번역 기능 →'],
    ['海外市场','International markets','海外市場','해외 시장'],
    ['多网站阅读','Multi-site reading','複数サイト閲覧','다중 사이트 읽기'],
    ['你好，可以发货……','Hello, can you ship…','こんにちは、発送できますか…','안녕하세요, 배송 가능한가요…'],
    ['回复辅助','Reply assistance','返信サポート','답변 지원'],
    ['语言通道已连接','Language channel connected','言語チャネル接続済み','언어 채널 연결됨'],
    ['出海工作，不再反复切换。','Global work without constant switching.','海外業務で、もう画面を行き来しない。','글로벌 업무에서 더 이상 계속 전환하지 마세요.'],
    ['看懂询盘，辅助回复','Understand inquiries and draft replies','問い合わせを理解し、返信を支援','문의를 이해하고 답변 작성 지원'],
    ['跨境运营','Cross-border operations','越境EC運営','크로스보더 운영'],
    ['规则、评价、竞品','Rules, reviews, competitors','規則、レビュー、競合','규정, 리뷰, 경쟁사'],
    ['市场研究','Market research','市場調査','시장 조사'],
    ['聚合海外信息','Bring global information together','海外情報を集約','해외 정보 통합'],
    ['全球协作','Global collaboration','グローバル協業','글로벌 협업'],
    ['共享语言上下文','Share language context','言語コンテキストを共有','언어 맥락 공유'],
    ['从海外网站，','From international websites','海外サイトから、','해외 웹사이트에서'],
    ['到清晰回复。','to a clear reply.','明確な返信まで。','명확한 답변까지.'],
    ['添加网站后，译镜保留页面上下文，让原文、译文与回复思路自然衔接。','After you add a site, TransMirror preserves page context so the original, translation, and reply flow stay connected.','サイトを追加すると、トランスミラーがページの文脈を保持し、原文、翻訳、返信の流れを自然につなげます。','사이트를 추가하면 트랜스미러가 페이지 맥락을 유지하여 원문, 번역, 답변 흐름을 자연스럽게 연결합니다.'],
    ['了解多网站翻译 →','Explore multi-site translation →','複数サイト翻訳を見る →','다중 사이트 번역 알아보기 →'],
    ['原文与译文','Original and translation','原文と翻訳','원문과 번역'],
    ['为全球团队而设计。','Designed for global teams.','グローバルチームのための設計。','글로벌 팀을 위해 설계되었습니다.'],
    ['生成回复','Generate reply','返信を生成','답변 생성'],
    ['个人账户已开放内测。','Personal accounts are now in beta.','個人アカウントのベータ提供中。','개인 계정 베타 이용 가능.'],
    ['字符。','characters.','文字。','자.'],
    ['企业账户','Enterprise accounts','企業アカウント','기업 계정'],
    ['即将开放','Coming soon','近日公開','출시 예정'],
    ['定制接入 · 字符套餐 · 团队需求','Custom integration · Character plans · Team needs','カスタム連携 · 文字プラン · チーム要件','맞춤 연동 · 문자 요금제 · 팀 요구사항'],
    ['联系译镜','Contact TransMirror','トランスミラーに連絡','트랜스미러 문의'],
    ['企业账户即将开放 · 支持联系定制','Enterprise accounts coming soon · Contact us for customization','企業アカウント近日公開 · カスタマイズはお問い合わせください','기업 계정 출시 예정 · 맞춤화 문의 가능'],
    ['Windows 下载提示说明','Windows download notice','Windowsダウンロードに関する注意','Windows 다운로드 안내'],
    ['看到“未知发布者”或“不常下载”，应该怎么办？','What should I do if I see “Unknown publisher” or “Not commonly downloaded”?','「不明な発行元」または「一般的にダウンロードされていません」と表示された場合は？','“알 수 없는 게시자” 또는 “일반적으로 다운로드되지 않음”이 표시되면 어떻게 해야 하나요?'],
    ['译镜目前处于内测阶段，Windows 安装包暂未购买商业代码签名证书。因此，浏览器或 Windows 可能无法验证发布者身份，并显示“未知发布者”“不常下载”或“Windows 已保护你的电脑”。','TransMirror is currently in beta and its Windows installer does not yet use a commercial code-signing certificate. Your browser or Windows may therefore show “Unknown publisher,” “Not commonly downloaded,” or “Windows protected your PC.”','トランスミラーは現在ベータ版で、Windowsインストーラーにはまだ商用コード署名証明書がありません。そのため、ブラウザやWindowsで「不明な発行元」「一般的にダウンロードされていません」「WindowsによってPCが保護されました」と表示される場合があります。','트랜스미러는 현재 베타이며 Windows 설치 파일에 상용 코드 서명 인증서가 아직 적용되지 않았습니다. 따라서 브라우저나 Windows에서 “알 수 없는 게시자”, “일반적으로 다운로드되지 않음”, “Windows가 PC를 보호했습니다”가 표시될 수 있습니다.'],
    ['这类提示表示发布者或下载信誉尚未建立，本身不是“已检测到木马病毒”的结论。','These notices mean publisher identity or download reputation has not yet been established; they do not mean a Trojan was detected.','これらは発行元やダウンロード実績がまだ確立されていないことを示すもので、トロイの木馬が検出されたという意味ではありません。','이 안내는 게시자 신원이나 다운로드 평판이 아직 확립되지 않았다는 뜻이며 트로이 목마가 탐지되었다는 의미는 아닙니다.'],
    ['只从官网下载','Download only from the official site','公式サイトからのみダウンロード','공식 웹사이트에서만 다운로드'],
    ['确认页面域名为','Confirm that the page domain is','ページのドメインが次であることを確認：','페이지 도메인이 다음인지 확인하세요:'],
    ['，下载地址来自',', and the download comes from',', ダウンロード元が次であること：',', 다운로드 주소가 다음에서 제공되는지 확인하세요:'],
    ['。不要使用群聊或陌生网站转发的安装包。','. Do not use installers forwarded through group chats or unfamiliar sites.','。グループチャットや不明なサイトから転送されたインストーラーは使用しないでください。','. 단체 채팅이나 알 수 없는 사이트에서 전달된 설치 파일은 사용하지 마세요.'],
    ['先进行安全扫描','Run a security scan first','最初にセキュリティスキャン','먼저 보안 검사 실행'],
    ['下载完成后右键安装包，选择“使用 Microsoft Defender 扫描”。扫描未发现威胁后再继续。','After downloading, right-click the installer and choose “Scan with Microsoft Defender.” Continue only if no threats are found.','ダウンロード後、インストーラーを右クリックして「Microsoft Defenderでスキャン」を選択し、脅威が見つからないことを確認してから続行してください。','다운로드 후 설치 파일을 마우스 오른쪽 버튼으로 클릭하고 “Microsoft Defender로 검사”를 선택하세요. 위협이 발견되지 않은 경우에만 계속하세요.'],
    ['核对提示内容','Check the warning text','警告内容を確認','경고 내용 확인'],
    ['如果只是“未知发布者”或“不常下载”，且文件来源核对无误，可以在提示中选择“更多信息”，再选择“仍要运行”。按钮名称可能因 Windows 版本不同略有变化。','If the warning only says “Unknown publisher” or “Not commonly downloaded,” and you have verified the source, choose “More info” and then “Run anyway.” Button names may vary by Windows version.','警告が「不明な発行元」または「一般的にダウンロードされていません」のみで、入手元を確認済みの場合は、「詳細情報」から「実行」を選択できます。ボタン名はWindowsのバージョンにより異なる場合があります。','경고가 “알 수 없는 게시자” 또는 “일반적으로 다운로드되지 않음”뿐이고 출처를 확인했다면 “추가 정보”를 선택한 뒤 “실행”을 선택할 수 있습니다. 버튼 이름은 Windows 버전에 따라 다를 수 있습니다.'],
    ['明确报毒时停止','Stop if malware is explicitly reported','マルウェア検出時は中止','악성코드가 명시되면 중단'],
    ['如果提示包含“木马”“病毒”“PUA”或文件已被隔离，请不要关闭防护或强行安装，立即通过下方联系方式把截图发给我们核查。','If the warning mentions a Trojan, virus, PUA, or quarantine, do not disable protection or force installation. Stop and send us a screenshot using the contact details below.','「トロイの木馬」「ウイルス」「PUA」または隔離の表示がある場合は、保護機能を無効にしたり強制インストールしたりせず、停止して下記連絡先へスクリーンショットをお送りください。','경고에 트로이 목마, 바이러스, PUA 또는 격리가 표시되면 보호 기능을 끄거나 강제로 설치하지 마세요. 중단한 뒤 아래 연락처로 화면 캡처를 보내 주세요.'],
    ['请注意','Please note','ご注意','주의'],
    ['“未知发布者”不等于病毒，但也不能单独作为安全证明。官方安装流程不会要求你关闭 Windows Defender、防火墙或其他安全软件。','“Unknown publisher” does not mean virus, but it is not proof of safety either. The official installation process will never ask you to disable Microsoft Defender, your firewall, or other security software.','「不明な発行元」はウイルスを意味しませんが、安全性の証明でもありません。公式のインストール手順でMicrosoft Defender、ファイアウォール、その他のセキュリティソフトを無効にするよう求めることはありません。','“알 수 없는 게시자”가 바이러스를 뜻하지는 않지만 안전을 보장하는 것도 아닙니다. 공식 설치 절차는 Microsoft Defender, 방화벽 또는 기타 보안 소프트웨어를 끄도록 요구하지 않습니다.'],
    ['译镜是什么？','What is TransMirror?','トランスミラーとは？','트랜스미러란?'],
    ['译镜是用于网页双语阅读和跨语言沟通的 Windows 客户端，可以把不同网站添加到独立工作区。','TransMirror is a Windows app for bilingual web reading and cross-language communication. It lets you add different websites to separate workspaces.','トランスミラーは、ウェブのバイリンガル閲覧と多言語コミュニケーションのためのWindowsアプリです。サイトごとに独立したワークスペースを作成できます。','트랜스미러는 이중 언어 웹 읽기와 다국어 소통을 위한 Windows 앱입니다. 여러 웹사이트를 각각 독립된 작업 공간에 추가할 수 있습니다.'],
    ['可以添加哪些网站？','Which websites can I add?','どのサイトを追加できますか？','어떤 웹사이트를 추가할 수 있나요?'],
    ['可添加自定义网站地址，包括海外资讯、技术文档、博客、论坛和网页聊天工具。实际效果取决于网站结构和访问权限。','You can add custom website addresses, including international news, technical documents, blogs, forums, and web chat tools. Results depend on site structure and access permissions.','海外ニュース、技術文書、ブログ、フォーラム、ウェブチャットなど、任意のサイトURLを追加できます。実際の動作はサイト構造とアクセス権限によって異なります。','해외 뉴스, 기술 문서, 블로그, 포럼, 웹 채팅 도구 등 원하는 웹사이트 주소를 추가할 수 있습니다. 실제 결과는 사이트 구조와 접근 권한에 따라 달라집니다.'],
    ['适合企业出海团队吗？','Is it suitable for global business teams?','海外展開チームに適していますか？','글로벌 비즈니스 팀에 적합한가요?'],
    ['可用于理解海外客户消息、阅读市场资料，并辅助组织更自然的跨语言回复。企业账户和定制服务正在筹备。','Use it to understand international customer messages, read market materials, and prepare natural cross-language replies. Enterprise accounts and custom services are in development.','海外顧客のメッセージ理解、市場資料の閲覧、自然な多言語返信の作成に利用できます。企業アカウントとカスタムサービスは準備中です。','해외 고객 메시지 이해, 시장 자료 읽기, 자연스러운 다국어 답변 작성에 활용할 수 있습니다. 기업 계정과 맞춤 서비스는 준비 중입니다.'],
    ['现在如何收费？','What does it cost?','現在の料金は？','현재 요금은 어떻게 되나요?'],
    ['产品处于内测阶段，个人账户开放注册，新用户免费赠送 5 万翻译字符。正式价格将在后续公布。','The product is in beta and personal registration is open. New users receive 50,000 translation characters free. Official pricing will be announced later.','現在ベータ版で、個人アカウントを登録できます。新規ユーザーには翻訳50,000文字を無料提供し、正式料金は後日発表します。','현재 베타 단계이며 개인 계정 가입이 열려 있습니다. 신규 사용자에게 번역 50,000자를 무료로 제공하며 정식 가격은 추후 공개됩니다.'],
    ['为什么会显示未知发布者？','Why does it show “Unknown publisher”?','なぜ「不明な発行元」と表示されますか？','왜 “알 수 없는 게시자”가 표시되나요?'],
    ['当前内测安装包尚未使用商业代码签名，Windows 无法确认发布者身份。该提示属于身份和信誉提醒，并不是病毒检测结果。','The beta installer does not yet use commercial code signing, so Windows cannot verify the publisher. This is an identity and reputation notice, not a virus detection result.','ベータ版インストーラーにはまだ商用コード署名がないため、Windowsは発行元を確認できません。これは身元と信頼性に関する通知であり、ウイルス検出結果ではありません。','베타 설치 파일에는 아직 상용 코드 서명이 없어 Windows가 게시자를 확인할 수 없습니다. 이는 신원 및 평판 안내이며 바이러스 탐지 결과가 아닙니다.'],
    ['遇到真正的病毒警报怎么办？','What if I receive a real malware warning?','実際のウイルス警告が出た場合は？','실제 바이러스 경고가 표시되면 어떻게 하나요?'],
    ['不要绕过警报或关闭安全软件。请停止安装，并把安全软件名称、提示截图和下载时间发送给我们核查。','Do not bypass the warning or disable security software. Stop installation and send us the security software name, screenshot, and download time for investigation.','警告を回避したりセキュリティソフトを無効にしたりせず、インストールを停止してください。ソフト名、警告のスクリーンショット、ダウンロード時刻をお送りください。','경고를 우회하거나 보안 소프트웨어를 끄지 마세요. 설치를 중단하고 보안 소프트웨어 이름, 경고 화면 캡처, 다운로드 시간을 보내 주세요.'],
    ['查看微信联系二维码原图（新窗口）','View full WeChat QR code (new window)','WeChat QRコードを原寸表示（新しいウィンドウ）','WeChat QR 코드 원본 보기(새 창)'],
    ['查看 Telegram 联系二维码原图（新窗口）','View full Telegram QR code (new window)','Telegram QRコードを原寸表示（新しいウィンドウ）','Telegram QR 코드 원본 보기(새 창)'],
    ['译镜微信联系二维码','TransMirror WeChat QR code','トランスミラー WeChat QRコード','트랜스미러 WeChat QR 코드'],
    ['译镜 Telegram 联系二维码，账号 @AIYIJING','TransMirror Telegram QR code, account @AIYIJING','トランスミラー Telegram QRコード、アカウント @AIYIJING','트랜스미러 Telegram QR 코드, 계정 @AIYIJING']
    ,['下载 Windows 版','Download for Windows','Windows版をダウンロード','Windows용 다운로드']
    ,['下载 macOS 版','Download for macOS','macOS版をダウンロード','macOS용 다운로드']
    ,['Windows 内测版现已开放下载；macOS 版本正在准备中。注册个人账户，免费领取 5 万翻译字符。','The Windows beta is available now; the macOS version is in development. Create a personal account and receive 50,000 translation characters free.','Windowsベータ版を公開中です。macOS版は準備中です。個人アカウントを登録すると、翻訳50,000文字を無料で利用できます。','Windows 베타를 지금 다운로드할 수 있으며 macOS 버전은 준비 중입니다. 개인 계정을 만들면 번역 50,000자를 무료로 받을 수 있습니다.']
    ,['下载后注册个人账户，免费领取 5 万翻译字符。','After downloading, create a personal account to receive 50,000 translation characters free.','ダウンロード後に個人アカウントを登録すると、翻訳50,000文字を無料で利用できます。','다운로드 후 개인 계정을 만들면 번역 50,000자를 무료로 받을 수 있습니다.']
    ,['联系译镜团队','Contact the TransMirror team','トランスミラーチームに連絡','트랜스미러 팀에 문의']
    ,['新的、最近、搜索 · 星系天体物理学；宇宙学与非银河系天体物理学；地球与行星天体物理学；高能天体物理现象；天体物理仪器与方法；太阳与恒星天体物理学','New, recent, search · Astrophysics categories','新着・最近・検索 · 天体物理学カテゴリ','신규, 최근, 검색 · 천체물리학 분야']
    ,['新的、最近、搜索 · 无序系统与神经网络；材料科学；介观系统与量子霍尔效应；其他凝聚态物理；量子气体；软凝聚态；统计力学；强关联电子；超导','New, recent, search · Condensed matter categories','新着・最近・検索 · 物性物理学カテゴリ','신규, 최근, 검색 · 응집물질물리학 분야']
    ,['· 偏微分方程分析；范畴论；经典分析与常微分方程；组合数学；交换代数；复杂变量；微分几何；动态系统；函数分析；一般数学；一般拓扑；几何拓扑；群论；历史和概述；信息理论；K 理论与同调；逻辑；数学物理；度量几何；数论；数值分析；算子代数；优化与控制；概率；量子代数；表示论；环与代数；谱理论；统计理论；符号计算；辛几何','· Mathematics categories','・数学カテゴリ','· 수학 분야']
    ,['· 人工智能；计算与语言；计算复杂性；计算工程、金融与科学；计算几何；计算机科学与博弈论；计算机视觉与模式识别；密码学与安全；数据结构与算法；数据库；数字图书馆；离散数学；分布式、并行和集群计算；新兴技术；形式语言与自动机理论；一般文献；图形学；硬件体系结构；人机交互；信息检索；信息理论；机器学习；逻辑；数学软件；多智能体系统；多媒体；网络与互联网体系结构；神经与进化计算；数值分析；操作系统；其他计算机科学；性能；编程语言；机器人学；符号计算；声音；软件工程；社会与信息网络','· Computer science categories','・コンピューター科学カテゴリ','· 컴퓨터 과학 분야']
  ];
  const index = { en: 1, ja: 2, ko: 3 };
  const dictionary = new Map(rows.map(row => [row[0], row]));
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const renderedAttrs = new WeakMap();
  const storageKey = 'ai-transmirror-ui-language';
  let locale = localStorage.getItem(storageKey) || (navigator.language || '').toLowerCase().split('-')[0];
  if (!locales[locale]) locale = 'zh';

  function translated(value) {
    if (locale === 'zh') return value;
    const exact = dictionary.get(value.trim());
    if (exact) return value.replace(value.trim(), exact[index[locale]]);
    return value;
  }
  function apply(root = document) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('script,style,[data-i18n-ignore]')) continue;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue || '');
      node.nodeValue = translated(originalText.get(node));
    }
    const elements = root.querySelectorAll ? [root, ...root.querySelectorAll('*')] : [];
    for (const element of elements) {
      if (!(element instanceof Element)) continue;
      let attrs = originalAttrs.get(element); let rendered = renderedAttrs.get(element);
      if (!attrs) { attrs = {}; originalAttrs.set(element, attrs); }
      if (!rendered) { rendered = {}; renderedAttrs.set(element, rendered); }
      for (const name of ['aria-label','title','placeholder','alt','content']) {
        if (!element.hasAttribute(name)) continue;
        const current = element.getAttribute(name);
        if (!(name in attrs) || (name in rendered && current !== rendered[name])) attrs[name] = current;
        const next = translated(attrs[name]); rendered[name] = next;
        if (current !== next) element.setAttribute(name, next);
      }
    }
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale;
  }
  function selector() {
    const host = document.createElement('label'); host.className = 'language-picker';
    host.setAttribute('aria-label', 'Display language');
    const icon = document.createElement('span'); icon.className = 'language-picker-icon'; icon.textContent = '文'; icon.setAttribute('aria-hidden', 'true');
    const select = document.createElement('select'); select.setAttribute('aria-label', 'Display language');
    for (const [value, label] of Object.entries(locales)) { const option = document.createElement('option'); option.value = value; option.textContent = label; select.append(option); }
    select.value = locale; select.addEventListener('change', () => { locale = select.value; localStorage.setItem(storageKey, locale); apply(); document.dispatchEvent(new CustomEvent('ui-language-changed', { detail: locale })); });
    host.append(icon, select); return host;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const actions = document.querySelector('.nav-actions'); if (actions) actions.insertBefore(selector(), actions.querySelector('.nav-download'));
    apply();
    new MutationObserver(records => { for (const record of records) { if (record.type === 'attributes') apply(record.target); else for (const node of record.addedNodes) if (node.nodeType === 1 || node.nodeType === 3) apply(node.nodeType === 1 ? node : node.parentElement); } }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['aria-label','title','placeholder','alt'] });
  });
  window.siteI18n = { apply, translate: translated, get locale() { return locale; } };
})();
