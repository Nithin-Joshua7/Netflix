import axios from "axios"


export const fetchFromTMDB = async(url)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjlkZjdmMjYwZWUxYWViZjgwYTc0MzAzZDRjMDU3ZSIsIm5iZiI6MTc0NDE3ODg3MS42ODQsInN1YiI6IjY3ZjYwZWI3OGNmY2NmN2JhZmQ5Yzk2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rA8y3vl96qrKsryRdTwM0sa-AFtKFLYY2gzoSetLM-U'
        }
      }
      const response = await axios.get(url,options)
      return response.data
}