interface containerProp {
    component:string;
}

function Container(props:containerProp) {

    const Component = props.component || 'div'

  return (
    <>
    {/* <Component className="px-4" {...props}/> */}
    <div className="px-4" {...props}/>
    </>
  )
}

export default Container