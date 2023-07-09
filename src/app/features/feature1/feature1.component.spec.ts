import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Feature1Component } from './feature1.component'

describe('Feature1Component', () => {
  let component: Feature1Component
  let fixture: ComponentFixture<Feature1Component>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Feature1Component],
    })
    fixture = TestBed.createComponent(Feature1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})