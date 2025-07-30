import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {

    @Get('admin-data')
    @ApiOperation({ summary: 'Get admin data' })
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return { message: 'This is admin data' };
    }

    @Get('user-data')
    @ApiOperation({ summary: 'Get user data' })
    @UseGuards(RolesGuard)
    // @Roles(Role.User)
    getUserData() {
        return { message: 'This is user data' };
    }

}
