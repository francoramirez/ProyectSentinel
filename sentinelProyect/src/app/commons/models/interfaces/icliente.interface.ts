import { IProducto } from "./iproducto.interface";

export interface ICliente {
    Nombres: string;
    MisProductos: IProducto[];
    UsuApePat: string;
    UsuApeMat: string;
    SemAct: string;
    FlgClave: string;
    TDocusu: string;
    FlgContratoCG: string;
    MailUsuario: string;
    Foto: string;
    SesionId: string;
    Sexo: string;
    EsPremium: string;
    NroSerCT: string;
    NroDocRel: string;
    SemActRel: string;
    CodigoWS: string;
}