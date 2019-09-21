import React from 'react'

import { LiveUpdate } from '@solid/react'

import { ProfileComponent } from './profile.container.tsx';

export default () => (
  <LiveUpdate>
    <ProfileComponent/>
  </LiveUpdate>
);
