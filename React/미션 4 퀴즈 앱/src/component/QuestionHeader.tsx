import QuestionNumber from './QuestionHeader/QuestionNumber'
import QuizTitle from './QuestionHeader/QuizTitle'

interface QuestionHeaderProps {
  idx: number
  title: string
}

function QuestionHeader({ idx, title }: QuestionHeaderProps) {
  return (
    <>
      <QuestionNumber idx={idx} />
      <QuizTitle title={title} />
    </>
  )
}

export default QuestionHeader
