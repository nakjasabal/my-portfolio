# Cursor CLI 간략 사용법

터미널에서 Cursor AI 에이전트를 실행해 코드 작성, 리뷰, 수정을 할 수 있는 CLI 도구입니다.

- 공식 문서: https://cursor.com/docs/cli/overview
- 현재 설치 버전 예시: `agent --version`

---

## 설치

```bash
# macOS / Linux / WSL
curl https://cursor.com/install -fsS | bash

# Windows (PowerShell)
irm 'https://cursor.com/install?win32=true' | iex
```

설치 후 터미널에서 `agent` 명령을 사용합니다. (Cursor IDE의 `cursor` 명령과는 별개입니다.)

---

## 빠른 시작

```bash
# 로그인
agent login

# 인증 상태 확인
agent status

# 대화형 세션 시작
agent

# 프롬프트와 함께 시작
agent "auth 모듈을 JWT로 리팩터링해줘"

# 최신 버전으로 업데이트
agent update
```

---

## 모드

| 모드 | 설명 | 전환 방법 |
|------|------|-----------|
| **Agent** | 파일 수정, 셸 실행 등 모든 도구 사용 (기본) | 기본값 |
| **Plan** | 코드 작성 전 계획 수립 (읽기 전용) | `Shift+Tab`, `/plan`, `--plan` |
| **Ask** | 코드 탐색·질의응답 (읽기 전용) | `/ask`, `--mode=ask` |

```bash
agent --plan "새 API 설계안을 작성해줘"
agent --mode=ask "이 프로젝트 구조를 설명해줘"
```

---

## 대화형 사용 팁

### 단축키

| 단축키 | 동작 |
|--------|------|
| `Shift+Tab` | 모드 전환 (Agent → Plan → Ask) |
| `Shift+Enter` / `Ctrl+J` | 줄바꿈 (제출하지 않음) |
| `Ctrl+D` | CLI 종료 (두 번 입력) |
| `Ctrl+R` | 변경 사항 리뷰 |
| `↑` / `↓` | 이전 프롬프트 탐색 |

### 유용한 입력

| 입력 | 동작 |
|------|------|
| `@파일경로` | 파일·폴더를 컨텍스트에 추가 |
| `/` | 슬래시 명령 메뉴 (모델, 스킬, MCP 등) |
| `!명령` | 에이전트 세션 안에서 셸 명령 실행 |
| `&프롬프트` | Cloud Agent로 작업 전달 (백그라운드 실행) |
| `/summarize` | 컨텍스트 요약 |
| `/sandbox` | 샌드박스 설정 |

터미널에서 명령 실행 전에는 승인(y/n)을 요청합니다.

---

## 비대화형 모드 (스크립트 / CI)

`-p` 또는 `--print` 옵션으로 결과만 출력합니다.

```bash
# 기본 텍스트 출력
agent -p "성능 이슈를 찾아서 수정해줘"

# JSON 출력 (스크립트 파싱용)
agent -p "이 변경사항의 보안 이슈를 검토해줘" --output-format json

# 파일 수정까지 자동 실행 (주의: 승인 없이 실행)
agent -p "테스트 실패를 수정해줘" --force

# 특정 모델 지정
agent -p "리팩터링 제안해줘" --model "gpt-5"
```

| 옵션 | 설명 |
|------|------|
| `--output-format text` | 최종 응답만 텍스트로 출력 (기본) |
| `--output-format json` | 구조화된 JSON 출력 |
| `--output-format stream-json` | 스트리밍 JSON 출력 |
| `--force` / `--yolo` | 도구 실행 자동 승인 |
| `--auto-review` | 안전한 도구는 자동 실행, 나머지는 승인 요청 |

환경 변수:

```bash
export CURSOR_API_KEY=your_api_key_here
agent -p "코드를 분석해줘"
```

---

## 세션 관리

```bash
# 이전 대화 목록 보기
agent ls

# 가장 최근 세션 이어하기
agent resume

# 이전 세션 계속
agent --continue

# 특정 세션 ID로 재개
agent --resume="chat-id-here"
```

---

## 주요 서브커맨드

```bash
agent login              # 로그인
agent logout             # 로그아웃
agent status             # 인증 상태 확인
agent about              # 버전·시스템·계정 정보
agent models             # 사용 가능한 모델 목록
agent mcp                # MCP 서버 관리
agent generate-rule      # Cursor 규칙 생성
agent create-chat        # 새 빈 채팅 생성 (ID 반환)
agent help [command]     # 명령별 도움말
```

---

## Git Worktree

현재 브랜치를 건드리지 않고 격리된 worktree에서 작업할 수 있습니다.

```bash
# 자동 이름으로 worktree 생성
agent --worktree "테스트 스냅샷 수정해줘"

# 이름 지정
agent -w auth-fix "인증 테스트 수정해줘"

# 다른 저장소 지정
agent --workspace ~/src/my-app --worktree "버그 수정"
```

worktree 경로: `~/.cursor/worktrees/<repo>/<name>`

---

## 설정 파일

### 전역 설정

`~/.cursor/cli-config.json`

주요 항목:

| 항목 | 설명 |
|------|------|
| `permissions.allow` / `deny` | 도구 실행 허용·거부 패턴 |
| `approvalMode` | `allowlist` (기본) 또는 Run Everything |
| `editor.vimMode` | Vim 키바인딩 |
| `sandbox.mode` | `enabled` / `disabled` |
| `display.*` | 줄 번호, thinking 블록 등 표시 옵션 |

### 프로젝트 설정

`.cursor/cli.json` — git 루트부터 현재 디렉터리까지 병합되며, 하위 설정이 우선합니다.

설정 변경 후 CLI를 재시작하면 적용됩니다.

---

## 규칙·컨텍스트

CLI 에이전트는 IDE와 동일한 규칙 시스템을 사용합니다.

- `.cursor/rules/` — 프로젝트별 규칙
- `AGENTS.md`, `CLAUDE.md` — 프로젝트 루트 규칙
- `mcp.json` — MCP 서버 설정 (자동 감지)

---

## Cursor IDE 연동

Cursor IDE 자체 CLI (`cursor` 명령)는 에디터를 여는 용도입니다.

```bash
cursor .                    # 현재 폴더를 Cursor로 열기
cursor -g file.ts:10        # 특정 파일·줄로 이동
cursor --chat               # 독립 채팅 창 열기
cursor agent                # 터미널 에이전트 시작 (agent와 동일)
```

---

## 참고 링크

- [CLI 개요](https://cursor.com/docs/cli/overview)
- [에이전트 사용법](https://cursor.com/docs/cli/using)
- [Headless / 비대화형](https://cursor.com/docs/cli/headless)
- [파라미터 레퍼런스](https://cursor.com/docs/cli/reference/parameters)
