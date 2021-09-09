import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  //get series and films
  const { series } = useContent('series');
  const { films } = useContent('films');

  //console.log(series);
  //console.log(films);

  //sliding option also
  const slides = selectionFilter({ series, films });
  //console.log(slides);
  //pass it to here browse container clean and simple
  return <BrowseContainer slides={slides} />;
}
