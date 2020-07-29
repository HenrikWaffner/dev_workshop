// src/app/components/task.stories.ts
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { InvButton } from './inv_button.component';
import markdown from './inv_button.docu.md';

export default {
  title: 'Inv Button',
  component: InvButton,
  decorators: [withKnobs]
};

export const Standard = () => ({
  component: InvButton,
  props: {
    title:  text('text', 'Hello Storybook'),
    onClick: action('Button was Clicked!')
  }
});
Standard.story = {
  parameters: {
    notes: { markdown },
  }
};