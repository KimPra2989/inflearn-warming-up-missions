import { useState } from 'react'
import { NextButton } from './component/NextButton'
import QuestionContainer from './component/QuestionContainer'
import QuestionHeader from './component/QuestionHeader'
import Quiz from './component/Quiz'
import Select from './component/shared/Select'
import { QuizData, quizData } from './data/data'

function App() {
  const [questionNumber, setQusetionNumber] = useState(0)
  const [selected, setSelected] = useState<null | number>(null)
  const [quizCategory, setQuizCategory] = useState<QuizData>('front-end')

  const handleNext = () => {
    setQusetionNumber((prev) => ++prev)
    setSelected(null)
  }

  return (
    <>
      <Select
        label="퀴즈 항목"
        options={Object.keys(quizData)}
        quizCategory={quizCategory}
        setQuizCategory={setQuizCategory}
        setQuestionNumber={setQusetionNumber}
        setSelected={setSelected}
      />
      <QuestionContainer>
        <QuestionHeader
          idx={questionNumber + 1}
          title={quizData[quizCategory][questionNumber].question}
        />

        <Quiz
          data={quizData[quizCategory][questionNumber]}
          selected={selected}
          setSelected={setSelected}
        />
        {selected !== null ? <NextButton onClick={handleNext}>Next</NextButton> : null}
      </QuestionContainer>
    </>
  )
}

export default App
