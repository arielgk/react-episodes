import orm from '../models/orm';
import * as actionTypes from '../actions/actionTypes';



function ormReducer(dbState, action) {
    const sess = orm.session(dbState);

    // Session specific models are available
    // as properties on the Session instance.
    const { Show, Season, Episode } = sess;
    switch (action.type) {
        default:
            return sess.state;
    }

}
export default ormReducer
