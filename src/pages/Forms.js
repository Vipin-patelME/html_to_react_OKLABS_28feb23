import React from 'react'

export default function Forms() {
    return (
        <>
            <section id="content" className="container_12 clearfix" data-sort="true">
                <h1 className="grid_12">Custom Form Elements</h1>
                <div className="grid_12">
                    <form action className="box validate">
                    <div className="header">
                        <h2>Uploader</h2>
                    </div>
                    <div className="content">
                        <div className="uploader" />
                    </div>
                    </form>
                </div>
                <div className="grid_12">
                    <form className="box wizard manual validate" id="wiz">
                    <div className="header">
                        <h2><img src="img/icons/packs/fugue/16x16/ui-tab--arrow.png" className="icon" />Wizard</h2>
                    </div>
                    <div className="content">
                        <ul className="steps">
                        <li><a className="current" href="#wiz_database">Database</a></li>
                        <li><a href="#wiz_login">Login Details</a></li>
                        <li><a href="#wiz_finish">Finish</a></li>
                        </ul>
                        <fieldset id="wiz_database">
                        <div className="row">
                            <label htmlFor="w1_server">
                            <strong>Database Server</strong>
                            <small>e.g. localhost</small>
                            </label>
                            <div>
                            <input type="text" className="required" name="w1_server" id="w1_server" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="w1_name">
                            <strong>Database Name</strong>
                            </label>
                            <div>
                            <input type="text" className="required" defaultValue="db_mango" name="w1_name" id="w1_name" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="w1_username">
                            <strong>Username</strong>
                            </label>
                            <div>
                            <input type="text" className="required" defaultValue="mangosql1" name="w1_username" id="w1_username" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="w1_password">
                            <strong>User Password</strong>
                            </label>
                            <div>
                            <input type="password" className="required" defaultValue="ThisSecretPassIsCool!" name="w1_password" id="w1_password" />
                            </div>
                        </div>
                        </fieldset>
                        <fieldset id="wiz_login">
                        <div className="row">
                            <label htmlFor="w1_email">
                            <strong>E-Mail</strong>
                            </label>
                            <div>
                            <input type="text" className="required" email="true" name="w1_email" id="w1_email" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="w1_userpassword">
                            <strong>Password</strong>
                            </label>
                            <div>
                            <input type="password" className="required" name="w1_userpassword" id="w1_userpassword" />
                            </div>
                        </div>
                        </fieldset>
                        <fieldset id="wiz_finish">
                        <div className="alert note top">
                            <span className="icon" />
                            <strong>Congratulations!</strong> You just finished the main steps.
                        </div>
                        <p>Press "Finish" to end this cool Wizard and submit the data.</p>
                        </fieldset>
                    </div>
                    <div className="actions">
                        <div className="left">
                        <a href="#" className="button grey"><span><img src="img/icons/packs/fugue/16x16/arrow-180.png" width={16} height={16} /></span>Back</a>
                        </div>
                        <div className="right">
                        <a href="#" className="button grey"><span><img src="img/icons/packs/fugue/16x16/arrow.png" width={16} height={16} /></span>Next</a>
                        <a href="#" className="button finish"><span><img src="img/icons/packs/fugue/16x16/arrow.png" width={16} height={16} /></span>Finish</a>
                        </div>
                    </div>
                    </form>
                </div>
            </section>


        </>
    )
}
