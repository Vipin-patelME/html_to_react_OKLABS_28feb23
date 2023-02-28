import React from 'react'

export default function Login() {
  return (
    <>
        <div id="loading-overlay"></div>
        <div id="loading">
            <span>Loading...</span>
        </div>
        <section id="toolbar">
            <div className="container_12">
            <div className="left">
                <ul className="breadcrumb">
                <li><a href="javascript:void(0);">Mango</a></li>
                <li><a href="javascript:void(0);">Login</a></li>
                </ul>
            </div>
            <div className="right">
                <ul>
                <li><a href="dashboard.html"><span className="icon i14_bended-arrow-left" />Back to Dashboard</a></li>
                <li className="red"><a href="#">Purchase</a></li>
                </ul>
            </div>
            <div className="phone">
                <li><a href="#"><span className="icon icon-home" /></a></li>
                <li><a href="#"><span className="icon icon-heart" /></a></li>
            </div>
            </div>
        </section>
        <header className="container_12">
            <div className="container">
            <a href="/tf-mango/"><img src="img/logo-light.png" alt="Mango" width={210} height={67} /></a>
            <a className="phone-title" href="login.html"><img src="img/logo-mobile.png" alt="Mango" height={22} width={70} /></a>
            <div className="right">
                <span>Got no account?</span>
                <a href="javascript:void(0);">Register</a>
            </div>
            </div>
        </header>
        <section id="login" className="container_12 clearfix">
            <form action="dashboard.html" method="post" className="box validate">
            <div className="header">
                <h2><span className="icon icon-lock" />Login</h2>
            </div>
            <div className="content">
                <div className="login-messages">
                <div className="message welcome">Welcome back!</div>
                <div className="message failure">Invalid credentials.</div>
                </div>
                <div className="form-box">
                <div className="row">
                    <label htmlFor="login_name">
                    <strong>Username</strong>
                    <small>Or email address</small>
                    </label>
                    <div>
                    <input tabIndex={1} type="text" className="required" name="login_name" id="login_name" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="login_pw">
                    <strong>Password</strong>
                    <small><a href="javascript:void(0);" id = "">Forgot it?</a></small>
                    </label>
                    <div>
                    <input tabIndex={2} type="password" className="required" name="login_pw" id="login_pw" />
                    </div>
                </div>
                </div>
            </div>
            <div className="actions">
                <div className="left">
                <div className="rememberme">
                    <input tabIndex={4} type="checkbox" name="login_remember" id="login_remember" defaultChecked /><label htmlFor="login_remember">Remember me?</label>
                </div>
                </div>
                <div className="right">
                <input tabIndex={3} type="submit" defaultValue="Sign In" name="login_btn" />
                </div>
            </div>
            </form>
        </section>
     </>
  )
}
