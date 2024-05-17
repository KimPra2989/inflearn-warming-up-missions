import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import { ANSWER_COLOR, SELECTED_COLOR } from '../../constant/optionColor'

interface QuizOptionProps {
  idx: number
  text: string
  isAnswer: boolean
  isSelected: boolean
  selected: null | number
  setSelected: Dispatch<SetStateAction<null | number>>
  answer: number
}

function QuizOption({
  idx,
  text,
  isAnswer,
  isSelected,
  selected,
  setSelected,
  answer,
}: QuizOptionProps) {
  console.log(idx, isAnswer)
  const prefix = ['①', '②', '③', '④']
  const commonStyle = css`
    :after {
      content: '';
      display: inline-block;
      width: 150px;
      height: 150px;
      position: absolute;
      top: 40px;
      left: 20px;
      transform: translate(-50%, -50%);
      background-size: cover;
    }
  `
  const answerBackground = css`
    background-color: ${ANSWER_COLOR} !important;
  `
  const answerOption = css`
    background-color: ${ANSWER_COLOR} !important;
    ${commonStyle}
    :after {
      background-image: url('../../src/assets/correct.png');
    }
  `
  const selectedOption = css`
    background-color: ${SELECTED_COLOR} !important;
    ${commonStyle}
    &::after {
      background-image: url('../../src/assets/incorrect.png');
    }
  `
  const optionStyle = css`
    ${isAnswer && isSelected
      ? answerOption
      : idx === answer
        ? answerBackground
        : isSelected
          ? selectedOption
          : null};
  `
  const Option = styled.li`
    &:hover {
      background-color: #feea67;
      cursor: pointer;
    }
    ${selected !== null ? optionStyle : null}
  `
  const handleSelected = () => {
    if (selected !== null) return
    setSelected(idx)
  }

  return <Option onClick={handleSelected}>{`${prefix[idx]} ${text}`} </Option>
}

export default QuizOption
