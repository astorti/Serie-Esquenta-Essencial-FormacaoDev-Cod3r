import { Body, Controller, Get, Post } from '@nestjs/common';
import { CacheProvider } from 'src/db/cache.provider';
import Filme from './filme.entity';
import { IdService } from 'src/db/id.service';

@Controller('filmes')
export class FilmeController {
    constructor(private readonly cache: CacheProvider,
        private readonly idService: IdService,
    ) { }
    
    @Get()
    async obterTodos() {
        return this.cache.obterTodos('filme')
        }

    @Post()
    async salvar(@Body() filme: Filme): Promise<void> {
        const id = await this.idService.gerarId();
        return this.cache.salvarPoId('filme', id, {id, ...filme})
    }    
}
