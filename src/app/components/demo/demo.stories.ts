import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { demo } from './demo.component';
import markdown from './demo.docu.md';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Demo',
  component: demo,
  decorators: [withKnobs]
};

export const Initial = () => ({
  component: demo,
  props: {
    title:  text('text', 'Dies ist eine Demo'),
    hidden: boolean("Hidden",false)
  }
});

Initial.story = {
  parameters: {
    notes: { markdown }
  }
};