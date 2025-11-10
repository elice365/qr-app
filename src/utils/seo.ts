import { Metadata } from 'next';

// SEO Configuration for each locale
export const SEO_CONFIG = {
  ko: {
    title: 'QR 코드 생성기 - 무료 온라인 QR 코드 메이커 | 2025',
    description: '무료 QR 코드 생성기. URL, WiFi, 명함, SMS 등 즉시 생성. 로고·색상 커스터마이징, 회원가입 없이 무제한 사용.',
    keywords: 'QR 코드 생성기, 무료 QR 코드, QR 메이커, 바코드 생성, 한국 QR 코드, WiFi QR, 명함 QR, URL QR, 모바일 QR, QR 코드 만들기',
    ogTitle: '무료 QR 코드 생성기 - 맞춤형 QR 코드 즉시 생성',
    ogDescription: '무료 QR 코드 생성기. URL, WiFi, 명함 등 다양한 형식 지원. 로고·색상 커스터마이징, PNG/SVG 다운로드 가능.',
  },
  en: {
    title: 'QR Code Generator - Free Online QR Code Maker | 2025',
    description: 'Create free QR codes instantly for URLs, WiFi, vCard, SMS and more. Customize with logo, colors, and styles. Download in high-quality PNG or SVG format. No signup required, unlimited usage.',
    keywords: 'QR code generator, free QR code, QR maker, barcode generator, online QR code, WiFi QR, vCard QR, URL QR, mobile QR, create QR code, QR code scanner',
    ogTitle: 'Free QR Code Generator - Create Custom QR Codes Instantly',
    ogDescription: 'Generate free QR codes online. Customize with logo and colors. Support WiFi, URL, vCard and more. Download high-quality PNG/SVG.',
  },
  ja: {
    title: 'QRコードジェネレーター - 無料オンラインQRコードメーカー | 2025',
    description: '無料でQRコードを即座に作成。URL、WiFi、名刺（vCard）、SMSなど対応。ロゴ挿入、色カスタマイズ可能。高品質PNG/SVGダウンロード。登録不要、無制限使用。',
    keywords: 'QRコード生成, 無料QRコード, QRメーカー, バーコード作成, 日本QRコード, WiFi QR, 名刺QR, URL QR, モバイルQR, QRコード作成, QRコードリーダー',
    ogTitle: '無料QRコードジェネレーター - カスタムQRコード即座作成',
    ogDescription: 'オンラインで無料QRコード生成。ロゴ、色カスタマイズ対応。WiFi、URL、名刺等サポート。高品質PNG/SVGダウンロード。',
  },
  ru: {
    title: 'Генератор QR-кодов - Бесплатный онлайн создатель QR | 2025',
    description: 'Создавайте QR-коды бесплатно и мгновенно для URL, WiFi, визиток (vCard), SMS и другого. Настройка с логотипом, цветами и стилями. Скачивание в высоком качестве PNG или SVG. Без регистрации, неограниченное использование.',
    keywords: 'генератор QR кода, бесплатный QR код, создатель QR, генератор штрих-кода, онлайн QR код, WiFi QR, визитка QR, URL QR, мобильный QR, создать QR код, сканер QR кода',
    ogTitle: 'Бесплатный генератор QR-кодов - Мгновенное создание QR-кодов',
    ogDescription: 'Генерируйте бесплатные QR-коды онлайн. Настройка с логотипом и цветами. Поддержка WiFi, URL, визиток. Скачивание PNG/SVG высокого качества.',
  },
};

// QR Type specific SEO configurations
export const QR_TYPE_SEO = {
  url: {
    ko: {
      title: 'URL QR 코드 생성기 - 웹사이트 링크를 QR 코드로 | 무료',
      description: '웹사이트 링크를 QR 코드로 변환하세요. URL을 입력하고 즉시 QR 코드를 생성하세요. 마케팅, 명함, 포스터에 최적화된 무료 URL QR 코드 메이커.',
      keywords: 'URL QR 코드, 웹사이트 QR, 링크 QR 코드, URL 단축, 마케팅 QR, 웹페이지 QR',
      ogTitle: 'URL QR 코드 생성기 - 웹사이트를 QR 코드로 변환',
      ogDescription: '무료로 URL을 QR 코드로 변환하세요. 마케팅, 명함, 포스터에 즉시 사용 가능.',
    },
    en: {
      title: 'URL QR Code Generator - Convert Links to QR Codes | Free',
      description: 'Convert website links to QR codes instantly. Enter any URL and create a scannable QR code. Perfect for marketing, business cards, and posters. Free URL QR code maker.',
      keywords: 'URL QR code, website QR, link QR code, URL shortener, marketing QR, webpage QR',
      ogTitle: 'URL QR Code Generator - Convert Websites to QR Codes',
      ogDescription: 'Convert any URL to QR code for free. Perfect for marketing, business cards, and posters.',
    },
    ja: {
      title: 'URL QRコード生成 - ウェブサイトをQRコードに | 無料',
      description: 'ウェブサイトリンクをQRコードに変換。URLを入力して即座にQRコード生成。マーケティング、名刺、ポスターに最適な無料URLQRコードメーカー。',
      keywords: 'URL QRコード, ウェブサイトQR, リンクQRコード, URL短縮, マーケティングQR',
      ogTitle: 'URL QRコード生成 - ウェブサイトをQRコードに変換',
      ogDescription: '無料でURLをQRコードに変換。マーケティング、名刺、ポスターに即座に使用可能。',
    },
    ru: {
      title: 'Генератор URL QR-кодов - Конвертация ссылок в QR | Бесплатно',
      description: 'Конвертируйте ссылки на сайты в QR-коды мгновенно. Введите URL и создайте сканируемый QR-код. Идеально для маркетинга, визиток и постеров.',
      keywords: 'URL QR код, сайт QR, ссылка QR код, сокращение URL, маркетинг QR',
      ogTitle: 'Генератор URL QR-кодов - Конвертация сайтов в QR',
      ogDescription: 'Конвертируйте любой URL в QR-код бесплатно. Идеально для маркетинга и визиток.',
    },
  },
  text: {
    ko: {
      title: '텍스트 QR 코드 생성기 - 문자를 QR 코드로 | 무료',
      description: '텍스트, 메시지, 메모를 QR 코드로 변환하세요. 간단한 텍스트부터 긴 메시지까지 지원. 이벤트, 교육, 안내문에 최적화.',
      keywords: '텍스트 QR, 문자 QR 코드, 메시지 QR, 메모 QR, 간편 공유',
      ogTitle: '텍스트 QR 코드 생성기 - 메시지를 QR로 변환',
      ogDescription: '텍스트를 QR 코드로 간편하게 변환. 이벤트와 교육에 최적화.',
    },
    en: {
      title: 'Text QR Code Generator - Convert Text to QR Code | Free',
      description: 'Convert text, messages, and notes to QR codes. Support from simple text to long messages. Perfect for events, education, and instructions.',
      keywords: 'text QR, message QR code, note QR, plain text QR, easy sharing',
      ogTitle: 'Text QR Code Generator - Convert Messages to QR',
      ogDescription: 'Easily convert text to QR codes. Perfect for events and education.',
    },
    ja: {
      title: 'テキストQRコード生成 - 文字をQRコードに | 無料',
      description: 'テキスト、メッセージ、メモをQRコードに変換。簡単なテキストから長いメッセージまで対応。イベント、教育、案内に最適化。',
      keywords: 'テキストQR, 文字QRコード, メッセージQR, メモQR',
      ogTitle: 'テキストQRコード生成 - メッセージをQRに変換',
      ogDescription: 'テキストを簡単にQRコードに変換。イベントと教育に最適。',
    },
    ru: {
      title: 'Генератор текстовых QR-кодов - Текст в QR | Бесплатно',
      description: 'Конвертируйте текст, сообщения и заметки в QR-коды. Поддержка от простого текста до длинных сообщений. Идеально для событий и обучения.',
      keywords: 'текстовый QR, сообщение QR код, заметка QR, простой текст QR',
      ogTitle: 'Генератор текстовых QR-кодов - Сообщения в QR',
      ogDescription: 'Легко конвертируйте текст в QR-коды. Идеально для событий.',
    },
  },
  email: {
    ko: {
      title: '이메일 QR 코드 생성기 - 메일 주소를 QR로 | 무료',
      description: '이메일 주소와 제목, 본문을 QR 코드로 생성. 스캔하면 자동으로 이메일 앱 실행. 명함, 포스터, 광고에 최적화.',
      keywords: '이메일 QR, 메일 QR 코드, 연락처 QR, 비즈니스 QR, 명함 QR',
      ogTitle: '이메일 QR 코드 생성기 - 메일 주소를 QR로',
      ogDescription: '이메일을 QR 코드로 변환. 스캔하면 자동으로 메일 앱 실행.',
    },
    en: {
      title: 'Email QR Code Generator - Email Address to QR | Free',
      description: 'Create QR codes with email address, subject, and body. Automatically opens email app when scanned. Perfect for business cards, posters, and ads.',
      keywords: 'email QR, mail QR code, contact QR, business QR, card QR',
      ogTitle: 'Email QR Code Generator - Email to QR Code',
      ogDescription: 'Convert email to QR code. Automatically opens email app when scanned.',
    },
    ja: {
      title: 'メールQRコード生成 - メールアドレスをQRに | 無料',
      description: 'メールアドレス、件名、本文をQRコードに生成。スキャンで自動的にメールアプリ起動。名刺、ポスター、広告に最適化。',
      keywords: 'メールQR, メールQRコード, 連絡先QR, ビジネスQR',
      ogTitle: 'メールQRコード生成 - メールアドレスをQRに',
      ogDescription: 'メールをQRコードに変換。スキャンで自動メールアプリ起動。',
    },
    ru: {
      title: 'Генератор Email QR-кодов - Email в QR | Бесплатно',
      description: 'Создавайте QR-коды с email адресом, темой и текстом. Автоматически открывает почтовое приложение при сканировании. Идеально для визиток.',
      keywords: 'email QR, почта QR код, контакт QR, бизнес QR',
      ogTitle: 'Генератор Email QR-кодов - Email в QR',
      ogDescription: 'Конвертируйте email в QR-код. Автоматически открывает почту.',
    },
  },
  sms: {
    ko: {
      title: 'SMS QR 코드 생성기 - 문자 메시지 QR | 무료',
      description: 'SMS 문자 메시지를 QR 코드로 생성. 전화번호와 메시지를 입력하면 스캔 시 자동 문자 발송. 이벤트, 마케팅, 고객 응대에 활용.',
      keywords: 'SMS QR, 문자 QR 코드, 휴대폰 QR, 메시지 QR, 모바일 마케팅',
      ogTitle: 'SMS QR 코드 생성기 - 문자 메시지를 QR로',
      ogDescription: 'SMS를 QR 코드로 변환. 스캔하면 자동으로 문자 발송.',
    },
    en: {
      title: 'SMS QR Code Generator - Text Message QR | Free',
      description: 'Create SMS text message QR codes. Enter phone number and message, auto-sends text when scanned. Perfect for events, marketing, and customer service.',
      keywords: 'SMS QR, text QR code, mobile QR, message QR, mobile marketing',
      ogTitle: 'SMS QR Code Generator - Text Message to QR',
      ogDescription: 'Convert SMS to QR code. Auto-sends text when scanned.',
    },
    ja: {
      title: 'SMS QRコード生成 - テキストメッセージQR | 無料',
      description: 'SMSテキストメッセージをQRコードに生成。電話番号とメッセージを入力、スキャン時に自動送信。イベント、マーケティング、顧客対応に活用。',
      keywords: 'SMS QR, テキストQRコード, モバイルQR, メッセージQR',
      ogTitle: 'SMS QRコード生成 - テキストメッセージをQRに',
      ogDescription: 'SMSをQRコードに変換。スキャンで自動テキスト送信。',
    },
    ru: {
      title: 'Генератор SMS QR-кодов - Текстовое сообщение QR | Бесплатно',
      description: 'Создавайте QR-коды для SMS сообщений. Введите номер и сообщение, автоматически отправляет SMS при сканировании. Идеально для событий и маркетинга.',
      keywords: 'SMS QR, текст QR код, мобильный QR, сообщение QR',
      ogTitle: 'Генератор SMS QR-кодов - SMS в QR',
      ogDescription: 'Конвертируйте SMS в QR-код. Автоматически отправляет SMS.',
    },
  },
  wifi: {
    ko: {
      title: 'WiFi QR 코드 생성기 - 와이파이 공유 QR | 무료',
      description: 'WiFi 네트워크 정보를 QR 코드로 생성. SSID, 비밀번호, 암호화 방식 입력 후 스캔하면 자동 연결. 카페, 호텔, 사무실에 최적.',
      keywords: 'WiFi QR, 와이파이 QR 코드, 무선 인터넷 QR, 네트워크 공유, WiFi 공유',
      ogTitle: 'WiFi QR 코드 생성기 - 와이파이 자동 연결',
      ogDescription: 'WiFi를 QR 코드로 공유. 스캔하면 자동으로 네트워크 연결.',
    },
    en: {
      title: 'WiFi QR Code Generator - Share WiFi Network | Free',
      description: 'Create WiFi network QR codes. Enter SSID, password, and encryption type, auto-connects when scanned. Perfect for cafes, hotels, and offices.',
      keywords: 'WiFi QR, wireless QR code, network QR, WiFi sharing, auto connect',
      ogTitle: 'WiFi QR Code Generator - Auto Connect to WiFi',
      ogDescription: 'Share WiFi via QR code. Auto-connects network when scanned.',
    },
    ja: {
      title: 'WiFi QRコード生成 - WiFi共有QR | 無料',
      description: 'WiFiネットワーク情報をQRコードに生成。SSID、パスワード、暗号化方式入力後、スキャンで自動接続。カフェ、ホテル、オフィスに最適。',
      keywords: 'WiFi QR, 無線LANQRコード, ネットワークQR, WiFi共有',
      ogTitle: 'WiFi QRコード生成 - WiFi自動接続',
      ogDescription: 'WiFiをQRコードで共有。スキャンで自動ネットワーク接続。',
    },
    ru: {
      title: 'Генератор WiFi QR-кодов - Поделиться WiFi | Бесплатно',
      description: 'Создавайте QR-коды для WiFi сетей. Введите SSID, пароль и тип шифрования, автоматически подключается при сканировании. Идеально для кафе и отелей.',
      keywords: 'WiFi QR, беспроводной QR код, сеть QR, WiFi обмен',
      ogTitle: 'Генератор WiFi QR-кодов - Авто-подключение WiFi',
      ogDescription: 'Поделитесь WiFi через QR-код. Автоматически подключается.',
    },
  },
  vcard: {
    ko: {
      title: 'vCard QR 코드 생성기 - 전자 명함 QR | 무료',
      description: '전자 명함(vCard)을 QR 코드로 생성. 이름, 전화번호, 이메일, 주소 등 연락처 정보를 스캔 한 번에 저장. 네트워킹에 최적화.',
      keywords: 'vCard QR, 명함 QR 코드, 전자 명함, 연락처 QR, 비즈니스 카드 QR',
      ogTitle: 'vCard QR 코드 생성기 - 전자 명함을 QR로',
      ogDescription: '명함을 QR 코드로 변환. 스캔하면 연락처 자동 저장.',
    },
    en: {
      title: 'vCard QR Code Generator - Digital Business Card | Free',
      description: 'Create vCard QR codes for digital business cards. Include name, phone, email, address and save contact info with one scan. Perfect for networking.',
      keywords: 'vCard QR, business card QR, digital card, contact QR, networking QR',
      ogTitle: 'vCard QR Code Generator - Digital Business Card',
      ogDescription: 'Convert business card to QR. Auto-saves contact info when scanned.',
    },
    ja: {
      title: 'vCard QRコード生成 - 電子名刺QR | 無料',
      description: '電子名刺(vCard)をQRコードに生成。名前、電話番号、メール、住所など連絡先情報をスキャン一回で保存。ネットワーキングに最適化。',
      keywords: 'vCard QR, 名刺QRコード, 電子名刺, 連絡先QR',
      ogTitle: 'vCard QRコード生成 - 電子名刺をQRに',
      ogDescription: '名刺をQRコードに変換。スキャンで連絡先自動保存。',
    },
    ru: {
      title: 'Генератор vCard QR-кодов - Электронная визитка | Бесплатно',
      description: 'Создавайте vCard QR-коды для электронных визиток. Включите имя, телефон, email, адрес и сохраняйте контакты одним сканированием.',
      keywords: 'vCard QR, визитка QR, электронная карта, контакт QR',
      ogTitle: 'Генератор vCard QR-кодов - Электронная визитка',
      ogDescription: 'Конвертируйте визитку в QR. Автосохранение контактов.',
    },
  },
  bitcoin: {
    ko: {
      title: '비트코인 QR 코드 생성기 - 암호화폐 결제 QR | 무료',
      description: '비트코인 지갑 주소와 결제 금액을 QR 코드로 생성. 암호화폐 결제를 간편하게. BTC 주소, 금액, 메시지 포함 가능.',
      keywords: '비트코인 QR, BTC QR 코드, 암호화폐 QR, 지갑 QR, 결제 QR',
      ogTitle: '비트코인 QR 코드 생성기 - 암호화폐 결제',
      ogDescription: '비트코인 주소를 QR 코드로 변환. 암호화폐 결제 간편화.',
    },
    en: {
      title: 'Bitcoin QR Code Generator - Cryptocurrency Payment | Free',
      description: 'Create Bitcoin wallet address QR codes with payment amount. Simplify cryptocurrency payments. Include BTC address, amount, and message.',
      keywords: 'Bitcoin QR, BTC QR code, cryptocurrency QR, wallet QR, payment QR',
      ogTitle: 'Bitcoin QR Code Generator - Crypto Payment',
      ogDescription: 'Convert Bitcoin address to QR. Simplify crypto payments.',
    },
    ja: {
      title: 'ビットコインQRコード生成 - 暗号通貨決済QR | 無料',
      description: 'ビットコインウォレットアドレスと支払額をQRコードに生成。暗号通貨決済を簡単に。BTCアドレス、金額、メッセージ含む。',
      keywords: 'ビットコインQR, BTC QRコード, 暗号通貨QR, ウォレットQR',
      ogTitle: 'ビットコインQRコード生成 - 暗号通貨決済',
      ogDescription: 'ビットコインアドレスをQRコードに変換。暗号通貨決済簡易化。',
    },
    ru: {
      title: 'Генератор Bitcoin QR-кодов - Крипто-платежи | Бесплатно',
      description: 'Создавайте QR-коды с адресом Bitcoin кошелька и суммой платежа. Упростите криптовалютные платежи. Включите BTC адрес, сумму и сообщение.',
      keywords: 'Bitcoin QR, BTC QR код, криптовалюта QR, кошелек QR',
      ogTitle: 'Генератор Bitcoin QR-кодов - Крипто-платежи',
      ogDescription: 'Конвертируйте Bitcoin адрес в QR. Упростите крипто-платежи.',
    },
  },
  twitter: {
    ko: {
      title: '트위터(X) QR 코드 생성기 - 소셜 프로필 QR | 무료',
      description: '트위터(X) 프로필을 QR 코드로 공유. 사용자명 입력하면 프로필 페이지로 바로 연결. 소셜 미디어 마케팅에 최적화.',
      keywords: '트위터 QR, X QR 코드, 소셜 미디어 QR, SNS QR, 프로필 QR',
      ogTitle: '트위터(X) QR 코드 생성기 - 프로필 공유',
      ogDescription: '트위터 프로필을 QR 코드로 공유. 소셜 미디어 마케팅 활용.',
    },
    en: {
      title: 'Twitter (X) QR Code Generator - Social Profile QR | Free',
      description: 'Share Twitter (X) profile via QR code. Enter username and link directly to profile page. Perfect for social media marketing.',
      keywords: 'Twitter QR, X QR code, social media QR, SNS QR, profile QR',
      ogTitle: 'Twitter (X) QR Code Generator - Share Profile',
      ogDescription: 'Share Twitter profile via QR code. Perfect for social marketing.',
    },
    ja: {
      title: 'Twitter(X) QRコード生成 - ソーシャルプロフィールQR | 無料',
      description: 'Twitter(X)プロフィールをQRコードで共有。ユーザー名入力でプロフィールページに直接接続。ソーシャルメディアマーケティングに最適化。',
      keywords: 'Twitter QR, X QRコード, ソーシャルメディアQR, SNS QR',
      ogTitle: 'Twitter(X) QRコード生成 - プロフィール共有',
      ogDescription: 'TwitterプロフィールをQRコードで共有。ソーシャルマーケティング活用。',
    },
    ru: {
      title: 'Генератор Twitter (X) QR-кодов - Соц. профиль QR | Бесплатно',
      description: 'Поделитесь профилем Twitter (X) через QR-код. Введите имя пользователя и ссылайтесь напрямую на профиль. Идеально для соц. медиа маркетинга.',
      keywords: 'Twitter QR, X QR код, социальные сети QR, SNS QR',
      ogTitle: 'Генератор Twitter (X) QR-кодов - Поделиться профилем',
      ogDescription: 'Поделитесь Twitter профилем через QR. Идеально для маркетинга.',
    },
  },
  facebook: {
    ko: {
      title: '페이스북 QR 코드 생성기 - 소셜 페이지 QR | 무료',
      description: '페이스북 프로필/페이지를 QR 코드로 공유. URL 입력하면 페이지로 바로 연결. 이벤트, 비즈니스 페이지 홍보에 활용.',
      keywords: '페이스북 QR, Facebook QR 코드, 소셜 미디어 QR, 페이지 QR, SNS 마케팅',
      ogTitle: '페이스북 QR 코드 생성기 - 페이지 공유',
      ogDescription: '페이스북 페이지를 QR 코드로 공유. 이벤트와 비즈니스 홍보.',
    },
    en: {
      title: 'Facebook QR Code Generator - Social Page QR | Free',
      description: 'Share Facebook profile/page via QR code. Enter URL and link directly to page. Perfect for events and business page promotion.',
      keywords: 'Facebook QR, FB QR code, social media QR, page QR, SNS marketing',
      ogTitle: 'Facebook QR Code Generator - Share Page',
      ogDescription: 'Share Facebook page via QR code. Perfect for events and business.',
    },
    ja: {
      title: 'Facebook QRコード生成 - ソーシャルページQR | 無料',
      description: 'Facebookプロフィール/ページをQRコードで共有。URL入力でページに直接接続。イベント、ビジネスページ宣伝に活用。',
      keywords: 'Facebook QR, FB QRコード, ソーシャルメディアQR, ページQR',
      ogTitle: 'Facebook QRコード生成 - ページ共有',
      ogDescription: 'FacebookページをQRコードで共有。イベントとビジネス宣伝。',
    },
    ru: {
      title: 'Генератор Facebook QR-кодов - Соц. страница QR | Бесплатно',
      description: 'Поделитесь профилем/страницей Facebook через QR-код. Введите URL и ссылайтесь напрямую на страницу. Идеально для событий и бизнес-продвижения.',
      keywords: 'Facebook QR, FB QR код, социальные сети QR, страница QR',
      ogTitle: 'Генератор Facebook QR-кодов - Поделиться страницей',
      ogDescription: 'Поделитесь Facebook страницей через QR. Идеально для событий.',
    },
  },
  pdf: {
    ko: {
      title: 'PDF QR 코드 생성기 - 문서 공유 QR | 무료',
      description: 'PDF 문서 URL을 QR 코드로 생성. 카탈로그, 메뉴, 브로셔, 안내서를 QR 코드로 공유. 종이 없이 디지털 문서 배포.',
      keywords: 'PDF QR, 문서 QR 코드, 파일 공유 QR, 카탈로그 QR, 메뉴 QR',
      ogTitle: 'PDF QR 코드 생성기 - 문서를 QR로 공유',
      ogDescription: 'PDF 문서를 QR 코드로 공유. 카탈로그와 메뉴 디지털화.',
    },
    en: {
      title: 'PDF QR Code Generator - Document Sharing QR | Free',
      description: 'Create PDF document QR codes. Share catalogs, menus, brochures, and guides via QR. Distribute digital documents without paper.',
      keywords: 'PDF QR, document QR code, file sharing QR, catalog QR, menu QR',
      ogTitle: 'PDF QR Code Generator - Share Documents via QR',
      ogDescription: 'Share PDF documents via QR code. Digitize catalogs and menus.',
    },
    ja: {
      title: 'PDF QRコード生成 - 文書共有QR | 無料',
      description: 'PDF文書URLをQRコードに生成。カタログ、メニュー、パンフレット、ガイドをQRコードで共有。紙なしでデジタル文書配布。',
      keywords: 'PDF QR, 文書QRコード, ファイル共有QR, カタログQR',
      ogTitle: 'PDF QRコード生成 - 文書をQRで共有',
      ogDescription: 'PDF文書をQRコードで共有。カタログとメニューデジタル化。',
    },
    ru: {
      title: 'Генератор PDF QR-кодов - Обмен документами QR | Бесплатно',
      description: 'Создавайте QR-коды для PDF документов. Делитесь каталогами, меню, брошюрами и руководствами через QR. Распространяйте цифровые документы без бумаги.',
      keywords: 'PDF QR, документ QR код, обмен файлами QR, каталог QR',
      ogTitle: 'Генератор PDF QR-кодов - Документы через QR',
      ogDescription: 'Делитесь PDF документами через QR. Цифровизация каталогов.',
    },
  },
  mp3: {
    ko: {
      title: 'MP3 QR 코드 생성기 - 음악 공유 QR | 무료',
      description: 'MP3 음악 파일 URL을 QR 코드로 생성. 노래, 팟캐스트, 오디오북을 QR 코드로 공유. 음악 마케팅과 이벤트에 활용.',
      keywords: 'MP3 QR, 음악 QR 코드, 오디오 QR, 노래 공유, 팟캐스트 QR',
      ogTitle: 'MP3 QR 코드 생성기 - 음악을 QR로 공유',
      ogDescription: 'MP3 음악 파일을 QR 코드로 공유. 음악 마케팅 활용.',
    },
    en: {
      title: 'MP3 QR Code Generator - Music Sharing QR | Free',
      description: 'Create MP3 music file QR codes. Share songs, podcasts, and audiobooks via QR. Perfect for music marketing and events.',
      keywords: 'MP3 QR, music QR code, audio QR, song sharing, podcast QR',
      ogTitle: 'MP3 QR Code Generator - Share Music via QR',
      ogDescription: 'Share MP3 music files via QR code. Perfect for music marketing.',
    },
    ja: {
      title: 'MP3 QRコード生成 - 音楽共有QR | 無料',
      description: 'MP3音楽ファイルURLをQRコードに生成。曲、ポッドキャスト、オーディオブックをQRコードで共有。音楽マーケティングとイベントに活用。',
      keywords: 'MP3 QR, 音楽QRコード, オーディオQR, 曲共有',
      ogTitle: 'MP3 QRコード生成 - 音楽をQRで共有',
      ogDescription: 'MP3音楽ファイルをQRコードで共有。音楽マーケティング活用。',
    },
    ru: {
      title: 'Генератор MP3 QR-кодов - Обмен музыкой QR | Бесплатно',
      description: 'Создавайте QR-коды для MP3 музыкальных файлов. Делитесь песнями, подкастами и аудиокнигами через QR. Идеально для музыкального маркетинга.',
      keywords: 'MP3 QR, музыка QR код, аудио QR, обмен песнями',
      ogTitle: 'Генератор MP3 QR-кодов - Музыка через QR',
      ogDescription: 'Делитесь MP3 файлами через QR. Идеально для музыкального маркетинга.',
    },
  },
  appstore: {
    ko: {
      title: '앱스토어 QR 코드 생성기 - 앱 다운로드 QR | 무료',
      description: 'iOS 앱스토어/Google Play 앱 링크를 QR 코드로 생성. 앱 다운로드를 간편하게. 앱 마케팅과 광고에 최적화.',
      keywords: '앱스토어 QR, 앱 다운로드 QR, Play 스토어 QR, 앱 마케팅 QR, 모바일 앱 QR',
      ogTitle: '앱스토어 QR 코드 생성기 - 앱 다운로드 간편화',
      ogDescription: '앱스토어 링크를 QR 코드로 변환. 앱 다운로드 마케팅.',
    },
    en: {
      title: 'App Store QR Code Generator - App Download QR | Free',
      description: 'Create iOS App Store/Google Play app link QR codes. Simplify app downloads. Perfect for app marketing and advertising.',
      keywords: 'App Store QR, app download QR, Play Store QR, app marketing QR, mobile app QR',
      ogTitle: 'App Store QR Code Generator - Simplify App Downloads',
      ogDescription: 'Convert App Store links to QR code. Perfect for app marketing.',
    },
    ja: {
      title: 'アプリストアQRコード生成 - アプリダウンロードQR | 無料',
      description: 'iOS App Store/Google Playアプリリンクをリンクをストア/コードで生成。アプリダウンロードを簡単に。アプリマーケティングと広告に最適化。',
      keywords: 'App Store QR, アプリダウンロードQR, Play StoreQR, アプリマーケティングQR',
      ogTitle: 'アプリストアQRコード生成 - アプリダウンロード簡易化',
      ogDescription: 'App StoreリンクをQRコードに変換。アプリダウンロードマーケティング。',
    },
    ru: {
      title: 'Генератор App Store QR-кодов - Загрузка приложений | Бесплатно',
      description: 'Создавайте QR-коды для iOS App Store/Google Play ссылок на приложения. Упростите загрузку приложений. Идеально для маркетинга приложений.',
      keywords: 'App Store QR, загрузка приложения QR, Play Store QR, маркетинг приложений QR',
      ogTitle: 'Генератор App Store QR-кодов - Упростите загрузку',
      ogDescription: 'Конвертируйте App Store ссылки в QR. Идеально для маркетинга.',
    },
  },
  image: {
    ko: {
      title: '이미지 QR 코드 생성기 - 사진 공유 QR | 무료',
      description: '이미지 URL을 QR 코드로 생성. 사진, 포스터, 갤러리를 QR 코드로 공유. 전시회, 이벤트, 포트폴리오에 활용.',
      keywords: '이미지 QR, 사진 QR 코드, 갤러리 QR, 포트폴리오 QR, 전시 QR',
      ogTitle: '이미지 QR 코드 생성기 - 사진을 QR로 공유',
      ogDescription: '이미지를 QR 코드로 공유. 전시회와 이벤트에 활용.',
    },
    en: {
      title: 'Image QR Code Generator - Photo Sharing QR | Free',
      description: 'Create image URL QR codes. Share photos, posters, and galleries via QR. Perfect for exhibitions, events, and portfolios.',
      keywords: 'image QR, photo QR code, gallery QR, portfolio QR, exhibition QR',
      ogTitle: 'Image QR Code Generator - Share Photos via QR',
      ogDescription: 'Share images via QR code. Perfect for exhibitions and events.',
    },
    ja: {
      title: '画像QRコード生成 - 写真共有QR | 無料',
      description: '画像URLをQRコードに生成。写真、ポスター、ギャラリーをQRコードで共有。展示会、イベント、ポートフォリオに活用。',
      keywords: '画像QR, 写真QRコード, ギャラリーQR, ポートフォリオQR',
      ogTitle: '画像QRコード生成 - 写真をQRで共有',
      ogDescription: '画像をQRコードで共有。展示会とイベントに活用。',
    },
    ru: {
      title: 'Генератор Image QR-кодов - Обмен фото QR | Бесплатно',
      description: 'Создавайте QR-коды для URL изображений. Делитесь фотографиями, постерами и галереями через QR. Идеально для выставок, событий и портфолио.',
      keywords: 'изображение QR, фото QR код, галерея QR, портфолио QR',
      ogTitle: 'Генератор Image QR-кодов - Фото через QR',
      ogDescription: 'Делитесь изображениями через QR. Идеально для выставок.',
    },
  },
};

// Generate metadata for each locale
export function generateMetadata(locale: string): Metadata {
  const config = SEO_CONFIG[locale as keyof typeof SEO_CONFIG] || SEO_CONFIG.ko;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'QR Generator Team' }],
    creator: 'QR Generator',
    publisher: 'QR Generator',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'ko': '/ko',
        'en': '/en',
        'ja': '/ja',
        'ru': '/ru',
      },
    },
    openGraph: {
      title: config.ogTitle,
      description: config.ogDescription,
      url: currentUrl,
      siteName: 'QR Code Generator',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: config.ogTitle,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.ogTitle,
      description: config.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

// Generate metadata for QR type pages
export function generateTypeMetadata(locale: string, type: string): Metadata {
  const typeConfig = QR_TYPE_SEO[type as keyof typeof QR_TYPE_SEO]?.[locale as keyof typeof SEO_CONFIG] ||
                     QR_TYPE_SEO[type as keyof typeof QR_TYPE_SEO]?.['ko'] ||
                     SEO_CONFIG[locale as keyof typeof SEO_CONFIG] ||
                     SEO_CONFIG.ko;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  const currentUrl = `${baseUrl}/${locale}/${type}`;

  return {
    title: typeConfig.title,
    description: typeConfig.description,
    keywords: typeConfig.keywords,
    authors: [{ name: 'QR Generator Team' }],
    creator: 'QR Generator',
    publisher: 'QR Generator',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'ko': `/ko/${type}`,
        'en': `/en/${type}`,
        'ja': `/ja/${type}`,
        'ru': `/ru/${type}`,
      },
    },
    openGraph: {
      title: typeConfig.ogTitle,
      description: typeConfig.ogDescription,
      url: currentUrl,
      siteName: 'QR Code Generator',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: typeConfig.ogTitle,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: typeConfig.ogTitle,
      description: typeConfig.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

// Structured Data for SEO
export function generateStructuredData(locale: string) {
  const config = SEO_CONFIG[locale as keyof typeof SEO_CONFIG] || SEO_CONFIG.ko;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  
  // Validate locale parameter
  if (!locale || typeof locale !== 'string') {
    locale = 'ko';
  }
  
  // Language-specific names
  const appNames = {
    ko: 'QR 코드 생성기',
    en: 'QR Code Generator',
    ja: 'QRコードジェネレーター',
    ru: 'Генератор QR-кодов'
  };
  
  return [
    // WebApplication schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${baseUrl}/#webapp`,
      name: appNames[locale as keyof typeof appNames] || appNames.en,
      description: config.description,
      url: `${baseUrl}/${locale}`,
      inLanguage: locale,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
        bestRating: '5',
        worstRating: '1'
      },
      creator: {
        '@type': 'Organization',
        name: 'QR Generator Team',
        url: baseUrl
      },
      featureList: [
        'URL QR Code Generation',
        'WiFi QR Code Generation',
        'vCard QR Code Generation',
        'SMS QR Code Generation',
        'Custom Colors and Styles',
        'Logo Integration',
        'PNG/SVG Export',
        'No Registration Required'
      ]
    },
    // BreadcrumbList schema
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': baseUrl,
            name: 'Home'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': `${baseUrl}/${locale}`,
            name: appNames[locale as keyof typeof appNames] || appNames.en
          }
        }
      ]
    },
    // Organization schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'QR Generator',
      url: baseUrl,
      logo: `${baseUrl}/qr.svg`,
      sameAs: [
        // Add your social media URLs here if available
      ]
    },
    // FAQPage schema
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: locale === 'ko' ? 'QR 코드는 무료인가요?' : 
                locale === 'ja' ? 'QRコードは無料ですか？' :
                locale === 'ru' ? 'QR-коды бесплатные?' :
                'Are QR codes free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'ko' ? '네, 모든 QR 코드 생성은 완전 무료입니다. 회원가입도 필요 없습니다.' :
                  locale === 'ja' ? 'はい、すべてのQRコード生成は完全無料です。登録も不要です。' :
                  locale === 'ru' ? 'Да, все QR-коды генерируются совершенно бесплатно. Регистрация не требуется.' :
                  'Yes, all QR code generation is completely free. No registration required.'
          }
        },
        {
          '@type': 'Question',
          name: locale === 'ko' ? 'QR 코드에 로고를 넣을 수 있나요?' :
                locale === 'ja' ? 'QRコードにロゴを追加できますか？' :
                locale === 'ru' ? 'Можно ли добавить логотип в QR-код?' :
                'Can I add a logo to my QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'ko' ? '네, QR 코드 중앙에 로고나 이미지를 추가할 수 있습니다.' :
                  locale === 'ja' ? 'はい、QRコードの中央にロゴや画像を追加できます。' :
                  locale === 'ru' ? 'Да, вы можете добавить логотип или изображение в центр QR-кода.' :
                  'Yes, you can add a logo or image to the center of your QR code.'
          }
        }
      ]
    }
  ];
}