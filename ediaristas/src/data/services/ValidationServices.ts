export const ValidationServices = {
    cep( cep = ''): boolean{
        return cep.replace(/\D/g,'').length === 8;
    }
}