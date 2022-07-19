export const onChange = setter => ev =>
	setter(ev.target.value)

export const onChangeChecks=(id,selects,setselects)=>
()=>setselects(selects.includes(id)?selects.filter(s=>s!==id):[...selects,id])
