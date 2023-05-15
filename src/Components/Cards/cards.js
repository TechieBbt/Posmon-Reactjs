import React from 'react'
import classes from './cards.module.css';
import nigLogo from '../../Assets/NexusPay Logo.png';
import Visa from '../../Assets/Visa.png';
import MasterCard from '../../Assets/Mastercard.png';
import Verve from '../../Assets/verve.png';

const cards = () => {
  return (
    <div className={classes.container}>
      <h3>Transactions Per Card Type</h3>
      <div className={classes.cards}>
            <div className={classes.card}>
                <h5>Visa</h5>
                <div className={classes.dutch}>
                    <div className={classes.nigeria}>
                        <img src={nigLogo} alt="nigeria"/>
                        <p>Dutch Nigerian Bank</p>
                    </div>
                    <div className={classes.logo}>
                        <img src={Visa} alt="visa"/>
                    </div>                
                </div>
                <div className={classes.wrap}>
                        <div className={classes.approved}>
                            <p>Approved (30%)</p>
                            <p><span>1,245</span></p>
                        </div>
                        <div className={classes.failed}>
                            <p>Failed (70%)</p>
                            <p><span>6,786</span></p>
                        </div>
                </div>
            </div>
            <div className={classes.card}>
                <h5>Master Card</h5>
                <div className={classes.dutch2}>
                    <div className={classes.nigeria}>
                        <img src={nigLogo} alt="nigeria"/>
                        <p>Dutch Nigerian Bank</p>
                    </div>
                    <div className={classes.logo}>
                        <img src={MasterCard} alt="mastercard"/>
                    </div>                
                </div>
                <div className={classes.wrap}>
                        <div className={classes.approved}>
                            <p>Approved (75%)</p>
                            <p><span>3,025</span></p>
                        </div>
                        <div className={classes.failed}>
                            <p>Failed (25%)</p>
                            <p><span>722</span></p>
                        </div>
                </div>
            </div>
            <div className={classes.card}>
                <h5>Verve</h5>
                <div className={classes.dutch3}>
                    <div className={classes.nigeria}>
                        <img src={nigLogo} alt="nigeria"/>
                        <p>Dutch Nigerian Bank</p>
                    </div>
                    <div className={classes.logo}>
                        <img src={Verve} alt="verve"/>
                    </div>                
                </div>
                <div className={classes.wrap}>
                        <div className={classes.approved}>
                            <p>Approved (20%)</p>
                            <p><span>243</span></p>
                        </div>
                        <div className={classes.failed}>
                            <p>Failed (80%)</p>
                            <p><span>8,986</span></p>
                        </div>
                </div>
            </div>
            <div className={classes.card}>
                <h5>Card Type</h5>
                <div className={classes.dutch}>
                    <div className={classes.nigeria}>
                        <img src={nigLogo} alt="nigeria"/>
                        <p>Dutch Nigerian Bank</p>
                    </div>
                    <div className={classes.logo}>
                        <p>Card Logo</p>
                    </div>                
                </div>
                <div className={classes.wrap}>
                        <div className={classes.approved}>
                            <p>Approved (percent)</p>
                            <p><span>Value</span></p>
                        </div>
                        <div className={classes.failed}>
                            <p>Failed (percent)</p>
                            <p><span>Value</span></p>
                        </div>
                </div>
            </div>
            <div className={classes.card}>
                <h5>Card Type</h5>
                <div className={classes.dutch}>
                    <div className={classes.nigeria}>
                        <img src={nigLogo} alt="nigeria"/>
                        <p>Dutch Nigerian Bank</p>
                    </div>
                    <div className={classes.logo}>
                        <p>Card Logo</p>
                    </div>                
                </div>
                <div className={classes.wrap}>
                        <div className={classes.approved}>
                            <p>Approved (percent)</p>
                            <p><span>Value</span></p>
                        </div>
                        <div className={classes.failed}>
                            <p>Failed (percent)</p>
                            <p><span>Value</span></p>
                        </div>
                </div>
            </div>
            <div className={classes.card}>
                <h5>Card Type</h5>
                <div className={classes.dutch}>
                    <div className={classes.nigeria}>
                        <img src={nigLogo} alt="nigeria"/>
                        <p>Dutch Nigerian Bank</p>
                    </div>
                    <div className={classes.logo}>
                        <p>Card Logo</p>
                    </div>                
                </div>
                <div className={classes.wrap}>
                        <div className={classes.approved}>
                            <p>Approved (percent)</p>
                            <p><span>Value</span></p>
                        </div>
                        <div className={classes.failed}>
                            <p>Failed (percent)</p>
                            <p><span>Value</span></p>
                        </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default cards
