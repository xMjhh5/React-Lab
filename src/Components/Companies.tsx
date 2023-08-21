import Services from "./Services";

interface Company {
    nameCom:string,
    EmpNo:number,
    Year:number,
    Services:{typeService:string,price:number}

}

export default function Companies(props:Company ) {
  return (
    <div>
      <div style={{display:"flex" ,justifyContent:"space-around" , width:"100%"}}>
      Name : {props.nameCom}
      Year :  {props.Year}
     Employees : {props.EmpNo}
      </div>
      <div>Services</div>
      <div>
        <Services typeSevice={props.Services.typeService} price={props.Services.price}></Services>
      </div>
    </div>
  )
}
