import { Children } from 'react';
import { Wrapper, LayoutBox, Header, Main } from './Layout.styles';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children: childrenProp }: LayoutProps) => {
  const [header, ...children] = Children.toArray(childrenProp);
  return (
    <div css={Wrapper}>
      <div css={LayoutBox}>
        <header css={Header}>{header}</header>
        <main css={Main}>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
