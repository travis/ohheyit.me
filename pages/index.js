import { Circle } from 'react-shapes';
import { LiveUpdate, AuthButton, Value, List, useLDflexValue, useLDflexList } from '@solid/react';
import data from '@solid/query-ldflex';
import styled from 'styled-components'

import { Form, Text, TextArea } from 'informed';

export default () => {
  const profile = useLDflexValue("user")

  return (
    <div>
      <h1>
        oh hey, it <a href={profile}><Value src="user.name"/></a>
      </h1>
      <nav>
        <AuthButton popup="static/popup.html" login="Login here!" logout="Log me out"/>
      </nav>
    </div>
  )
}
