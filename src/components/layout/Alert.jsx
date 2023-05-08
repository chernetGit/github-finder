import {CiCircleRemove} from 'react-icons/ci'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <div className='items-center ml-2'>
        <p className='flex items-start mb-4 space-x-2'>
          {alert.type === 'error' && <CiCircleRemove className='bg-red-700 mt-2' />}

          <p className='flex-1 text-base font-semibold leading-7 text-white'>
            <strong>{alert.msg}</strong>
          </p>
        </p>
      </div>
    )
  )
}

export default Alert
