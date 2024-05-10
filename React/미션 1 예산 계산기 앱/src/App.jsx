import { useState } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import InputField from './components/Input/InputField'
import ResultField from './components/Result/ResultField'
import Spacing from './components/shared/Spacing'
import { CATEGORY_OPTIONS } from './constant/category'

function App() {
  let [result, setResult] = useState([])
  let [isUpdating, setUpdate] = useState(false)
  let [updateIdx, setUpdateIdx] = useState(0)
  let [category, setCategory] = useState(CATEGORY_OPTIONS[1])
  let [detail, setDetail] = useState('')
  let [cost, setCost] = useState('')
  console.log(result)

  return (
    <>
      <main className="budget-calculator-container">
        <InputField
          result={result}
          setResult={setResult}
          isUpdating={isUpdating}
          setUpdate= {setUpdate}
          updateIdx={updateIdx}
          category={category}
          setCategory={setCategory}
          detail={detail}
          setDetail={setDetail}
          cost={cost}
          setCost={setCost}
        />
        <Spacing size="20px" />
        {result.length ? (
          <ResultField
            result={result}
            setResult={setResult}
            setUpdate={setUpdate}
            setUpdateIdx={setUpdateIdx}
            setCategory={setCategory}
            setDetail={setDetail}
            setCost={setCost}
          />
        ) : null}
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  )
}

export default App
