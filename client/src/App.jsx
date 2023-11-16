import {Navbar, Loader, Welcome, Footer, Transactions, Services} from './components/index'

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className='gradient-bg-welcome'>
          <Navbar/>
          <Welcome/>
        </div>
        <Transactions/>
        <Services/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
