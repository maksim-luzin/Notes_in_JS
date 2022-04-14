/* eslint-disable max-len */
import { Category } from './category';
import { Status } from './status';

const SeedNotes = [
  {
    id: '1',
    category: Category.Task.name,
    name: 'Shopping list',
    content: 'I need buy tomatoes, bread, chili, potatoes at 5/6/2022',
    created: new Date(),
    status: Status.Active
  },
  {
    id: '2',
    category: Category.RandomThought.name,
    name: 'The theory of evolution',
    content: 'During the earliest evolution on earth, life probably resembled one big genetic jumble. At some time, presumably around 3.8 to 3.5 billion years before today, the very first biological species appeared – the ancestor of all life forms that developed via Darwinian evolution. Researchers at the Max Planck Institute for Dynamics and Self-Organization in Göttingen and at Cornell University in the USA have now conceived and modelled a possible scenario by which the first defined species could have emerged from this genetic mix. The researchers proposed that before the dawn of Darwinian evolution, life fluctuated back and forth between a genetically highly mixed and a partially unmixed state. Over time, the less mixed state exhibiting a more clearly defined genetic profile became increasingly stable and eventually generated the very first species.',
    created: new Date(),
    status: Status.Active
  },
  {
    id: '3',
    category: Category.Idea.name,
    name: 'Google new feature',
    content: 'Last year Google introduced a new feature that uses Augmented Reality (AR) for their users to view certain animals in 3D which means that this feature is not only restricted to your phone but you can also view an animal right in your surroundings. Isn’t it exciting? Let us learn how we can entertain ourselves with this.',
    created: new Date(),
    status: Status.Active
  },
  {
    id: '4',
    category: Category.Quote.name,
    name: 'William Grades',
    content: 'How some of the writers I come across get through their books without dying of boredom is beyond me.',
    created: new Date(),
    status: Status.Active
  },
  {
    id: '5',
    category: Category.Task.name,
    name: 'Books',
    content: 'On the navigation bar, click Tasks.Click a task to view it in the Reading Pane, or double- click it to open it in a new window.Another way to see tasks, including flagged to -do items, is the Tasks peek.Point to Tasks on the Navigation Bar.The Tasks peek pops up.',
    created: new Date(),
    status: Status.Active
  }
];

export { SeedNotes };