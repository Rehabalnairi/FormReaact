
import { Link } from 'react-router-dom';
import erorr from '../../../public/img/error.svg';

function Errors() {
  return (
    <div className="not-found-container text-center">
  <img src={erorr} alt="404 Not Found"
   style={{ width: '300px', marginBottom: '20px' }} />  


    
    </div>
  );
}

export default Errors;
