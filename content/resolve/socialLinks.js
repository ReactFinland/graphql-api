function resolveSocialLinks(links) {
  return links.map(o => ({
    ...o,
    social: resolveSocialLink(o.social, o),
  }));
}

function resolveSocialLink(social, o) {
  const rules = {
    homepage: social.homepage,
    facebook: `https://facebook.com/${social.facebook}`,
    github: `https://github.com/${social.github}`,
    linkedin: `https://linkedin.com/${social.linkedin}`,
    medium: `https://medium.com/${social.medium}`,
    instagram: `https://instagram.com/${social.instagram}`,
    twitter: `https://twitter.com/${social.twitter}`,
    youtube: `https://www.youtube.com/${social.youtube}`,
    vk: `https://vk.com/${social.vk}`,
  };
  const ret = {};

  Object.keys(social).forEach(media => {
    ret[media] = rules[media];
  });

  return ret;
}

module.exports = resolveSocialLinks;
