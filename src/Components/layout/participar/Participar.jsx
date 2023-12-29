

import { useEffect } from 'react';
import { OptionsMember } from './OptionsMember';

export const Participar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  
  return (
    <div className="container__participate">
      
      <div className='container__forms-options'>
        
      <OptionsMember/>
      </div>

    </div>
  )
}
