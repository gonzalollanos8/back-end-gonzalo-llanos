
const fs= require('fs');



class contenedor{
    static ruta= './products.txt';
    productsList;

    constructor(ruta){
        this.ruta=ruta;
    }

    async getAll() {
        try {
            const productsList = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(productsList)
        } catch (error) {
            return []
        }
        }

async getById(id){
    let productsList= await this.getAll();
    let productRandom= math.productRandom(productsList.id);
}
async deleteById(id) {
    const objs = await this.getAll()
    const index = productsList.findIndex(o => o.id == id)
    if (index == -1) {
        throw new Error(`Error al borrar: no se encontró el id ${id}`)
    }

    objs.splice(index, 1)
    try {
        await fs.writeFile(this.ruta, JSON.stringify(this.productsList, null, 2))
    } catch (error) {
        throw new Error(`Error al borrar: ${error}`)
    }
    }
async deleteAll() {
    await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
    }
}

module.exports= contenedor;

