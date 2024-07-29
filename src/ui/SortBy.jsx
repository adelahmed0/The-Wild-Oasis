import Select from './Select.jsx'
import { useSearchParams } from 'react-router-dom'

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get('sortBy') || ''

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <Select
      value={sortBy}
      options={options}
      type="white"
      onChange={handleChange}
    />
  )
}

export default SortBy
