import React , {useState, useEffect} from 'react'
import axios from 'axios';

export default function Ordertest() {

    const requestURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'http://3.35.4.144'
    const PORT = 3001;

    const [order, setOrder] = useState('');
    const [second, setSecond] = useState('');
    const [cnt, setCnt] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    
    const formatOrder = (orderString) => {
        const orderInfos = orderString.split('\n');
    
        const orderRequest = {};
    
        orderInfos.map((ord) => {
          const splittedStr = ord.split(':');
          orderRequest[splittedStr[0]]=splittedStr[1];
          return splittedStr;
        })
        
        
        return orderRequest;
      }
      
  
      const sendRequest =  (e) =>{

          const orderRequest = formatOrder(order);
        
          axios.post(`${requestURL}:${PORT}/api/order`,  orderRequest).then(response => {
              console.log(response);
          }).catch(function (error){
              console.log(error);
              clearInterval(intervalId);
          });
      }

      const handleChange = (e) => {
          setSecond(e.target.value);
      }

    const testStart = () => {
        
        const interval = setInterval(() => {
            setCnt(cnt+1);
            sendRequest();
        }, second*1000);

        setIntervalId(interval);
    }

    const testStop = () => {
        clearInterval(intervalId);
        console.log('테스트 중지합니다.');
    }

    const makeForm = () => {
        setOrder(`상차날짜: 10.15(목)
        상차시간: 오전 8시
        상호 및 상차지: 에이치알엠, 인천시 서구 오류동 1574-2
        상차 담당자/연락처: 김에코 010-1234-1234
        상차방법: 지게차
        하차날짜: 10.15(목)
        하차시간: ASAP
        상호 및 하차지: 한빛식품, 경기도 고양시 덕양구 내유길 106 나동
        하차 담당자/연락처: 박에코 010-8899-8899
        하차방법: 기사님 수작업
        차량 톤수 및 차종: 25톤 카고
        차량댓수: 1대
        물품/중량: 파지(21~24톤)
        요청사항: 하차지에서 에이치알엠이라고 말씀해주세요`);

        console.log(order);
    }


    return (
        <div>
            <input type="text" onChange={handleChange} />초 <br/>
            <button onClick={testStart}>시작</button>
            <button onClick={testStop}>중지</button>
            <button onClick={makeForm}>폼만들기</button>
        </div>
    )
}
