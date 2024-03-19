import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async FindData(@Res() res: Response, @Req() req: Request, @Query("name") name: string): Promise<Response<any>> {
        return res.status(HttpStatus.OK).send({
            "message": "Create data successfully",
            "newData": await this.userService.FindAll(),
            "name": name
        })
    }

    
}
