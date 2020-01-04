import React, {useState, useEffect} from 'react';
import { Spin } from 'antd';
import { usePostRequest } from '../../../helpers/PostRequest';


export const TestArchive = (props) => {

    const [find, setFind] = useState('')
    const [player, setPlayer] = useState()
    const [fire, setFire] = useState(false)

    usePostRequest('archives', player, fire)

    function changeHandler(e) {
        e.preventDefault()
        setFind(e.target.value)
    }
    function clickHandler(e) {
        delete e._id
        delete  e.leaguePosition
        delete e.challengable
        delete e.createdAt
        delete e.updatedAt
        setPlayer(e)
        setFire(true)
    }

    
    if (!props.players) {
        return <Spin />
    }

    const result = props.players.data.filter(player => player.name.toLowerCase().includes(find.toLowerCase()))
    return (
        <div>
        <form>
            <input
                type='text'
                name='name'
                onChange={changeHandler}
            />
            </form>
            {result.map(item => {
                return <button onClick={e=>clickHandler(item)}>{item.name}</button>
            })}
        </div>
    )
}