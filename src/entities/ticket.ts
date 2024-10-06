export interface ITicket {
  id?: string
  eventId: string
  userId: string
  customerEmail: string
  customerName: string
  customerPhone: string
  isDeleted: boolean
  paymentId: string
  status: number
  ticketNo: string
  ticketTypeId: string
  createdAt: Date
  updatedAt: Date
}
