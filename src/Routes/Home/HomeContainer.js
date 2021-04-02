import React from "react";
import HomePresenter from "./HomePresenter";


export default class homeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loadnig: true
  };

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return <HomePresenter
      nowPlaying={nowPlaying}
      upComing={upComing}
      popular={popular}
      error={error}
      loading={loading}
    />;
  }

}

