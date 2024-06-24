import React from 'react'
import { NavLink } from 'react-router-dom'

interface PaginationProps {
  currentPage: number
  pagesCount: number
  to: string
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, pagesCount, to }) => {
  function buildPaginationScheme () {
    const prevPageNumber = currentPage - 1
    const nextPageNumber = currentPage + 1
    const scheme = [1, prevPageNumber, currentPage, nextPageNumber, pagesCount]
    const filteredScheme = scheme.filter(item => item > 0 && item <= pagesCount)
    const set = new Set(filteredScheme)
    const result: (number | string)[] = Array.from(set)

    if (Number(result[0]) + 1 !== result[1]) result.splice(1, 0, '...')
    if (Number(result[result.length - 2]) + 1 !== result[result.length - 1]) {
      result.splice(result.length - 1, 0, '...')
    }
    return result
  }

  const paginationScheme = buildPaginationScheme()

  if (pagesCount === 1) return null

  return (
    <ul className="pagination d-flex justify-content-start mt-auto">
      {paginationScheme.map((item, index) => {
        if (typeof item === 'number') {
          return (
            <li className="page-item" style={{ color: 'black' }} key={index}>
              <NavLink className="page-link" style={{ color: 'black', background: 'none' }} to={`/${to}${item}`}>
                {item}
              </NavLink>
            </li>
          )
        }
        return (
          <li className="page-item" key={index}>
            <span className="page-link">...</span>
          </li>
        )
      })}
    </ul>
  )
}
