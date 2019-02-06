import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StorageIcon from '@material-ui/icons/Storage';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>{ this.props.children }</div>;
    }
}
