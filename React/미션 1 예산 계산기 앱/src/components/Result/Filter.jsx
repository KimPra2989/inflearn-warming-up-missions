import { CATEGORY_OPTIONS } from '../../constant/category'
import Select from '../shared/Select'

function Filter({filter, setFilter}) {
  return (
    <>
      <Select label='항목별 보기 ' options={CATEGORY_OPTIONS} state={filter} setState={setFilter}/>
    </>
  )
}

export default Filter
