import { Module } from '@nestjs/common';
import { CabangService } from './cabang.service';
import { CabangController } from './cabang.controller';

@Module({
  providers: [CabangService],
  controllers: [CabangController]
})
export class CabangModule {}
