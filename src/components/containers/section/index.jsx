import './style.scss';

export const Section = ({children, className = ''}) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}
