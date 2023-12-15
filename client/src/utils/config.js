export  const base_url="http://localhost:5000/api/"


<<<<<<< HEAD
export const config={
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: "application/json",
    },
}
=======
export const  config=()=>{
    return {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: "application/json",
        }
    }
}
>>>>>>> 994b55135c5a4dc0da2c51df235206b26c837452
