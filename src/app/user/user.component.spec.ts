import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { MockService } from '../mock/mock.service';


describe('UserComponent', () => {
  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[
        {
          provide:UserService,
          useClass:MockService}
        ]
    }).compileComponents().then(()=>{
      fixture=TestBed.createComponent(UserComponent);
      comp=fixture.componentInstance;
    });
  }));
it('should have one user',async(()=>{
  expect(comp.users.length).toEqual(1);
}));
it('html should render one user',async(()=>{
  fixture.detectChanges();
  const el=fixture.nativeElement.querySelector('p');
  expect(el.innerText).toContain('user1');
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});