import React from 'react';

const withValidation = (WrappedComponent, validator) => {
    return class extends React.Component {
        render() {
            const { forwardedRef, ...rest } = this.props;
            return <WrappedComponent {...rest} validate={validator} ref={forwardedRef} />;
        }
    };
};

export default withValidation;