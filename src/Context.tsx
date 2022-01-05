import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface ContextType {
  userState: [
    user: string,
    setUser: Dispatch<SetStateAction<string>>
  ]
}

export const AppContext = createContext<ContextType>({} as any)

export const AppProvider = (props: any): JSX.Element => {
  const [user, setUser] = useState<string>('loading')

  return (
    <AppContext.Provider
      value={{
        userState: [user, setUser]
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
