import { Component } from '@angular/core';
import { ConsumoApiService } from '../servicios/consumo-api.service';
import { CommonModule } from '@angular/common';

// Decorador para definir el componente
@Component({
  selector: 'app-lista-tareas', // Selector que se usa para incluir este componente en otras plantillas
  standalone: true, // Indica que este componente es autónomo y puede funcionar de manera independiente
  imports: [CommonModule], // Importa módulos necesarios para el componente
  templateUrl: './lista-tareas.component.html', // Ruta del archivo HTML para la plantilla del componente
  styleUrls: ['./lista-tareas.component.css'] // Ruta del archivo CSS para los estilos del componente
})
export class ListaTareasComponent {

  // Define una propiedad para almacenar la lista de tareas
  listaTareas: any[] = [];

  // Inyecta el servicio ConsumoApiService en el constructor
  constructor(private servicioApi: ConsumoApiService) {
  }

  // Hook del ciclo de vida del componente, se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    this.getListadoTareas(); // Llama al método para obtener la lista de tareas al inicializar el componente
  }

  // Hook del ciclo de vida del componente, se ejecuta cuando el componente se destruye
  ngOnDestroy(): void {
    // Se puede utilizar para limpiar recursos o suscripciones cuando el componente se destruye
  }

  // Método para obtener la lista de tareas desde el servicio API
  getListadoTareas() {
    this.servicioApi.getListadoTareas().subscribe(datos => {
      this.listaTareas = datos; // Asigna los datos recibidos a la propiedad listaTareas
    });
  }

}
