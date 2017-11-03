import { bovinoService, Bovino } from '../../services/bovino-service'
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body'


class ResponseBovino extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function updateBovino(req, res: Response, next) {
    let bovino = req.body as Bovino;
    let idbovino = req.params.idbovino;
    let idusuario = req.id;
    bovinoService.updateBovino(bovino)
        .subscribe(data => {
            res.send(new ResponseBovino(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseBovino(null, null, err));
        })
}