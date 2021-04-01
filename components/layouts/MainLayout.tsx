import React, { ReactNode } from 'react';
import { Container } from '@material-ui/core';
import Footer from '../common/Footer/Footer';
import Loader from '../common/Loader/Loader';
import Navbar from '../common/Navbar/Navbar';

type IProps = {
  children?: ReactNode
}

const MainLayout = (props: IProps) => {

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <>
          <Container fixed style={{ minHeight: '100vh' }}>
            <>
              {props.children}
            </>
          </Container>
        </>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;