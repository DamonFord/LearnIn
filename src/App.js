/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import YourCardInfo from './components/YourCardInfo';
import Transactions from './components/Transactions';
import CreditInfoService from './api/CreditInfoApi';

function App() {
  const [cardBalance, setCardBalance] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState({firstName: '', lastName: ''});
  const [billingAddress, setBillingAddress] = useState({street: '', city: '', state: '', zip: ''});
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [personalBudget, setPersonalBudget] = useState({title: '', providerCompany: '', amount: 0});

  useEffect(() => {
    getTransactions();
    getPersonalBudget();
  }, []);

  useEffect(() => {
    getCardDetails();
  }, [showCardNumber]);

  const getCardDetails = () => {
    CreditInfoService.getCardDetails(showCardNumber)
    .then(response => {
      setCardNumber(response.cardNumber ? response.cardNumber : '');
      setCardBalance(response.balance ? response.balance : 0);
      
      if(response.holder) {
        setCardHolderName({firstName: response.holder.firstName, lastName: response.holder.lastName});
      }

      if(response.holder && response.holder.address && response.holder.address.billing) {
        setBillingAddress({street: response.holder.address.billing.line1, city: response.holder.address.billing.city, state: response.holder.address.billing.state, zip: response.holder.address.billing.zipcode});
      }
    })
    .catch(err => console.error(err.response ? err.response.data : err.message));
  };

  const getTransactions = () => {
    CreditInfoService.getTransactions()
    .then(response => setTransactions(response))
    .catch(err => console.error(err.response ? err.response.data : err.message));
  };

  const getPersonalBudget = () => {
    CreditInfoService.getPersonalBudget()
    .then(response => setPersonalBudget(response))
    .catch(err => console.error(err.response ? err.response.data : err.message));
  }
  
  return (
    <div style={body}>
      <h2>Manage Financing</h2>
      <div style={line}></div>

      <Header title={personalBudget.title} providerCompany={personalBudget.providerCompany} amount={personalBudget.amount} />
      <YourCardInfo holderName={cardHolderName} billingAddress={billingAddress} cardNumber={cardNumber} cardBalance={cardBalance} showCardNumber={showCardNumber} setShowCardNumber={setShowCardNumber} />
      <Transactions transactions={transactions} />
    </div>
  );
}

const body = {
  backgroundColor: '#ebeded',
  padding: 20,
};

const line = {
  border: 'thin solid #999999',
};

export default App;
