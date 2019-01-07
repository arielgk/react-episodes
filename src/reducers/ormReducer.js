import orm from '../models/orm';
import * as actionTypes from '../actions/actionTypes';



function ormReducer(state, action) {
    const session = orm.session(state);


    const { Show, Season, Episode } = session;
    switch (action.type) {
        case actionTypes.CREATE_SHOW_SUCCESS:
            Show.create(action.payload.res[0]);
            break;

        case actionTypes.GET_SHOW_SUCCESS:
        console.log(action.payload.res.show);
            Show.create(action.payload.res.show)
            action.payload.res.seasons.map((i) => {
                const season = Season.create(i);
                Show.withId(action.payload.res.show.id).seasons.add(season);
            })
            action.payload.res.episodes.map((i) => {
                const episode = Episode.create(i);
                Season.withId(i.season_id).episodes.add(episode);
            })
            break;

    }
    return session.state;


}
export default ormReducer
