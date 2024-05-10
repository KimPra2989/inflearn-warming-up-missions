import ResultRow from './ResultRow'

function ResultTable({
  filteredResult,
  setResult,
  setUpdate,
  setUpdateIdx,
  setCategory,
  setDetail,
  setCost,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>지출 항목</th>
          <th>상세 내역</th>
          <th>금액</th>
          <th>수정 / 삭제</th>
        </tr>
      </thead>
      <tbody>
        {filteredResult.map((item, idx) => (
          <ResultRow
            key={item + idx}
            category={item.category}
            setCategory={setCategory}
            detail={item.detail}
            setDetail={setDetail}
            cost={item.cost}
            setCost={setCost}
            setResult={setResult}
            idx={idx}
            setUpdate={setUpdate}
            setUpdateIdx={setUpdateIdx}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">총 {filteredResult.length} 건</td>
          <td colSpan="2">
            총 금액 :{' '}
            {filteredResult.reduce((acc, cur) => acc + +cur.cost, 0).toLocaleString('ko-KR')} 원
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ResultTable
