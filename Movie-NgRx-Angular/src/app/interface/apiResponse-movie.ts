import { Movies } from "./baseData-movie";


// Interfaz que permite mapear la respuesta luego de consumir los servicios relacionados con objetos que extienden de BaseData
export interface ApiResponse<T extends Movies> { 
    page: number
    total_pages: number,
    total_results: number
    results: T[];
  }