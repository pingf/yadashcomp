import React, {PropTypes} from 'react';
import {Button, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import omit from 'lodash/omit'

const DButton = (props) => {
    const vistext = props.vistext;
    const hidtext = props.hidtext;
    let visicon = props.visicon;
    let hidicon = props.hidicon;
    const animated = props.animated;
    const icon = props.icon;
    const fireEvent = props.fireEvent;
    const dashEvents = props.dashEvents;
    const emtext = props.emtext;
    let emicon = props.emicon;
    props = omit(props, ["hidtext", "vistext", "hidicon", "visicon","icon", "fireEvent", "dashEvents", "emicon", "emtext"])
    if(icon) {
        props['icon'] = 'fa fa-' + icon;
    }
    if(emicon) {
        emicon = 'fa fa-' + emicon;
    }
    if(visicon) {
        visicon = 'fa fa-' + visicon;
    }
    if(hidicon) {
        hidicon = 'fa fa-' + hidicon;
    }
    if (animated && hidtext && vistext){
        return (
            <Button onClick={() => fireEvent({event: 'click'})} {...props}>
                <Button.Content visible>{visicon? <Icon name={visicon} />:''}{vistext}</Button.Content>
                <Button.Content hidden>{hidicon? <Icon name={hidicon} />:''}{hidtext}</Button.Content>
            </Button>
        )
    }
    if (emicon) {
        return (
            <Button onClick={() => fireEvent({event: 'click'})} {...props}>
                <Icon name={emicon} /> {emtext}
            </Button>
        )

    }
    return (
        <Button onClick={() => fireEvent({event: 'click'})} {...props} />
    )
};
DButton.propTypes = {
    'content': PropTypes.string,
    'icon': PropTypes.string,
    'emtext': PropTypes.string,
    'emicon': PropTypes.string,
    'animated': PropTypes.string,
    "vistext": PropTypes.string,
    "hidtext": PropTypes.string,
    "visicon": PropTypes.string,
    "hidicon": PropTypes.string,
    'label': PropTypes.string,
    'color': PropTypes.string,
    'size': PropTypes.string,
    'attached': PropTypes.string,
    'basic': PropTypes.any,
    'primary': PropTypes.any,
    'secondary': PropTypes.any,
    'inverted': PropTypes.any,
    'active': PropTypes.any,
    'disabled': PropTypes.any,
    'loading': PropTypes.any,
    'compact': PropTypes.any,
    'positive': PropTypes.any,
    'negative': PropTypes.any,
    'fluid': PropTypes.any,
    'cicular': PropTypes.any,
    'toggle': PropTypes.any,
    'labelPosition': PropTypes.object,
    'id': PropTypes.string,
    'children': PropTypes.node,
    'fireEvent': PropTypes.func,
    'dashEvents': PropTypes.oneOf(['click'])
};
export default DButton;