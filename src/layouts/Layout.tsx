import { Children } from 'react';
import { Wrapper, LayoutBox, Header, Main, Nav } from './Layout.styles';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children: childrenProp }: LayoutProps) => {
  const [header, main, nav] = Children.toArray(childrenProp);
  return (
    <div css={Wrapper}>
      <div css={LayoutBox}>
        <header css={Header}>{header}</header>
        <main css={Main}>{main}</main>
        <nav css={Nav}>{nav}</nav>
      </div>
    </div>
  );
};
export default Layout;
