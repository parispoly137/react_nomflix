import React from "react";
import Detail from "./Detail";


export default class detail extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <Detail
      result={result}
      error={error}
      loading={loading}
    />;
  }

}

