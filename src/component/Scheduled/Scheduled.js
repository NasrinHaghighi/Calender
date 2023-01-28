import React, {useState} from 'react'

import { data } from '../../constant/MockData'
import {Container, Header,Left, Right, Tabs} from './styles'
import PlanIcon from '../../images/Icon.png'
import PlusIcon from '../../images/plus.svg'


import { tabData } from '../../constant/MockData'
import AgendaList from './AgendaList/AgendaList'
import { useSelector, useDispatch } from 'react-redux'
import {setAgendaType} from '../../featuers/AgendaTypeSlice'

function Scheduled() {
  const dispatch=useDispatch()
const [activeTab, setActiveTab]=useState('Todos')//hard coding the active tab
    

const handelTab=(e)=>{
  setActiveTab(e.target.innerHTML)
dispatch(setAgendaType(e.target.innerHTML))
}

  
  return (
    <>
   
<Container>
<Header>
<Left>
<img src={PlanIcon} alt="icon" />
       <p>Agenda</p>
</Left>
 <Right><img src={PlusIcon} alt="icon" /><p>Adicionar evento</p></Right>
</Header>

<Tabs>
{tabData.map((tap)=>{
  return <span className={tap === activeTab ? 'active' : ''} onClick={(e)=>handelTab(e)} value={activeTab}>{tap}</span>
})}
</Tabs>
<AgendaList />

</Container>
    </>
  )
}

export default Scheduled