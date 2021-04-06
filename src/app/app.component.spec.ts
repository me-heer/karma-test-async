import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'karma-test-async'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('karma-test-async');
  });

  it('should increment in template after 5 seconds', fakeAsync(() => {
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);
    tick(2000);
    fixture.detectChanges();
    const value1 = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value1).toEqual('0'); // value should still be 0 after 2 seconds
    tick(3000);

    fixture.detectChanges();

    const value2 = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value2).toEqual('1'); // 3 seconds later, our value should now be 1
  }));
});
