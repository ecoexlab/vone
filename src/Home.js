import React, {useState} from 'react';
import './Home.scss';
import logo_vone from './assets/title-vone.png';
import axios from 'axios';


/*
상차날짜: 10.15(목)
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
요청사항: 하차지에서 에이치알엠이라고 말씀해주세요
*/

export default function Home() {

    const requestURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'http://3.35.183.39'
    const PORT = 3001;

    const [order, setOrder] = useState(`상차날짜: \n상차시간: \n상호 및 상차지: \n상차 담당자/연락처: \n상차방법: \n하차날짜: \n하차시간: \n상호 및 하차지: \n하차담당자/연락처: \n하차방법: \n차량 톤수 및 차종: \n차량댓수: \n물품/중량: \n요청사항: ` );
    
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');


    const onChangeOrder = e => {
      setOrder(e.target.value);
    }

    const onChangeName = e => {
      setName(e.target.value);
    }

    const onChangeContact = e => {
      setContact(e.target.value);
    }


  
    const formatOrder = (order) => {
      const orderInfos = order.split('\n');
      const orderRequest = {};
  
      orderInfos.map((order) => {
        const splittedStr = order.split(':');
        orderRequest[splittedStr[0]]=splittedStr[1];
        return splittedStr;
      })
    
      orderRequest["이름"] = name;
      orderRequest["연락처"] = contact;
      
      return orderRequest;
    }
    

    const sendRequest =  (e) =>{

        const orderRequest = formatOrder(order);
        console.log(orderRequest);
      
        axios.post(`${requestURL}:${PORT}/api/orders`,  orderRequest).then(response => {
           
            console.log(response);
            setOrder('');
            setName('');
            setContact('');
            alert('접수가 완료되었습니다!');
        }).catch(function (error){
            alert('error');
        });
    }

    const sendSMS = () => {
      axios.post(`${requestURL}:${PORT}/api/orders/sendSMS`).then(response => {
        console.log(response);
        alert('문자 발송 완료');
      }).catch(e => {
        console.log(e);
      })
    }


    return (
        <div >
            <div className="area-logo">
               <img src={logo_vone} /> 
            </div>
       <div className="align-center">

         <div className="area-order">
           
            <textarea onChange={onChangeOrder} type="text" placeholder="상차날짜: &#13;&#10;상차시간: &#13;&#10;상호 및 상차지: &#13;&#10;상차 담당자/연락처: &#13;&#10;상차방법: &#13;&#10;하차날짜: &#13;&#10;하차시간: &#13;&#10;상호 및 하차지: &#13;&#10;하차담당자/연락처: &#13;&#10;하차방법: &#13;&#10;차량 톤수 및 차종: &#13;&#10;차량댓수: &#13;&#10;물품/중량: &#13;&#10;요청사항:" value={order}></textarea>
          
        </div>
        <div className="area-contact">
          <div className="field-order">
              <label>이름</label>
              <input type="text" onChange={onChangeName} value={name}/>
            </div>

          
          <div className="field-order">
            <label>연락처</label>
            <input type="text" onChange={onChangeContact} value={contact}/>
          </div>
        </div>
          

            
         


        <div className="btn-area">
        
            <button type="submit" className="btn-order" onClick={sendRequest}> 주문접수</button>
          
        </div>
       

        <div className="area-notice">
              <div className="notice">
                <p><b>❗️ 의뢰 입력시 반드시 지켜주세요!</b></p>

                <p>- 반드시 항목간 Enter 입력해주세요!</p>
                <p>- 항목별 순서를 꼭 지켜주세요!</p>
                <p>- 접수 완료 후 입력하신 연락처로 배차정보를 알려드립니다.</p>
              </div>
        </div>
       
          
        

        
       </div>
      </div>
    )
}
