import React, { useEffect } from 'react' 



import Utils from '../../utils/index'

export default function Login() {

  useEffect(() => {
  const idValue=  Utils.getUrlParam('id');
  console.log(idValue);
  
  }, [])
  
    
  return (
    <div>Login</div>
  )
}
