# Intro section with dropdown navigation solution

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

<img src="./src/images/dropdown-desktop.png" alt="dropdown-desktop" width="70%"/>  
<img src="./src/images/dropdown-mobile.png" alt="dropdown-mobile" width="40%" />    
<img src="./src/images/screen-recording.gif" alt="screen-recording" width="80%" />

### Links

- Solution URL: [Github Repository](https://github.com/sagekim6/dropdown-navigation.git)
- Live Site URL: [https://sagekim6.github.io/dropdown-navigation/](https://sagekim6.github.io/dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/)

### What I learned

#### 1. `Too many re-renders.` error

```javascript
function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = setIsClicked(!isClicked); // <- needs to be changed

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

- 화살표 함수로 만들어 주면 간단하게 해결된다

#### 2. Using `SVG` image

- 컴포넌트로 임포트해와서 사용해주었다.  
  `import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";`

## Author

- Website - [https://sagekim6.github.io/dropdown-navigation/](https://sagekim6.github.io/dropdown-navigation/)
- Frontend Mentor - [@sagekim6](https://www.frontendmentor.io/profile/sagekim6)
