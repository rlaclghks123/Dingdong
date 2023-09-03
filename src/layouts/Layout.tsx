import { Children, Suspense } from 'react';
import { Wrapper, LayoutBox, Header, Main } from './Layout.styles';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children: childrenProp }: LayoutProps) => {
  const [header, ...children] = Children.toArray(childrenProp);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div css={Wrapper}>
        <div css={LayoutBox}>
          <header css={Header}>{header}</header>
          <main css={Main}>{children}</main>
        </div>
      </div>
    </Suspense>
  );
};
export default Layout;
