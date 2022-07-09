import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';

function App() {

  let data = {
    monthly:40000,
    yearly:480000,
    task:100,
    pending:10
  }

  return <>
  <div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
<div id="content">

  <Dashboard data={data}/>

</div>

{/* <!-- Footer -->/ */}
<footer className="sticky-footer bg-white">
    <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
        </div>
    </div>
</footer>
{/* <!-- End of Footer --> */}

</div>
  </div>
  </>
}

export default App;
