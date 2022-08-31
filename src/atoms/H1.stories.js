import React from 'react';

import H1 from './H1';

export default {
  title: 'Atoms/H1',
  component: H1,
};

const Template = (args) => <H1 {...args} >{args.title}</H1>;

export const Heading = Template.bind({});
Heading.args = {
  className: "bg-red-500",
  title: "Heading",
};

export const Hello = Template.bind({});
Hello.args = {
  className: "bg-blue-500",
  title: "Hello",
};