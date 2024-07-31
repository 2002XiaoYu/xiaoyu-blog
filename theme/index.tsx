import Theme from 'rspress/theme';
import React from 'react';

const CenteredContent: React.FC = () => {
  const divStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: '#ffffff', // 白色
  };

  const pStyle: React.CSSProperties = {
    margin: 0, // 去掉默认的p标签边距
  };

  const aStyle: React.CSSProperties = {
    textDecoration: 'none', // 去掉链接下划线
    color: 'inherit', // 继承父元素的文字颜色
  };

  return (
    <div style={divStyle}>
      <p style={pStyle}>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" style={aStyle}>
          闽ICP备2023017999号-1
        </a>
      </p>
    </div>
  );
};


// 以下展示所有的 Props
const Layout = () => (
  <Theme.Layout
    /* 整个页面最底部 */
    bottom={<CenteredContent/>}
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';