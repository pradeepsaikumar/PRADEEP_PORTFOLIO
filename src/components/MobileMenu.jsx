import React from 'react'


export default function MobileMenu({nav}){
const [open, setOpen] = React.useState(false)
return (
<div className="relative">
<button onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md border border-slate-600">☰</button>
{open && (
<div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg p-3">
{nav.map(n=> <a key={n} href={`#${n.toLowerCase()}`} className="block py-2">{n}</a>)}
</div>
)}
</div>
)
}