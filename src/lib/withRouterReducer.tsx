import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

interface IProps {
  dispatch: Dispatch;
}
const withRouterReducerComponent = (WrappedComponent: React.ComponentClass<any, any>) => class extends React.Component<IProps, {}> {
  public componentDidMount = () => this.props.dispatch(push(window.location.pathname + window.location.search));
  public render = () => <WrappedComponent {...this.props} />;
}

function mapDispatchToProps(dispatch: Dispatch): IProps {
  return { dispatch };
}

export const withRouterReducer = compose(
  connect<{}, IProps>(null, mapDispatchToProps),
  withRouterReducerComponent,
);

