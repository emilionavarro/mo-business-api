import { getBusinesses } from "./request.js"
import { JSDOM } from 'jsdom'

const rip = async () => {
    const businessesText = await getBusinesses("llc")
    const { document } = (new JSDOM(businessesText)).window;
    let businessesMasterTable = document.getElementsByClassName("rgMasterTable")
    let businessNames = Array.from(businessesMasterTable[0].children[3].children)
        .map(x => (x.children[3].children[0].innerHTML))
    console.log(businessNames)
}

rip()