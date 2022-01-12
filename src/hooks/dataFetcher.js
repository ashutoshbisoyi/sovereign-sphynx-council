import { useEffect, useState } from 'react'
import { getBep20Contract } from '../utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import environment from '../utils/Environment';
import axios from "axios"


const useTotalSupply = () => {
    const [supply, setSupply] = useState(0)

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.sphynxAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        try {
            const res = await axios.get(`https://deep-index.moralis.io/api/v2/nft/${tokenAddress}/owners?chain=bsc&format=decimal`,
                {
                    headers: {
                        "X-API-Key": "aW9QPatxRtu1usW8rH4YUtqGqqFrvaXhCTXAtFhnobWoFrSuEvROkfJA2Iw8Ft40"
                    }
                })

            setSupply(res.data.total)
        } catch (error) {
            console.log('error in total supply::::', error)
        }

    }, [contract, fastRefresh])

    return supply
}





export default useTotalSupply

export { useTotalSupply };