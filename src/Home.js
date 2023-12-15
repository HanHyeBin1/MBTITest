import React, {useState} from 'react'
import { Title, Button, CenterImage } from './styledComponents'
import { useDispatch } from 'react-redux'

const Home = () => {

    const [lang, setLang] = useState('한국어')
    const dispatch = useDispatch()
    
    return <div style={{  textAlign: 'center' }}>
        
        <Title>
            <h1>Tôi sẽ là công chúa Disney nào?</h1>
            <p>Khám phá những nàng công chúa Disney giống tôi dựa trên MBTI</p>
        </Title>
        <CenterImage>
        <img src='/asset/allprincess.png'/>
        </CenterImage>
        <Button onClick={() => dispatch({ type: 'BEGIN' })}>Bắt đầu thử nghiệm</Button>
        <Button><a href='http://10.0.100.144:3000' style={{textDecoration: 'none', color: 'white'}}>한국어로 가기</a></Button>
    </div>
}

export default Home