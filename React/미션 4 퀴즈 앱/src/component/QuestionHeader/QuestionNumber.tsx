interface QuestionNumberProps {
  idx: number
}

function QuestionNumber({ idx }: QuestionNumberProps) {
  return (
    <h2>
      문제 {idx}.
    </h2>
  )
}

export default QuestionNumber
