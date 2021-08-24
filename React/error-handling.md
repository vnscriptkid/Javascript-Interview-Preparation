## Handle errors differently based on `statusCode` and `errorType`
```csharp
axios.interceptors.response.use(async response => {
    try {
        if (process.env.NODE_ENV === 'development') await sleep(500);
        const pagination = response.headers['pagination'];
        if (pagination) {
            response.data = new PaginatedResult(response.data, JSON.parse(pagination));
            return response as AxiosResponse<PaginatedResult<any>>;
        }
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
}, (error: AxiosError) => {
    const { data, status, config } = error.response!;

    switch (status) {
        case 400: {
            if (typeof data === 'string') {
                toast.error(data);
                return;
            }
            
            if (config.method === 'get' && data.errors && data.errors.hasOwnProperty('id')) {
                // In case: GET /api/activities/notaguid
                history.push('/not-found');
                return;
            }
            
            if (data && data.errors) {
                // Flat validation errors
                let modalStateErrors: string[] = [];
                Object.values(data.errors).forEach((errors: any)=> {
                    for (let error of errors) modalStateErrors.push(error);
                });
                throw modalStateErrors;
            } 
            break;
        }
        case 401: {
            toast.error('Unauthorised');
            break;
        }
        case 404: {
            history.push('/not-found');
            break;
        }
        case 500: {
            store.commonStore.setServerError(data);
            history.push('/server-error');
            break;
        }
    }

    return Promise.reject(error);
})
```
