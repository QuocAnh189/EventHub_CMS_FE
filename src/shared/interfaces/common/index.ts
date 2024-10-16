import { ReactNode, ReactElement } from 'react'

export interface Route {
  name: string
  icon: any
  path?: string
  links?: { name: string; path: string }[]
}

export interface LayoutProps {
  children: ReactNode
}

export interface NextPageWithLayout {
  Layout?: (props: LayoutProps) => ReactElement
}

export interface ApiResponse<TData> {
  statusCode: number
  message: string
  data: TData
  errors?: string[] | null
}

export interface ApiListResponse<TData> {
  statusCode: number
  message: string
  data: IListData<TData>
  errors?: string[] | null
}

export interface IListData<T> {
  items: T
  metadata: IMetadata
}

export interface IMetadata {
  currentPage: number
  hasNext: boolean
  hasPrevious: boolean
  pageSize: number
  takeAll: boolean
  totalCount: number
  totalPages: number
}

export interface IGetParam {
  page: number
  size: number
  searches: string
  takeAll: boolean
}

export const initGetParam = {
  page: 1,
  size: 10,
  searches: '',
  takeAll: false
}

export interface IPagination {
  nextPage: () => void
  prevPage: () => void
  goToPage: (page: number) => void
  showingOf: () => JSX.Element
  currentPage: number
  setCurrentPage: (page: number) => void
  maxPage: number
}

export interface ISelect {
  label: string
  value: string
}
