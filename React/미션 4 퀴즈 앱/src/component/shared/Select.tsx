import { css } from '@emotion/react'
import Flex from './Flex'
import { QuizData } from '../../data/data'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface SelectProps {
  label: string
  options: string[]
  quizCategory: QuizData
  setQuizCategory: Dispatch<SetStateAction<QuizData>>
  setQuestionNumber: Dispatch<SetStateAction<number>>
  setSelected: Dispatch<SetStateAction<null | number>>
}

function Select({ label, options, quizCategory, setQuizCategory, setQuestionNumber, setSelected }: SelectProps) {
  const selectStyle = css`
    padding: 6px;
    margin-top: 6px;
    outline: none;
  `

  const containerStyle = css`
    margin-bottom: 10px;
  `
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuizCategory(e.target.value as QuizData)
    setQuestionNumber(0)
    setSelected(null)
  }

  return (
    <Flex direction="row" gap={10} justify="end" css={containerStyle}>
      <label htmlFor="category">{label}: </label>
      <select css={selectStyle} value={quizCategory} onChange={selectHandler}>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </Flex>
  )
}

export default Select
