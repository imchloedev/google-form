# [클라썸] 구글 설문조사 Clone 만들기

## 구현 Scope

- [x] 설문지 제목 추가, 편집
- [x] 설문지 설명 추가, 편집

- [x] 질문을 추가하면 질문이 추가됩니다.
  - - [x] 단답형
  - - [x] 장문형
  - - [x] 객관식 질문
  - - [x] 체크박스
  - - [x] 드롭다운
  - _단, 객관식질문, 체크박스, 드롭다운에서 옵션 추가 기능 구현 제외_
- [x] 질문 복사 기능
- [x] 질문 삭제 기능
- [x] 필수 옵션 설정 기능 (_필수 설정 후 미리보기 페이지에서 기능 구현 제외_)
- [x] 미리 보기 기능
- [x] [제출] 버튼 클릭 후 제출 페이지

<br/>

## 필수 조건

- [x] React, Redux 사용
- [x] git 사용 (commit 내역 확인 가능)

<br/>

## 권장 사항

- [x] redux-toolkit 사용
- [ ] ~typescript 사용~

<br/>

## 사용한 기술 스택

- `React`
- `styled-components`, `react-icons`, `mui/material`,
- `react-redux`, `redux-toolkit`,

</br>

## Dependencies

```
  "dependencies": {
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/material": "^5.11.3",
    "@reduxjs/toolkit": "^1.9.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.6.1",
    "react-scripts": "5.0.1",
    "react-uuid": "^2.0.0",
    "sass": "^1.57.1",
    "styled-components": "^5.3.6",
    "web-vitals": "^2.1.4"
  },

```

</br>

## 설치 & 실행

```
npm install

후

npm start
```
