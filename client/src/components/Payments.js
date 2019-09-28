import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
                name='Emaily'
                description="pay $10 for 10 email credits"
                amount={1000}
                token={(token) => {
                    this.props.handleToken(token)
                }}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className='btn'>Get Credits</button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Payments);