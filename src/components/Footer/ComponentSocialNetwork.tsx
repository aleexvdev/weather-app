import React from 'react'
import IconBxlFacebook from '../../icons/SocialNetworksIcons/IconBxlFacebook';
import IconBxlInstagram from '../../icons/SocialNetworksIcons/IconBxlInstagram';
import IconBxlGithub from '../../icons/SocialNetworksIcons/IconBxlGithub';
import IconBxlLinkedin from '../../icons/SocialNetworksIcons/IconBxlLinkedin';
import { TypeSocialNetworks } from '../../types/Type_Weather';

type TypePropsSocial = {
  props: TypeSocialNetworks;
}

type TypeIconSocialNetwork = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};


const socialNetworkIcons: TypeIconSocialNetwork = {
  Facebook: IconBxlFacebook,
  Instagram: IconBxlInstagram,
  LinkedIn: IconBxlLinkedin,
  Github: IconBxlGithub,
};

export const ComponentSocialNetwork = ( {props}: TypePropsSocial ) => {

  const { id, social_network, url } = props;

  const renderIcon = (social: string) => {
    const IconComponent = socialNetworkIcons[social];
    return IconComponent ? <IconComponent fontSize={26} key={social} className='text-[#0338a1]' /> : null;
  };

  return (
    <div key={id}>
      <a href={url}>
        {renderIcon(social_network)}
      </a>
    </div>
  )
}
