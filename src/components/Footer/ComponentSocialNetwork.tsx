import React from 'react'
import { TypeSocialNetworks } from '../../types/Type_Weather';

type TypePropsSocial = {
  props: TypeSocialNetworks;
}

export const ComponentSocialNetwork = ( {props}: TypePropsSocial ) => {

  const { id, social_network, url, icon } = props;

  return (
    <div key={id} className='flex items-center justify-center'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img 
          src={`../../assets/social svg/${icon}.svg`} 
          alt={social_network} 
          title={social_network} 
          className='inline-block w-10 h-10 md:w-8 md:h-8'
        />
      </a>
    </div>
  )
}