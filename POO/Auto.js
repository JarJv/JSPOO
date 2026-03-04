export class Automovel{
    #marca
    #modelo
    #ano

    constructor(marca, modelo, ano){
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
    }
    
    //#region marca 
    getMarca(){
        return this.#marca
    }

    setMarca(marca){
        this.#marca = marca
    }
    //#endregion
    
    //#region modelo
    getModelo(){
        return this.#modelo
    }
    
    setModelo(modelo){
        this.#modelo = modelo
    }
    //#endregion
    
    //#region ano
    getAno(){
        return this.#ano
    }

    setAno(ano){
        this.#ano = ano
    }
    //#endregion
}