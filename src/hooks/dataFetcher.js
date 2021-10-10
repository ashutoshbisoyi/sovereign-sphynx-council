import { useEffect, useState } from 'react'
import { getBep20Contract } from '../utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import environment from '../utils/Environment';

const useWhitelisted = (account) => {
    const [whitelisted, setWhitelisted] = useState(false)
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.sscAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        try {
            if (account) {
                const res = await contract.methods.whitelisted(account).call()
                setWhitelisted(res)
            }
        } catch (error) {
            return false;
        }

    }, [contract, fastRefresh, account])

    return whitelisted
}


const useTotalSupply = () => {
    const [supply, setSupply] = useState(0)

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.sscAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        const res = await contract.methods.totalSupply().call()
        setSupply(res)

    }, [contract, fastRefresh])

    return supply
}



const useTrxDone = (account) => {
    const [trxDone, setTrxDone] = useState(false)
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.sscAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        try {
            if (account) {
                const res = await contract.methods.trxDone(account).call()
                setTrxDone(res)
            }
        } catch (error) {
            return false;
        }

    }, [contract, fastRefresh, account])

    return trxDone
}


const useWhitelistPhase = () => {
    const [phase, setPhase] = useState(false)
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.sscAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        const res = await contract.methods.whitelistedPhase().call()
        setPhase(res)

    }, [contract, fastRefresh])

    return phase
}


const useSaleState = () => {
    const [state, setState] = useState(true)

    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.sscAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    useEffect(async () => {
        const res = await contract.methods.saleIsActive().call()
        setState(res)

    }, [contract, fastRefresh])

    return state
}





export default useWhitelisted

export { useWhitelisted, useTotalSupply, useTrxDone, useWhitelistPhase, useSaleState };