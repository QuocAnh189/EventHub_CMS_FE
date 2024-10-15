import { EEventPaymentTicket, EEventStatus, EEventStyle } from '@app/constant/enum.constant'
import { ITicketType } from '@shared/interfaces/ticket/model'
import { IUser } from '@shared/interfaces/user/model'

export interface IPriceRange {
  startRange: number
  endRange: number
}

export interface IEvent {
  id: string
  creatorId: string
  creator: Partial<IUser>
  creatorName: string
  categories: any[]
  coverImage: string
  subImages: any[]
  name: string
  description: string
  location: string
  priceRange: IPriceRange
  startTime: any
  endTime: any
  eventCycleType: EEventStyle
  eventPaymentType?: EEventPaymentTicket
  isPrivate: boolean
  isTrash: boolean
  ticketTypes: ITicketType[]
  categoryIds: string[] | any
  promotion: number
  numberOfFavourites: number
  isFavourite?: boolean
  numberOfShares: number
  numberOfSoldTickets: number
  averageRating: number
  status: EEventStatus
  reasons: string[]
  createdAt: Date
  updatedAt: Date
}
