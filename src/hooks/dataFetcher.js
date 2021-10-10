import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getBep20Contract } from '../utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import environment from '../utils/Environment';
import axios from 'axios';

const useTotalSupply = () => {
    console.log("useRefresh")
    const [supply, setSupply] = useState([])

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.YfethContractAddress;
    useEffect(async () => {
        const contract = getBep20Contract(tokenAddress, web3)
        const res = await contract.methods.totalSupply().call()
        let total = parseInt(res)
        let arr = [];
        for (let i = total; i > total - 12; i--) {
            if (i <= 0) {
                continue;
            }
            let { data } = await axios.get(`https://gateway.ipfs.io/ipfs/QmY6qr9qHS3ZY1WV9PcsDFBteRfmgx8nBQMhWK94GYTUyK/${i-1}`);
            arr.push(data)
        }
        setSupply(arr)

    }, [tokenAddress, web3, fastRefresh])

    return supply
}



export default useTotalSupply

export { useTotalSupply };