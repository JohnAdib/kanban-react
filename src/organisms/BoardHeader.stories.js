import React from 'react';

import BoardHeader from './BoardHeader';

export default {
  title: 'Organisms/BoardHeader',
  component: BoardHeader,
};

const Template = (args) => <BoardHeader {...args}>{args.title}</BoardHeader>;

export const Simple = Template.bind({});
Simple.args = {
  data:{
    title: "MrAdib",
    userName: "MrAdib",
    userAvatar: "./img/avatar.jpg",
    brandLink: "https://MrAdib.com",
  }
};
