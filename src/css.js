const string = `

/* Hello, 今天给大家画一个皮卡丘 */

/* 这里开始准备工作 */
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.skin *::before, .skin *::after{
    box-sizing: border-box;
  }

/* 在这里给皮卡丘一个背景色 */
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
  }

/* 开始给皮卡丘画鼻子 */  
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
  }

/* 让皮卡丘的鼻子动起来 */  
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(6deg);
    }
    66% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
  }

/* 接下来画皮卡丘的眼睛 */   
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 6px;
    top: 0px;
  }
  .eye.left {
    transform: translateX(-120px);
  }
  .eye.right {
    transform: translateX(120px);
  }

/* 接下来画皮卡丘的嘴巴 */    
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 4px solid black;
    height: 30px;
    width: 100px;
    position: relative;
    border-top-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px / 300px;
    background: #8f1e12;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ed5961;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }

/* 接下来画皮卡丘脸颊的红晕 */
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
  }
  .face.left {
    transform: translateX(-180px);
    background: red;
    border-radius: 50%;
  }
  .face.right {
    transform: translateX(180px);
    background: red;
    border-radius: 50%;
  }

/* 一个皮卡丘就画好啦 */
/* 希望你能喜欢~ */  
`;

export default string;
