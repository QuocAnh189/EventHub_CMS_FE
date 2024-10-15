import { EPageOrder } from '@app/constant/enum.constant'

export interface IConversationParams {
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}
