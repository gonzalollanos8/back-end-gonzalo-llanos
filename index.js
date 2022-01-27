
const fs= require('fs');



class contenedor{
    static ruta= './products.txt';
    productsList;

    constructor(id,title,price,thumbnail){
        this.id=id;
        this.title=title;
        this.price=price;
        this.thumbnail=thumbnail;
    }

async getAll(){
    try{
    this.productsList = await fs.promise.readFileSync(this.ruta, 'utf-8');
    return JSON.parse(this.productsList);
    if(error){
    throw new Error(error);
    }else{
        console.log('Finalizado')
    }
    }catch(error){
        console.log(error);
    }
}

async getById(id){
    let productsList= await this.getAll();
    let productRandom= math.productRandom(productsList.id);
}
}

module.exports= contenedor;

