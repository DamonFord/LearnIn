import React from 'react';
import CreditCard from './CreditCard';

const YourCardInfo = props => {
    return (
        <div style={body}>
            <span style={headerText}>Your Card</span><br />
            <span><small>Use this card to pay for programs in your plan.  Purchases will be visible by your manager.</small></span>
            <div style={line} />

            <div style={cardDisplay}>
                <div>
                    <CreditCard cardNumber={props.cardNumber} cardBalance={props.cardBalance} showCardNumber={props.showCardNumber} setShowCardNumber={props.setShowCardNumber} />
                    <span style={titleText}>Program doesn't accept cards?  We can help <a href='mailto:test@test.com'>Contact Us</a></span>
                </div>
                <div>
                    <span style={titleText}>CARD HOLDER</span><br />
                    <span style={dataText}>{`${props.holderName.firstName} ${props.holderName.lastName}`}</span>
                    <br />
                    <br />
                    <span style={titleText}>BILLING ADDRESS</span><br />
                    <span style={dataText}>{props.billingAddress.street}</span><br />
                    <span style={dataText}>{`${props.billingAddress.city}, ${props.billingAddress.state} ${props.billingAddress.zip}`}</span>
                </div>
            </div>
        </div>
    );
};

const body = {
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 10,
    boxShadow: '5px 5px 5px #bbbbbb',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
};

const line = {
    border: 'thin solid #999999',
};

const headerText = {
    fontWeight: 'bold',
};

const cardDisplay = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
};

const titleText = {
    fontSize: 10,
};

const dataText = {
    fontSize: 20,
}

export default YourCardInfo;