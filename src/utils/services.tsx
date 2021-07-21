import CryptoJS from 'crypto-js'

import { PUBLIC_KEY } from "../config/constants"
import { PRIVATE_KEY } from "../config/constants"

const myDate = new Date()

const ts: number = myDate.getTime()

export const generateSign = () => ({
    ts,
    hash: CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY),
    publicKey: PUBLIC_KEY
})
