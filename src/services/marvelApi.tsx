import ky from 'ky'
import qs from 'qs'

import { MARVEL_API } from "../config/constants";

import { generateSign } from '../utils/services'

export const makeRequest = async (path: string, method: any, params?: {}) => {
    const { ts, hash, publicKey } = generateSign()

    return await method(`${MARVEL_API}${path}?ts=${ts}&apikey=${publicKey}&hash=${hash}${params ? `&${qs.stringify(params)}` : ''}`).json()
}

export const getCharacters = (params: {}) => makeRequest('/characters', ky.get, params)

export const getCharacter = (id: number) => makeRequest(`/characters/${id}`, ky.get)
