import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SampleButton from './SampleButton';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SampleButton> = {
  title: 'Components/SampleButton',
  component: SampleButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    children: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof SampleButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'primary-button',
    children: 'Button Inner Text',
  },
};

export const Secondary: Story = {
  args: {
    label: 'secondary-button',
    children: 'Button Inner Text',
  },
};