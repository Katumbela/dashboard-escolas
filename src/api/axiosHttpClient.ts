import axios, { AxiosInstance } from 'axios';
import { HttpClient } from './httpClient';
import { env } from '@/infra';

class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      //baseURL: env.localDb,
      baseURL: env.localDb,
    });
  }


  setAuthorizationToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async get<T>(url: string, params?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to fetch data');
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);

      // Verifica se o código de status é 2xx
      if (response.status >= 200 && response.status < 300) {
        return response.data; // Retorna os dados se o status for 2xx
      } else {
        // Se não for 2xx, retorna a resposta completa
        console.log(response)
        return response as unknown as T; // Retorna a resposta completa
      }
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to post data'); // Lança um erro para cumprir a assinatura da interface
    }
  }

  async put<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to update data'); // Lança um erro para cumprir a assinatura da interface
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to delete data'); // Lança um erro para cumprir a assinatura da interface
    }
  }

  private handleError(error: any) {
    if (axios.isAxiosError(error)) {
      // Axios error
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      // Customize error handling based on status code
      switch (status) {
        case 401:
          console.error('Unauthorized access:', message);
          break;
        case 422:
          console.error('Validation error:', message);
          break;
        case 500:
          console.error('Server error:', message);
          break;
        default:
          console.error('An error occurred:', message);
      }
    } else {
      // Non-Axios error
      console.error('Unexpected error:', error);
    }
  }
}

export default AxiosHttpClient;
