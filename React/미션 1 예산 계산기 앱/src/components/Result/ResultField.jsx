import { useCallback, useState } from 'react'
import Button from '../shared/Button'
import Spacing from '../shared/Spacing'
import Filter from './Filter'
import ResultTable from './ResultTable'

function ResultField({
  result,
  setResult,
  setUpdate,
  setUpdateIdx,
  setCategory,
  setDetail,
  setCost,
}) {
  let [filter, setFilter] = useState('전체')
  const filtered = useCallback(
    (arr) => {
      return arr.filter((item) => {
        if (filter == '전체') {
          return true
        }
        return item.category == filter
      })
    },
    [filter],
  )
  const deleteAll = () => {
    setResult([])
  }

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <Spacing size="6px" />
      <ResultTable
        filteredResult={filtered(result)}
        setResult={setResult}
        setUpdate={setUpdate}
        setUpdateIdx={setUpdateIdx}
        setCategory={setCategory}
        setDetail={setDetail}
        setCost={setCost}
      />
      <Spacing size="12px" />
      <Button
        label="전부 삭제"
        onClick={()=> {deleteAll()}}
      />
    </>
  )
}

export default ResultField
