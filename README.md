# 실행 방법

## 주의 사항 및 구현 디테일

- 고의적으로 .env를 노출했습니다. 과제라서 실행하기 쉽게 만드는 것이 좋다고 판단했습니다.
- 현재(2021년 11월 24일) 기준 LTS인 16버전의 node를 사용하도록 .nvmrc를 작성했습니다.
- babel-plugin-module-resolver와 jsconfig.jsoon을 설정하여 절대 경로를 사용할 수 있도록 만들었습니다.
- husky + lint-staged를 통해서 포매팅 진행. lint는 과투입이라 생각하여 하지 않기로 함
- squash merge를 통하여 깔끔한 커밋 히스토리 관리
- template engine 결정 문서에 있어 ejs의 가독성이 좋지 않다고 판단했습니다. 대신 pug를 사용하도록 설정했습니다. (http://expressjs.com/en/guide/using-template-engines.html#using-template-engines-with-express)

## 과제 요구 사항

https://github.com/snuwebprogramming-21-2/final_project

## 구동 방법

1. 최초 1번만 git clone git@github.com:snu-homework/snu-homework.git로 clone을 땁니다.
2. clone한 경로에 이동하여 `npm ci` 명령어를 통해 의존성을 설치합니다.
3. package.json의 script에 정의된대로 `npm run start:dev` 명령어를 입력하여 서버를 구동합니다.
4. profit!

## 개발 방법

1. git remote update
2. master branch에서 git pull origin master합니다. (zsh사용시 ggl)
3. git branch 'name'을 통해 master branch에서 다른 branch를 생성합니다. (zsh사용시 gcb)
4. 코딩을 마친 후 git push origin 'name'을 통해 원격 저장소에 push합니다. (zsh사용시 ggp)
5. master 머지는 기술적으로 막아 놓았습니다. 접근 ㄴㄴ

### 기본스펙

- [x] everyone : 모든 행동들은 서버에서 이루어지나, 클라이언트에서 별도로 확인이 가능하여야 한다. (html 결과창에 결과가 프린트되면된다)
- [x] Suhun : 온라인에서 플레이가 가능하다 (codesandbox 등을 활용)
- [x] Suhun : 로그인, 회원가입
- [x] Suhun : 10 \* 10 이상의 맵
- [x] wcroh : 5종 이상의 몬스터
- [x] wcroh : 5종 이상의 아이템
- [x] wcroh : 캐릭터의 이동
- [x] Soohyun : 이동 시 필드별로 아무일도 일어나지 않음, 전투, 아이템 획득의 일이 일어남.
- [x] Soohyun : 전투 시스템 (str, def, hp 개념을 활용)
- [x] Soohyun : 사망 시스템 (전투 시 hp가 0이될 경우 캐릭터가 사망. 0,0 위치로 이동)
- [x] Soohyun : 레벨 시스템 (일정 이상 경험치 획득 시 캐릭터 레벨업)

### 추가스펙

- [x] Soohyun : 체력회복하는 이벤트가 추가된다.
- [x] Soohyun : 필드에서 일어나는 이벤트 중 랜덤이벤트가 존재한다.
- [x] wcroh : 아이템을 소유할 경우, 캐릭터의 능력치가 향상된다. 능력치가 클라이언트에서 확인이 가능하다.
- [x] Soohyun : 시작 능력치가 랜덤하게 주어지며, 5번에 한하여 재시도가 가능하다.
- [x] minhyeokchoe : 사망시 랜덤하게 아이템을 잃어버린다.
- [x] Soohyun : 유저의 인벤토리가 클라이언트 상에서 확인이 가능하다.
- [x] Soohyun : 전투 중, 10턴 안에 전투가 끝나지 않거나, 체력이 20% 이하로 감소할 경우 도망가는 선택지가 추가로 주어진다.

## trouble shooting

Mac에서 robo3t 설치 시 개발자를 찾을 수 없다는 오류가 발생하며 실행이 되지 않을 경우  
https://github.com/Studio3T/robomongo/issues/1386  
`sudo xattr -r -d com.apple.quarantine /Applications/Robo\ 3T.app`

Error parsing body of the with expression  
Pug 문법이 틀렸다는 의미입니다. pug를 수정하세요

## pm2

err.log, out.log라는 파일 이름으로 로그를 남깁니다.  
`pm2 flush` -> 로그 날리기  
`pm2 kill` -> 종료  
