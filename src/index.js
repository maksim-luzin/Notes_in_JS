import { router, actionsListener } from './javascript/service';
import { addNotes } from './javascript/store';
import { SeedNotes, Events } from './javascript/enums';

import './styles/index.scss';

// Seed data
addNotes(SeedNotes);

router();

window.addEventListener(Events.HashChange, router);
document.addEventListener(Events.Click, actionsListener);
