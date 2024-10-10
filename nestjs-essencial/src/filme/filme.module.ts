import { Module } from '@nestjs/common';
import { FilmeController } from './filme.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [FilmeController]
})
export class FilmeModule {}
