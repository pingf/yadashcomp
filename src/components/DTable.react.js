import React, {PropTypes} from 'react';
import {Table, Label} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import omit from 'lodash/omit'

const DTable = (props) => {
    const data = props.data;
    const {header, body} = data;
    const table_props = omit(props, ['data']);
    return (
        <Table basic='very' {...table_props}>
            <Table.Header>
                <Table.Row>
                    {header.map(data => {
                        const rb = data.attr ? data.attr.ribbon : null;
                        const attr = data.attr ? omit(data.attr, ['ribbon']) : null;
                        if (rb) return <Table.HeaderCell {...attr} ><Label
                            ribbon>{data['value']}</Label></Table.HeaderCell>
                        return <Table.HeaderCell {...attr} >{data['value']}</Table.HeaderCell>
                    })}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {body.map(column =>
                    <Table.Row>
                        {column.map(data => <Table.HeaderCell {...data.attr}>{data['value']}</Table.HeaderCell>)}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    )
};
DTable.propTypes = {
    'data': PropTypes.object,
    'className': PropTypes.string,
    'id': PropTypes.string,
    'style': PropTypes.object,
    'children': PropTypes.node,
    'fireEvent': PropTypes.func,
    'dashEvents': PropTypes.oneOf(['click'])
};
export default DTable;