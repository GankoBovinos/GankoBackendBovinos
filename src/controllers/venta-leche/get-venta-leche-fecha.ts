import { ventaLecheService } from '../../services/venta-leche-service';
import { VentaLeche } from "../../services/models/venta-leche";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseVentaLeche extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function getVentaLecheFecha(req, res: Response, next) {
    let fecha = req.params.fecha
    ventaLecheService.getVentaLecheFecha(fecha)
        .subscribe(data => {
            res.send(new ResponseVentaLeche(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseVentaLeche(null, null, err));
        })
}