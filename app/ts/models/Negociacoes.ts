import { Negociacao } from './Negociacao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        //com essa solução ira se evitado que na classe NegociacaoController, o programador acesse o array que esta em
        //_negociacoes atraves do paraArray(), pq se o return foce a propria lista ele teria as funções de remover essa lista
        //atraves do paraArray, exemplo seria la na controller
        //this._negociacoes.paraArray().length = 0, isso iria zerar o array
        //com essa solução isso não ocorre
        return [].concat(this._negociacoes);
    }
}
