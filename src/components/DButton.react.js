import React, {PropTypes} from 'react';
import {Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const DButton = (props) => {
    const text = props.text;
    return (
        <Button onClick={() => props.fireEvent({event: 'click'})}>
            {text}
        </Button>
    )
};
DButton.propTypes = {
    'text': PropTypes.string,
    'id': PropTypes.string,
    'children': PropTypes.node,
    'fireEvent': PropTypes.func,
    'dashEvents': PropTypes.oneOf(['click'])
};
export default DButton;