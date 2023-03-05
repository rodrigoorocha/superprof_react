// import axios from 'axios';

// const submitApi = async (url, method, data) => {
//   try {
//     const response = await axios({
//       method: method,
//       url: `http://localhost:3001/${url}`,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       data: data
//     });

//     if (response.data?.error) {
//       throw new Error(response.data.error);
//     }

//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export default submitApi;


const submitApi = (url, method, data) => {

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: !data ? null : JSON.stringify(data)
    };

    return fetch(`http://localhost:3001/${url}`, options)
        .then(response => response.json())
        .then(response => {
            if(response?.error) {
                throw new Error(response.error);
            }

            return response;
        })
        .catch(error => {
            throw new Error(error.message);
        });
}

export default submitApi;