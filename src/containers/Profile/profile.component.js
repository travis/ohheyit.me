import React from 'react';
import { useLDflexValue } from '@solid/react'
import { useTranslation } from 'react-i18next';
import {
  ProfileWrapper,
  ProfileCard,
  ProfileDetail,
  ProfileName,
  ProfileImage
} from './profile.style';
import AddRelationshipButton from '@components/Utils/AddRelationshipButton'

const Friend = ({webId}) => {
  const nameLd = useLDflexValue(`[${webId}].vcard_fn`)

  return (<div>{nameLd && nameLd.value}</div>)
}

/**
 * Profile Page UI component, containing the styled components for the Profile Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const ProfilePageContent = props => {
  const { webId, image, name, friends, currentUserWebId, currentUserFriends, addFriend, deleteFriend } = props;
  const { t } = useTranslation();

  const areWeFriends = currentUserFriends.find(n => n.value === webId)
  const currentUserProfile = (currentUserWebId === webId)

  return (
    <ProfileWrapper data-testid="profile-wrapper">
      <ProfileCard className="card">
        <ProfileDetail data-testid="profile-detail">
          <h3>
            {t('profile.intro')} <ProfileName>{name}</ProfileName>
          </h3>
          <ProfileImage src={image}/>
          {!currentUserProfile && (currentUserWebId !== null) &&
           currentUserFriends && name &&
           <AddRelationshipButton add={addFriend} del={deleteFriend}
                                  exists={areWeFriends}
                                  addContent={`I know ${name}`}
                                  deleteContent={`I don't know ${name}`}
                                  existsContent={`You know ${name}`}/>
          }
          {friends && (
            <>
              <h3>Friends</h3>
              {friends.length > 0 ? (
                friends.map(friend => <Friend key={friend.value}
                                              webId={friend.value}/>)

              ) : (
                <>You don't have any friends yet!</>
              )
              }
            </>
          )}
        </ProfileDetail>
      </ProfileCard>
    </ProfileWrapper>
  );
};
