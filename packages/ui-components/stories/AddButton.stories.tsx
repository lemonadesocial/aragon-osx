import React from 'react';
import {Meta, Story} from '@storybook/react';
import {AddButton, ButtonProps} from '../src';

export default {
  title: 'Components/AddButton',
  component: AddButton,
} as Meta;

const Template: Story<ButtonProps> = args => <AddButton {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {
  label: 'Add Button',
  onClick: () => {
    console.log('hi');
  },
};
