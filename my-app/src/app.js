export default function Greeting (props){
  const {name, age} = props;
  return(
    <p>Hi {name}, my age is {age}</p>
  )
}