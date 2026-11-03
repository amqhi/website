import { getContext, setContext } from 'svelte';

export type Locale = 'en' | 'ko';

const messages = {
	en: {
		'lang.label': 'Language',
		'lang.en': 'English',
		'lang.ko': '한국어',
		'theme.light': 'Light',
		'theme.dark': 'Dark',
		'theme.system': 'System',
		'theme.label': 'Theme',
		'nav.apps': 'Apps',
		'nav.pricing': 'Pricing',
		'nav.open': 'Open menu',
		'nav.close': 'Close menu',
		'home.title': 'Amqhi - Back to the Basics',
		'home.heroTitle': 'Back to the Basics',
		'home.heroBody':
			'Restore the lightweight, fast utilities you truly own, with your favorite style.',
		'home.getStarted': 'Get started',
		'home.fastTitle': 'Fast',
		'home.fastBody': 'No need to wait for the app to open.',
		'home.designTitle': 'Design',
		'home.designBody': 'Stop worrying about updates from the maker.',
		'home.hostTitle': 'Self-hosting',
		'home.hostBody': 'Your data is entirely yours.',
		'home.platformTitle': 'Cross-platform',
		'home.platformBody': 'Reach your data anytime, anywhere.',
		'home.unifiedTitle': 'A unified ecosystem',
		'home.unifiedBody': 'Data you create once can be used in any app.',
		'home.lightTitle': 'Lightness',
		'home.lightBody': 'The tool stays focused on its essence.',
		'footer.tagline': 'Back to the Basics.',
		'footer.legal': 'Legal',
		'footer.privacy': 'Privacy',
		'footer.terms': 'Terms',
		'footer.imprint': 'Imprint',
		'footer.contact': 'Contact',
		'page.pricing': 'Pricing',
		'page.privacy': 'Privacy',
		'page.terms': 'Terms',
		'page.imprint': 'Imprint',
		'page.contact': 'Contact',
		comingSoon: 'Coming soon...',
		alphaDownload: 'Alpha release download',
		source: 'View source',
		download: 'Download',
		copy: 'Copy',
		copied: 'Copied',
		'sr.os': 'Operating system',
		'sr.install': 'Install type',
		'sr.arch': 'Architecture',
		'sr.style': 'Style',
		'app.cloud.tagline': 'Where all of my data comes together.',
		'app.cloud.description':
			'Amqhi Cloud handles files, folders, notes, music, and every other kind of data in one place, like a file manager. Data from the other apps shows up here as files, and files you add can be used right away in each dedicated app.',
		'app.music.tagline': 'A premium music library in my hands.',
		'app.music.description':
			'Amqhi Music lets you freely edit music metadata and synced lyrics. Refine the details yourself and build a premium music library of your own.',
		'app.notes.tagline': 'Where all of my thoughts are kept.',
		'app.notes.description':
			'Amqhi Notes syncs notes in the lightest, fastest way. No need to wait for the app to open or worry about memory use. Read and write what you have written, right away.',
		'app.photos.tagline': 'A beautiful photo album of my own.',
		'app.photos.description':
			'Amqhi Photos is a gallery that lays out photos and videos clearly, without delay. No need to wait for a file manager to load the list. Enjoy the photos that matter, quickly and comfortably.',
		'app.web.tagline': 'My exploration, continued anywhere.',
		'app.web.description':
			'Amqhi Web carries the flow of browsing with you, anytime and anywhere. Reach your bookmarks and history immediately, free from the limits of an operating system or hardware.',
		'app.ai.tagline': 'A powerful assistant that helps me anywhere.',
		'app.ai.description':
			'Amqhi AI is an intelligent assistant that fully supports everyday life by drawing on data from the other apps in the ecosystem.'
	},
	ko: {
		'lang.label': '언어',
		'lang.en': 'English',
		'lang.ko': '한국어',
		'theme.light': '라이트',
		'theme.dark': '다크',
		'theme.system': '시스템',
		'theme.label': '테마',
		'nav.apps': '앱',
		'nav.pricing': '요금',
		'nav.open': '메뉴 열기',
		'nav.close': '메뉴 닫기',
		'home.title': 'Amqhi - 다시 기본으로',
		'home.heroTitle': '다시 기본으로',
		'home.heroBody': '온전히 당신이 소유하던 가볍고 빠른 유틸리티를 제자리에, 당신이 좋아하던 스타일로.',
		'home.getStarted': '시작하기',
		'home.fastTitle': '빠름',
		'home.fastBody': '앱이 켜질 때까지 기다릴 필요 없습니다.',
		'home.designTitle': '디자인',
		'home.designBody': '더 이상 제작사의 업데이트를 걱정하지 마세요.',
		'home.hostTitle': '셀프 호스팅',
		'home.hostBody': '당신의 데이터는 온전히 당신의 것입니다.',
		'home.platformTitle': '크로스 플랫폼',
		'home.platformBody': '언제나, 어디에서나 당신의 데이터에 접근하세요.',
		'home.unifiedTitle': '통합된 생태계',
		'home.unifiedBody': '한 번 만든 데이터는 어느 앱에서나 사용할 수 있습니다.',
		'home.lightTitle': '가벼움',
		'home.lightBody': '도구는 본질에 집중합니다.',
		'footer.tagline': '다시 기본으로.',
		'footer.legal': '법적 고지',
		'footer.privacy': '개인정보',
		'footer.terms': '이용약관',
		'footer.imprint': '발행정보',
		'footer.contact': '문의',
		'page.pricing': '요금',
		'page.privacy': '개인정보',
		'page.terms': '이용약관',
		'page.imprint': '발행정보',
		'page.contact': '문의',
		comingSoon: '준비중...',
		alphaDownload: '알파 릴리즈 다운로드',
		source: '소스 코드 보기',
		download: '다운로드',
		copy: '복사',
		copied: '복사됨',
		'sr.os': '운영체제',
		'sr.install': '설치 종류',
		'sr.arch': '아키텍처',
		'sr.style': '스타일',
		'app.cloud.tagline': '나의 모든 데이터가 모이는 공간',
		'app.cloud.description':
			'Amqhi Cloud는 파일, 폴더, 노트, 음악 등 모든 데이터가 한곳에서 파일 매니저처럼 다뤄지는 앱입니다. 다른 앱의 데이터는 이곳에서 파일 형태로 보여지며, 올려둔 파일은 각 전용 앱에서 바로 활용할 수 있습니다.',
		'app.music.tagline': '내 손안의 프리미엄 음악 라이브러리',
		'app.music.description':
			'Amqhi Music은 음악 메타데이터를 자유롭게 수정하고 싱크 가사를 편집할 수 있는 앱입니다. 디테일한 정보를 직접 다듬어 나만의 프리미엄 음악 라이브러리를 구축해 보세요.',
		'app.notes.tagline': '나의 모든 생각이 담기는 곳',
		'app.notes.description':
			'Amqhi Notes는 메모를 가장 가볍고 빠르게 동기화합니다. 앱이 켜지길 기다릴 필요도, 메모리 사용량을 걱정할 필요도 없이 작성한 글을 즉시 확인하고 기록해 보세요.',
		'app.photos.tagline': '나만의 아름다운 사진첩',
		'app.photos.description':
			'Amqhi Photos는 사진과 동영상을 지연 없이 선명하게 펼쳐주는 갤러리 앱입니다. 파일 매니저가 목록을 로드할 때까지 기다릴 필요 없이, 소중한 사진들을 빠르고 쾌적하게 감상해 보세요.',
		'app.web.tagline': '어디서나 이어지는 나의 탐험',
		'app.web.description':
			'Amqhi Web은 웹 탐색의 흐름을 언제 어디서나 자유롭게 이어줍니다. 운영체제와 하드웨어의 제약 없이 북마크와 검색 기록에 즉시 접근해 보세요.',
		'app.ai.tagline': '어디서나 나를 돕는 강력한 어시스턴트',
		'app.ai.description':
			'Amqhi AI는 생태계 내 다른 앱의 데이터를 종합적으로 활용하여 일상을 완벽하게 보조하는 지능형 어시스턴트입니다.'
	}
} as const;

export type MessageId = keyof (typeof messages)['en'];

const localeKey = Symbol('locale');

export function provideLocale(getLocale: () => Locale) {
	setContext(localeKey, getLocale);
}

export function useI18n() {
	const getLocale = getContext<() => Locale>(localeKey);
	return {
		get locale() {
			return getLocale();
		},
		t(id: MessageId) {
			return messages[getLocale()][id];
		}
	};
}

const bots =
	/googlebot|bingbot|duckduckbot|baiduspider|yandexbot|slurp|facebookexternalhit|twitterbot|linkedinbot|discordbot|applebot|ahrefsbot|semrushbot|petalbot|sogou|ia_archiver/i;

export function localeFromRequest(request: Request): Locale {
	const cookie = request.headers.get('cookie') ?? '';
	const saved = cookie.match(/(?:^|;\s*)locale=(en|ko)(?:\s*;|$)/);
	if (saved) return saved[1] as Locale;

	const userAgent = request.headers.get('user-agent') ?? '';
	if (bots.test(userAgent)) return 'en';

	const accepted = request.headers.get('accept-language') ?? '';
	const first = accepted.split(',')[0]?.trim().toLowerCase() ?? '';
	return first.startsWith('ko') ? 'ko' : 'en';
}

export function localeCookie(locale: Locale) {
	return `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
