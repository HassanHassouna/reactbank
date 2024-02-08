import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import './Navbar.css';
import { INavbar } from '../../types/types';
import { NavbarItems } from '../../constants/index';
import { Balance } from '../Balance/Balance';
import { Layout, Menu, theme } from 'antd';
import { useBalance } from '../../api/transactions/getBalance';

const { Header, Content } = Layout;
export const Navbar: React.FC<INavbar> = ({ currentComponent, setCurrent }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const { data } = useBalance();
  const { balance } = data || { balance: 0 };
  return <Layout>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['trans']}
        onClick={onClick}
        items={NavbarItems}
        style={{ flex: 1, minWidth: 0 }}
      />
      <Balance balance={balance} />
    </Header>
    <Layout>
      <Content>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          {currentComponent}
        </div>
      </Content>
    </Layout>
  </Layout>;

};


