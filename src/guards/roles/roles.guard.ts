import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  //reflector is used to access metadata set by decorators
  constructor(private reflector: Reflector) { }

  /// canactivate method is called before the route handler mean each request 
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {


    // gethandler get meta data of handler 
    // getclass get metadata of class
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]
    );
    // if no roles are required, allow access
    if (!requiredRoles) return true;
    // get data from header of request
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>();
    const userRole = request.headers['x-user-role'] as Role;
    return requiredRoles.includes(userRole);

  }
}
