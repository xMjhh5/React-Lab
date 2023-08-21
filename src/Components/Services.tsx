interface Services {
    typeSevice:string,
    price:number

}
export default function Services(props:Services) {
  return (
    <div>
        {props.typeSevice}
        <br />
        {props.price}

    </div>
  )
}
