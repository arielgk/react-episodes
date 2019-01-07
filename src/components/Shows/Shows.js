import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as showActions from '../../actions/showActions';

import Show from './Show';



const Shows = ({ show_id, shows, actions }) => {

    console.log(shows);
    return (
        <div>
            <div>
                <button type="button" onClick={() => {
                    actions.createShow();
                }}>Create</button>

                <button type="button" onClick={() => {
                    actions.getShow(show_id);
                }}>GET</button>
            </div>

            <div>
                shows
                {
                    shows.items.map((i) => {
                        return (
                            <Show show={shows.itemsById[i]} key={"show-id-" + i} />

                        )
                    })
                }
            </div>
        </div>

    )
}

// proptypes
//

const mapStateToProps = (state, ownProps) => {
    return {
        show_id: ownProps.id,
        shows: state.ormReducer.Show.items ? state.ormReducer.Show : [],

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...showActions }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows)