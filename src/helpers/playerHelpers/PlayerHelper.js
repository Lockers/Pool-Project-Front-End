import {useState} from 'react'
import { usePostRequest } from '../PostRequest';

export function usePlayerHelper() {

    const [newPlayer, setNewPlayer] = useState({ name: '', dateOfBirth: '', leaguePosition: 0, played: 0, won: 0, lost: 0, totalPrizeMoney: 0, results: [], challengable: true })
    const [fire, setFire] = useState(false)

    usePostRequest('players', newPlayer, fire)

    const submitNewPlayer = (e) => {
        e.preventDefault()
        setFire(true)
    }

    const nameChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, name: e.target.value })
    }

    const leaguePositionChangeHandler = (e) => {
        e.preventDefault()
        setNewPlayer({ ...newPlayer, leaguePosition: e.target.value })
    }
    
    return {leaguePositionChangeHandler, nameChangeHandler, submitNewPlayer}

}