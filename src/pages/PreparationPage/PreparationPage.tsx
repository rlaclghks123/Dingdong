import { css } from '@emotion/react';
import Header from '../../components/header/MainHeader/MainHeader';
import Nav from '../../components/nav/Nav';
import Layout from '../../layouts/Layout';

const PreparationPage = () => {
  return (
    <Layout>
      <Header />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 80vh;
        `}
      >
        <p>준비중인 페이지 입니다. </p>
      </div>
      <Nav />
    </Layout>
  );
};
export default PreparationPage;
