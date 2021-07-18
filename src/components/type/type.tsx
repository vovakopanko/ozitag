export type tokenData = string | null

export type accessTokenType = string | null

export type dataType = {
    email: string | null
    id: number | null
    name: string | null
}

export type LoginType = {
    setUserData: (values: string) => void
}

export type  setDataType = {
    email: string | null,
    name: string | null,
    id: number | null
}

export type HeaderPropsType = {
    data: dataType
    setAccessToken: (accessToken: string) => void
    accessToken: any
    setData: ({}:setDataType) => void
    setUserData: (accessToken: string) => void
}

export type ContentPropsType = {
    data: dataType
    setUserData: (values: string) => void
}

export type ProfilePropsType = {
    data: dataType
}
