import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,   
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' },
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        size: 'h1',
        label: 'Basic label',
    }
};

export const AllCaps: Story = {
    args: {
        size: 'h1',
        label: 'All caps label',
        allCaps: true,
    }
};

export const Secondary: Story = {
    args: {
        size: 'h1',
        label: 'Secondary label',
        color: 'text-tertiary',
    }
};

export const CustomColor: Story = {
    args: {
        size: 'h1',
        label: 'Custom color label',
        fontColor: 'red',
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        size: 'h1',
        label: 'Custom background color',
        fontColor: 'white',
        backgroundColor: 'black',
    }
};