export  const base_url="http://localhost:5000/api/"


export const  config=()=>{
    return {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: "application/json",
        }
    }
}