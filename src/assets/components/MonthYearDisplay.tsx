interface MonthYearDisplayProps {
  month: number;
  setMonth: (value: number) => void;
  year: number;
  setYear: (value: number) => void;
}

function MonthYearDisplay ({month, setMonth, year, setYear}: MonthYearDisplayProps) {

  return(
    <>
      <div>
      <label>Month
        <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i+1}>
              {new Date(0, i).toLocaleString('en', { month: 'long' })}
            </option>
          ))}
        </select>
      </label>
      <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </label>
    </div>
    </>
  )
}

export default MonthYearDisplay