import { useEffect, useRef } from 'react';

type AlertProps = {
  message: string;
  // setShowAlert: (AlertProps: object) => object;
};

const Alert = ({ message, setShowAlert }: AlertProps) => {
  const alertContainer = useRef<HTMLDivElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      alertContainer.current.hasChildNodes()
        ? alertContainer.current.removeChild(alertRef.current)
        : null;

      setShowAlert(() => ({
        message: '',
        status: false,
      }));
    }, 3000);
  }, []);

  const handleClick = () => {
    alertContainer.current.removeChild(alertRef.current);
    setShowAlert(() => ({
      message: '',
      status: false,
    }));
  };

  return (
    <div ref={alertContainer}>
      <div className='alert' ref={alertRef} onClick={handleClick}>
        <span className='alert-message'>{message}</span>
        <button className='alert-button'>
          <ion-icon name='close-outline' />
        </button>
      </div>
    </div>
  );
};

export default Alert;
