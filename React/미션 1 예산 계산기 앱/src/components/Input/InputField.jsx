import { useCallback } from 'react'
import { Bounce, toast } from 'react-toastify'
import { CATEGORY_OPTIONS } from '../../constant/category'
import { Main_Color } from '../../constant/colors'
import Button from '../shared/Button'
import Input from '../shared/Input'
import Select from '../shared/Select'
import Spacing from '../shared/Spacing'
import InputContainer from './InputContainer'

function InputField({
  category,
  setCategory,
  detail,
  setDetail,
  cost,
  setCost,
  result,
  setResult,
  isUpdating,
  setUpdate,
  updateIdx,
}) {
  const handleAdd = () => {
    setResult((prev) => {
      let result = prev.slice()
      result.push({
        category,
        detail,
        cost: +cost,
      })

      return result
    })

    clearState()
    toast('또 썼어? 정말 대단해 👍👍')
  }

  const handleUpdate = () => {
    const update = {
      category,
      detail,
      cost: +cost,
    }

    result[updateIdx] = update
    setUpdate(false)
    clearState()

    setResult([...result])

    toast.success('✏️ 수정 완료!! ✏️', {
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

  const clearState = useCallback(() => {
    setCategory(CATEGORY_OPTIONS[1])
    setDetail('')
    setCost('')
  }, [setCategory, setDetail, setCost])

  console.log('input')

  return (
    <>
      <h2>지출 내역</h2>
      <>
        <InputContainer>
          <Select
            label="지출 항목"
            color={Main_Color}
            state={category}
            setState={setCategory}
            options={CATEGORY_OPTIONS.slice(1)}
          />
          <Input
            label="상세 내역"
            placeholder="뭐 삼?"
            type="text"
            color={Main_Color}
            state={detail}
            setState={setDetail}
          />
          <Input
            label="금액"
            placeholder="얼마 씀?"
            type="number"
            color={Main_Color}
            state={cost}
            setState={setCost}
          />
        </InputContainer>
        <Spacing direction="column" size="20px" />
        {isUpdating ? (
          <Button
            label="수정하기"
            onClick={() => {
              handleUpdate()
            }}
          />
        ) : (
          <Button
            label="추가하기"
            onClick={() => {
              handleAdd()
            }}
          />
        )}
      </>
    </>
  )
}

export default InputField
