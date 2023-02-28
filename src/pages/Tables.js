import React from 'react'

export default function Tables() {
    return (
        <>
            <section id="content" className="container_12 clearfix" data-sort="true">
                <h1 className="grid_12">Dynamic Tables (DataTables)</h1>
                <div className="grid_12">
                    <div className="box">
                    <div className="header">
                        <h2>Dynamic Table (with Checkboxes)</h2>
                    </div>
                    <div className="content">
                        <table className="dynamic styled" data-filter-bar="none">
                        <thead>
                            <tr>
                            <th style={{width: 29}} />
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td className="center">4</td>
                            <td className="center">X</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.0</td>
                            <td>Win 95+</td>
                            <td className="center">5</td>
                            <td className="center">C</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.5</td>
                            <td>Win 95+</td>
                            <td className="center">5.5</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 6</td>
                            <td>Win 98+</td>
                            <td className="center">6</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Trident</td>
                            <td>Internet Explorer 7</td>
                            <td>Win XP SP2+</td>
                            <td className="center">7</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Trident</td>
                            <td>AOL browser (AOL desktop)</td>
                            <td>Win XP</td>
                            <td className="center">6</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Gecko</td>
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.7</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Gecko</td>
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Gecko</td>
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Gecko</td>
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td className="center">1.9</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td><input type="checkbox" /></td>
                            <td>Gecko</td>
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>{/* End of .content */}
                    </div>{/* End of .box */}
                </div>{/* End of .grid_12 */}
                <div className="grid_12">
                    <div className="box">
                    <div className="header">
                        <h2>Dynamic Table (Sortable + AJAX source)</h2>
                    </div>
                    <div className="content">
                        <table className="dynamic styled" data-filter-bar="always" data-table-tools="{&quot;display&quot;:false}" data-data-table="{&quot;bProcessing&quot;: true, &quot;sAjaxSource&quot;: &quot;extras/dataTables.json&quot;}"> {/* OPTIONAL: class=with-prev-next */}
                        <thead>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        </table>
                    </div>{/* End of .content */}
                    </div>{/* End of .box */}
                </div>{/* End of .grid_12 */}
                <div className="grid_12">
                    <div className="box">
                    <div className="header">
                        <h2>Dynamic Table (Sortable with TableTools)</h2>
                    </div>
                    <div className="content">
                        <div className="tabletools">
                        <div className="left">
                            <a className="open-add-client-dialog" href="javascript:void(0);"><i className="icon-plus" />New Client</a>
                        </div>
                        <div className="right" />
                        </div>
                        <table className="dynamic styled with-prev-next" data-table-tools="{&quot;display&quot;:true}">
                        <thead>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td className="center">4</td>
                            <td className="center">X</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.0</td>
                            <td>Win 95+</td>
                            <td className="center">5</td>
                            <td className="center">C</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.5</td>
                            <td>Win 95+</td>
                            <td className="center">5.5</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 6</td>
                            <td>Win 98+</td>
                            <td className="center">6</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet Explorer 7</td>
                            <td>Win XP SP2+</td>
                            <td className="center">7</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>AOL browser (AOL desktop)</td>
                            <td>Win XP</td>
                            <td className="center">6</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.7</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td className="center">1.9</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>{/* End of .content */}
                    </div>{/* End of .box */}
                </div>{/* End of .grid_12 */}
                <div className="grid_12">
                    <div className="box">
                    <div className="header">
                        <h2>Dynamic Table (Toggle Opened)</h2>
                    </div>
                    <div className="content">
                        <table className="dynamic styled" data-show-filter-bar="true">
                        <thead>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td className="center">4</td>
                            <td className="center">X</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.0</td>
                            <td>Win 95+</td>
                            <td className="center">5</td>
                            <td className="center">C</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.5</td>
                            <td>Win 95+</td>
                            <td className="center">5.5</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 6</td>
                            <td>Win 98+</td>
                            <td className="center">6</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet Explorer 7</td>
                            <td>Win XP SP2+</td>
                            <td className="center">7</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>AOL browser (AOL desktop)</td>
                            <td>Win XP</td>
                            <td className="center">6</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.7</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td className="center">1.9</td>
                            <td className="center">A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td className="center">1.8</td>
                            <td className="center">A</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>{/* End of .content */}
                    </div>{/* End of .box */}
                </div>{/* End of .grid_12 */}
                </section>

        </>
    )
}
