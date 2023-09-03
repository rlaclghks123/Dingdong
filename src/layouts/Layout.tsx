import { Children, Suspense } from 'react';
import { Wrapper, LayoutBox, Header, Main } from './Layout.styles';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { useQueryErrorResetBoundary } from 'react-query';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children: childrenProp }: LayoutProps) => {
  const [header, ...children] = Children.toArray(childrenProp);
  const { reset } = useQueryErrorResetBoundary();
  return (
    <Suspense fallback={<LoadingPage />}>
      <ErrorBoundary fallback={<ErrorPage />} onReset={reset}>
        <div css={Wrapper}>
          <div css={LayoutBox}>
            <header css={Header}>{header}</header>
            <main css={Main}>{children}</main>
          </div>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};
export default Layout;
