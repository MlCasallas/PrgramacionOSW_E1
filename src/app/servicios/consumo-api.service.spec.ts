import { TestBed } from '@angular/core/testing'; // Importa TestBed para configurar el entorno de pruebas

import { ConsumoApiService } from './consumo-api.service'; // Importa el servicio que se va a probar

// Describe una suite de pruebas para el servicio ConsumoApiService
describe('ConsumoApiService', () => {
  let service: ConsumoApiService; // Declara una variable para el servicio

  // Configura el módulo de pruebas antes de cada prueba
  beforeEach(() => {
    // Configura el entorno de pruebas
    TestBed.configureTestingModule({});

    // Inyecta el servicio en la variable 'service'
    service = TestBed.inject(ConsumoApiService);
  });

  // Define una prueba que verifica si el servicio se crea correctamente
  it('should be created', () => {
    // Verifica que el servicio se haya creado correctamente
    expect(service).toBeTruthy();
  });
});
