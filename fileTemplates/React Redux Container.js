import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {}
}

class ${NAME}
    extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               ${NAME} has successfully been created.
           </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(${NAME});
