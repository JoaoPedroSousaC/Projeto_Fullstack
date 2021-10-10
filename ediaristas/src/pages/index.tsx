import type { NextPage } from 'next'
import SafeEnvironment from "../ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "../ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "../ui/components/Inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  return (
    <div>
        <SafeEnvironment/>
        <PageTitle title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e conheça os profissionais na sua localidade'}/>
        <TextFieldMask mask={'99.999-999'} label={`Digite seu CEP`} fullWidth/>

        <UserInformation picture={'https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg'} name={'Girafinha'} rating={5} description={'Zoologico'} />
    </div>
  )
}

export default Home
