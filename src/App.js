import './App.css';
import PriceCard from './PriceCard';
import {useState} from 'react';
function App() {
  let data = [
    {
        plan: "FREE",
        price:"0",
        user:"Single User",
        isUser:true,
        storage:"5GB",
        isStorage:true,
        publicProjects:"Unlimited Public Projects",
        isPublicProjects:true,
        communityAccess:"Community Access",
        isCommunityAccess:true,
        privateProjects:"Unlimited Private Projects",
        isPrivateProjects:false,
        phoneSuport:"Dedicated Phone Support",
        isPhoneSuport:false,
        subDomain:"Free Subdomain",
        isSubDomain:false,
        reports:"Monthly Status Reports",
        isReports:false
    },
    {
      plan: "PLUS",
      price:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSuport:"Dedicated Phone Support",
      isPhoneSuport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan: "PRO",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSuport:"Dedicated Phone Support",
      isPhoneSuport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]

  let [name,setName] = useState(""); 
  return <>
    <div>
    <section className="pricing py-5">
      <div className="container">
        <div>
          <input type={"text"} onChange={(e)=>{
            setName(e.target.value)
            }}/> 
      </div>
        <h1>{name}</h1>
        <div className="row">
          {
            data.map((e,i)=>{
              return <PriceCard data={e} key={i}/>
            })
          }
          
        </div>
      </div>
    </section>
    </div>
  </>
}

export default App;
