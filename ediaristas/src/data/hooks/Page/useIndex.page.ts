import {useMemo, useState} from "react";
import {UserShotInterface} from "../../@types/UserInterface";
import {ValidationServices} from "../../services/ValidationServices";
import {ApiService} from "../../services/ApiService";

export default function useIndex(){
    const [cep, setCep] = useState(''),
        cepValido = useMemo(() => {
            return ValidationServices.cep(cep);
        }, [cep]),
    [erro, setError] = useState(``),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShotInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);


    async function buscarProfissionais(cep: string) {
        setBuscaFeita(false);
        setCarregando(true);
        setError('');

        try {
            const { data } = await ApiService.get<{
                diaristas: UserShotInterface[];
                quantidade_diaristas: number;
            }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));
            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diaristas);
            setBuscaFeita(true);
            setCarregando(false);
        } catch (error) {
            setError('CEP não encontrado');
            setCarregando(false);
        }
    }


    return{
        cep, setCep, cepValido, buscarProfissionais, erro, diaristas, buscaFeita, carregando, diaristasRestantes
    };
}