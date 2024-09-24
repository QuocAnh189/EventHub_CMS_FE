export interface IEvent {
  id?: string
  name: string
  authorId: string
  coverImageFileName: string
  coverImageUrl: string
  description: string
  endTime: Date
  startTime: Date
  eventCycleType: string
  eventPaymentType: string
  isDeleted: boolean
  isPrivate: boolean
  isLocation: string
  status: string
}
