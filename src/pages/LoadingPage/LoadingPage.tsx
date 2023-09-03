import { css, keyframes } from '@emotion/react';
import Layout from '../../layouts/Layout';
import Header from '../../components/header/MainHeader/MainHeader';
import Nav from '../../components/nav/Nav';

const spinEffect = keyframes`
  from {transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

const Spinner = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  animation: ${spinEffect} 1.5s linear infinite;
`;

const LoadingPage = () => {
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
            align-items: center;
            justify-content: center;
            gap: 10px;
          `}
        >
          <p>로딩중</p>
          <p css={Spinner}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          </p>
        </div>
      </div>
      <Nav />
    </Layout>
  );
};

export default LoadingPage;
