import Footer from './Footer'
import Content from './Content'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import Header from './Header'
import Basic, { BasicProps } from './Basic'
import React from 'react'

interface LayoutType extends React.FC<BasicProps> {
  children: React.ReactNode;
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Left: typeof Left;
  Center: typeof Center;
  Right: typeof Right;
}

const Layout = Basic as LayoutType

Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.Left = Left
Layout.Center = Center
Layout.Right = Right

export { Layout }
