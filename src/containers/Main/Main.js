import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validationType, checkValidation } from '../../lib/validator/validator';
import objKorEng from '../../config/language';
import './Main.css'
import logo_vone from '../../assets/title-vone.png';


import { bindActionCreators} from 'redux';
import * as orderActions from '../../modules/order';
import { connect } from 'react-redux';

import {useHistory} from 'react-router-dom';



/*
상차일: 2020-11-01/ 
상차시간: 오전8시 / 
상차지 도로명 주소: 인천시 연수구... / 
상차지 상세 주소: 동네... / 
상차지 담당자 이름: 홍길동 / 
상차지 담당자 연락처: 010-89440-0317 / 
상차 방법: 지게차 / 하차일: 2020-11-12 / 
하차시간: 오후1시 / 
하차지 도로명 주소 : 하차지 주소... / 
하차지 상세 주소 : 상세주소... / 
하차지 담당자 이름 : 김철수 / 
하차지 담당자 연락처 : 010-1234-1234 / 
하차 방법 : 수작업 / 
차량 적재량 : 3.5톤 /  
차종 : 다마스 / 
물품 상세 정보 : 물품은... / 
차주 전달 사항 : 차주님... /
*/

/*
    CASE 1: User가 입력은 했지만, 입력한 것이 Select Box에 없는 것일 경우.
*/

class Main extends Component {

    parseOrderContent({orderContent}){
        
        let orderObj = {};
        let parsedStr = orderContent.split('/');

        parsedStr.forEach( (field, idx) => {
            
            let parsedField = field.split(':');
            
           
            if(parsedField.length > 1){

                // Trim spaces for field
                let fieldName = parsedField[0].trim();

                // Find Korean word and conver to field name from config file.
                fieldName = objKorEng[fieldName];

                // Trim spaces for content
                let fieldContent = parsedField[1].trim();

                orderObj[fieldName] = fieldContent;
            }   
        })

       
         //상차일 : 2020-11-01 / => [ { departDate : "2020-11-01"} ]

         return orderObj;

    }

    checkIfAllFieldsValid(orderObj){

    
        // Check 2 things, (emtpy or has exact value of candidates in case of input type is select)

    }

    renderField(field){
        const className=`txt_order_input`;

        return(
            <div>
                <input className="inputMainOrder" type="text" {...field.input}/>
            </div>
        )
    }

    onSubmit(values){
        // Parse User's input string to object.
        let parsedObj = this.parseOrderContent(values);


        // Check if every fields are valid

        let resultObj = validationType;

        Object.entries(parsedObj).forEach(entry => {
            const [fieldName, value] = entry;
            resultObj = checkValidation(fieldName, value, resultObj);
        });

        console.log(resultObj);

        // If every fields were valid, go to OrderConfirmPage.
        const { OrderActions} = this.props;
        OrderActions.setOrderForm(resultObj);

        const {history} = this.props;
         history.push('/confirm');
        // If they weren't, fill every info step by step.

        
    }

    render(){

        const {handleSubmit} = this.props;

        return(
            <div>
                <div className="area-logo">
                    <img src={logo_vone} alt="VONE-LOGO" />
                </div>

                <div className="area-order">
                
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="orderContent" component={this.renderField}/>
                        <button className="btnSearch" type="submit">
                            Submit
                        </button>
                    </form>
                
                </div>


            </div>
        )
    }
}

Main = connect(
        (state) => ({
        
        }), 
        (dispatch) => ({
            OrderActions: bindActionCreators(orderActions, dispatch)
        })
)(Main);
        

export default reduxForm({
    form: 'InputOrderForm'
})(Main)