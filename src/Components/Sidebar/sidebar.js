import React from 'react'
import classes from './sidebar.module.css';
import setup from '../../Assets/settings.png';
import dash from '../../Assets/dashboard.png';
import arrow from '../../Assets/arrow-sidebar.png';
import transact from '../../Assets/transactions.png';
import health from '../../Assets/healthcare.png';
import money from '../../Assets/moneyhand.png';
import perform from '../../Assets/performance.png';
import message from '../../Assets/message.png';
import reconciliation from '../../Assets/reconciliation.png';
import inventory from '../../Assets/stock.png';
import dispute from '../../Assets/dispute.png';
import logout from '../../Assets/Logout.png';


const sidebar = () => {
  return (
    <div className={classes.side}>
        <h4>POS Monitoring</h4>
        <div className={classes.sidelines}>
            <div className={classes.line}>
                <img src={dash} alt="dash"/>
                <p><span>Dashboard</span></p>
            </div>
            <div className={classes.line}>
                <img src={setup} alt="setup"/>
                <p>Setup</p>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className={classes.line}>
                <img src={transact} alt="transact"/>
                <p>Transactions</p>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className={classes.line}>
                <img src={health} alt="health"/>
                <p>Terminah Health</p>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className={classes.line}>
                <img src={money} alt="money"/>
                <p>Settlement</p>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className={classes.line}>
                <img src={perform} alt="perform"/>
                <p>Performance</p>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className={classes.line}>
                <img src={message} alt="Message"/>
                <p>Message Center</p>
            </div>
            <div className={classes.line}>
                <img src={reconciliation} alt="Reconciliation"/>
                <p>Reconciliation</p>
            </div>
            <div className={classes.line}>
                <img src={inventory} alt="inventory"/>
                <p>Inventory Management</p>
            </div>
            <div className={classes.line}>
                <img src={dispute} alt="dispute"/>
                <p>Dispute Management</p>
            </div>
            <div className={classes.line}>
                <img src={logout} alt="logout"/>
                <p>Logout</p>
            </div>

        </div>
      
    </div>
  )
}

export default sidebar
