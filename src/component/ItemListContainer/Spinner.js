import { Spinner as SpinnerBt} from 'react-bootstrap'
import './Spinner.css'

function Spinner() {

    return (
        <div className='divSpinner'>
            <SpinnerBt animation="border" />
        </div>
    )
}

export default Spinner