# CLAUDE.md

이 파일은 이 저장소의 코드 작업을 할 때 Claude Code(claude.ai/code)에 제공되는 지침입니다.

## 프로젝트 개요

React 19, TypeScript, TailwindCSS v4, shadcn/ui 컴포넌트를 갖춘 최신 Next.js v16 스타터 킷입니다. 타입 안정성, 접근성, 다크모드 지원에 중점을 두고 빠른 개발을 위해 구축되었습니다.

## 개발 명령어

```bash
# 개발 서버 시작 (http://localhost:3000에서 실행)
npm run dev

# 프로덕션을 위해 빌드
npm run build

# 프로덕션 빌드를 로컬에서 실행
npm start

# 코드 린트
npm run lint
```

## 프로젝트 구조

```
├── app/                      # Next.js App Router 페이지 및 레이아웃
│   ├── layout.tsx           # ThemeProvider, Header, Footer가 포함된 루트 레이아웃
│   ├── page.tsx             # 기능 쇼케이스가 있는 홈 페이지
│   └── components-showcase/ # 컴포넌트 데모 페이지
├── components/              # React 컴포넌트
│   ├── ui/                  # shadcn/ui 컴포넌트 (Button, Card, Badge, Separator 등)
│   ├── header.tsx           # 헤더 컴포넌트
│   ├── footer.tsx           # 푸터 컴포넌트
│   └── theme-provider.tsx   # next-themes 통합
├── lib/                     # 유틸리티 함수
│   └── utils.ts            # Tailwind 클래스 병합을 위한 cn() 헬퍼
├── public/                  # 정적 자산
├── app/globals.css         # 글로벌 스타일, Tailwind 지시문, CSS 변수
├── components.json         # shadcn/ui 설정
├── tsconfig.json          # @ 경로 별칭이 있는 TypeScript 설정
├── eslint.config.mjs      # ESLint 설정 (플랫 설정)
├── next.config.ts         # Next.js 설정
└── package.json           # 의존성 및 스크립트
```

## 주요 아키텍처 패턴

### TypeScript 경로 별칭
- `@/*`는 프로젝트 루트로 확인 (tsconfig.json에서 설정)
- 프로젝트 전체에서 깔끔한 임포트를 위해 `@/components`, `@/lib`, `@/ui` 사용

### 컴포넌트 구조
- **UI 컴포넌트** (`components/ui/`): Radix UI에서 제공하는 재사용 가능하고 조합 가능한 shadcn/ui 컴포넌트
- **페이지 컴포넌트** (`components/`, 루트 레벨): Header, Footer, ThemeProvider 같은 기능별 컴포넌트
- 컴포넌트는 TypeScript를 사용하고 타입 안정성을 위해 타입이 지정된 props를 수용합니다

**UI 컴포넌트 구현 시 중요 사항:**
- `forwardRef` 사용 시 ref 타입이 실제 DOM 요소와 일치해야 함 (예: `<h2>` 요소에는 `HTMLHeadingElement`, `<span>`에는 `HTMLSpanElement`)
- 인라인 요소(텍스트 흐름 내 사용)는 `<span>` 사용 권장 (예: Badge는 `<span>`으로 구현)
- 블록 요소는 `<div>` 사용
- 접근성: 필요시 `aria-label`, `role` 속성 추가 (특히 시각적 장식만 있는 요소)

### 스타일링 접근 방식
- **TailwindCSS v4**: 빌드 설정이 필요 없는 유틸리티 우선 스타일링
- **CSS 변수**: 테마 지원 가능한 색상 (다크/라이트 모드)
- **cn() 헬퍼** (`lib/utils.ts`): clsx + tailwind-merge를 사용하여 Tailwind 클래스를 안전하게 병합
- **다크 모드**: next-themes로 관리, 시스템 설정을 존중하고 사용자 선택을 유지

### 테마 시스템
- `ThemeProvider`는 `app/layout.tsx`의 전체 앱을 래핑합니다
- localStorage 지속성과 함께 다크 모드 지원을 위해 `next-themes` 사용
- `app/globals.css`에 정의된 CSS 변수는 테마 변경에 따라 조정됩니다
- 루트 `<html>` 요소의 `suppressHydrationWarning`은 테마 감지로 인한 하이드레이션 불일치를 방지합니다

**테마 토글 구현 시 주의:**
- `header.tsx`에서 테마 변경 로직 작성 시 반드시 `useTheme()`에서 `resolvedTheme`을 사용
- `defaultTheme="system"`일 때 `theme` 값은 문자열 `"system"`이 되므로, 토글 조건문에서 예상과 다르게 동작할 수 있음
- `resolvedTheme`은 시스템 설정을 고려한 실제 값(`"light"` 또는 `"dark"`)을 반환하므로 의존할 수 있음

### 서버 컴포넌트
- Next.js App Router는 기본적으로 서버 컴포넌트를 사용합니다
- 클라이언트 상호작용이 필요한 경우에만 (이벤트, 훅, 브라우저 API) `"use client"` 지시문을 사용합니다
- 루트 레이아웃 및 페이지 파일은 기본적으로 서버 컴포넌트입니다

## Next.js v15+ 중요 사항

**이 프로젝트는 이전 버전의 주요 변경 사항이 있는 Next.js 16.x를 사용합니다.** 코드를 작성하기 전에:
1. `node_modules/next/dist/docs/`의 공식 Next.js 문서 확인
2. 콘솔 출력의 사용 중단 공지 주의
3. 주요 변경 사항: App Router가 표준, Pages Router 제거, 메타데이터 API, 비동기 서버 컴포넌트, 스트리밍, 내장 최적화

## 개발 팁

- **컴포넌트 쇼케이스**: `/components-showcase` 경로에서 사용 가능한 모든 UI 컴포넌트 보기
- **Tailwind 클래스**: 표준 Tailwind 유틸리티 사용; `cn()` 유틸리티는 클래스 충돌을 방지합니다
- **아이콘**: 일관된 아이콘 디자인을 위해 lucide-react 사용 (400개 이상의 아이콘 사용 가능)
- **언어**: 프로젝트는 UI 텍스트에 한국어를 사용합니다 (루트 레이아웃에서 lang="ko")
- **타입 확인**: TypeScript 엄격한 모드 활성화; 항상 컴포넌트 props에 타입 제공

## Playwright MCP를 통한 앱 분석 및 검증

개발 중 앱의 실제 브라우저 동작, 콘솔 오류, 접근성을 검증하려면:

```bash
# 1. 개발 서버 실행 (필수)
npm run dev

# 2. Claude Code에서 Playwright MCP 도구 사용:
# - mcp__playwright__browser_navigate: 페이지 접속
# - mcp__playwright__browser_snapshot: 접근성 트리 캡처
# - mcp__playwright__browser_console_messages: 콘솔 오류 확인
# - mcp__playwright__browser_take_screenshot: 시각적 상태 확인
# - mcp__playwright__browser_resize: 반응형 테스트 (예: 375x812 모바일)
# - mcp__playwright__browser_click: 버튼 클릭 테스트
# - mcp__playwright__browser_evaluate: JavaScript 실행
```

**검증 체크리스트:**
- 테마 토글이 양방향으로 정상 작동하는가
- 모바일 뷰포트에서 모든 요소가 접근 가능한가 (aria-label 포함)
- 콘솔에 타입 오류나 런타임 에러가 없는가
- 모든 링크가 유효한 href를 가지는가
