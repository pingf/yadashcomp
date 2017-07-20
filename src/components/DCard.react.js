import React, {PropTypes} from 'react';
import {Card, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const DCard = (props) => {
    const head = props.head;
    const meta = props.meta;
    const desc = props.desc;
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {head}
                </Card.Header>
                <Card.Meta>
                    {meta}
                </Card.Meta>
                <Card.Description>
                    {desc}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {props.children}
            </Card.Content>
        </Card>
    )
};
DCard.propTypes = {
    'head': PropTypes.string,
    'meta': PropTypes.string,
    'desc': PropTypes.string,
    'id': PropTypes.string,
    'children': PropTypes.node,
    'fireEvent': PropTypes.func,
    'dashEvents': PropTypes.oneOf(['click'])
};
export default DCard;