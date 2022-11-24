import React from 'react';

const Header = props => {
    return (
        <div style={body}>
            <div>
                <img src='https://images.pexels.com/photos/6898857/pexels-photo-6898857.jpeg' alt='Logo' style={logo} />
            </div>
            <div style={titleContainer}>
                <span style={providerText}>{props.providerCompany}</span><br />
                <span style={titleText}>{props.title}</span>
            </div>
            <div style={amountContainer}>
                <span style={titleText}>Amount</span><br />
                <span>${Number(props.amount / 100).toFixed(2)}</span>
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
    display: 'flex',
    alignItems: 'center',
};

const logo = {
    height: 75,
    width: 75,
    borderRadius: 10,
};

const titleContainer = {
    flexGrow: 2,
    marginLeft: 20,
};

const amountContainer = {
    marginRight: 200,
};

const providerText = {
    textTransform: 'uppercase',
};

const titleText = {
    fontWeight: 'bold',
}

export default Header;