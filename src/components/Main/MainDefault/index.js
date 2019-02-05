import React from 'react';
import ContentDefault from './ContentDefault';
import Sidebar from '../Sidebar';

export default class MainDefault extends React.Component {
    render() {
        return (
            <div className="main-container container">
                <div className="content-wrapper">
                    <Sidebar pageTitle={this.props.title}>
                        <p>
                            Temporary content.
                        </p>
                    </Sidebar>
                    <ContentDefault />
                </div>
            </div>
        )
    }
}