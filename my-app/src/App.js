import './App.css';
import ClassComponent from'./components/R01_ClassComponent';
// -> R01_ClassComponent에서 export된 HTML 요소를 ClassComponent라고 부르겠다
// --> <ClassComponent/> 형태로 사용 가능

import FunctionComponent from './components/R02_FunctionComponent';
import Props1 from './components/R03_Props1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';
import State2 from './components/R07_State2';
import State3 from './components/R08_State3';

// 기본적으로 //, /* */ 주석 사용 가능 (JS니까!)
// 단, HTML 코드가 작성되는 영역에서는 {/* */} 주석 사용

function App() {
  return (
    <>
      {/* JSX(JS에 HTML 코드 포함) 주석 */}

      {/* 클래스형 컴포넌트 */}
      {/* <ClassComponent/> */}
      {/* <FunctionComponent/> */}

      {/* Props */}
      {/* <Props1 num='1' name='홍길동'/>
      <Props1 num='2' name='김미영'/>
      <Props1/>

      <hr/>
      <Props2 name='강감찬'
              age = '72'
              address = '낙성대'
              gender = '남자'/>

      <Props2 name='영희'
              age = '8'
              address = '강남'
              gender = '여자'/>

      <hr/>
      <Props3 productName='라면' price='3000'/> */}
      

      {/* State */}
      <hr/>
      <State1/>

      <hr/>
      <State2 init='0'/>

      <hr/>
      <State3/>
    </>
  );
}

export default App;
