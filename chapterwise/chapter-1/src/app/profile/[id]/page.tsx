export default function userprofile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile </h1>
        <hr />
        <p>Profile Page <span className="p-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 font-bold">{params.id} </span></p>
        </div>
    )
}