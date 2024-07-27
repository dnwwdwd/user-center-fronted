import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const defaultMessage = 'Java 雪荷';
const currentYear = new Date().getFullYear();
const Footer: React.FC = () => {
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'C1own',
          title: <GithubOutlined />,
          href: 'https://github.com/dnwwdwd',
          blankTarget: true,
        },
        {
          key: '雪荷',
          title: '雪荷',
          href: 'https://blog.hejiajun.icu/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
