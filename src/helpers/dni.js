import { validate, clean, format } from 'rut.js'

export function rutValidator (rutCompleto) {
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto )) return false
  const tmp = rutCompleto.split('-')
  let digv = tmp[1]
  const rut = tmp[0]
  if ( digv == 'K' ) digv = 'k'
  return (dv(rut) == digv )
}

export function dv (T){
  var M=0,S=1
  for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11
  return S?S-1:'k'
}

export function formatRutToSend (rut) {
  return clean(rut).substring(0, clean(rut).length - 1) + "-" + clean(rut).substring(clean(rut).length - 1);
}