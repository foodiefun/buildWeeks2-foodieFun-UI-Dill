import './less/index.less';

import Card from './components/Card/Card';
import { gotoIndex, incIndex, decIndex } from './stateManagement/actions';
import { store$ } from './stateManagement/store';




incIndex();
incIndex();incIndex();incIndex();
decIndex();

store$.subscribe(state => {
  console.group('STATE - app.js');
  console.log(state);
  console.groupEnd();
});

gotoIndex(5);