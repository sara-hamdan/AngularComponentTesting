import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ComponentTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ComponentTesting');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges(); // no automatic change detection for re-rendering the updated component.
  //   const compiled = fixture.nativeElement as HTMLElement; // used to access the elements of the DOM
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('ComponentTesting app is running!');
  // });

  it('should increment and decrement value', () => {
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.value).toEqual(1);

    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.value).toEqual(0);
  });

  it('should increment value in template', () => {
    debugElement.query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges(); // run change detection before assertion

    const value = debugElement.query(By.css('h1')).nativeElement.innerText;

    expect(value).toEqual('1');

  });

  it('should stop at 0 and show minimum message', () => {
    debugElement
      .query(By.css('button.decrement'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(fixture.componentInstance.value).toEqual(0);
    expect(message).toContain('Minimum');
  });


  it('should stop at 15 and show maximum message', () => {
    fixture.componentInstance.value = 15;
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(fixture.componentInstance.value).toEqual(15);
    expect(message).toContain('Maximum');
  });




});

