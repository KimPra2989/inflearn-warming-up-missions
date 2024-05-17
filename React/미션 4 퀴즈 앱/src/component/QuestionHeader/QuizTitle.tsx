interface QuizTitleProps {
    title : string
}

function QuizTitle({title} : QuizTitleProps) {
    return (
        <p>{title}</p>
    )
}

export default QuizTitle