import Footer from "./Footer";
import Content from "./Content";
import Sidebar from './Sidebar'
import Header from "./Header";
import Main from './Main'
import Basic, {BasicProps} from './Basic'
import React from "react";

interface InterfaceLayout {
    Main:typeof Main,
    Content:typeof Content,
    Sidebar:typeof Sidebar,
    Header:typeof Header,
    Footer:typeof Footer,
}
// const Layout:InterfaceLayout = {
//     Main,
//     Content,
//     Sidebar,
//     Header,
//     Footer
// }

interface LayoutType extends React.FC<BasicProps> {
    Header: typeof Header;
    Footer: typeof Footer;
    Content: typeof Content;
    Main: typeof Main;
    Sidebar: typeof Sidebar;
}

const Layout = Basic as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sidebar = Sidebar;
Layout.Main = Main;

export {Layout}
