import React from 'react'

export default function MainHeader() {
    return (
        <>
            <section id="toolbar">
                <div className="container_12">
                <div className="left">
                    <ul className="breadcrumb">
                    <li><a href="dashboard.html">Mango</a></li>
                    <li><a href="javascript:void(0);">Dashboard</a></li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                    <li><a href="pages_profile.html"><span className="icon i14_admin-user" />Profile</a></li>
                    <li>
                        <a href="#"><span>3</span>Messages</a>
                        <div className="popup">
                        <h3>New Messages</h3>
                        <a className="button flat left grey" onclick="$(this).parent().fadeToggle($$.config.fxSpeed)">Close</a>
                        <a className="button flat right" href="tables_dynamic.html">Inbox</a>
                        <div className="content mail">
                            <ul>
                            <li>
                                <div className="avatar">
                                <img src="img/elements/mail/avatar.png" height={40} width="40/" />
                                </div>
                                <div className="info">
                                <strong>John Doe</strong>
                                <span>Thanks for your theme!</span>
                                <small>09:32 am</small>
                                </div>
                                <div className="text">
                                <p>Hey Admin!</p>
                                <p>I've purchased your admin template and it's great :)</p>
                                <p>A happy customer</p>
                                <div className="actions">
                                    <a href="javascript:void(0);" className="left open-message-dialog">Reply</a>
                                    <a onclick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="javascript:void(0);">Delete</a>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="avatar">
                                <img src="img/elements/mail/mail.png" height={40} width="40/" />
                                </div>
                                <div className="info">
                                <strong>System</strong>
                                <span>New comment</span>
                                <small>08:47 am</small>
                                </div>
                                <div className="text">
                                <p>Hello,</p>
                                <p>There is one new comment on your theme.</p>
                                <p>Go to Comments page to see it.</p>
                                <div className="actions">
                                    <a href="javascript:void(0);" className="left open-message-dialog">Reply</a>
                                    <a onclick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="javascript:void(0);">Delete</a>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="avatar">
                                <img src="img/elements/mail/mail.png" height={40} width="40/" />
                                </div>
                                <div className="info">
                                <strong>Stranger</strong>
                                <span>[SPAM] ---</span>
                                <small>Yesterday</small>
                                </div>
                                <div className="text">
                                <p>[...]</p>
                                <div className="actions">
                                    <a href="javascript:void(0);" className="left open-message-dialog">Read</a>
                                    <a onclick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="javascript:void(0);">Delete</a>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </li>
                    <li className="space" />
                    <li><a href="javascript:void(0);" id="btn-lock"><span>--:--</span>Lock screen</a></li>
                    <li className="red"><a href="login.html">Logout</a></li>
                    </ul>
                </div>
                <div className="phone">
                    <li><a href="pages_profile.html"><span className="icon icon-user" /></a></li>
                    
                    <li><a className="navigation" href="#"><span className="icon icon-list" /></a></li>
                </div>
                </div>
            </section>
            <header className="container_12">
                <a href="dashboard.html"><img src="img/logo.png" alt="Mango" width={191} height={60} /></a>
                <a className="phone-title" href="dashboard.html"><img src="img/logo-mobile.png" alt="Mango" height={22} width={70} /></a>
                <div className="buttons">
                    <a href="statistics.html">
                        <span className="icon icon-sitemap" />
                        Statistics
                    </a>
                    <a href="forms.html">
                        <span className="icon icon-list-alt" />
                        Forms
                    </a>
                    <a href="tables_dynamic.html">
                        <span className="icon icon-table" />
                        Tables
                    </a>
                </div>
            </header>
        </>
    )
}
