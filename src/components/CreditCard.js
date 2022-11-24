import React from 'react';

const CreditCard = props => {
    return (
        <div style={body}>
            <span style={titleText}>BALANCE</span><br />
            <span style={balanceText}>${Number(props.cardBalance / 100).toFixed(2)}</span>
            <br />
            <br />
            <span style={numberText}>{props.cardNumber}</span>
            {props.showCardNumber ? (
                <div>
                    <span style={numberText}>CVV: 123 EXP: 12/24</span>
                </div>
            ) : (
                <div style={buttonContainer}>
                    <input type='button' value='SHOW CARD INFORMATION' style={button} onClick={() => props.setShowCardNumber(true)} />
                </div>
            )}
        </div>
    );
};

const body = {
    backgroundColor: '#cc70a0',
    borderRadius: 10,
    boxShadow: '5px 5px 5px #bbbbbb',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#ffffff',
    width: 240,
};

const titleText = {
    fontSize: 10,
};

const balanceText = {
    fontWeight: 'bold',
    fontSize: 20,
};

const numberText = {
    fontSize: 13,
};

const buttonContainer = {
    textAlign: 'center',
}

const button  = {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    color: '#0000ff',
    border: 'none',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: '600',
};

export default CreditCard;