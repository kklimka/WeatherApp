function TodayData({ date }) {
  const month = [
    " January",
    " February",
    " March",
    " April",
    " May",
    " June",
    " July",
    " August",
    " September",
    " October",
    " November",
    " December",
  ];
  const todayDate = new Date(date * 1000);
  const todayDay = todayDate.getDate();
  const todayMonth = todayDate.getMonth();
  return <h3 className="modalText">Today, {todayDay} {month[todayMonth]}</h3>;
}
export default TodayData;
