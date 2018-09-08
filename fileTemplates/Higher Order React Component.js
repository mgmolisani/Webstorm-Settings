import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ${NAME} = WrappedComponent => {
    return class extends Component {
        
        static propTypes = {};

        static defaultProps = {};

        constructor(props) {
            super(props);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default ${NAME};