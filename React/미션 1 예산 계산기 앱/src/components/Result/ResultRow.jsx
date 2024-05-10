import { Bounce, toast } from 'react-toastify'
import Spacing from '../shared/Spacing'

function ResultRow({
  category,
  detail,
  cost,
  setResult,
  idx,
  setUpdate,
  setUpdateIdx,
  setCategory,
  setDetail,
  setCost,
}) {
  const updateHandler = (idx) => {
    setUpdate(true)
    setUpdateIdx(idx)
    setCategory(category)
    setDetail(detail)
    setCost(cost)
  }
  const deleteHandler = (idx) => {
    setResult((prev) => {
      prev.splice(idx, 1)
      return prev.slice()
    })
    toast.success('🗑️ 삭제 완료 🗑️', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
    <tr>
      <td>{category}</td>
      <td>{detail}</td>
      <td>{cost.toLocaleString('ko-KR')} 원</td>
      <td>
        <UpdateButton updateHandler={updateHandler} idx={idx} />
        <Spacing direction="row" size="16px" />
        <DeleteButton deleteHandler={deleteHandler} idx={idx} />
      </td>
    </tr>
  )
}

function UpdateButton({ updateHandler, idx }) {
  return (
    <span
      onClick={() => {
        updateHandler(idx)
      }}
    >
      ✏️
    </span>
  )
}

function DeleteButton({ deleteHandler, idx }) {
  return (
    <span
      onClick={() => {
        deleteHandler(idx)
      }}
    >
      🗑️
    </span>
  )
}

export default ResultRow
