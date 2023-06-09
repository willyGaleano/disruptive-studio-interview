
import { useGetAssests } from '../../application/hooks/useGetAssests';
import { Calculator } from '../components/calculator'
import { DataTable } from '../components/dataTable'

export const Home = () => {
  const [cryptoData] = useGetAssests();  
  return (
    <div className="container flex flex-col gap-10 mt-20">

      <Calculator cryptoData={cryptoData}/>
      <DataTable cryptoData={cryptoData}/>
       
    </div>
  )
}
