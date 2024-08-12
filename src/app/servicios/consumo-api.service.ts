import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP
import { Injectable } from '@angular/core'; // Importa Injectable para definir un servicio en Angular
import { Observable } from 'rxjs'; // Importa Observable para manejar operaciones asíncronas
import { Tarea } from '../modelos/tarea'; // Importa la interfaz Tarea para definir el tipo de datos

@Injectable({
  providedIn: 'root' // Indica que este servicio estará disponible en toda la aplicación
})
export class ConsumoApiService {
  // Define la URL de la API desde la cual se obtendrán los datos
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  // Inyecta HttpClient para poder realizar solicitudes HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener una lista de tareas desde la API
  getListadoTareas(): Observable<Tarea[]> {
    // Realiza una solicitud GET a la API y devuelve un Observable con los datos
    return this.http.get<Tarea[]>(this.apiUrl);
  }
}

