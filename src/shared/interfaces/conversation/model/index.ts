export interface IConversation {
  event: { name: string; coverImage: string }
  eventId: string
  host: { fullName: string; avatar: string }
  hostId: string
  id: string
  userId: string
  user: { fullName: string; avatar: string }
  updatedAt: any
  createdAt: any
}
