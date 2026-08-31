# IT 강사 개인 웹사이트 기획안

## 1. 사이트의 정체성

단순한 개인 홈페이지보다는 다음과 같은 형태를 추천합니다.

> **강사 포트폴리오 + 교육 콘텐츠 허브**

사이트의 핵심은 다음 3가지입니다.

- 내가 누구인가
- 무엇을 가르치는가
- 무엇을 만들었는가

---

## 2. 기본 메뉴 구성

초기 메뉴는 다음 정도로 구성하는 것이 적당합니다.

```text
홈
강사소개
기술스택
강의
교안
저서
경력
문의
```

영문 메뉴를 사용한다면:

```text
HOME
ABOUT
TECHNOLOGY
LECTURES
MATERIALS
BOOKS
CAREER
CONTACT
```

강의/교안/인강을 지나치게 세분화하기보다는 **강의라는 하나의 콘텐츠 영역 안에서 관련 자료를 연결**하는 방식이 좋습니다.

예:

```text
강의
 ├─ Java
 ├─ Spring
 ├─ Python
 ├─ AI
 ├─ Big Data
 ├─ HTML/CSS/JavaScript
 └─ Flutter
```

Java 강의의 상세 페이지에는 다음을 연결할 수 있습니다.

```text
Java
 ├─ 강의 소개
 ├─ 강의 영상
 ├─ 교안
 ├─ 예제 소스
 └─ 관련 자료
```

---

## 3. HOME 화면

첫 화면에서는 이 사람이 무엇을 하는 사람인지 5초 안에 알 수 있도록 구성하는 것이 좋습니다.

예:

```text
──────────────────────────────────────

        IT Instructor & Author

        Java · Spring · AI · Python
        Big Data · Web · Flutter

        개발자와 예비 개발자를 위한
        실무 중심의 IT 교육

        [강의 보기]  [강사 소개]

──────────────────────────────────────
```

그 아래에는 핵심 경력이나 활동을 숫자로 보여주는 것도 좋습니다.

```text
     2              10+             20+             N년+
   저서            교육 분야         강의 과정        강의 경력
```

이후 다음과 같은 순서로 콘텐츠를 배치할 수 있습니다.

```text
주요 기술
   ↓
주요 강의
   ↓
최근 교안/자료
   ↓
저서
   ↓
주요 경력
   ↓
문의
```

---

## 4. 기술스택

단순히 기술 아이콘을 나열하기보다는 **교육 영역별로 분류**하는 것이 좋습니다.

```text
TECHNOLOGY

Programming
────────────────
Java
Python
JavaScript

Backend
────────────────
Spring
Spring Boot
JPA

Frontend
────────────────
HTML
CSS
JavaScript

AI / Data
────────────────
AI
Machine Learning
Big Data

Mobile
────────────────
Flutter
```

각 기술을 클릭하면 관련 콘텐츠를 연결할 수 있습니다.

예:

```text
Java
 ↓
Java 관련 강의
Java 교안
Java 예제
Java 인강
```

이렇게 구성하면 기술스택 자체가 단순한 소개가 아니라 **콘텐츠 탐색의 시작점**이 됩니다.

---

## 5. 강의

사이트의 핵심 콘텐츠 중 하나로 강의를 강조하는 것을 추천합니다.

예:

```text
LECTURES

┌─────────────────┐
│ Java Programming│
│                 │
│ Java 기본부터   │
│ 객체지향까지    │
│                 │
│ [상세보기]      │
└─────────────────┘

┌─────────────────┐
│ Spring Boot     │
│                 │
│ Spring Boot 기반│
│ 웹 애플리케이션 │
│                 │
│ [상세보기]      │
└─────────────────┘
```

강의 상세 페이지에는 다음과 같은 내용을 포함할 수 있습니다.

```text
Java Programming

강의 소개
────────────────
...

대상
────────────────
...

교육 내용
────────────────
1. Java 기본
2. 객체지향
3. 상속
4. 다형성
...

교안
────────────────
[PDF]

관련 강의
────────────────
...
```

---

## 6. 교안 / 교육자료

교안은 별도의 콘텐츠 영역으로 관리하는 것을 추천합니다.

검색 및 기술별 필터 기능을 제공하면 좋습니다.

```text
MATERIALS

[ Java ] [ Spring ] [ Python ] [ AI ] [ Big Data ]

검색: __________________

──────────────────────────

Java Programming
PDF · 2026

Spring Boot
PDF · 2026

Python Programming
PDF · 2026

AI Programming
PDF · 2026
```

관리자에서 교안을 등록할 때는 다음 정도의 데이터를 관리하면 됩니다.

```text
제목
설명
분야
기술
작성일
파일
관련 강의
```

---

## 7. 저서

저서가 2권 있으므로 독립적인 **BOOKS** 영역을 두는 것이 좋습니다.

책을 단순히 표지와 제목만 보여주는 것보다 다음 정보를 제공하면 좋습니다.

```text
책 소개
목차
대상 독자
출판 정보
관련 강의
관련 교안
```

특히 다음과 같은 연결 구조를 만드는 것이 좋습니다.

```text
저서
 ↕
강의
 ↕
교안
```

이렇게 하면 각각의 콘텐츠가 서로 연결되어 사이트 전체가 하나의 교육 콘텐츠 데이터베이스처럼 동작합니다.

---

## 8. 경력

경력은 단순한 이력서 목록보다는 Timeline 형태를 추천합니다.

예:

```text
CAREER

2026
│
├── AI / Big Data 교육
│
2025
│
├── Java / Spring 교육
│
2024
│
├── Python 교육
│
2023
│
├── ...
│
●
```

경력의 종류를 분류할 수도 있습니다.

```text
교육 경력
프로젝트
저술
기업 교육
특강
기타 활동
```

---

## 9. SPA vs 일반 페이지

이 사이트의 성격을 고려하면 **SPA를 굳이 선택하지 않는 것**을 추천합니다.

사이트의 주요 특성은 다음과 같습니다.

```text
콘텐츠 중심
+
검색엔진 노출 중요
+
강의/교안/저서 등의 상세 페이지
+
개인 브랜드 사이트
```

따라서 다음과 같은 페이지 기반 구조가 적합합니다.

```text
/
├── /about
├── /technology
├── /lectures
├── /lectures/java
├── /lectures/spring
├── /materials
├── /books
├── /career
└── /contact
```

---

## 10. SPA 대신 SSR/SSG + 컴포넌트 구조 고려

SPA와 전통적인 서버 페이지 방식의 양자택일보다는 다음과 같은 구조도 고려할 수 있습니다.

```text
                Frontend
                   │
          ┌────────┴────────┐
          │                 │
      정적 페이지         동적 페이지
          │                 │
   About / Books        검색 / 목록
   Career / etc        관리자 데이터
          │                 │
          └────────┬────────┘
                   │
                  API
                   │
                Backend
                   │
                Database
```

즉, 사용자에게는 일반적인 웹사이트처럼 보이면서 내부적으로는 컴포넌트 기반으로 개발하는 방식입니다.

---

## 11. 백엔드 기술은 나중에 결정

현재 단계에서는 백엔드를 먼저 결정할 필요가 없습니다.

가능한 조합의 예:

### 선택지 A

```text
React
   +
Spring Boot
   +
MariaDB
```

전통적이고 익숙한 조합입니다.

### 선택지 B

```text
Next.js
   +
Spring Boot
   +
MariaDB
```

SSR/SSG와 검색엔진 노출까지 고려할 수 있습니다.

### 선택지 C

```text
Next.js
   +
API
   +
DB
```

백엔드를 별도로 최소화하는 구성입니다.

### 선택지 D

```text
Vue
   +
Spring Boot
   +
MariaDB
```

교육용/개인 프로젝트로도 깔끔한 조합입니다.

**중요한 것은 지금 기술을 결정하지 않는 것입니다.**

먼저 사이트 구조와 데이터 구조를 결정한 뒤 기술을 선택하는 것이 좋습니다.

---

## 12. 가장 중요한 부분: 데이터 모델

관리자 모드를 별도로 만들 예정이라면 결국 관리자에서 콘텐츠 데이터를 입력하게 됩니다.

따라서 먼저 데이터 모델을 생각하는 것이 중요합니다.

### Lecture

```text
id
title
description
category
thumbnail
level
duration
created_at
updated_at
```

### Material

```text
id
title
description
category
file
version
created_at
```

### Book

```text
id
title
description
cover
publisher
published_date
isbn
```

### Career

```text
id
title
organization
description
start_date
end_date
```

### Technology

```text
id
name
category
icon
description
```

---

## 13. 콘텐츠 간 관계

기술, 강의, 교안, 저서를 서로 연결하면 사이트가 훨씬 강력해집니다.

예:

```text
Java
 │
 ├── Java Programming 강의
 ├── Java 교안
 └── Java 관련 저서
```

Spring:

```text
Spring
 │
 ├── Spring Framework
 ├── Spring Boot
 ├── Spring Data JPA
 └── 관련 강의
```

AI:

```text
AI
 │
 ├── AI Programming
 ├── Python
 ├── Machine Learning
 └── 관련 교안
```

전체적으로 보면:

```text
Technology
     ↑
     │
Lecture ─── Material
     │
     ↓
    Book
```

즉, 각각의 콘텐츠가 서로 연결되는 **교육 콘텐츠 데이터베이스** 구조를 목표로 하는 것이 좋습니다.

---

## 14. 추천 개발 순서

### ① 사이트 목적 정의

```text
개인 홈페이지인가?
강사 포트폴리오인가?
교육 콘텐츠 플랫폼인가?
```

추천:

> **강사 포트폴리오 + 교육 콘텐츠 허브**

### ② 사이트 메뉴 구성

```text
HOME
ABOUT
TECHNOLOGY
LECTURES
MATERIALS
BOOKS
CAREER
CONTACT
```

### ③ 각 페이지의 와이어프레임 작성

색상, 애니메이션, 프레임워크보다 먼저

> **어디에 무엇을 보여줄 것인가**

를 결정합니다.

### ④ 데이터 구조 설계

```text
Technology
Lecture
Material
Book
Career
...
```

### ⑤ 관리자 기능 정의

```text
강의 등록
교안 등록
저서 등록
경력 등록
기술 등록
```

### ⑥ API 설계

이 단계에서 Spring Boot, FastAPI, Node.js 등의 백엔드 기술을 결정합니다.

### ⑦ Frontend 선택

그 다음 React, Vue, Next.js 등의 프론트엔드 기술을 선택합니다.

---

## 15. 이 사이트를 하나의 실제 프로젝트로 활용

단순히 "내 강사 홈페이지"로 만드는 것보다 다음과 같이 생각하면 좋습니다.

> **내가 가르치는 기술들을 실제로 적용해서 만든 IT 교육 포트폴리오 플랫폼**

예:

```text
Frontend
 └─ React / Next.js

Backend
 └─ Spring Boot

Database
 └─ MariaDB

AI
 └─ OpenAI API

Deployment
 └─ Docker / Linux / Cloud
```

이렇게 구성하면 사이트 자체가 하나의 실제 프로젝트가 됩니다.

강의할 때도 실제 프로젝트 사례로 활용할 수 있다는 장점이 있습니다.

---

# 16. 지금 당장 정리할 것

현재 단계에서 우선순위는 다음 3가지입니다.

### 1. 메뉴 구조 결정

사이트에 어떤 메뉴가 필요한지 결정합니다.

### 2. 각 메뉴의 콘텐츠 목록 작성

각 페이지에서 무엇을 보여줄지 정리합니다.

### 3. 콘텐츠 간 관계 정리

```text
기술
 ↓
강의
 ↓
교안
 ↓
저서
```

처럼 어떤 콘텐츠가 서로 연결되는지 정리합니다.

이 3가지가 결정된 후에야 DB, API, Backend, Frontend를 결정하는 것이 좋습니다.

---

## 최종 추천 구조

```text
                         HOME
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
      ABOUT          TECHNOLOGY          LECTURES
        │                 │                 │
      경력              Java              Java
      소개              Spring            Spring
      프로필            Python            Python
                        AI                AI
                        Big Data          Big Data
                                            │
                                            ↓
                                         MATERIALS
                                            │
                                         교안/PDF
                                            │
                                            ↓
                                          BOOKS
                                            │
                                          저서
```

**핵심 방향:**

> **강사 개인 홈페이지가 아니라, 강의·교안·저서·경력·기술스택이 서로 연결되는 "IT 교육 콘텐츠 포트폴리오 사이트"로 설계한다.**
