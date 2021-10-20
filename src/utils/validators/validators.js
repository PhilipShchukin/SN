export const required= value =>{
    if(value) return undefined;
    
    return "Field if required"
}

export const maxLenghtCreator =  (maxLenght) => (value) => {
    if(value.lenght >  maxLenght) return `Max Lenght is ${ maxLenght} symbols`;
    
    return undefined;
}
