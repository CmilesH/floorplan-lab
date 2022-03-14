import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return (  
<>
    <LivingRoom/>
    <Bath size={'Full'}/>
    <Bedroom bedNum={1}/>
    <Bedroom bedNum={2}/>
    <Kitchen/>
    <Bath size={'Half'}/>
    <Bedroom bedNum={3}/>
</>
  );

}

export default FloorPlan;

