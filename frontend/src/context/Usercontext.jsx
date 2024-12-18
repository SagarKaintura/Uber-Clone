import React, { createContext, useState } from 'react'

export const userdataContext = createContext()
const Usercontext = ({children}) => {
  const [user , setUser] = useState({
    email : '',
    fullname : {
      firstname : '',
      lastname : ''
    }
  })
  return (
    <div>
      <userdataContext.Provider value={[user , setUser]}>
        {children}
      </userdataContext.Provider>
    </div>
  )
}

export default Usercontext
 