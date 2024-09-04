type HookProps = {
  totalPages: number
  currentPage: number
}

type Props = HookProps & {
  onPageChange: (pageNumber: number) => void
}

export type { HookProps, Props }
