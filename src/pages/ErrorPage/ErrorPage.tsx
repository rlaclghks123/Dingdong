import { css } from '@emotion/react';
import Layout from '../../layouts/Layout';
import Header from '../../components/header/MainHeader/MainHeader';
import Nav from '../../components/nav/Nav';

const ErrorPage = () => {
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
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
          `}
        >
          <h1
            css={css`
              font-size: 30px;
              font-weight: 800;
            `}
          >
            서비스에 접속할 수 없습니다.
          </h1>
          <p>새로고침을 하거나 잠시 후 다시 접속해 주시기 바랍니다</p>
        </div>
      </div>
      <Nav />
    </Layout>
  );
};

export default ErrorPage;
