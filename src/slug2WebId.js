const slugs2WebIds = {
    travis: "https://tvachon.inrupt.net/profile/card#me",
    toby: "https://tobytoberson.inrupt.net/profile/card#me"
}

export default (slug) => slugs2WebIds[slug]
