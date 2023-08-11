import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponent } from './box.component';

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxComponent]
    });
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ? case 1 - harus ada value "Halo! Ini adalah BoxComponent" di state title

  it('should contain a value from title state', () => {
    fixture.detectChanges()
    expect(component.title).toEqual("Halo! Ini adalah BoxComponent")
  })

  // ? case 2 - harus me-render title dengan kata "Halo! Ini adalah BoxComponent"

  it('should render title in component template', () => {
    fixture.detectChanges()
    const {debugElement, nativeElement} = fixture
    const compiledNativeElement = fixture.nativeElement as HTMLElement

    console.log("debugElement - ", debugElement.nativeElement)
    console.log("nativeElement - ", nativeElement)

    expect(compiledNativeElement.querySelector('h2')?.textContent).toContain("Halo! Ini adalah BoxComponent")
  })
});
