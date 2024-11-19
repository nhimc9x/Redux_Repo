import clsx from 'clsx'

function NotifyItem({ type, time, fluctuations, amount }) {
  return (
    <div className="bg-white rounded-sm drop-shadow my-2 p-2">
      <div className="flex justify-between items-center">
        <div className="text-xs text-slate-600">{time}</div>
        <div className={clsx('font-semibold tracking-wider', type === 'deposit' ? 'text-green-500' : 'text-red-500')}>
          {type === 'deposit' ? '+' : '-'}{fluctuations}<u>đ</u>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-1"></div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-slate-600">Số dư</div>
        <div className="text-xs text-slate-500 font-medium">{amount}<u>đ</u></div>
      </div>
    </div>
  )
}

export default NotifyItem