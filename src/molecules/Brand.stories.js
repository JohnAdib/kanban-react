import React from 'react';

import Brand from './Brand';

export default {
  title: 'Molcules/Brand',
  component: Brand,
};

const Template = (args) => <Brand {...args}>{args.title}</Brand>;

export const MrAdib = Template.bind({});
MrAdib.args = {
  link: "https://MrAdib.com",
  title: "MrAdib",
};

export const Kanban = Template.bind({});
Kanban.args = {
  link: "https://MrAdib.com",
  title: "Kanban",
};
