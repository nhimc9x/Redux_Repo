import { PiWalletBold } from 'react-icons/pi'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { modalSlice } from './modalSlice'
import { useState } from 'react'
import { homeSlice } from '../homeSlice'
import { transactionsSlice } from '../HistoryBank/transactionsSlice'
import { v4 as uuidv4 } from 'uuid'
import formattedTime from '../../utils/fomatedTime'

function Modal() {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.modal.modalType !== 'historyBank' && state.modal.modalStatus)
  const modalType = useSelector(state => state.modal.modalType)
  let surplus = useSelector(state => state.surplus.total)
  const handleHideModal = () => {
    setAmount(0)
    dispatch(modalSlice.actions.hideModal())
  }

  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleConfirm = () => {
    // let totalBank = surplus
    if (!amount) return 0
    if (modalType === 'deposit') {
      dispatch(homeSlice.actions.deposit(+amount))
      surplus += +amount
    } else {
      dispatch(homeSlice.actions.withdraw(+amount))
      surplus -= +amount
    }
    dispatch(transactionsSlice.actions.addTransactionHistory({
      id: uuidv4(),
      fluctuations: +amount,
      amount: surplus,
      time: formattedTime(),
      type: modalType
    }))
    handleHideModal()
  }

  return (
    <div className={clsx('fixed right-0 left-0 top-0 bottom-0 bg-black/80 grid place-content-center', !modalStatus && 'hidden')}>
      <div className="w-[400px] pb-8 bg-white rounded-lg drop-shadow-lg px-8">

        <div className="py-6 flex items-center text-4xl flex-col gap-1 text-blue-500">
          {modalType === 'deposit' ? <PiWalletBold /> : <BiMoneyWithdraw />}
          <div className="font-semibold text-2xl text-black">{modalType === 'deposit' ? 'Nạp tiền' : 'Rút tiền'}</div>
        </div>

        <input
          onChange={handleChangeAmount}
          value={amount || ''}
          className='outline-none border border-gray-300 px-4 py-2 rounded-md w-full' type="number" placeholder="Nhập số tiền" />

        <div className="flex w-full py-4 justify-center gap-8">
          <div
            onClick={handleHideModal}
            className="rounded-md flex-1 font-medium text-gray-500 text-center cursor-pointer border border-gray-300 px-4 py-1.5 hover:bg-slate-100">Hủy bỏ</div>
          <div
            onClick={handleConfirm}
            className="rounded-md flex-1 font-medium  text-center cursor-pointer px-4 py-1.5 text-white bg-blue-600 hover:bg-blue-500">Xác nhận</div>
        </div>

      </div>
    </div>
  )
}

export default Modal