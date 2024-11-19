const formattedTime = () => {
  const currentDate = new Date()
  let currentHour = currentDate.getHours()
  let currentMinute = currentDate.getMinutes()
  // Thêm số 0 phía trước nếu giờ hoặc phút nhỏ hơn 10
  currentHour = (currentHour < 10 ? '0' : '') + currentHour
  currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute

  const formattedTime = `${currentHour}:${currentMinute}`
  return formattedTime
}

export default formattedTime