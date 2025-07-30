import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// canactivate guard to protect routes execute before controller
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // this will store any get reqeust made by user
    const request = context.switchToHttp().getRequest();

    //check build in parameter authorization that is in header
    //extract value in authorization header and store in authHeader
    const authHeader = request.headers['authorization'];

    //match with specific token for that 
    return authHeader === 'Bearer my-secret-token';


  }
}
