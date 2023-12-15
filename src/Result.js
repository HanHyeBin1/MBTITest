import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title, Button, Desc, ButtonAI } from './styledComponents'
import { resultcontent } from './utilities/resultcontents'

const Result = () => {
    const dispatch = useDispatch()
    const ePoint = useSelector(state => state.ePoint)
    const sPoint = useSelector(state => state.sPoint)
    const tPoint = useSelector(state => state.tPoint)
    const jPoint = useSelector(state => state.jPoint)

    const [resultCharacter, setCharacter] = useState({})

    useEffect(() => {
        let result = ""
        result += ePoint > 0 ? "E" : "I"
        result += sPoint > 0 ? "S" : "N"
        result += tPoint > 0 ? "T" : "F"
        result += jPoint > 0 ? "J" : "P"

        const finalResult = resultcontent.find(content => {
            return content.type === result
        })
        setCharacter(finalResult)
    }, [])

    return (
        <div>
            <h2 style={{marginTop: '3em', marginBottom: '1em'}}>Tôi sẽ là công chúa Disney nào..?</h2>
            <Desc>
                <div>{resultCharacter.type}</div>
                <p><div>{resultCharacter.description}</div></p>
                <div><p dangerouslySetInnerHTML={{__html: resultCharacter.description2}}></p> </div>             
                {/* 이미지 추가 */}
                {resultCharacter.image && resultCharacter.color && (
  <img
    src={resultCharacter.image}
    alt={`${resultCharacter.type} 이미지`}
    style={{
      width: '300px',
      height: '400px',
      backgroundColor: resultCharacter.color,
    }}
  />
)}
            </Desc>
            <Button onClick={() => dispatch({ type: "RESET" })}>làm lại lần nữa</Button>
            <ButtonAI>
                <a href='https://adorable-mooncake-8596cf.netlify.app' target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                MBTI của tôi được AI phân tích là gì?
                </a>
            </ButtonAI>
        </div>
    )
}

export default Result
