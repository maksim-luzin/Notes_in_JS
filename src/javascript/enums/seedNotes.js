/* eslint-disable max-len */
import { Category } from './category';
import { Status } from './status';

const SeedNotes = [
  {
    id: '6747563',
    category: Category.Task.name,
    name: 'Shopping list',
    content: 'I need buy tomatoes, bread, chili, potatoes at 5/12/2022',
    created: new Date(Date.parse('2022-03-19T09:21:50.417-07:00')),
    status: Status.Active
  },
  {
    id: '2140607',
    category: Category.RandomThought.name,
    name: 'The theory of evolution',
    content: 'During the earliest evolution on earth, life probably resembled one big genetic jumble. At some time, presumably around 3.8 to 3.5 billion years before today, the very first biological species appeared – the ancestor of all life forms that developed via Darwinian evolution. Researchers at the Max Planck Institute for Dynamics and Self-Organization in Göttingen and at Cornell University in the USA have now conceived and modelled a possible scenario by which the first defined species could have emerged from this genetic mix. The researchers proposed that before the dawn of Darwinian evolution, life fluctuated back and forth between a genetically highly mixed and a partially unmixed state. Over time, the less mixed state exhibiting a more clearly defined genetic profile became increasingly stable and eventually generated the very first species.',
    created: new Date(Date.parse('2022-02-28T22:11:50.417-07:00')),
    status: Status.Active
  },
  {
    id: '4176460',
    category: Category.Idea.name,
    name: 'Google new feature',
    content: 'Last year Google introduced a new feature that uses Augmented Reality (AR) for their users to view certain animals in 3D which means that this feature is not only restricted to your phone but you can also view an animal right in your surroundings. Isn’t it exciting? Let us learn how we can entertain ourselves with this.',
    created: new Date(Date.parse('2022-02-16T19:49:50.417-07:00')),
    status: Status.Active
  },
  {
    id: '48542132',
    category: Category.Quote.name,
    name: 'William Grades',
    content: 'How some of the writers I come across get through their books without dying of boredom is beyond me.',
    created: new Date(Date.parse('2022-02-09T20:16:50.417-07:00')),
    status: Status.Active
  },
  {
    id: '4018448',
    category: Category.Task.name,
    name: 'Books',
    content: 'On the navigation bar, click Tasks.Click a task to view it in the Reading Pane, or double- click it to open it in a new window.Another way to see tasks, including flagged to -do items, is the Tasks peek.Point to Tasks on the Navigation Bar.The Tasks peek pops up.',
    created: new Date(Date.parse('2022-01-22T10:21:50.417-07:00')),
    status: Status.Active
  },
  {
    id: '8441403',
    category: Category.Task.name,
    name: 'Dentist',
    content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021” the dates column is “3/5/2021, 5/5/2021',
    created: new Date(Date.parse('2022-01-11T15:46:50.417-07:00')),
    status: Status.Active
  },
  {
    id: '1907939',
    category: Category.RandomThought.name,
    name: 'Art',
    content:
      'Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas. There is no generally agreed definition of what constitutes art, and its interpretation has varied greatly throughout history and across cultures. The three classical branches of visual art are painting, sculpture, and architecture. Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts. Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences. In modern usage after the 17th century, where aesthetic considerations are paramount, the fine arts are separated and distinguished from acquired skills in general, such as the decorative or applied arts. The nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics. The resulting artworks are studied in the professional fields of art criticism and the history of art.',
    created: new Date(Date.parse('2022-01-03T10:45:50.417-07:00')),
    status: Status.Active
  }
];

export { SeedNotes };