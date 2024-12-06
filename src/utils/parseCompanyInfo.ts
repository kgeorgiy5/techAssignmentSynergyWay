
const parseCompanyKey = (key:string) => {
    const keyArr = key.split("_");
    const processedStr = keyArr.join(" ");
    return processedStr.charAt(0).toUpperCase() + processedStr.slice(1);
}

export default parseCompanyKey;