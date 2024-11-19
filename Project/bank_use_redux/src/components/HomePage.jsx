import { FcLibrary } from 'react-icons/fc'
import { FcDonate } from 'react-icons/fc'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { PiWalletBold } from 'react-icons/pi'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { modalSlice } from './Modal/modalSlice'

function HomePage() {
  const dispatch = useDispatch()
  const surplus = useSelector(state => state.surplus.total)
  const showModalDisposit = () => {
    dispatch(modalSlice.actions.showModal('deposit'))
  }
  const showModalWithdraw = () => {
    dispatch(modalSlice.actions.showModal('withdraw'))
  }
  const showModalHistoryBank = () => {
    dispatch(modalSlice.actions.showModal('historyBank'))
  }
  return (
    <div className="w-[600px] bg-slate-100 border border-gray-100 p-4 rounded-lg drop-shadow-lg">
      <div className="grid grid-cols-2 font-semibold h-10">
        <div className="border-r border-gray-300 flex items-center gap-4">
          <FcLibrary className='text-2xl pl-1' />
          <div className="">{surplus}đ</div>
        </div>
        <div className="pl-4 flex items-center gap-4">
          <FcDonate className='text-2xl' />
          <div className="">5000đ</div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-2 grid grid-cols-4 pt-4">
        <div className="flex flex-col items-center text-sm gap-2 py-4 rounded-lg hover:bg-slate-200 cursor-pointer select-none duration-300">
          <RiExchangeDollarFill className='text-4xl text-blue-500' />
          <div className="">Gửi tiết kiệm</div>
        </div>
        <div onClick={showModalDisposit} className="flex flex-col items-center text-sm gap-2 py-4 rounded-lg hover:bg-slate-200 cursor-pointer select-none duration-300">
          <PiWalletBold className='text-4xl text-blue-500' />
          <div className="">Nạp tiền</div>
        </div>
        <div onClick={showModalWithdraw} className="flex flex-col items-center text-sm gap-2 py-4 rounded-lg hover:bg-slate-200 cursor-pointer select-none duration-300">
          <BiMoneyWithdraw className='text-4xl text-blue-500' />
          <div className="">Rút tiền</div>
        </div>
        <div onClick={showModalHistoryBank} className="flex flex-col items-center text-sm gap-2 py-4 rounded-lg hover:bg-slate-200 cursor-pointer select-none duration-300">
          <MdOutlineWorkHistory className='text-4xl text-blue-500' />
          <div className="">Lịch sử</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage