import React from 'react'
import Button from "../../components/CustomButton/CustomButton.jsx";
import { OverlayTrigger } from "react-bootstrap";
import TooltipOverlayComponent from './TooltipComponent'

const OverlayComponent = ({typeName, typeClass, handleOnClick}) => {
    return (
        <OverlayTrigger placement="top" overlay={<TooltipOverlayComponent typeName={typeName} />}>
            <Button bsStyle="info" simple type="button" bsSize="xs" onClick={handleOnClick}>
                <i className={`fa ${typeClass}`} />
            </Button>
        </OverlayTrigger>
    )
}

export default OverlayComponent
