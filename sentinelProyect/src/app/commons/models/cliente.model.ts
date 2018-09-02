export class Cliente {

    public set NombresFull(x: string) {
        this.Nombres = x;
    }
    public get NombresFull(): string {
        return this.Nombres;
    }
    public set SesionLogin(x: string)
    {
        this.SesionId = x;
    }
    public get SesionLogin(): string 
    {
        return this.SesionId;
    }

    private Nombres: string;
    private SesionId: string;
    private SemAct: string;
    private Foto: string;
    private EsPremium: string;

}