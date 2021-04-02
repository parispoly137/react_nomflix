import React from "react";
import DetailPresenter from "./DetailPresenter";


export default class detail extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);
    return <DetailPresenter
      result={result}
      error={error}
      loading={loading}
    />;
  }
}