import { Controller, Res, HttpStatus, Get } from '@nestjs/common';
import { Response } from 'express';

@Controller('cabang')
export class CabangController {

    @Get()
    async FindCabang(@Res() res: Response): Promise<any> {
        return res.status(HttpStatus.OK).send({
            "message": "Get data successfully"
        })
    }
}
