import React from 'react';
import { Container } from '@material-ui/core';
import Loader from '../common/Loader/Loader';

type IProps = {
  children?: React.ReactNode
}

const EmptyLayout = (props: IProps) => {

  return (
    <>
      <main>
        <Loader />
        <Container fixed style={{ minHeight: '100vh' }}>
          <>
            {props.children}
          </>
        </Container>
      </main>
    </>
  );
}

export default EmptyLayout;