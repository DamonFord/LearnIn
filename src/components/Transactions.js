import React, {useState, useEffect} from 'react';
import moment from 'moment';

const Transactions = props => {
    const [search, setSearch] = useState('');
    const [filteredList, setFilteredList] = useState(props.transactions)

    useEffect(() => {
        setFilteredList(props.transactions);
    }, [props.transactions])
    
    const onSearchClick = () => {
        search === '' ? setFilteredList(props.transactions) : setFilteredList(props.transactions.filter(item => item.company === search));
    };
    
    return (
        <div style={body}>
            <div style={headerContainer}>
                <div>
                    <span style={headerText}>Transactions</span>
                </div>
                <div>
                    <input type='text' placeholder='Search Transactions' style={searchInput} onChange={(e) => setSearch(e.target.value)} />
                    <input type='button' value='&#10148;' style={searchButton} onClick={onSearchClick}/>
                </div>
            </div>

            <div style={transactionsContainer}>
                <table style={table}>
                    <thead>
                        <tr>
                            <th style={tableHeader}>DATE</th>
                            <th style={tableHeader}>DESCRIPTION</th>
                            <th style={tableHeader}>AMOUNT</th>
                            <th style={tableHeader}>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.map(item => (
                            <tr key={item.id}>
                                <td style={tableData}>{moment(item.date).format('M/D/YYYY')}</td>
                                <td style={tableData}>{item.company}</td>
                                <td style={tableData}>${Number(item.amount / 100).toFixed(2)}</td>
                                <td style={tableData}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

const headerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
};

const headerText = {
    fontWeight: 'bold',
};

const searchInput = {
    padding: 10,
    border: 'thin solid lightgray',
};

const searchButton = {
    border: 'thin solid lightgray',
    backgroundColor: '#ffffff',
    paddingTop: 8, 
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
};

const transactionsContainer = {
    marginTop: 10,
}

const table = {
    width: '100%',
};

const tableHeader = {
    borderTop: 'thin solid lightgray',
    borderBottom: 'thin solid lightgray',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    fontSize: 12,
    textAlign: 'left',
};

const tableData = {
    borderBottom: 'thin solid lightgray',
    paddingTop: 5,
    paddingBottom: 5,
};

export default Transactions;