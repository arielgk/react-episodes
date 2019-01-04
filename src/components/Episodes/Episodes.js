import React from 'react';
import { connect } from 'react-redux';

// ( get Show ) || (create show and get id on load).




const Episodes = ({ show }) => {
    console.log(show);
    return (

        <div>
            {show[0].id}

        </div>
    )
}



const mapStateToProps = (state, ownProps) => {
    return {
        show: state.ormReducer.Show,
    }
}




export default connect(mapStateToProps)(Episodes)