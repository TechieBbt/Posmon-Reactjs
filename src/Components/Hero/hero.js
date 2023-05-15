import React from 'react'
import classes from './hero.module.css';
import Refresh from '../../Assets/Refresh button.png';
import Arrowdown from '../../Assets/Download button.png';
import Arrow from '../../Assets/half-arrow.png';
import DollarCircle from '../../Assets/dollar-circle.png';
import Moneyreceive from '../../Assets/money-recive.png';
import Moneysend from '../../Assets/money-send.png';
import Terminal from '../../Assets/group.png';
import Total from '../../Assets/dollar-square.png';
import Chart from '../../Assets/Chart.png';
import Pie from '../../Assets/pie chart.png';
import Cards from '../../Components/Cards/cards';
import Sidebar from '../../Components/Sidebar/sidebar';

const hero = () => {
  return (
    <div className={classes.container}>
        <Sidebar/>
        <div className={classes.innerContainer}>
            <div className={classes.welcome}>
                <div className={classes.welcomeHead}>
                    <div className={classes.welcomeHead1}>
                        <h1>Welcome back,</h1>
                        <h3>Here's what is happening with your POS today.</h3>
                    </div>
                    <div className={classes.welcomeHead2}>
                        <h3>12th October, 2022 <img src={Arrow} alt="arrow"/></h3>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <button>Transactions</button>
                    <button>Terminal Health</button>
                    <button>Settlement</button>
                    <button>Performance</button>
                </div>
                <div className={classes.boxes}>
                    <div className={classes.box}>
                        <div className={classes.boxHead}>
                           <div> <img src={DollarCircle} alt="DollarCircle"/> </div>
                            <p> Total Transactions </p>
                        </div>
                        <h2>79,709</h2>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.boxHead}>
                           <div> <img src={Moneyreceive} alt="Dollar"/> </div>
                            <p> Approved Transactions </p>                        
                        </div>
                        <h2>59,709</h2>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.boxHead}>
                            <div> <img src={Moneysend} alt="Dollarsend"/> </div>
                            <p> Failed Transactions </p>                        
                        </div>
                        <h2>20,000</h2>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.boxHead}>
                            <div> <img src={Terminal} alt="group"/> </div>
                            <p> Transacting Terminals </p>                        
                        </div>
                        <h2>2000</h2>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.boxHead}>
                           <div> <img src={Total} alt="total"/> </div>
                            <p> Total Terminals </p>                       
                        </div>
                        <h2>8000</h2>
                    </div>
                </div>
            </div>
        <div className={classes.liveMonitor}>
            <div className={classes.liveHead}>
                <h3>Live Monitoring</h3>
                <div className={classes.liveImg}>
                    <img src={Refresh} alt='refresh'/>
                    <img src={Arrowdown} alt='alt'/>
                </div>
            </div>
            <table>
                <tr className={classes.heading}>
                    <th>Time</th>
                    <th>Amount</th>
                    <th>Payment Type</th>
                    <th>Terminal</th>
                    <th>Account</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>12: 30 pm</td>
                    <td>20,100</td>
                    <td>Card</td>
                    <td>23012100</td>
                    <td>07613*******67</td>
                    <td><span className={classes.approved}>Approved</span></td>
                </tr>
                <tr>
                    <td>12:08 pm</td>
                    <td>14,200</td>
                    <td>Transfer</td>
                    <td>23013201</td>
                    <td>07613*******67</td>
                    <td><span className={classes.approved}>Approved</span></td>
                </tr>
                <tr>
                    <td>11:32 am</td>
                    <td>4,500</td>
                    <td>Card</td>
                    <td>23019800</td>
                    <td>07613*******67</td>
                    <td><span className={classes.approved}>Approved</span></td>
                </tr>
                <tr>
                    <td>11:25 am</td>
                    <td>8,000</td>
                    <td>Card</td>
                    <td>23014019</td>
                    <td>07613*******67</td>
                    <td><span className={classes.failed}>Failed</span></td>
                </tr>
                <tr>
                    <td>11:20 am</td>
                    <td>1,100</td>
                    <td>Transfer</td>
                    <td>23011100</td>
                    <td>07613*******67</td>
                    <td><span className={classes.failed}>Failed</span></td>
                </tr>
                <tr>
                    <td>11:05 am</td>
                    <td>3,400</td>
                    <td>Transfer</td>
                    <td>09087043AA</td>
                    <td>07613*******67</td>
                    <td><span className={classes.failed}>Failed</span></td>
                </tr>
                <tr>
                    <td>10:30 am</td>
                    <td>2,000</td>
                    <td>Card</td>
                    <td>09087043AA</td>
                    <td>07613*******67</td>
                    <td><span className={classes.failed}>Failed</span></td>
                </tr>
                <tr>
                    <td>10:05 am</td>
                    <td>50,000</td>
                    <td>Card</td>
                    <td>09087043AA</td>
                    <td>07613*******67</td>
                    <td><span className={classes.failed}>Failed</span></td>
                </tr>
                <tr>
                    <td>9:50 am</td>
                    <td>3,500</td>
                    <td>Card</td>
                    <td>09087043AA</td>
                    <td>07613*******67</td>
                    <td><span className={classes.failed}>Failed</span></td>
                </tr>
            </table>
        </div>
        <div className={classes.distribution}>
            <h3>Hourly Distribution</h3>
            <div className={classes.chart}>
                <div className={classes.chartText}>
                    <h4>Overall  Approval Rate: 90.0%</h4>
                    <p>Transactions per time</p>
                </div>
                <div className={classes.chartImg}>
                    <img src={Chart} alt="chart"/>
                </div>
                <div className={classes.chartBelow}>
                    <div className={classes.comment}>
                        <div className={classes.circle}>
                            <div className={classes.circle1}></div>
                            <p>Approved</p>
                        </div>
                        <div className={classes.circle}>
                            <div className={classes.circle2}></div>
                            <p>Failed</p>
                        </div> 
                    </div>
                    <div className={classes.chartButton}>
                        <button>View Table</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.failure}>
            <h3>Failed Transactions</h3>
            <div className={classes.contain}>
                <div className={classes.class}>
                    <h4>Failures by Class</h4>
                    <div className={classes.allText1}>
                        <div className={classes.acquire}>
                            <div className={classes.redCircle}></div>
                            <p>Acquirer Related</p>
                        </div>
                        <div className={classes.acquire}>
                            <div className={classes.blueCircle}></div>
                            <p>Cardholder Related</p>
                        </div>
                        <div className={classes.acquire}>
                            <div className={classes.purpleCircle}></div>
                            <p>Issuer Related</p>
                        </div>                
                    </div>
                    <div className={classes.allText2}>
                        <div className={classes.acquire}>
                            <div className={classes.orangeCircle}></div>
                            <p>Switch Related</p>
                        </div>
                        <div className={classes.acquire}>
                            <div className={classes.greenCircle}></div>
                            <p>Undefined</p>
                        </div>
                    </div>
                    <div className={classes.classImage}>
                        <img src={Pie} alt="pie"/>
                    </div>
                    <div className={classes.progressBar}>
                        <div className={classes.barWrap}>
                            <div className={classes.bar1a}></div>
                            <div className={classes.bar2}></div>
                            <div className={classes.percent}>
                                <p>44%</p>
                            </div>
                        </div>
                        <div className={classes.barWrap}>
                            <div className={classes.bar1b}></div>
                            <div className={classes.bar2}></div>
                            <div className={classes.percent}>
                                <p>28%</p>
                            </div>
                        </div>
                        <div className={classes.barWrap}>
                            <div className={classes.bar1c}></div>
                            <div className={classes.bar2}></div>
                            <div className={classes.percent}>
                                <p>18%</p>
                            </div>
                        </div>
                        <div className={classes.barWrap}>
                            <div className={classes.bar1d}></div>
                            <div className={classes.bar2}></div>
                            <div className={classes.percent}>
                                <p>6%</p>
                            </div>
                        </div>
                        <div className={classes.barWrap}>
                            <div className={classes.bar1e}></div>
                            <div className={classes.bar2}></div>
                            <div className={classes.percent}>
                                <p>4%</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={classes.cardholder}>
                    <h2>20,000</h2>
                    <h4>Here’s why your transactions failed!</h4>
                    <div className={classes.cardButtons}>
                        <div className={classes.blueBtn}>
                        <button>Cardholder</button>
                        </div>
                        <button>Acquirer</button>
                        <button>Issuer</button>
                        <button>Switch</button>
                        <button>Undefined</button>
                    </div>
                    <div className={classes.cardlist}>
                        <div className={classes.cardlist1}>
                            <ul>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                                <li>51 (Not sufficient funds)</li>
                            </ul>
                        </div>
                        <div className={classes.cardlist2}>
                            <ul>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                                <li>2,220</li>
                            </ul>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        <Cards/>
      </div>
    </div>
  )
}

export default hero
