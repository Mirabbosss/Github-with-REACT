import './style.scss';

export const Button = ({text, type, eventFun, className}) => {
  return (
    <button className={className ? className : null} type={type ? type : 'button'} onClick={() => eventFun ? eventFun : null}>
      {text ? text : "Button"}
    </button>
  )
}
