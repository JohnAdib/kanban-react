import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'Molcules/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} ></Avatar>;

export const Sample = Template.bind({});
Sample.args = {
  src: "../img/avatar.jpg",
  alt: "MrAdib",
};
