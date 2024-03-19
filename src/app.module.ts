import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoModule } from './cabang/co/co.module';
import { CabangModule } from './cabang/cabang.module';
const settings = require('../ormconfig.js');

@Module({
  imports: [
    TypeOrmModule.forRoot(settings),
    UserModule,
    CoModule,
    CabangModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
