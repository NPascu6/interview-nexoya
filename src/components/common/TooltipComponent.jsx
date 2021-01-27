import React from 'react'
import { Tooltip } from "react-bootstrap";

const TooltipOverlayComponent = (typeName) => {
    return (
        <Tooltip id={`${typeName}_tooltip`}></Tooltip>
    )
}

export default TooltipOverlayComponent
