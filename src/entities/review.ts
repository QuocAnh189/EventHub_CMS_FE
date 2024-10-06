export interface IReview {
  id?: string
  eventId: string
  authorId: string
  content: string
  deleteAt: Date
  isDelete: boolean
  rate: number
  createAt: Date
  updateAt: Date
}
