# Literacy Quest — GitHub Pages HTML edition

## 바로 사용하기

`index.html` 하나에 화면, 수업 16개, 이미지, CSS, JavaScript가 모두 들어 있습니다.
별도의 서버, 로그인, API 키, npm 설치, 빌드 과정이 필요하지 않습니다.
컴퓨터에서 파일을 열어 확인하거나 GitHub Pages에 업로드할 수 있습니다.

## GitHub Pages에 올리기

1. GitHub에서 새 저장소를 만들거나 사용할 저장소를 엽니다.
2. `index.html`을 저장소 최상위 폴더에 업로드하고 커밋합니다. ZIP 파일 자체를 올리는 것이 아니라 압축을 푼 파일을 올리세요.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Build and deployment → Source → Deploy from a branch**를 선택합니다.
5. Branch를 **main**, 폴더를 **/(root)**로 선택하고 **Save**를 누릅니다.
6. 배포가 완료되면 GitHub가 표시하는 방문 링크를 엽니다.

현재 사용 중인 주소: https://literacyquest.github.io/literacyquest/
이 저장소의 기존 index.html을 새 파일로 교체하고 커밋하면 됩니다. 같은 주소·같은 브라우저에서 사용하면 기존 학습 기록을 계속 읽습니다.
업데이트 뒤 옛 화면이 보이면 강력 새로고침을 해보세요. 저장된 학습 기록을 유지하려면 사이트 데이터를 삭제하지 마세요.
이 패키지는 업로드용 파일이며 GitHub 저장소에 자동으로 게시되지는 않았습니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 이번 업데이트

- K–5 Grade explorer에서 학년별 목표와 이용 가능 상태를 볼 수 있습니다.
- Grade 1은 함께 읽기·문장 도움말, Grade 2는 근거 설명·선택 확장 쓰기를 제공합니다.
- 두 학년은 같은 16개 수업과 기록을 공유합니다. 학년 안내를 변경해도 기존 진도는 유지됩니다.
- 선택한 안내는 같은 브라우저에 저장됩니다. K·3·4·5학년은 목표 미리보기만 제공하며 준비 중입니다.
- GRADE_PATHWAYS.md에 학년별 목표, 참고 기준, 구현 범위를 정리했습니다.

## 이전 업데이트

- 후원 섹션을 홈페이지와 같은 크림색·초록색 팔레트로 변경했습니다.
- 기존 Animal Homes 4차시를 유지하고 12차시를 추가했습니다.
- 기존 저장 키와 수업 ID를 유지하므로 동일 주소의 기존 기록과 호환됩니다.
- 자세한 4주 학습 지도는 CURRICULUM.md를 참고하세요.

## 포함된 기능

- 1–2학년용 4주·16차시 과정: Animal Homes / Our Growing Garden / Helpful Neighbors / Weather Watchers
- 주별 선택, 전체·주별 진도, 주간 쓰기 프로젝트, 말하기·듣기 활동
- 단어 연습, 읽기, 기기 음성으로 듣기, 퀴즈, 힌트, 글쓰기
- My day / My learning path / Reading library / My creations / For grown-ups
- 브라우저에 학습 진도·답변·글쓰기 저장, 새로고침 후 이어 하기
- 첫 화면 하단 후원 섹션과 푸터 링크: https://buymeacoffee.com/henryyu
- 작은 화면과 키보드 조작 지원

## 저장 방식

이 HTML 버전의 학습 기록은 **현재 기기의 현재 브라우저**에만 저장됩니다.
서버나 계정으로 전송되지 않으며 기기 간 자동 동기화는 없습니다.
브라우저 데이터를 지우거나 다른 브라우저·다른 주소로 접속하면 기록이 보이지 않을 수 있습니다.
기존 비공개 Sites 버전의 서버 기록은 자동으로 이전되지 않습니다.
한 브라우저당 하나의 학습 공간입니다. 부모 화면은 별도 비밀번호로 보호되지 않습니다.

쓰기 화면에서는 **Save my writing**, **Save & back**, 또는 **Finish my adventure**를 눌러 저장합니다.
브라우저가 저장을 차단하면 화면에 실패 안내가 표시됩니다.
파일을 직접 여는 file:// 환경의 저장 동작은 브라우저마다 다를 수 있어, 꾸준히 사용할 때는 GitHub Pages 주소를 권장합니다.

## 음성 및 인터넷

화면·수업·이미지는 파일 안에 포함되어 외부 CDN에 의존하지 않습니다.
Listen은 브라우저와 기기에 제공되는 영어 음성을 사용합니다. 음질과 오프라인 사용 가능 여부는 기기의 음성 설정에 따라 달라집니다.
후원 페이지는 새 탭에서 열리며 인터넷 연결이 필요합니다.

## 콘텐츠 범위

K–5 학습 목표 미리보기를 제공합니다. 실제 수업은 K–5 전체 과정이 아니라 1–2학년 대상의 4주 보충학습 과정 16개 차시입니다.
진단 검사 또는 공인 숙달도 평가가 아니며 글쓰기는 부모가 확인하는 방식입니다.

## 수정용 소스

`source/`에 수정 가능한 화면 코드, 수업 데이터, 저장 코드, 스타일, 이미지, 재빌드 도구가 포함되어 있습니다.
사이트를 올릴 때는 `index.html`만 있으면 됩니다. 소스를 수정해 재빌드하려면 source/README.md를 참고하세요.

Created for Dr. Henry Yu.
