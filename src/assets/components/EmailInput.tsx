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
        onChange = {(e) => setEmail(e.target.value)}>
      </input>
    </>
  )
}

export default EmailInput