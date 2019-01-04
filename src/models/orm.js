import { ORM } from 'redux-orm';
import { Show, Season, Episode } from './models';


const orm = new ORM();

orm.register(Show,Season,Episode);

export default orm;

