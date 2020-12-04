import { Get, Post } from './index'
export const login = (params) => Post('/login', params)
