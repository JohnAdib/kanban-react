import React from 'react';

import KanbanBoard from './KanbanBoard';

export default {
  title: 'Pages/KanbanBoard',
  component: KanbanBoard,
};

const Template = (args) => <KanbanBoard {...args}></KanbanBoard>;

export const Kanban = Template.bind({});
