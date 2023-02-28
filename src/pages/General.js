import React from 'react'

export default function General() {
    return (
        <>
            <section id="content" className="container_12 clearfix" data-sort="true">
                <h1 className="grid_12">General User Interface (UI) Elements</h1>
                <div className="grid_12">
                    <form className="box validate">
                        <div className="header">
                            <h2>Slider</h2>
                        </div>
                        <div className="content">
                            <div className="row">
                                <label htmlFor="f1_simpleslider">
                                    <strong>Simple Slider</strong>
                                </label>
                                <div>
                                    <input data-type="range" name="f1_simpleslider" id="f1_simpleslider" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="f1_sliderrange">
                                    <strong>Range Slider</strong>
                                </label>
                                <div>
                                    <input data-type="range" data-range="[15,74]" name="f1_sliderrange" id="f1_sliderrange" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="f1_sliderstep">
                                    <strong>Step Slider with Pattern</strong>
                                </label>
                                <div>
                                    <input data-type="range" data-min={100} data-max={500} data-step={50} data-range="[100,200]" data-pattern="Costs: $%n" name="f1_sliderstep" id="f1_sliderstep" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="f1_slidervertical">
                                    <strong>Vertical Slider</strong>
                                </label>
                                <div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={100} name="f1_slidervertical1" id="f1_slidervertical1" /></div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={75} name="f1_slidervertical2" id="f1_slidervertical2" /></div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={50} name="f1_slidervertical3" id="f1_slidervertical3" /></div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={25} name="f1_slidervertical4" id="f1_slidervertical4" /></div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={50} name="f1_slidervertical5" id="f1_slidervertical5" /></div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={75} name="f1_slidervertical6" id="f1_slidervertical6" /></div>
                                    <div><input className="eq" data-type="range" data-orientation="vertical" defaultValue={100} name="f1_slidervertical8" id="f1_slidervertical7" /></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <form action className="grid_12">
                    <fieldset>
                    <legend>General Progress Bars</legend>
                    <div className="row">
                        <label htmlFor="f1_text">
                        <strong>Simple</strong>
                        <small>Blue</small>
                        </label>
                        <div>
                        <div className="ui-progressbar" data-value={25} />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="f1_text">
                        <strong>Simple</strong>
                        <small>Orange</small>
                        </label>
                        <div>
                        <div className="ui-progressbar" data-value={50} data-color="orange" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="f1_text">
                        <strong>Simple</strong>
                        <small>Red</small>
                        </label>
                        <div>
                        <div className="ui-progressbar" data-value={75} data-color="red" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="f1_text">
                        <strong>Simple</strong>
                        <small>Grey</small>
                        </label>
                        <div>
                        <div className="ui-progressbar" data-value={100} data-color="grey" />
                        </div>
                    </div>
                    </fieldset>
                    <fieldset>
                    <legend>Titled Progress Bars with Computed Colors</legend>
                    <div className="row">
                        <label htmlFor="f1_text">
                        <strong>Animated Progress Bar</strong>
                        <small>Auto-Color</small>
                        </label>
                        <div>
                        <div className="ui-progressbar" data-value={5000} data-animate="true" data-color="auto" data-showtitle="percentage" data-max={20000} data-showvalue="true" data-format="$0,0" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="f1_text">
                        <strong>Own Title</strong>
                        <small>Auto-Color</small>
                        </label>
                        <div>
                        <div className="ui-progressbar" data-value={60} data-animate="false" data-color="auto" data-showtitle="title" data-title="Space" data-showvalue="true" data-format="0.00GB" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="animprog">
                        <strong>Animated Steps</strong>
                        <small>Blue</small>
                        </label>
                        <div>
                        <div id="animprog" className="manual" />
                        </div>
                    </div>
                    </fieldset>
                </form>
                <div className="grid_6">
                    <div className="box tabbedBox">
                    <div className="header">
                        <h2>Tabs</h2>
                        <ul>
                        <li><a href="#t1-c1"><span className="icon icon-comment-alt" />First Tab</a></li>
                        <li><a href="#t1-c2"><img src="img/icons/packs/fugue/16x16/user-black.png" height={16} width={16} className="icon" />Second Tab</a></li>
                        <li><a href="#t1-c3">Third Tab</a></li>
                        </ul>
                    </div>
                    <div className="content tabbed">
                        <div id="t1-c1">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <p>Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div id="t1-c2">
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                        </div>
                        <div id="t1-c3">
                        <p>Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid_6">
                    <div className="box">
                    <div className="header">
                        <h2>Buttons</h2>
                    </div>
                    <div className="content center-elements">
                        <p>
                        <button href="javascript:void(0);" className="block">Blue Button</button>
                        <button href="javascript:void(0);" className="button red block">Red Button</button>
                        <button href="javascript:void(0);" className="button grey block">Grey Button</button>
                        <br />
                        <button href="javascript:void(0);" className="button blue flat block">Blue Flat Button</button>
                        <button href="javascript:void(0);" className="button red flat block">Red Flat Button</button>
                        <button href="javascript:void(0);" className="button grey flat block">Grey Flat Button</button>
                        <br />
                        <button href="javascript:void(0);" className="block"><span className="icon icon-plus" />Blue Button with Icon</button>
                        <button href="javascript:void(0);" className="button red block"><span className="icon icon-plus" />Red Button with Icon</button>
                        <button href="javascript:void(0);" className="button grey block"><span className="icon icon-plus" />Grey Button with Icon</button>
                        </p>
                        <p>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="clearfix" />
                <div className="grid_4">
                    <div className="box">
                    <div className="header">
                        <h2>Accordion</h2>
                    </div>
                    <div className="accordion">
                        <h3><a href="#">Section 1</a></h3>
                        <div>
                        <p>
                            Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
                            Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
                            ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
                            lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                        </p>
                        <ul>
                            <li>List item one</li>
                            <li>List item two</li>
                            <li>List item three</li>
                        </ul>
                        </div>
                        <h3><a href="#">Section 2</a></h3>
                        <div>
                        <p>
                            Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
                            purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
                            velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
                            suscipit faucibus urna.
                        </p>
                        </div>
                        <h3><a href="#">Section 3</a></h3>
                        <div>
                        <p>
                            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
                            ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
                            amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
                            odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                        </p>
                        </div>
                        <h3><a href="#">Section 4</a></h3>
                        <div>
                        <p>
                            Cras dictum. Pellentesque habitant morbi tristique senectus et netus
                            et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
                            mauris vel est.
                        </p>
                        <p>
                            Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid_4">
                    <div className="box">
                    <div className="header">
                        <h2>Toggle</h2>
                    </div>
                    <div className="accordion toggle">
                        <h3><a href="#">Section 1</a></h3>
                        <div>
                        <p>
                            Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
                            Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
                            ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
                            lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                        </p>
                        <ul>
                            <li>List item one</li>
                            <li>List item two</li>
                            <li>List item three</li>
                        </ul>
                        </div>
                        <h3><a href="#">Section 2</a></h3>
                        <div>
                        <p>
                            Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
                            purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
                            velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
                            suscipit faucibus urna.
                        </p>
                        </div>
                        <h3><a href="#">Section 3</a></h3>
                        <div>
                        <p>
                            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
                            ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
                            amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
                            odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                        </p>
                        </div>
                        <h3><a href="#">Section 4</a></h3>
                        <div>
                        <p>
                            Cras dictum. Pellentesque habitant morbi tristique senectus et netus
                            et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
                            mauris vel est.
                        </p>
                        <p>
                            Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid_4">
                    <div className="box">
                    <div className="header">
                        <h2><img className="icon" src="img/icons/packs/fugue/16x16/sticky-note.png" />Tooltips</h2>
                    </div>
                    <div className="content">
                        <table cellSpacing={5} id="gravity">
                        <tbody>
                            <tr>
                            <td>
                                <a href="#" className="tooltip" data-gravity="nw" title="This is an example of north-west gravity">Northwest</a>
                            </td>
                            <td>
                                <a href="#" className="tooltip" data-gravity="n" original-title="This is an example of north gravity">North</a>
                            </td>
                            <td>
                                <a href="#" className="tooltip" data-gravity="ne" original-title="This is an example of north-east gravity">Northeast</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <a href="#" className="tooltip" data-gravity="w" original-title="This is an example of west gravity">West</a>
                            </td>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <a href="#" className="tooltip" data-gravity="e" original-title="This is an example of east gravity">East</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <a href="#" className="tooltip" data-gravity="sw" original-title="This is an example of south-west gravity">Southwest</a>
                            </td>
                            <td>
                                <a href="#" className="tooltip" data-gravity="s" original-title="This is an example of south gravity">South</a>
                            </td>
                            <td>
                                <a href="#" className="tooltip" data-gravity="se" original-title="This is an example of south-east gravity">Southeast</a>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div className="grid_4">
                    <div className="box">
                    <div className="header">
                        <h2><img className="icon" src="img/icons/packs/fugue/16x16/sticky-note.png" />Badges</h2>
                    </div>
                    <div className="content center-elements">
                        <p>
                        <span className="badge block blue light">LIGHT</span>
                        <span className="badge block blue">MEDIUM</span>
                        <span className="badge block blue dark">DARK</span>
                        <span className="badge block green">GREEN</span>
                        <span className="badge block orange">ORANGE</span>
                        <span className="badge block red">RED</span>
                        </p>
                    </div>
                    </div>
                </div>
                <h1 className="grid_12">Dialogs / Notifications</h1>
                <div className="grid_6">
                    <div className="box">
                    <div className="header">
                        <h2><span className="icon icon-warning-sign" />Growl Notifications</h2>
                    </div>
                    <div className="content center-elements">
                        <p>
                        <a onclick="$.jGrowl('Hello world!');" className="button block grey" value>Basic Notice</a>
                        <a onclick="$.jGrowl('This is sticky! Hey there. :-)', { sticky: true });" className="button block grey">Sticky Notice</a>
                        <a onclick="$.jGrowl('A message with a header.', { header: 'Important' });" className="button block grey">Message with Header</a>
                        <a onclick="$.jGrowl('A message that will live a little longer.', { life: 10000 });" className="button block grey">Long Live Message</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="grid_6">
                    <div className="box">
                    <div className="header">
                        <h2>jQuery UI Dialogs</h2>
                    </div>
                    <div className="content center-elements">
                        <p>
                        <a id="dialog_normal_btn" className="button block grey" href="javascript:void(0);">Normal Dialog</a>
                        </p><div style={{display: 'none'}} id="dialog_normal" title="Normal Dialog">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <div className="actions">
                            <div className="left">
                            <button className="grey">Cancel</button>
                            </div>
                            <div className="right">
                            <button>Okay</button>
                            </div>
                        </div>
                        </div>
                        <a id="dialog_modal_btn" className="button block grey" href="javascript:void(0);">Modal Dialog</a>
                        <div style={{display: 'none'}} id="dialog_modal" title="Modal Dialog">
                        <p>Adding the modal overlay screen makes the dialog look more prominent because it dims out the page content.</p>
                        </div>
                        <a id="dialog_form_btn" className="button block grey" href="javascript:void(0);">Dialog with Form Elements</a>
                        <div style={{display: 'none'}} id="dialog_form" title="Dialog with Form Elements">
                        <form action className="full validate">
                            <div className="row">
                            <label htmlFor="d1_textfield">
                                <strong>Text Field</strong>
                            </label>
                            <div>
                                <input className="required" type="text" name="d1_textfield" id="d1_textfield" />
                            </div>
                            </div>
                            <div className="row">
                            <label htmlFor="d1_textarea_grow">
                                <strong>Textarea</strong>
                                <small>with autogrow</small>
                            </label>
                            <div>
                                <textarea className="required" rows={5} name="d1_textarea_grow" id="d1_textarea_grow" defaultValue={""} />
                            </div>
                            </div>
                            <div className="row">
                            <label htmlFor="d1_select">
                                <strong>Select</strong>
                                <small>With search</small>
                            </label>
                            <div>
                                <select style={{paddingBottom: 10}} name="d1_select" id="d1_select" className="search required" data-placeholder="Choose a Name">
                                <option value />
                                <option value="Oliver">Oliver</option>
                                <option value="Jack">Jack</option>
                                <option value="Harry">Harry</option>
                                <option value="Alfie">Alfie</option>
                                <option value="Charlie">Charlie</option>
                                <option value="Thomas">Thomas</option>
                                <option value="William">William</option>
                                <option value="Joshua">Joshua</option>
                                <option value="George">George</option>
                                <option value="James">James</option>
                                <option value="Olivia">Olivia</option>
                                <option value="Sophie">Sophie</option>
                                <option value="Emily">Emily</option>
                                <option value="Lily">Lily</option>
                                <option value="Amelia">Amelia</option>
                                <option value="Jessica">Jessica</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Chloe">Chloe</option>
                                <option value="Grace">Grace</option>
                                <option value="Evie">Evie</option>
                                </select>
                            </div>
                            </div>
                        </form>
                        <div className="actions">
                            <div className="left">
                            <button className="grey cancel">Cancel</button>
                            </div>
                            <div className="right">
                            <button className="submit">Submit</button>
                            </div>
                        </div>
                        </div>
                        <a id="dialog_settings" className="button block grey" href="javascript:$$.settings();">Settings Dialog</a>
                        <p />
                    </div>
                    </div> 
                </div>
                <h1 className="grid_12">Alert Boxes</h1>
                <div className="grid_12">
                    <div className="alert error no-margin-top">
                    <span className="icon" />
                    <strong>Error!</strong> Something went wrong here!
                    </div>
                    <div className="alert success">
                    <span className="icon" />
                    <strong>Success!</strong> Now it's working :)
                    </div>
                    <div className="alert warning">
                    <span className="icon" />
                    <strong>Warning!</strong> Something will go wrong soonly...
                    </div>
                    <div className="alert information">
                    <span className="icon" />
                    <strong>Did you know that</strong> this template is very cool?
                    </div>
                    <div className="alert note no-margin-bottom">
                    <span className="icon" />
                    <strong>Please note:</strong> There is something important you might not know.
                    </div>
                </div>
                <div className="grid_12 spacer" />
                <div className="grid_6">
                    <div className="box">
                    <div className="header">
                        <h2>Normal Alert Boxes (Closable)</h2>
                    </div>
                    <div className="content">
                        <div className="alert information top">
                        <span className="icon" />
                        Yep, alert boxes can be at the top!
                        </div>
                        <div className="alert error">
                        <span className="icon" />
                        <strong>Error!</strong> Something went wrong here!
                        </div>
                        <div className="alert success">
                        <span className="icon" />
                        <strong>Success!</strong> Now it's working :)
                        </div>
                        <div className="alert warning">
                        <span className="icon" />
                        <strong>Warning!</strong> Something will go wrong soonly...
                        </div>
                        <div className="alert information">
                        <span className="icon" />
                        <strong>Did you know that</strong> this template is very cool?
                        </div>
                        <div className="alert note">
                        <span className="icon" />
                        <strong>Please note:</strong> There is something important you might not know.
                        </div>
                        <div className="alert note bottom closeEverywhere">
                        <span className="icon" />
                        … and at the bottom :-
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid_6">
                    <div className="box">
                    <div className="header">
                        <h2>Sticky Alert Boxes (No Margin)</h2>
                    </div>
                    <div className="content">
                        <div className="alert error sticky no-margin">
                        <span className="icon" />
                        <strong>Error!</strong> Something went wrong here!
                        </div>
                        <div className="alert success sticky no-margin">
                        <span className="icon" />
                        <strong>Success!</strong> Now it's working :)
                        </div>
                        <div className="alert warning sticky no-margin">
                        <span className="icon" />
                        <strong>Warning!</strong> Something will go wrong soonly...
                        </div>
                        <div className="alert information sticky no-margin">
                        <span className="icon" />
                        <strong>Did you know that</strong> this template is very cool?
                        </div>
                        <div className="alert note sticky no-margin">
                        <span className="icon" />
                        <strong>Please note:</strong> There is something important you might not know.
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    )
}
