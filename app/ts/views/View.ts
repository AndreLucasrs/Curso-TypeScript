//esse T define que iremos trabalhar com o tipo generico então todas as classes que herdarem de view tera que implementar esses metodos
//o os atributos que esse metodo recebe irá variar de acordo com o que a classe filha precisar
//o T é apenas uma convenção podia ser K ou outra letra mas acaba se utilzando o T para da o sentido de Type
//com isso a classe View se torna generica
export abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }

    update(model: T) {

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}
