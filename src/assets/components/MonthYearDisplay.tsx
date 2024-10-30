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
        <label className='pr-4'> 
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))} className='w-26 p-1 text-m'>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i+1}>
                {new Date(0, i).toLocaleString('en', { month: 'long' })}
              </option>
            ))}
          </select>
        </label>
        <label>
          <input
            type='number'
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className='w-16 p-1 text-m'
          />
        </label>
      </div>
    </>
  )
}

export default MonthYearDisplay