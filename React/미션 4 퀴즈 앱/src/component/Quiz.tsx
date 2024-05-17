import { Dispatch, SetStateAction } from 'react'
import { QuizType } from '../interface'
import QuizOption from './Quiz/QuizOption'
import QuizOptionContainer from './Quiz/QuizOptionContainer'

interface QuizProps {
  data: QuizType
  selected: null | number
  setSelected: Dispatch<SetStateAction<null | number>>
}

function Quiz({ data, selected, setSelected }: QuizProps) {
  const answer = data.answer

  return (
    <QuizOptionContainer>
      {data.options.map((option, idx) => {
        let isAnswer = false
        let isSelected = false
        if (idx == selected) {
          isSelected = true
        }
        if (idx == answer) {
          isAnswer = true
        }
        return (
          <QuizOption
            idx={idx}
            text={option}
            selected={selected}
            setSelected={setSelected}
            isSelected={isSelected}
            isAnswer={isAnswer}
            answer={answer}
            key={option}
          />
        )
      })}
    </QuizOptionContainer>
  )
}

export default Quiz
