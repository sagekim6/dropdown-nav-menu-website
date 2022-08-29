# Intro section with dropdown navigation solution

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [개발목표](#개발목표)
  - [Built with](#built-with)
  - [Advanced feature](#Advanced-feature)
  - [What I learned](#what-i-learned)
  - [개선사항](#개선사항)

## Overview

### Screenshot

- Desktop design  
  <img src="./src/images/dropdown-desktop.png" alt="dropdown-desktop"/>
- Mobile design  
  <img src="./src/images/dropdown-mobile.png" alt="dropdown-mobile" width="40%" height="30%" />
- 실행 화면  
  <img src="./src/images/screen-recording.gif" alt="screen-recording"/>

### Links

- Solution URL: [Github Repository](https://github.com/sagekim6/dropdown-navigation.git)
- Live Site URL: [https://sagekim6.github.io/dropdown-navigation/](https://sagekim6.github.io/dropdown-navigation/)

## My process

### 개발목표

- 리액트와 sass 사용의 이해와 미디어 쿼리를 사용한 반응형 웹페이지 구축.

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- [React](https://reactjs.org/)

### Advanced feature

  <img src="./src/images/navigation.png" alt="navigation" />  
  <img src="./src/images/mobile-screen-recording.gif" alt="mobile-screen-recording" width="30%" heigth="30%" />

### What I learned

#### 1. `Too many re-renders.` error

- 초반에 App.js 파일에서 작성한 코드이다. 이후에 수정된 부분이지만 처음 만난 에러였다.

```javascript
function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = setIsClicked(!isClicked); // 여기가 문제!

  return (
    <>
      <Header isClicked={isClicked} handleIsClicked={handleIsClicked} />
      <Main />
    </>
  );
}

export default App;
```

- state가 바뀌는 함수가 있다면 렌더링되는 과정에서 계속 리렌더링되기 때문에 `Too many re-renders.` error가 난다.

```javascript
const handleIsClicked = () => {
  setIsClicked(!isClicked); // 화살표 함수 사용
};
```

- 화살표 함수로 만들어 주면 간단하게 해결된다.

#### 2. `SVG` image 사용

- `SVG` 포멧이란?

  - 수학적 함수를 이용하여 도형이나 선을 그려서 표시하는 방식으로 이미지를 그린다. 확대했을 때 선명함을 유지하고 용량도 작다는 장점이 있다.

- `SVG`를 사용하는 방법은 여러 가지지만 이 프로젝트에선 컴포넌트 형태로 import 해서 사용해주었다.  
  `import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";`

### 개선사항

1. 메뉴가 펼쳐질 때 애니메이션을 적용해 좀 더 부드러운 효과를 주어 긍정적인 사용자 경험을 주도록 하기.
