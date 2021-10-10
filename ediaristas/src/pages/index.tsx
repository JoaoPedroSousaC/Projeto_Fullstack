import type { NextPage } from 'next'
import SafeEnvironment from "../ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "../ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "../ui/components/Inputs/TextFieldMask/TextFieldMask";
import {Button, Container, Typography} from "@mui/material";
import {FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper} from "@styles/Page/index.style";
import useIndex from "../data/hooks/Page/useIndex.page";

const Home: NextPage = () => {
  const {cep, setCep} = useIndex();
  return (
    <div>
        <SafeEnvironment/>
        <PageTitle title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e conheça os profissionais na sua localidade'}/>
        <FormElementsContainer>
            <TextFieldMask mask={'99.999-999'} label={`Digite seu CEP`} fullWidth variant={'outlined'} value = {cep}
            onChange={(event) => setCep(event.target.value)}/>

            <Typography color={`error`}>CEP Inválido</Typography>
            <Button variant={`contained`} sx={{width:`220px`}}  >Buscar</Button>
        </FormElementsContainer>
        <Container>
            <ProfissionaisPaper>
                <ProfissionaisContainer>
                    <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
                    <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
                    <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
                    <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
                    <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
                    <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
                </ProfissionaisContainer>
            </ProfissionaisPaper>
        </Container>

    </div>
  )
}

export default Home
