import { type NextPage } from 'next'; 
import Head from 'next/head';

const Home: NextPage = () => {
  return(
    <div>
      <Head>
        <title>Gen Image Website</title>
      </Head>
      <header>
        <div>
          <h1>Gen Image Website</h1> 
        </div>
      </header>
      <section id="input-section">
        <div>
          <h2>Typing your prompt...</h2> 
        </div>
        <div>
          <input type="text" name="promput" className="block w-full bg-grey-100 border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Insert your prompt..." />  
          <div>
            <button className="btn btn-primary">Generate</button> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home; 