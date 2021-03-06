export class Bovino {
    constructor(public id_bovino_finca:string,
        public imagen: number,
        public nombre: string,
        public fecha_nacimiento: Date,
        public fecha_ingreso: Date,
        public genero: string,
        public proposito: number,
        public peso: number,
        public color: string,
        public raza: string,
        public id_Madre: string,
        public id_Padre: string,
        public pradera: string,
        public salida_por: string,
        public numero_partos: string,
        public parto_fallo: string,
        public fecha_salida: string,
        public precio_compra:number,
        public precio_venta:number,
        public finca: number,
        public usuario: number,
        public version:number) {}
}