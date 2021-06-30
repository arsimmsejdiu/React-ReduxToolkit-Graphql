import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const AnimeItemContainer = styled.div`
  width: 14em;
  height: 24em;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 4px 10px 50px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 10px 50px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 10px 50px -6px rgba(0, 0, 0, 0.75);
    transform: scale(1.03);
  }
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;
  margin: 2rem;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  font-size: 15px;
  color: #000;
  font-weight: 500;
  margin-top: -20px;
  text-align: center;
`;

const Loading = styled.div`
  font-size: 5em;
`;

const SubTitle = styled.h5`
  margin-top: 5px;
  text-align: center;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return <Loading>Loading ... ... </Loading>;

  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItemContainer key={anime?.id}>
            <AnimeCover>
              <img
                src={anime?.coverImage?.extraLarge || ""}
                alt={anime?.title?.english || ""}
              />
            </AnimeCover>
            <AnimeTitle>
              {anime?.title?.english}
              <SubTitle>Average Score: {anime?.averageScore}</SubTitle>
              <SubTitle>Episodes: {anime?.episodes}</SubTitle>
            </AnimeTitle>
          </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  );
}
