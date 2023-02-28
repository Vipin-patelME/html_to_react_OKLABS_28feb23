import React from 'react'

export default function Statics() {
    return (
        <>
            <section id="content" className="container_12 clearfix" data-sort="true">
                <h1 className="grid_12">Simple Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats">
                    <div className="stat simple" data-value={16525} data-title="Visits" data-format="+0,0" />
                    </div>
                    <div className="full-stats">
                    <a href="javascript:void(0);" className="stat simple" data-value={17} data-title="Users" data-format="-0,0" /> {/* clickable! */}
                    </div>
                    <div className="full-stats">
                    <div className="stat simple" data-value={0} data-title="Orders" data-format={0} />
                    </div>
                </div>{/* End of .grid_12 */}
                <div className="grid_12 center-elements">
                    <div className="full-stats">
                    <div className="stat hlist" data-list="[{&quot;val&quot;:17621,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;already paid&quot;,&quot;color&quot;:&quot;green&quot;},{&quot;val&quot;:1125,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;not paid yet&quot;,&quot;color&quot;:&quot;red&quot;},{&quot;val&quot;:18746,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;total taxes&quot;}]" />
                    </div>
                </div>{/* End of .grid_12 */}
                {/* IE8 hates canvas */}
                <div className="grid_12 center-elements">
                    <div className="full-stats">
                    <div className="stat minichart" data-total={16525} data-values="[4,6,7,7,4,3,2,1,4]" data-title="Visits" data-format="+0,0;-0,0" data-change={22} />
                    </div>
                    <div className="full-stats">
                    <div className="stat minichart" data-total={-17} data-values="[2,5,8,7,3,6,4,2,1]" data-title="Users" data-format="+0,0;-0,0" data-change={-6} />
                    </div>
                    <div className="full-stats">
                    <div className="stat minichart" data-total={0} data-values="[0,0,0,1,2,1,-2,-2,-1]" data-title="Orders" data-change={0} />
                    </div>
                </div>{/* End of .grid_12 */}
                <h1 className="grid_12">Circular Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats">
                    <h2 className="center">Activity (Visitors/Clicks)</h2>
                    <div className="stat circular" data-valueformat="0,0" data-list="[{&quot;title&quot;:&quot;Visitors&quot;,&quot;val&quot;:5710,&quot;percent&quot;:72},{&quot;title&quot;:&quot;Clicks&quot;,&quot;val&quot;:-16362,&quot;percent&quot;:-9}]" />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Activity (Orders)</h2>
                    <div className="stat circular" data-valueformat="0,0" data-list="[{&quot;title&quot;:&quot;Orders&quot;,&quot;val&quot;:-14,&quot;percent&quot;:-17},{&quot;title&quot;:&quot;Income&quot;,&quot;val&quot;:-2611,&quot;percent&quot;:-21}]" />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Activity (Users)</h2>
                    <div className="stat circular" data-valueformat={0} data-list="[{&quot;title&quot;:&quot;Users&quot;,&quot;val&quot;:0,&quot;percent&quot;:0},{&quot;title&quot;:&quot;Support Requests&quot;,&quot;val&quot;:0,&quot;percent&quot;:0}]" />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Registrations</h2>
                    <div className="stat circular" data-format={0} data-max={400} data-list="[{&quot;title&quot;:&quot;Yesterday&quot;,&quot;val&quot;:181},{&quot;title&quot;:&quot;Today&quot;,&quot;val&quot;:125}]" />
                    </div>
                </div>{/* End of .grid_12 */}
                <h1 className="grid_12">List Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats">
                    <h2 className="center">With Links</h2>
                    <div className="stat list" data-list="[{&quot;val&quot;:621,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Users&quot;,&quot;type&quot;:&quot;up&quot;,&quot;link&quot;:&quot;javascript:void(0);&quot;},{&quot;val&quot;:-2367,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;Money&quot;,&quot;type&quot;:&quot;down&quot;,&quot;link&quot;:&quot;javascript:void(0);&quot;},{&quot;val&quot;:10000,&quot;format&quot;:&quot;$0,0&quot;,&quot;title&quot;:&quot;Budget&quot;,&quot;link&quot;:&quot;javascript:void(0);&quot;}]" />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Without Links #1</h2>
                    <div className="stat list" data-list="[{&quot;val&quot;:621,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Users&quot;,&quot;type&quot;:&quot;up&quot;},{&quot;val&quot;:210,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Orders&quot;,&quot;type&quot;:&quot;up&quot;},{&quot;val&quot;:72,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Bugs&quot;,&quot;type&quot;:&quot;down&quot;}]" />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Without Links #2</h2>
                    <div className="stat list" data-list="[{&quot;val&quot;:26,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Numbers&quot;},{&quot;val&quot;:62,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Emails&quot;},{&quot;val&quot;:42,&quot;format&quot;:&quot;+-&quot;,&quot;title&quot;:&quot;Calls&quot;}]" />
                    </div>
                </div>{/* End of .grid_12 */}
                <h1 className="grid_12">Uptime Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats">
                    <h2 className="center">Uptime #1</h2>
                    <div className="stat uptime" data-servers="[{&quot;name&quot;:&quot;Server #1&quot;,&quot;online&quot;:true,&quot;lastDowntime&quot;:&quot;42d&quot;,&quot;response&quot;:&quot;361ms&quot;},{&quot;name&quot;:&quot;Server #2&quot;,&quot;online&quot;:false,&quot;lastDowntime&quot;:&quot;10h 53m&quot;}]" />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Uptime #2</h2>
                    <div className="stat uptime" data-servers="[{&quot;name&quot;:&quot;Server #1&quot;,&quot;online&quot;:true,&quot;lastDowntime&quot;:&quot;393d&quot;,&quot;response&quot;:&quot;64ms&quot;}]" />
                    </div>
                </div>{/* End of .grid_12 */}
                <h1 className="grid_12">Load Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats equalHeight">
                    <h2 className="center">Server Load</h2>
                    <div className="stat load" data-value={37} />
                    </div>
                    <div className="full-stats">
                    <h2 className="center">Budget</h2>
                    <div className="stat load" data-min={0} data-max={10000} data-format="$0,0" data-value={9268} />
                    </div>
                </div>{/* End of .grid_12 */}
                <h1 className="grid_12">Level Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats equalHeight">
                    <h2 className="center">Budget (Current Month)</h2>
                    <div className="stat level" data-value={4000} data-max={10000} data-format="$0,0" data-description="spend this month" />
                    </div>
                    <div className="full-stats equalHeight">
                    <h2 className="center">Budget (Last Month)</h2>
                    <div className="stat level" data-value={9000} data-max={10000} data-format="$0,0" data-description="spend last month" />
                    </div>
                </div>{/* End of .grid_12 */}
                <h1 className="grid_12">Pillar Statistics</h1>
                <div className="grid_12 center-elements">
                    <div className="full-stats equalHeight">
                    <h2 className="center">Support Requests</h2>
                    <div className="stat pillar" data-data="[{&quot;val&quot;:9,&quot;color&quot;:&quot;red&quot;,&quot;title&quot;:&quot;unread&quot;},{&quot;val&quot;:19,&quot;color&quot;:&quot;yellow&quot;,&quot;title&quot;:&quot;active&quot;},{&quot;val&quot;:15,&quot;color&quot;:&quot;green&quot;,&quot;title&quot;:&quot;closed&quot;}]" data-format={0} />
                    </div>
                    <div className="full-stats equalHeight">
                    <h2 className="center">Orders</h2>
                    <div className="stat pillar" data-data="[{&quot;val&quot;:3,&quot;color&quot;:&quot;red&quot;,&quot;title&quot;:&quot;Failed&quot;},{&quot;val&quot;:2,&quot;color&quot;:&quot;yellow&quot;,&quot;title&quot;:&quot;Paused&quot;},{&quot;val&quot;:8,&quot;color&quot;:&quot;green&quot;,&quot;title&quot;:&quot;Completed&quot;}]" data-format={0} />
                    </div>
                    <div className="full-stats equalHeight">
                    <h2 className="center">Log</h2>
                    <div className="stat pillar" data-data="[{&quot;val&quot;:1020,&quot;color&quot;:&quot;red&quot;,&quot;title&quot;:&quot;Errors&quot;},{&quot;val&quot;:3001,&quot;color&quot;:&quot;green&quot;,&quot;title&quot;:&quot;Success&quot;}]" data-format="$0" />
                    </div>
                </div>{/* End of .grid_12 */}
                </section>

        </>
    )
}
