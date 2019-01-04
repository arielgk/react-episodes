import {
    Model, many, fk, attr
} from 'redux-orm';


export class Show extends Model {

}


Show.modelName = "Show";
Show.fields = {
    id: attr(),
    title: attr(),
    seasons:many("Season","show_id"),

}



export class Season extends Model {

}

Season.modelName = "Season";

Season.fields = {
    id: attr(),
    episodes:many("Episode","season_id"),

}

export class Episode extends Model {

}

Episode.modelName = "Episode";
Episode.fields = {
    id: attr(),
    title: attr(),
    duration:attr(),
}

