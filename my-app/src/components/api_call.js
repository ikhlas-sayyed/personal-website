
export default function api_call(path,data){
    fetch(path, {
        method: 'POST',
        body: data,
      })
         .then((response) => response.json())
         .then((data) => {
            return data
         })
         .catch((err) => {
           return false
         });
}
