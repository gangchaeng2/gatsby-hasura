import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

type Props = { component: FunctionComponent } & RouteComponentProps;

const BasicRoute: FunctionComponent<Props> = ({ component: Component, ...rest }) => {
  return (
    <Component {...rest} />
  )
};

export default BasicRoute;
