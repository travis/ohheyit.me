import React from 'react'

import { LiveUpdate } from '@solid/react'

import { ProfileComponent } from './profile.container';

export default () => (
  <LiveUpdate>
    <ProfileComponent/>
  </LiveUpdate>
);
