import React from 'react';
import { Space, Typography } from 'antd';
import { Dropdown } from 'antd';
import { items } from '../../constants/index';
import { DownOutlined } from '@ant-design/icons';

export const DropDownMenu: React.FC<{ setMonth: (month: string) => void }> = ({ setMonth }) => {
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['0'],
        onSelect: ({ key }) => {
          setMonth(key);
        }
      }}
    >
      <Typography.Link>
        <Space>
          Date
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

