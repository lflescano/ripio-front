import React from "react";
import { NavLink } from "react-router-dom";

import LoginHeader from "components/atoms/LoginHeader";
import { isMobile } from 'helpers/Mobile';

import "./styles.scss";

const Sidebar = ({showMenu}) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    return <div className="sidebar-container" >
            {!isMobile && 
                <LoginHeader></LoginHeader>
            }
            {showMenu && <React.Fragment>
                    <div className="menu-items">
                        <NavLink exact className="item" activeclassname="active-item" to="/balances" >
                            <div className="item-icon">
                                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3492 1.55782L12.6984 0.798565L13.3492 1.55782ZM14.6508 1.55782L15.3016 0.798565L14.6508 1.55782ZM21 14V22H23V14H21ZM7 22V14H5V22H7ZM11 22H7V24H11V22ZM21 22H17V24H21V22ZM11 16V22H13V16H11ZM17 22V16H15V22H17ZM15 14H13V16H15V14ZM5 12H2.70326V14H5V12ZM2.70326 12L14 2.31708L12.6984 0.798565L1.40167 10.4815L2.70326 12ZM14 2.31708L25.2967 12L26.5983 10.4815L15.3016 0.798565L14 2.31708ZM25.2967 12H23V14H25.2967V12ZM25.2967 12V14C27.1536 14 28.0081 11.6899 26.5983 10.4815L25.2967 12ZM2.70326 12H2.70326L1.40167 10.4815C-0.00812217 11.6899 0.846444 14 2.70326 14V12ZM14 2.31708V2.31708L15.3016 0.798565C14.5526 0.156582 13.4474 0.156583 12.6984 0.798565L14 2.31708ZM17 16C17 14.8954 16.1046 14 15 14V16H17ZM13 16V14C11.8954 14 11 14.8954 11 16H13ZM17 22H15C15 23.1046 15.8954 24 17 24V22ZM11 24C12.1046 24 13 23.1046 13 22H11V24ZM5 22C5 23.1046 5.89543 24 7 24V22H5ZM21 22V24C22.1046 24 23 23.1046 23 22H21ZM23 14V12C21.8954 12 21 12.8954 21 14H23ZM7 14C7 12.8954 6.10457 12 5 12V14H7Z" fill="#9A9CB5" />
                            </svg>
                            </div>
                            {!isMobile && <div className="item-title">HOME</div>}
                        </NavLink>
                        <NavLink exact className="item" activeclassname="active-item" to="/balances">
                            <div className="item-icon">
                                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="24" height="20" rx="3" stroke="#9A9CB5" strokeWidth="2" />
                                    <path d="M16.5161 9.67625C17.5755 10.2408 17.5755 11.7592 16.5161 12.3237L11.4555 15.0208C10.4563 15.5533 9.25 14.8292 9.25 13.697L9.25 8.30298C9.25 7.1708 10.4563 6.44675 11.4555 6.97923L16.5161 9.67625Z" fill="#9A9CB5" />
                                </svg>
                            </div>
                            {!isMobile && <div className="item-title">Balance</div>}
                        </NavLink>
                        <NavLink exact className="item" activeclassname="active-item" to="/transacciones/agregar">
                            <div className="item-icon">
                                <svg viewBox="0 0 489.2 489.2" width="24" height="42">
                                        <path d="M481.044,382.5c0-6.8-5.5-12.3-12.3-12.3h-418.7l73.6-73.6c4.8-4.8,4.8-12.5,0-17.3c-4.8-4.8-12.5-4.8-17.3,0l-94.5,94.5
                                            c-4.8,4.8-4.8,12.5,0,17.3l94.5,94.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-73.6-73.6h418.8
                                            C475.544,394.7,481.044,389.3,481.044,382.5z" fill="#9A9CB5"/>
                                        <path d="M477.444,98l-94.5-94.4c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l73.6,73.6h-418.8c-6.8,0-12.3,5.5-12.3,12.3
                                            s5.5,12.3,12.3,12.3h418.8l-73.6,73.4c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l94.5-94.5
                                            C482.244,110.6,482.244,102.8,477.444,98z" fill="#9A9CB5"/>
                                </svg>
                            </div>
                            {!isMobile && <div className="item-title">Enviar Dinero</div>}
                        </NavLink>
                        {user.is_staff && <NavLink exact className="item" activeclassname="active-item" to="/monedas">
                            <div className="item-icon">
                                <svg viewBox="0 0 24 20" width="28" height="42" >
							        <path fill="#9A9CB5" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
							        <path fill="#9A9CB5" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                                </svg>
                            </div>
                            {!isMobile && <div className="item-title">Monedas</div>}
                        </NavLink>}
                    </div>
                    {isMobile && <div className="menu-line">
                    </div>}
            </React.Fragment>}
        </div>
}

export default Sidebar;
