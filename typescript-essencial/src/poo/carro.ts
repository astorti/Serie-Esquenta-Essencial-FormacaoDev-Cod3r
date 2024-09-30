export default abstract class Carro {
    constructor(
        private readonly velocidadeMaxima: number = 220,
        private readonly aceleracao = 5,
        private readonly frenagem = 5,
        protected velocidadeAtual: number = 0,
    ) {}

    get velocidade(): number {
        return this.velocidadeAtual;
    }

    acelerar(): number {
        const novaVelocidade = this.velocidadeAtual + this.aceleracao;
        this.velocidadeAtual = novaVelocidade <= this.velocidadeMaxima ? novaVelocidade : this.velocidadeMaxima;
        return this.velocidadeAtual;
    }

    frear(): number {
        const novaVelocidade = this.velocidadeAtual - this.frenagem;
        this.velocidadeAtual = novaVelocidade >= 0 ? novaVelocidade : 0;
        return this.velocidadeAtual;
    }
}

class Modelo1 extends Carro {
    constructor() {
        super(230, 10, 5);
    }
}

interface Esportivo {
    ligarTurbo(): void;
    desligarTurbo(): void;
}

class Modelo2 extends Carro implements Esportivo {
    private turbo = false;

    constructor() {
        super(350, 22, 17);
    }

    ligarTurbo(): void {
        this.turbo = true;
    }

    desligarTurbo(): void {
        this.turbo = false;
    }

    acelerar(): number {
        if (this.turbo) {
            super.acelerar();
            return super.acelerar();
        } else {
            return super.acelerar();
        }
    }
}

let meuCarro: Carro = new Modelo1();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();
console.log('Modelo1:', meuCarro.velocidade);

meuCarro = new Modelo2();
(meuCarro as Modelo2).ligarTurbo();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();

console.log('Modelo2:', meuCarro.velocidade);

meuCarro.frear();
meuCarro.frear();

console.log('Modelo2:', meuCarro.velocidade);
