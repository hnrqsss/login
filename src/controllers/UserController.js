import { api } from '../utils/api'

export const UserController = {
    getAll: () => api.get('user')
}