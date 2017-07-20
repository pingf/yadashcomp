import React, {PropTypes} from 'react';
import {Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const DIcon = (props) => {
    const name = props.name;
    const size = props.size;
    return (
        <Icon name={name} size={size} />
    )
};
DIcon.propTypes = {
    'name': PropTypes.string,
    'size': PropTypes.string,
    'link': PropTypes.string,
    'id': PropTypes.string,
    'children': PropTypes.node,
    'fireEvent': PropTypes.func,
    'dashEvents': PropTypes.oneOf(['click'])
};
export default DIcon;