export interface UpdateCategoryPayload {
  id: string
  name: string
  iconImageUrl: any
  color: string
}

export interface CreateCategoryPayload {
  id: string
  name: string
  iconImageUrl: any
  color: string
}

export const initCreateCategoryPayload = {
  id: '',
  name: '',
  iconImageUrl: '',
  color: ''
} as CreateCategoryPayload
