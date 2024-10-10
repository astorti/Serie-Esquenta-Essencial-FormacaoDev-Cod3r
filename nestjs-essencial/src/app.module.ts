import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FilmeModule } from './filme/filme.module';
import { LoggerMiddleware } from './middleware/loggerMiddleware';

@Module({
  imports: [
    ProdutoModule,
    ConfigModule.forRoot(),
    DbModule,
    UsuarioModule, 
    FilmeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
