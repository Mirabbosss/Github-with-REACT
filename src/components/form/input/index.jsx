import './style.scss';

export const Input = ({ type, className, placeholder, onChange, value }) => {
  return (
    <input
      type={type ? type : 'text'}
      className={className ? className : null}
      placeholder={placeholder && placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value ? value : ''}
    />
  )
}
