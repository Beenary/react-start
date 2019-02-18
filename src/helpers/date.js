
  // Months array
  const months_arr = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const months_num_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  // Days array
  const days_arr= ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // Year
  const year = (date) => date.getFullYear();
  // Month
  const month = (date) => months_arr[date.getMonth()];
  const month_num = (date) => months_num_arr[date.getMonth()];

  // Day
  const day = (date) => date.getDate();

  //Day like string
  const dayString = (date) => days_arr[date.getDay()];
  // Hours
  const hours = (date) => date.getHours();
  // Minutes
  const minutes = (date) => "0" + date.getMinutes();
  // Seconds
  const seconds = (date) => "0" + date.getSeconds();

export function getFullDate(timestamp){
  const date = new Date(timestamp*1000);
  return month(date)+'-'+day(date)+'-'+year(date)+' '+hours(date) + ':' + minutes(date).substr(-2) + ':' + seconds(date).substr(-2);
}

export function getTime(timestamp){
  const date = new Date(timestamp*1000);
  return hours(date) + ':' + minutes(date).substr(-2);
}

export function getDateMD(timestamp){
  const date = new Date(timestamp*1000);
  return `${dayString(date)} ${day(date)}, ${month(date)}`
}

export function getDateMDYString(timestamp){
  const date = new Date(timestamp*1000);
  return `${day(date)} de ${month(date)} del ${year(date)}`
}

export function getDateDMY(timestamp){
  const date = new Date(timestamp*1000);
  return `${day(date)} ${month_num(date)} ${year(date)}`
}

export function getDateNumDMY(timestamp){
  const date = new Date(timestamp*1000);
  return `${day(date)}/${month_num(date)}/${year(date)}`
}

export function getHour(timestamp){
  const date = new Date(timestamp*1000);
  return `${hours(date)}`
}