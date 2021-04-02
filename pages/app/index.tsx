import { Container } from '@material-ui/core';
import React from 'react';
import HeadTag from '../../components/common/HeadTag';
import { withUser } from '../../components/hocs/withUser';
import InAppLayout from '../../components/layouts/InAppLayout';

const AppIndexPage = () => {

    return (
        <InAppLayout>
            <HeadTag title="App Page"></HeadTag>
            <Container maxWidth="sm">
                You're in the app!
            </Container>
        </InAppLayout>
    );
}

export default withUser(AppIndexPage);