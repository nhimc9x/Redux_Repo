import { FaRegBell } from 'react-icons/fa'
import NotifyItem from './NotifyItem/NotifyItem'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { IoIosClose } from 'react-icons/io'
import { modalSlice } from '../Modal/modalSlice'


function HistoryBank() {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.modal.modalType === 'historyBank' && state.modal.modalStatus)
  const historyTransactions = useSelector(state => state.transactions)
  const handleHideModal = () => {
    dispatch(modalSlice.actions.hideModal())
  }
  return (
    <div className={clsx('fixed right-0 left-0 top-0 bottom-0 bg-black/80 grid place-content-center', !modalStatus && 'hidden')}>
      <div className="w-[400px] bg-white rounded-lg drop-shadow-lg overflow-hidden relative">

        <div onClick={handleHideModal} className="absolute z-10 top-2 right-2 text-2xl hover:bg-gray-200 cursor-pointer rounded-full text-gray-600">
          <IoIosClose />
        </div>

        <div className="flex items-center justify-center text-xl gap-1 py-4 text-blue-500 border-b border-slate-200 drop-shadow-md">
          <FaRegBell />
          <div className="text-black">Biến động</div>
        </div>

        <div className="h-[400px] bg-slate-200 px-2 overflow-y-auto">
          {[...historyTransactions].reverse().map((data) =>
            <NotifyItem key={data.id} type={data.type} time={data.time} fluctuations={data.fluctuations} amount={data.amount} />
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoryBank