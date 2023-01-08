import { useState } from 'react';
import style from './Form.module.css'

const Form = ({ formSubmit, setAddCard }) => {
  const [values, setValues] = useState({
    title: '',
  })
  const handleChange = e => {
    const fieldName = e.target.name
    setValues({ ...values, [fieldName]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (values.title) {
      formSubmit(values.title);
      setAddCard(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={style.column_form}>
      <input
        type='text'
        id='taskTitle'
        name='title'
        className={style.column_textarea}
        onChange={handleChange}
        value={values.title}
      />
      <button className={style.button} type='submit'>Submit</button>
    </form>

  );
}

export default Form;