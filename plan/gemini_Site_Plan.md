# IT 강사 개인 포트폴리오 웹사이트 기획 가이드

본 문서는 Java, Spring, AI, Big Data, HTML/CSS/JS, Python, Flutter 등 다방면의 IT 기술을 강의하고 저서를 집필한 전문 IT 강사를 위한 **개인 브랜딩 포트폴리오 사이트 기획 가이드**입니다.

---

## 1. 프론트엔드 아키텍처: SPA vs MPA

### 💡 추천: Next.js (React 기반) 또는 Nuxt.js (Vue 기반)
- **SPA(Single Page Application)의 장점**: 교안, 인강, 저서 등 정보량이 많아도 페이지 전환 시 매끄럽고 빠른 UX(사용자 경험)를 제공합니다.
- **SSR/SSG(서버사이드 렌더링 / 정적 사이트 생성)의 필수성**: 저서나 인강 포트폴리오는 검색엔진(Google, Naver 등) 및 SNS 공유(OpenGraph) 시 노출 및 SEO가 매우 중요합니다. Pure SPA보다는 **Next.js**나 **Nuxt.js**를 활용하여 SSG/SSR 기반으로 구축하는 것을 강력히 추천합니다.

---

## 2. UI / UX 디자인 및 레이아웃 구성

사이트의 핵심 목적은 **"전문성(신뢰감)"**과 **"직관적인 정보 전달"**입니다.

### 2.1 메인 히어로 섹션 (Hero Section)
- **캐치프레이즈**: 예) *"Java부터 AI까지, 실무 경험과 저작 노하우로 전달하는 IT 전문 강사 성낙현입니다."*
- **시각 요소**: 대표 저서 2권 표지 실물 렌더링, 강의 분야 태그 클라우드, 프로필 사진
- **CTA (Call to Action)**: [강의 문의하기], [저서 & 인강 보러가기] 버튼

### 2.2 기술 스택 (Tech Stack Section)
단순 아이콘 나열 대신 **역할별 카테고리화**를 적용합니다.
- **Backend & Language**: Java, Spring, Python, Node.js
- **Frontend & Mobile**: HTML5, CSS3, JavaScript, React, Flutter
- **Data & AI**: Big Data, MongoDB, Python AI Library
- **DevOps & Tools**: Git, Docker, Cloud

### 2.3 저서 및 인강 (Books & Online Courses)
- **저서 섹션**: 
  - 서적 표지, 도서명, 출판사, 출판일, 대표 목차 요약
  - 주요 구매처(알라딘, YES24, 교보문고 등) 링크 버튼
- **인강/강좌 섹션**: 
  - 플랫폼별(Inflearn 등) 강의 카드 UI
  - 수강생 평점, 핵심 학습내용, 강의 플랫폼 이동 버튼

### 2.4 교안 및 수강생 자료실 (Resources & Materials)
- 수강생들이 가장 자주 방문할 섹션입니다.
- **분류 탭(Tab)**: `Java/Spring` | `Python/AI` | `Frontend` | `Database`
- **목록 구성**: 교안 제목, 관련 과목, 다운로드 링크/GitHub 레포지토리 연결

### 2.5 강의 경력 및 출강 이력 (Career & History)
- **타임라인 UI**: 연도별 주요 출강 기관, 기업 연수, 대학 강의, 세미나 발표 이력 시각화
- 주요 대표 성과 및 강의 수강생 수 통계 요약 (Numeric Callout)

---

## 3. 개발 전 준비 및 정리 단계 (Step-by-Step)

개발에 착수하기 전 아래 **4단계 과정**으로 데이터를 정리하면 구현 속도가 훨씬 빨라집니다.

### STEP 1. 콘텐츠(데이터) 텍스트 및 미디어 정리
1. **프로필**: 자기소개글, 강의 철학, 연락처(이메일, GitHub, 블로그, SNS)
2. **저서**: 도서명, 표지 고해상도 이미지, ISBN, 출판사, 책 소개글, 목차, 판매처 URL
3. **인강**: 강의 제목, 썸네일, 수강 대상, 주요 기술 스택 태그, 수강 페이지 URL
4. **교안**: 과목별 PDF/슬라이드 자료 또는 GitHub 링크, 자료 설명
5. **경력**: 출강 기관명, 강의 주제, 대상, 연도/기간

### STEP 2. 정보 구조 (Information Architecture, IA) 설계
사이트 메뉴 레이아웃 및 URL 구조를 확정합니다.
- `/` : 메인 (소개, 대표 저서, 핵심 스택, 주요 이력)
- `/about` : 상세 프로필 및 타임라인 이력
- `/courses` : 저서 및 인강 목록
- `/resources` : 수강생 교안 및 공개 자료실
- `/contact` : 강의 및 출강 문의 폼

### STEP 3. 와이어프레임 (Wireframe) 작성
- Figma 또는 종이 스케치를 활용해 각 페이지의 레이아웃 배치 작성
- 반응형 웹(PC / Tablet / Mobile) 화면 비율 사전 구상

### STEP 4. REST API / JSON 데이터 모델링
관리자 모드 백엔드와 프론트엔드가 주고받을 JSON API 구조 규격을 정의합니다.
