import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTareasComponent } from './lista-tareas.component';

// Descripción de la suite de pruebas para ListaTareasComponent
describe('ListaTareasComponent', () => {
  // Definición de variables para el componente y su fixture
  let component: ListaTareasComponent;
  let fixture: ComponentFixture<ListaTareasComponent>;

  // Configuración y compilación de los componentes antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [ListaTareasComponent] // Se debe declarar el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes y las plantillas

    // Creación del componente y su fixture
    fixture = TestBed.createComponent(ListaTareasComponent);
    component = fixture.componentInstance; // Obtención de la instancia del componente
    fixture.detectChanges(); // Realiza una comprobación de cambios inicial en el componente
  });

  // Prueba que verifica si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Espera que la instancia del componente sea verdadera (es decir, que el componente se haya creado correctamente)
  });
});
