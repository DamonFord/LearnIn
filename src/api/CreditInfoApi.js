import axios from 'axios';

const baseUrl = 'http://localhost:9999';

const getTransactions = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/transactions`)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    });
};

const getCardDetails = async showCardNumber => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/card-details?show-card-number=${showCardNumber}`)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    });
};

const getPersonalBudget = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/personal-learning-budget`)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    });
};

const exportObject = {
    getTransactions, 
    getCardDetails,
    getPersonalBudget,
};

export default exportObject;