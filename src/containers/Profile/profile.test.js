import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ProfileComponent } from './profile.container';

library.add(fas);

const props = {
  webId: 'https://exmaple.com/#me',
  image: 'test.png',
  updatePhoto: 'updated.png',
  name: 'example'
};

describe.only('Profile', () => {
  afterAll(cleanup);
  const { container, getByTestId } = render(
    <Router>
      <ProfileComponent {...{ ...props }} />
    </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  test('renders with styled components', () => {
    expect(getByTestId('profile-wrapper')).toBeTruthy();
    expect(getByTestId('profile-logo')).toBeTruthy();
    expect(getByTestId('profile-profile')).toBeTruthy();
    expect(getByTestId('profile-detail')).toBeTruthy();
    expect(document.querySelector('.card')).toBeTruthy();
  });
});
