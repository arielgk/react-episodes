import {
  Model, many, attr
} from 'redux-orm'

export class Show extends Model {

}

Show.modelName = 'Show'
Show.fields = {
  id: attr(),
  title: attr(),
  description: attr(),
  short_description: attr(),

  seasons: many('Season')

}

export class Season extends Model {

}

Season.modelName = 'Season'

Season.fields = {
  id: attr(),
  episodes: many('Episode')

}

export class Episode extends Model {

}

Episode.modelName = 'Episode'
Episode.fields = {
  id: attr(),
  title: attr(),
  duration: attr()
}
