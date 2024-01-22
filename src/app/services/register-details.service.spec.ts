import { TestBed } from '@angular/core/testing';
import { RegisterDetailsService } from './register-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterUser } from '../models/register-user';

describe('RegisterDetailsService', () => {
  let service: RegisterDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getUserDetails be called', () => {
    const response = {"name":"King Julien","email":"kingj@email.com","bio":"Hi my name is King Julien and I like to move it move it.","img":"https://tinyurl.com/2p9953zy"};
    spyOn(service, 'getUserDetails').and.callThrough()
    service.getUserDetails();
    expect(service.getUserDetails).toHaveBeenCalled();
    service.getUserDetails().subscribe(value =>{
      expect(value).toBe(response);
    })
  });

  it('should registerUser be called', () => {
    spyOn(service, 'registerUser').and.callThrough()
    service.registerUser(new RegisterUser("testUName","testPwd","testBio"));
    expect(service.registerUser).toHaveBeenCalled();
    service.registerUser(new RegisterUser("testUName","testPwd","testBio")).subscribe(value =>{
      expect(value).toBe({success:true});
    })
  });
});
