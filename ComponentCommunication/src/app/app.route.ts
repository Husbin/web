import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';

export const AppRoute = [
  {path: '' , redirectTo: 'parent' , pathMatch: 'full'},
  {path: 'parent' , component: ParentComponent},
  {path: 'parent/child' , component: ChildComponent},
];
