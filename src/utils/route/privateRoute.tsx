import React, { FunctionComponent } from "react";
import { navigate } from 'gatsby';
import { RouteComponentProps } from "@reach/router";

import { getToken } from '../../utils/firebase/functions';

type Props = { component: FunctionComponent, token?: string | null } & RouteComponentProps;

const PrivateRoute: FunctionComponent<Props> = ({ component: Component, ...rest }) => {
  // if (!rest.token) {
  //   navigate('/app/login');
  // }

  return (
    <Component {...rest} />
  )
};

export default PrivateRoute;
