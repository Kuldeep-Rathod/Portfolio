import React from "react";
function Pre(props) {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
    // return <></>
}

export default Pre;
