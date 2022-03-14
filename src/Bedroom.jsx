const Bedroom = (props) => {


  return (  
    <div className='bedroom' id={`bed-${props.bedNum}`}> 
      Bedrooom {props.bedNum}
    </div>
  );
}

export default Bedroom;