import Footer from "./Footer";
import Content from "./Content";
import Sidebar from './Sidebar'
import Header from "./Header";
import Main from './Main'
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

interface LayoutType extends React.FC {
    Header: typeof Header;
    Footer: typeof Footer;
    Content: typeof Content;
    Sidebar: typeof Sidebar;
}

const Layout = Main as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sidebar = Sidebar;

export {Layout}