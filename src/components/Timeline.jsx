import React from "react";
import timeline from "../data/timeline";
import Timelineitem from "./Timelineitem";


function Timeline() {
    return(
            <div className="flex flex-col md:flex-row items-center justify-center my-20 ">
                    <div className="w-full md:7/12">
                    {timeline.map(item =>( 
                        <Timelineitem 
                        year = {item.year}
                        title = {item.title}
                        duration = {item.duration}
                        details = {item.details}
                        />
                    ))}
                    </div>

            </div> 
        )
}

export default Timeline;