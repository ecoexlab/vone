import React, { Component } from 'react'
import { connect } from 'react-redux';

class OrderConfirm extends Component {

    constructor(props){
        super(props);

        this.state={

        };
    }

    

    render() {
        
        const {orderInfo} = this.props;

        const orderList = Object.values(orderInfo).map( order => (
            <div key={order.value}>
                <label>
                    Field Name
                </label>
                <div>
                    {order.value}
                </div>
            </div>
        ));

        return (
            <div>
                <h1>Order Confirm</h1>
                {orderList}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        orderInfo: state.order.get('orderInfo')
    })
)(OrderConfirm);
