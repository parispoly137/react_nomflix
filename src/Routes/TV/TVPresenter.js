import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  <>
    <Helmet>
      <title>TV shows | Nomflix</title>
    </Helmet>
    {loading ? <Loader /> : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              >
              </Poster>
            ))}
          </Section>
        )}
        { popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              >
              </Poster>
            ))}
          </Section>
        )}
        { airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              >
              </Poster>
            ))}
          </Section>
        )}
        { error && <Message text={error} color="#e74c3c" />}
      </Container >
    )};
  </>;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;