import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import data from '@solid/query-ldflex';
import { namedNode } from '@rdfjs/data-model';
import { ProfilePageContent } from './profile.component';
import { successToaster, errorToaster } from '@utils';
import { useLDflexValue, useLDflexList } from '@solid/react'

const defaultProfilePhoto = '/img/icon/empty-profile.svg';

const slugs2WebIds = {
    travis: "https://tvachon.inrupt.net/profile/card#me",
    toby: "https://tobytoberson.inrupt.net/profile/card#me"
}
const slug2WebId = (slug: string): string => slugs2WebIds[slug]

/**
 * Container component for the Profile Page, containing example of how to fetch data from a POD
 */
export const ProfileComponent = withRouter(({ match: { params: { slug } } }) => {
    const webId = slug2WebId(slug) || slug;
    const currentUserFriends = useLDflexList("user.friends")
    const nameLd = useLDflexValue(`[${webId}].vcard_fn`)
    const name = (nameLd && nameLd.value.trim().length > 0 ? nameLd.value : webId.toString())
    const imageLd = useLDflexValue(`[${webId}].vcard_hasPhoto`)
    const image = (imageLd && imageLd.value) || defaultProfilePhoto

    const addFriend = async () =>
        await data.user.friends.add(webId)
    const deleteFriend = async () =>
        await data.user.friends.delete(webId)

    return (
        <ProfilePageContent {...{
            name, image, webId, currentUserFriends, addFriend, deleteFriend
        }} />
    );
})
