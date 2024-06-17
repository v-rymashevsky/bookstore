import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchForm: React.FC = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!search) {
      alert('Search field must not be empty!')
    } else {
      navigate(`/posts/search/${search}/pages/1`)
      setSearch('')
    }
  }

  return (
    <form className="d-flex align-items-center ms-5" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control me-1"
        placeholder="Search..."
        style={{ width: '200px' }}
        onChange={handleChangeSearch}
        value={search}
      />
      <button type="submit" className="btn btn-warning">
        <i className="bi bi-search"></i>
      </button>
    </form>
  )
}
