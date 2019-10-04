import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BeliefComponent } from './belief.container';

library.add(fas);

const props = {
  webId: 'https://exmaple.com/#me',
  image: 'test.png',
  updatePhoto: 'updated.png',
  name: 'example'
};

describe.only('Belief', () => {
  afterAll(cleanup);
  const { container, getByTestId } = render(
    <Router>
      <BeliefComponent {...{ ...props }} />
    </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  test('renders with styled components', () => {
    expect(getByTestId('belief-wrapper')).toBeTruthy();
    expect(getByTestId('belief-logo')).toBeTruthy();
    expect(getByTestId('belief-belief')).toBeTruthy();
    expect(getByTestId('belief-detail')).toBeTruthy();
    expect(document.querySelector('.card')).toBeTruthy();
  });
});
