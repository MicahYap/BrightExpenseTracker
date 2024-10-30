type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

function EmailInput ({email, setEmail}: Props) {
  return(
    <>
    <label>Email</label>
      <input 
        type='text' 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        className='w-44'
        placeholder="example@email.com"
      >
      </input>
    </>
  )
}

export default EmailInput