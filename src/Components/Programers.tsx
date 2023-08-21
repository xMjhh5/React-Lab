import React from 'react'

interface IProgramers {
    name:string,
    programLang:string,
    ExYear:number,
    company:string

}
export default function Programers(props:IProgramers) {
  return (
    <div style={{display:"flex", }} >
        {props.name}
        <br />
        {props.programLang}
        <br />
        {props.ExYear}
        <br />
        {props.company}
    </div>
  )
}
