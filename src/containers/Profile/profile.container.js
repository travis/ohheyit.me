import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import data from '@solid/query-ldflex';
import { namedNode } from '@rdfjs/data-model';
import { ProfilePageContent } from './profile.component';
import { successToaster, errorToaster } from '@utils';
import { useLDflexValue, useLDflexList, LiveUpdate } from '@solid/react'

const defaultProfilePhoto = '/img/icon/empty-profile.svg';

const slugs2WebIds = {
    travis: "https://tvachon.inrupt.net/profile/card#me",
    toby: "https://tobytoberson.inrupt.net/profile/card#me"
}
const slug2WebId = (slug: string): string => slugs2WebIds[slug]

/**
 * Container component for the Profile Page, containing example of how to fetch data from a POD
 */
export const ProfileComponent = withRouter(({match: {params: {slug}}}) => {
  const webId = slug2WebId(slug) || slug;
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState(null)
  const [image, setImage] = useState(null)
  const currentUserFriends = useLDflexList("user.friends")

  const addFriend = async () =>
    await data.user.friends.add(webId)
  const deleteFriend = async () =>
    await data.user.friends.delete(webId)

  useEffect(() => {(async () => {
    const user = data[webId];
    const nameLd = await user.vcard_fn
    setName(nameLd && nameLd.value.trim().length > 0 ? nameLd.value : webId.toString())

    const imageLd = await user.vcard_hasPhoto;
    if (imageLd && imageLd.value) {
      setImage(imageLd.value)
    } else {
      setImage(defaultProfilePhoto)
    }
    setIsLoading(false)
  })()}, [webId])

  return (
      <ProfilePageContent {...{ name, image, isLoading, webId,
                                currentUserFriends, addFriend, deleteFriend }} />
  );
})
