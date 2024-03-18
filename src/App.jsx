import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil';
import { jobs, messages, myNetwork,notification, totalnotification } from './components/count';

function App() {
  return (
    <>
    <RecoilRoot>
    <NoticationRender/>
    </RecoilRoot>
   
    </>
  )
}

function NoticationRender(){
  const myNetworknotification = useRecoilValue(myNetwork)
  const jobsnotification = useRecoilValue(jobs)
  const messagesnotification = useRecoilValue(messages)
  const notificationCount= useRecoilState(notification)
  const totalnotificationCount = useRecoilValue(totalnotification)

 


  return (
    <>
    <button >Home</button>
    <button>my Network ({myNetworknotification >= 100 ? "99+":myNetworknotification})</button>
    <button>Jobs ({jobsnotification >= 10 ? "10+" : jobsnotification})</button>
    <button>messages {messagesnotification}</button>
    <button>notification ({notificationCount}) </button>
    <button>me {totalnotificationCount}</button>
    </>
  )
}

export default App
