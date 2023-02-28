import React from 'react'

export default function OtherPages() {
    return (
        <>
            <section id="content" className="container_12 clearfix" data-sort="true">
                <h1 className="grid_12">Invoice Template (try to print this page! :-))</h1>
                <div className="grid_12">
                    <div className="box">
                    <div className="header"><h2>Invoice</h2></div>
                    <div className="content invoice">
                        <h4>Invoice number: 0017/2012</h4>
                        <h3>Invoice Title or Subject</h3>
                        <div className="supplier">
                        <h5>Supplier:</h5>
                        <p>
                            <strong>John Doe</strong><br />
                            Freelance Web &amp; Graphic Designer
                        </p>
                        <h5>Address:</h5>
                        <p>
                            1111-A Nowhere Lane<br />
                            Outta Sight, State 90378<br />
                            USA
                        </p>
                        </div>
                        <div className="customer">
                        <h5>Customer:</h5>
                        <p>
                            <strong>Douglas A. Perkins</strong><br />
                            Multiverc, Ltd.<br />
                            2363 Ford Street<br />
                            San Jose, CA 95131<br />
                            USA
                        </p>
                        <p>
                            <span>ID:</span> 1796230632<br />
                            <span>Phone:</span> 0123 456 7890
                        </p>
                        </div>
                        <div className="clearfix" />
                        <div className="details">
                        <div className="highlighted">
                            <span>Account No.:</span> <strong>000000151/1952</strong>
                        </div>
                        <div>
                            <span>Date:</span> <strong>01/01/2012</strong>
                        </div>
                        <div>
                            <span>Due Date:</span> <strong>12/31/2012</strong>
                        </div>
                        </div>
                        <table className="styled borders">
                        <thead>
                            <tr><th>Product</th><th>Description</th><th>Total</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Concept</td><td>Creating project concept and logic</td><td>$800</td></tr>
                            <tr><td>Design</td><td>Design prototype</td><td>$2500</td></tr>
                            <tr><td>Front End Development</td><td>Coding and connecting the front end</td><td>$1200</td></tr>
                            <tr><td>Database</td><td>Creating and connecting the database</td><td>$600</td></tr>
                        </tbody>
                        </table>
                        <div className="total">
                        <span>Total</span><strong>$2 700</strong>
                        </div>
                        <div className="clearfix" />
                        <div className="notes">
                        <h5>Notes:</h5>
                        <p>Etiam convallis sodales elementum. Suspendisse interdum, nisi vitae pellentesque eleifend, justo nulla dictum lectus, consectetur elementum metus turpis quis mi. Integer non ante vel magna elementum aliquam.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    )
}
