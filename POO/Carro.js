import { Automovel } from "./Auto.js";

class Car extends Automovel{
    constructor(marca, modelo, ano){
        super(marca)
    }

    comprar(){
        this.setModelo("Astra")
        this.setMarca("Chevrolet")
        this.setAno(2001)

        return `Seu carro é um ${this.getMarca()} ${this.getModelo()} ${this.getAno()}`
    }
}

class Principal{
    main(){
        const auto = new Car()
        console.log(auto.comprar())
    }
}

