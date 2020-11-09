import {vehicleOptions, weightOptions} from '../../config/vehicle';
import {loadOptions} from '../../config/loadOptions';

let validationResult = {
    state: true, //  false: not valid  / true : valid
    code: '', // 'EMPTY', 'INVALID'
    value: ''
}

export const checkInputText = (fieldName, value) => {
    console.log('doCheckInputText');

     let validationResult = {};


    if(value==='') {
        validationResult.state = false;
        validationResult.code= 'EMPTY';
    }else{
        validationResult.state = true;
        validationResult.value = value;
    }

    return validationResult;
}

export const checkInputSelect = (fieldName, value) => {
    console.log('doCheckInputSelect');

    let validationResult = {};
    validationResult.state = true;

    if(value===''){
        validationResult.state = false;
        validationResult.code = 'EMPTY';
    }else{
        
         if(fieldName === 'loadOption' || fieldName === 'unloadOption'){
             if(!isOptionExist(value, loadOptions)){
                validationResult.state = false;
                validationResult.code = 'INVALID';
                return validationResult;
             }
         }else if(fieldName==='vehicleType'){
             if(!isOptionExist(value, vehicleOptions)){
                validationResult.state = false;
                validationResult.code = 'INVALID';
                return validationResult;
             }
         }else if(fieldName==='vehicleLoadWeight'){
             if(!isOptionExist(value, weightOptions)){
                validationResult.state = false;
                validationResult.code = 'INVALID';
                return validationResult;
             }
         }

         validationResult.value=value;

         return validationResult;

    }
}

const isOptionExist = (value, optionObj) => {

    return optionObj.hasOwnProperty(value);
}


export const checkValidation = (fieldName, value, resultObj) => {
    
    let result;
   
    switch(resultObj[fieldName].type){
        case 'text':
            result = checkInputText(fieldName, value);
            break;
        case 'select':
             result = checkInputSelect(fieldName, value);
            break;
    }

    resultObj[fieldName].state = result.state;
    resultObj[fieldName].code = result.code;
    resultObj[fieldName].value = result.value;
    
    return resultObj;
}


export const validationType = {
    departDate : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    departTime : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    departCountry : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    departAddress1 : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
     departAddress2 : {
        type : 'text',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    senderName : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    senderTelephone : {
        type : 'text',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    loadOption : {
        type : 'select',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    arrivalDate : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    arrivalTime : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    arrivalCountry : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    arrivalAddress1 : {
          type : 'text',
          state: false,
          code: 'EMPTY',
          value: ''
      },
    arrivalAddress2 : {
        type : 'text',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    receiverName : {
        type : 'text',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    receiverTelephone : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    unloadOption : {
         type : 'select',
         state: false,
         code: 'EMPTY',
         value: ''
     },
     vehicleType : {
        type : 'select',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    vehicleLoadWeight : {
       type : 'select',
       state: false,
       code: 'EMPTY',
       value: ''
   },
    content : {
         type : 'text',
         state: false,
         code: 'EMPTY',
         value: ''
     },
    notice : {
        type : 'text',
        state: false,
        code: 'EMPTY',
        value: ''
    },
    orderType : {
        type : 'text',
        state: false,
        code: 'EMPTY',
        value: ''
    }
}
