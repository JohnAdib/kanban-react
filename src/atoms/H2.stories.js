import React from 'react';

import H2 from './H2';

export default {
  title: 'Atoms/H2',
  component: H2,
};

const Template = (args) => <H2 {...args} >{args.title}</H2>;

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