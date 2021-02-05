import React from 'react';
import { ContextMenuExample } from './ContextMenuExample';

export default {
  title: 'Example/ContextMenuExample',
  component: ContextMenuExample,
};

const Template = (args) => <ContextMenuExample {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  
};