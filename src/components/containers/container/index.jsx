import './style.scss';

export const Container = ({children, className, type}) => {
    if( type === 'fluid') {
      return <div className={`container-fluid ${className}`}>{children}</div>
    }

    if ( type === 'center') {
      return <div className={`container ${className}`}>{children}</div>
    }

    return <div className={`container ${className}`}>{children}</div>
}
