# Cursor CLI 무료(Hobby) 사용량 가이드

> 정리 기준: 2026년 8월 · 공식 문서 및 Cursor CLI(`agent`) 동작 확인

## 핵심 요약

| 항목 | 내용 |
|------|------|
| **플랜 이름** | Hobby (무료) |
| **CLI 별도 한도** | 없음 — IDE·CLI·웹이 **같은 계정 한도**를 공유 |
| **일일 제한** | **없음** (하루 N회 같은 공식 일일 쿼터 없음) |
| **리셋 주기** | **월간** (계정 가입/구독일 기준) |
| **공개된 정확한 숫자** | **없음** (Tab·Agent 각각 "limited"로만 안내) |
| **한도 확인** | [cursor.com/dashboard](https://cursor.com/dashboard) → Spending 탭 |

---

## Cursor CLI와 사용량의 관계

Cursor CLI는 `agent` 명령으로 터미널에서 Agent를 실행합니다. CLI 전용 무료 쿼터는 **존재하지 않으며**, 로그인한 Cursor 계정의 Hobby 한도를 그대로 사용합니다.

```bash
# 계정·플랜 확인
agent about

# 로그인 상태 확인
agent status
```

`agent about` 출력 예시:

```
Subscription Tier   Free
User Email          your@email.com
```

---

## 무료(Hobby) 플랜에 포함되는 것

공식 가격 페이지 기준 Hobby 플랜 특징:

- **신용카드 불필요**, 기간 만료 없음 (14일 체험판이 아닌 상시 무료 티어)
- **제한된 Tab 자동완성** (limited Tab completions)
- **제한된 Agent 요청** (limited Agent requests)
- 핵심 편집 기능

### 공개되지 않는 것

Cursor는 Hobby의 **정확한 요청 수·토큰 수를 공개하지 않습니다.**

과거 요금제(예: 2,000 completions, 50 slow premium requests 등)를 인용한 블로그·문서는 **구(舊) 플랜** 기준이므로 현재와 다를 수 있습니다.

---

## "하루에 얼마나 쓸 수 있나?"

**공식적인 일일 한도는 없습니다.**

사용량은 **월간 사이클**로 관리됩니다. 따라서:

- "하루 10회"처럼 고정된 공식 수치는 **없음**
- 사용 패턴(짧은 질문 vs 긴 Agent·도구 호출)에 따라 소진 속도가 크게 달라짐
- 가벼운 Tab 위주 + 가끔 Agent 사용이면 한 달을 버틸 수 있음
- 긴 Agent 세션·많은 도구 호출을 반복하면 같은 달 안에 한도에 도달할 수 있음

실무적으로는 **"하루 N회"가 아니라 "이번 달 남은 양"**을 대시보드에서 확인하는 것이 정확합니다.

---

## 사용량이 측정되는 항목 (Hobby)

Hobby에서는 대략 아래 **두 개의 독립적인 한도**로 이해하면 됩니다.

| 항목 | 설명 | 한도 소진 시 |
|------|------|-------------|
| **Hobby Tab** | 타이핑 중 자동완성 예측 요청 | Tab 제안 중단 (Agent는 별도 잔량이 있으면 가능) |
| **Hobby Agent** | CLI `agent`, IDE Agent/Chat | Agent 요청 중단 (Tab은 별도 잔량이 있으면 가능) |

### Tab 한도에 대한 주의

Tab은 **Tab 키로 수락한 횟수만** 세는 것이 아닙니다. 입력을 멈출 때 Cursor가 **예측을 요청**하면 그것도 소모될 수 있어, 체감보다 빨리 줄어드는 경우가 있습니다.

### 모델 제한

무료 계정에서 특정 고급 모델을 고정(pin)하면 다음과 유사한 안내가 나올 수 있습니다.

> Free plans can only use Auto. Switch to Auto or upgrade plans to continue.

이는 **월간 쿼터 소진**과는 다른 **모델 라우팅 제한**입니다. Auto 모델로 전환하거나 유료 플랜으로 업그레이드해야 합니다.

---

## 한도에 걸리면 언제 리셋되나?

### 월간 리셋 (기본)

| 질문 | 답변 |
|------|------|
| 매일 자정에 리셋? | **아니오** |
| 매월 1일에 리셋? | **반드시 그렇지 않음** |
| 실제 리셋 시점 | **계정 가입일(또는 구독 시작일) 기준 매월 같은 날** |

예: 1월 15일에 가입했다면 → 매월 15일 전후에 Hobby Tab·Agent 한도가 갱신됩니다.

- **미사용분 이월 없음** — 남은 한도는 다음 달로 넘어가지 않음
- 리셋일은 [대시보드 Spending 탭](https://cursor.com/dashboard) 또는 Manage Subscription에서 확인

### 일시적 Rate Limit (별도 개념)

"rate limit" 메시지는 **월간 플랜 한도**와 다릅니다.

- 짧은 시간에 과도한 요청 시 **일시적**으로 걸릴 수 있음
- 잠시 기다리면 해소되는 경우가 많음
- 재설치·로그아웃·캐시 삭제로 **월간 쿼터가 채워지지는 않음** (서버 측 계정 한도)

---

## 한도 도달 시 나타나는 메시지 (무료)

| 메시지 (예시) | 의미 |
|---------------|------|
| `You've reached your Free plan limit. Upgrade to Pro for expanded agent usage.` | Hobby 월간 한도 소진 |
| `You've hit your rate limit on your current plan` | 일시적 속도 제한 (월간 한도와 별개) |
| `Free plans can only use Auto...` | 무료 플랜 모델 라우팅 제한 |

---

## 사용량 확인 방법

### 1. 웹 대시보드 (가장 정확)

1. [https://cursor.com/dashboard](https://cursor.com/dashboard) 접속
2. **Spending** 탭에서 잔여 사용량·다음 리셋일 확인
3. 한도에 가까워지면 에디터/CLI에서 **사용량 경고**(예: 50% 사용)가 표시될 수 있음

### 2. CLI

```bash
agent about    # 플랜 티어(Free/Pro 등) 확인
agent status   # 로그인 이메일 확인
```

CLI에는 **남은 요청 수를 직접 출력하는 명령은 없습니다.** 잔량은 대시보드가 기준입니다.

---

## 한도 소진 후 선택지

| 방법 | 설명 |
|------|------|
| **다음 월간 사이클까지 대기** | Hobby 한도는 결제 주기에 맞춰 갱신 |
| **Pro 등 유료 플랜 업그레이드** | Tab 무제한 + Agent용 별도 사용 풀 제공 |
| **On-demand 사용** | 유료 플랜에서 포함량 초과 시 API 요율로 추가 과금 (Hobby는 해당 없음) |

재설치, 캐시 삭제, 다른 기기에서 재로그인은 **한도를 초기화하지 않습니다.**

---

## 유료 플랜과의 차이 (참고)

Hobby와 달리 Pro 이상은 대략 다음 구조입니다.

| 구분 | Hobby | Pro (유료, 참고) |
|------|-------|------------------|
| Tab | 제한 있음 | 무제한 |
| Agent | 제한 있음 | Cursor Models 풀 + Other Models 풀 (월 $20 상당 등) |
| 리셋 | 월간 (가입일 기준) | 월간 (구독일 기준) |

CLI에서 `--model`로 서드파티 모델(Claude, GPT 등)을 지정하면 **토큰·모델에 따라 소비가 빨라질 수** 있습니다. Hobby에서는 별도 달러 풀이 없으므로, 가능하면 **Auto** 또는 가벼운 작업 위주로 쓰는 것이 유리합니다.

---

## 실용 팁

1. **가입 후 1주일에 한 번** 대시보드 Spending 탭을 확인해 소비 속도를 파악한다.
2. **긴 Agent 작업**은 한도를 빠르게 쓰므로, 단순 편집은 Tab·수동 편집을 우선 고려한다.
3. 한도 경고(50% 등)가 뜨면 **남은 일수 대비 잔량**을 보고 사용량을 조절한다.
4. CLI 자동화(`agent -p "..."`)도 Agent 한도와 **동일하게** 차감된다.

---

## 공식 참고 링크

- [Usage and limits (공식 도움말)](https://cursor.com/help/models-and-usage/usage-limits)
- [Billing and payments](https://cursor.com/help/account-and-billing/billing)
- [Cursor CLI 개요](https://cursor.com/docs/cli/overview)
- [가격 페이지](https://cursor.com/pricing)
- [사용량 대시보드](https://cursor.com/dashboard)

---

## 한 줄 정리

**Cursor CLI 무료 사용량은 "하루 N회"가 아니라 "월간(가입일 기준) 제한된 Tab + Agent"이며, 정확한 숫자는 공개되지 않으므로 [대시보드](https://cursor.com/dashboard)에서 잔량과 리셋일을 확인하는 것이 유일한 정확한 방법입니다.**
