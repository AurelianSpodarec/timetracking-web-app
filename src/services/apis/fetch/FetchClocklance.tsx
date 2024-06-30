import { getResponseContent, RequestError } from '../../requests'
import config from './config_clocklance'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function FetchClocklance<T> (
  endpoint: string,
  method: HttpMethod,
  data?: unknown,
  refreshToken?: string,
  bearerToken?: string
): Promise<T> {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (refreshToken) {
    headers['Cookie'] = `refresh=${refreshToken}`
  }

  if (bearerToken) {
    headers['Authorization'] = `Bearer ${bearerToken}`
  }

  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    headers,
    body: method === 'GET' ? undefined : JSON.stringify(data)
  })

  const content = await getResponseContent(response) as T
  const cookies = response.headers.get('Set-Cookie')
  // console.log(content, response)

  // return content}
  if(!response) {
    throw new RequestError(response.statusText, response.status, content)
  }
  return {...content, cookies}
  
  // if(!response.ok) {

  // }

      // if (response.ok) return { ...content, cookies }
  // throw new RequestError(response.statusText, response.status, content)


  // if (response.ok) return { ...content, cookies }
  // throw new RequestError(response.statusText, response.status, content)
}

export default FetchClocklance
