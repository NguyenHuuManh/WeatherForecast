import React from 'react';
import { Field, FastField } from 'formik';

interface Props {
    name: any;
    form?: any;
    component?: any;
}
export default (props: Props) => {
    const { memo, name, component, ...remainProps } = props;

    if (memo) {
        return <FastField name={name} component={component} {...remainProps} />;
    }
    return <Field name={name} component={component} {...remainProps} />;
};
